import { UnaryLike as T_UnaryLike } from '@babel/types/lib/index.d';


import UnaryExpression from '../UnaryExpression';

import SpreadElement from '../SpreadElement';


function UnaryLike(props: T_UnaryLike) {
	switch (props.type) {
		
		case 'UnaryExpression':
			return <UnaryExpression  {...props as any}></UnaryExpression>;
		
		case 'SpreadElement':
			return <SpreadElement  {...props as any}></SpreadElement>;
		

		default:
			break;
	}
	return <div></div>;
}

export default UnaryLike;
