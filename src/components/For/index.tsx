import { For as T_For } from '@babel/types/lib/index.d';


import ForInStatement from '../ForInStatement';

import ForStatement from '../ForStatement';

import ForOfStatement from '../ForOfStatement';


function For(props: T_For) {
	switch (props.type) {
		
		case 'ForInStatement':
			return <ForInStatement  {...props as any}></ForInStatement>;
		
		case 'ForStatement':
			return <ForStatement  {...props as any}></ForStatement>;
		
		case 'ForOfStatement':
			return <ForOfStatement  {...props as any}></ForOfStatement>;
		

		default:
			break;
	}
	return <div></div>;
}

export default For;
