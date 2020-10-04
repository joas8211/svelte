import { is_promise } from './utils';
import { check_outros, group_outros, transition_in, transition_out } from './transitions';
import { flush } from './scheduler';
import { get_current_component, set_current_component } from './lifecycle';

export async function handle_promise(promise, info) {
	const token = info.token = {};

	async function update(type, index, key?, value?) {
		if (info.token !== token) return;

		info.resolved = value;

		let child_ctx = info.ctx;

		if (key !== undefined) {
			child_ctx = child_ctx.slice();
			child_ctx[key] = value;
		}

		const block = type && await (info.current = type)(child_ctx);

		let needs_flush = false;

		if (info.block) {
			if (info.blocks) {
				info.blocks.forEach((block, i) => {
					if (i !== index && block) {
						group_outros();
						transition_out(block, 1, 1, () => {
							info.blocks[i] = null;
						});
						check_outros();
					}
				});
			} else {
				info.block.d(1);
			}

			block.c();
			transition_in(block, 1);
			block.m(info.mount(), info.anchor);

			needs_flush = true;
		}

		info.block = block;
		if (info.blocks) info.blocks[index] = block;

		if (needs_flush) {
			flush();
		}
	}

	if (is_promise(promise)) {
		const current_component = get_current_component();
		promise.then(async value => {
			set_current_component(current_component);
			await update(info.then, 1, info.value, value);
			set_current_component(null);
		}, async error => {
			if (!info.hasCatch) {
				throw error;
			}
			set_current_component(current_component);
			await update(info.catch, 2, info.error, error);
			set_current_component(null);
		});

		// if we previously had a then/catch block, destroy it
		if (info.current !== info.pending) {
			await update(info.pending, 0);
			return true;
		}
	} else {
		if (info.current !== info.then) {
			await update(info.then, 1, info.value, promise);
			return true;
		}

		info.resolved = promise;
	}
}
