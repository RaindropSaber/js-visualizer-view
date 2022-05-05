import { Miscellaneous as T_Miscellaneous } from '@babel/types/lib/index.d';


import Noop from '../Noop';

import Placeholder from '../Placeholder';

import V8IntrinsicIdentifier from '../V8IntrinsicIdentifier';


function Miscellaneous(props: T_Miscellaneous) {
	switch (props.type) {
		
		case 'Noop':
			return <Noop  {...props as any}></Noop>;
		
		case 'Placeholder':
			return <Placeholder  {...props as any}></Placeholder>;
		
		case 'V8IntrinsicIdentifier':
			return <V8IntrinsicIdentifier  {...props as any}></V8IntrinsicIdentifier>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Miscellaneous;
