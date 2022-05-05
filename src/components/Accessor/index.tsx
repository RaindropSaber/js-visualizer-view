import { Accessor as T_Accessor } from '@babel/types/lib/index.d';


import ClassAccessorProperty from '../ClassAccessorProperty';


function Accessor(props: T_Accessor) {
	switch (props.type) {
		
		case 'ClassAccessorProperty':
			return <ClassAccessorProperty  {...props as any}></ClassAccessorProperty>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Accessor;
