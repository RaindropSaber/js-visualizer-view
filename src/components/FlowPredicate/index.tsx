import { FlowPredicate as T_FlowPredicate } from '@babel/types/lib/index.d';


import DeclaredPredicate from '../DeclaredPredicate';

import InferredPredicate from '../InferredPredicate';


function FlowPredicate(props: T_FlowPredicate) {
	switch (props.type) {
		
		case 'DeclaredPredicate':
			return <DeclaredPredicate  {...props as any}></DeclaredPredicate>;
		
		case 'InferredPredicate':
			return <InferredPredicate  {...props as any}></InferredPredicate>;
		

		default:
			break;
	}
	return <div></div>;
}

export default FlowPredicate;
