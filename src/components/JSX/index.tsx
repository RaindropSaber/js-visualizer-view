import { JSX as T_JSX } from '@babel/types/lib/index.d';


import JSXAttribute from '../JSXAttribute';

import JSXClosingElement from '../JSXClosingElement';

import JSXElement from '../JSXElement';

import JSXEmptyExpression from '../JSXEmptyExpression';

import JSXExpressionContainer from '../JSXExpressionContainer';

import JSXSpreadChild from '../JSXSpreadChild';

import JSXIdentifier from '../JSXIdentifier';

import JSXMemberExpression from '../JSXMemberExpression';

import JSXNamespacedName from '../JSXNamespacedName';

import JSXOpeningElement from '../JSXOpeningElement';

import JSXSpreadAttribute from '../JSXSpreadAttribute';

import JSXText from '../JSXText';

import JSXFragment from '../JSXFragment';

import JSXOpeningFragment from '../JSXOpeningFragment';

import JSXClosingFragment from '../JSXClosingFragment';


function JSX(props: T_JSX) {
	switch (props.type) {
		
		case 'JSXAttribute':
			return <JSXAttribute  {...props as any}></JSXAttribute>;
		
		case 'JSXClosingElement':
			return <JSXClosingElement  {...props as any}></JSXClosingElement>;
		
		case 'JSXElement':
			return <JSXElement  {...props as any}></JSXElement>;
		
		case 'JSXEmptyExpression':
			return <JSXEmptyExpression  {...props as any}></JSXEmptyExpression>;
		
		case 'JSXExpressionContainer':
			return <JSXExpressionContainer  {...props as any}></JSXExpressionContainer>;
		
		case 'JSXSpreadChild':
			return <JSXSpreadChild  {...props as any}></JSXSpreadChild>;
		
		case 'JSXIdentifier':
			return <JSXIdentifier  {...props as any}></JSXIdentifier>;
		
		case 'JSXMemberExpression':
			return <JSXMemberExpression  {...props as any}></JSXMemberExpression>;
		
		case 'JSXNamespacedName':
			return <JSXNamespacedName  {...props as any}></JSXNamespacedName>;
		
		case 'JSXOpeningElement':
			return <JSXOpeningElement  {...props as any}></JSXOpeningElement>;
		
		case 'JSXSpreadAttribute':
			return <JSXSpreadAttribute  {...props as any}></JSXSpreadAttribute>;
		
		case 'JSXText':
			return <JSXText  {...props as any}></JSXText>;
		
		case 'JSXFragment':
			return <JSXFragment  {...props as any}></JSXFragment>;
		
		case 'JSXOpeningFragment':
			return <JSXOpeningFragment  {...props as any}></JSXOpeningFragment>;
		
		case 'JSXClosingFragment':
			return <JSXClosingFragment  {...props as any}></JSXClosingFragment>;
		

		default:
			break;
	}
	return <div></div>;
}

export default JSX;
