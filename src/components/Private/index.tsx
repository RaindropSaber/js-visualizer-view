import { Private as T_Private } from '@babel/types/lib/index.d';


import ClassPrivateProperty from '../ClassPrivateProperty';

import ClassPrivateMethod from '../ClassPrivateMethod';

import PrivateName from '../PrivateName';


function Private(props: T_Private) {
	switch (props.type) {
		
		case 'ClassPrivateProperty':
			return <ClassPrivateProperty  {...props as any}></ClassPrivateProperty>;
		
		case 'ClassPrivateMethod':
			return <ClassPrivateMethod  {...props as any}></ClassPrivateMethod>;
		
		case 'PrivateName':
			return <PrivateName  {...props as any}></PrivateName>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Private;
