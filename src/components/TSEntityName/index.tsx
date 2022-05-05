import { TSEntityName as T_TSEntityName } from '@babel/types/lib/index.d';


import Identifier from '../Identifier';

import TSQualifiedName from '../TSQualifiedName';


function TSEntityName(props: T_TSEntityName) {
	switch (props.type) {
		
		case 'Identifier':
			return <Identifier  {...props as any}></Identifier>;
		
		case 'TSQualifiedName':
			return <TSQualifiedName  {...props as any}></TSQualifiedName>;
		

		default:
			break;
	}
	return <div></div>;
}

export default TSEntityName;
