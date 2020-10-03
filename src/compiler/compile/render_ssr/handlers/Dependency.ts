import Dependency from '../../nodes/Dependency';
import Renderer from '../Renderer';
import { x } from 'code-red';

export default function(node: Dependency, renderer: Renderer) {
    const promise = node.promiseExpression.node;
    const result = node.resultExpression.node;
    renderer.add_expression(x`${result} = await ${promise}, ""`);
}