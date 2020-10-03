import Wrapper from './shared/Wrapper';
import Renderer from '../Renderer';
import Block from '../Block';
import Dependency from '../../nodes/Dependency';
import { Node } from 'estree';
import { b } from 'code-red';

export default class DependencyWrapper extends Wrapper {
	node: Dependency;
	promiseSnippet: Node;
	resultSnippet: Node;

	constructor(
		renderer: Renderer,
		block: Block,
		parent: Wrapper,
		node: Dependency
	) {
		super(renderer, block, parent, node);

		block.add_dependencies(this.node.promiseExpression.dependencies);
		block.add_dependencies(this.node.promiseExpression.dependencies);

		this.promiseSnippet = this.node.promiseExpression.manipulate(block);
		this.resultSnippet = this.node.resultExpression.manipulate(block);
	}

	render(block: Block) {
		block.chunks.init.push(b`
			${this.resultSnippet} = await ${this.promiseSnippet};
		`);
	}
}