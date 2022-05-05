import { Binary as T_Binary } from '@babel/types/lib/index.d';


import BinaryExpression from '../BinaryExpression';

import LogicalExpression from '../LogicalExpression';


function Binary(props: T_Binary) {
	switch (props.type) {
		
		case 'BinaryExpression':
			return <BinaryExpression  {...props as any}></BinaryExpression>;
		
		case 'LogicalExpression':
			return <LogicalExpression  {...props as any}></LogicalExpression>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Binary;
