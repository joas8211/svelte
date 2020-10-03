import Node from './shared/Node';
import Expression from './shared/Expression';

export default class Dependency extends Node {
	type: 'Dependency';
	promiseExpression: Expression;
	resultExpression: Expression;

	constructor(component, parent, scope, info) {
		super(component, parent, scope, info);
		if (info.attributes.length != 2) {
			// TODO: Proper error throwing with component.error()
			throw new Error('Two attributes is required for dependency tag');
		}
		let promiseExpression;
		let resultExpression;
		for (const attribute of info.attributes) {
			if (attribute.value[0].type != 'MustacheTag') {
				throw new Error('Mustache tag, please');
			}
			if (attribute.name == 'await') {
				promiseExpression = attribute.value[0].expression;
			} else if (attribute.name == 'then') {
				resultExpression = attribute.value[0].expression;
			}
		}
		if (!promiseExpression) {
			throw new Error('Await attribute required for dependency tag');
		}
		if (!resultExpression) {
			throw new Error('Then attribute required for dependency tag');
		}
		this.promiseExpression = new Expression(
			component,
			this,
			scope, 
			promiseExpression
		);
		this.resultExpression = new Expression(
			component,
			this,
			scope,
			resultExpression
		);
	}
}