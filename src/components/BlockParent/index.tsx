import { BlockParent as T_BlockParent } from '@babel/types/lib/index.d';


import BlockStatement from '../BlockStatement';

import CatchClause from '../CatchClause';

import DoWhileStatement from '../DoWhileStatement';

import ForInStatement from '../ForInStatement';

import ForStatement from '../ForStatement';

import FunctionDeclaration from '../FunctionDeclaration';

import FunctionExpression from '../FunctionExpression';

import Program from '../Program';

import ObjectMethod from '../ObjectMethod';

import SwitchStatement from '../SwitchStatement';

import WhileStatement from '../WhileStatement';

import ArrowFunctionExpression from '../ArrowFunctionExpression';

import ForOfStatement from '../ForOfStatement';

import ClassMethod from '../ClassMethod';

import ClassPrivateMethod from '../ClassPrivateMethod';

import StaticBlock from '../StaticBlock';

import TSModuleBlock from '../TSModuleBlock';


function BlockParent(props: T_BlockParent) {
	switch (props.type) {
		
		case 'BlockStatement':
			return <BlockStatement  {...props as any}></BlockStatement>;
		
		case 'CatchClause':
			return <CatchClause  {...props as any}></CatchClause>;
		
		case 'DoWhileStatement':
			return <DoWhileStatement  {...props as any}></DoWhileStatement>;
		
		case 'ForInStatement':
			return <ForInStatement  {...props as any}></ForInStatement>;
		
		case 'ForStatement':
			return <ForStatement  {...props as any}></ForStatement>;
		
		case 'FunctionDeclaration':
			return <FunctionDeclaration  {...props as any}></FunctionDeclaration>;
		
		case 'FunctionExpression':
			return <FunctionExpression  {...props as any}></FunctionExpression>;
		
		case 'Program':
			return <Program  {...props as any}></Program>;
		
		case 'ObjectMethod':
			return <ObjectMethod  {...props as any}></ObjectMethod>;
		
		case 'SwitchStatement':
			return <SwitchStatement  {...props as any}></SwitchStatement>;
		
		case 'WhileStatement':
			return <WhileStatement  {...props as any}></WhileStatement>;
		
		case 'ArrowFunctionExpression':
			return <ArrowFunctionExpression  {...props as any}></ArrowFunctionExpression>;
		
		case 'ForOfStatement':
			return <ForOfStatement  {...props as any}></ForOfStatement>;
		
		case 'ClassMethod':
			return <ClassMethod  {...props as any}></ClassMethod>;
		
		case 'ClassPrivateMethod':
			return <ClassPrivateMethod  {...props as any}></ClassPrivateMethod>;
		
		case 'StaticBlock':
			return <StaticBlock  {...props as any}></StaticBlock>;
		
		case 'TSModuleBlock':
			return <TSModuleBlock  {...props as any}></TSModuleBlock>;
		

		default:
			break;
	}
	return <div></div>;
}

export default BlockParent;
