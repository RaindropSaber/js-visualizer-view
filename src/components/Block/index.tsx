import { Block as T_Block } from '@babel/types/lib/index.d';


import BlockStatement from '../BlockStatement';

import Program from '../Program';

import TSModuleBlock from '../TSModuleBlock';


function Block(props: T_Block) {
	switch (props.type) {
		
		case 'BlockStatement':
			return <BlockStatement  {...props as any}></BlockStatement>;
		
		case 'Program':
			return <Program  {...props as any}></Program>;
		
		case 'TSModuleBlock':
			return <TSModuleBlock  {...props as any}></TSModuleBlock>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Block;
