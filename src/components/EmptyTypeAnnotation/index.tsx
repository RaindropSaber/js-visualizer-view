import { EmptyTypeAnnotation as T_EmptyTypeAnnotation } from '@babel/types/lib/index.d';

function EmptyTypeAnnotation(props: T_EmptyTypeAnnotation) {
	//const {  } = props;

	return (
		<div></div>
	);
}

export default EmptyTypeAnnotation;

