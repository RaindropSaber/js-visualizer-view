import { ExportDeclaration as T_ExportDeclaration } from '@babel/types/lib/index.d';


import ExportAllDeclaration from '../ExportAllDeclaration';

import ExportDefaultDeclaration from '../ExportDefaultDeclaration';

import ExportNamedDeclaration from '../ExportNamedDeclaration';


function ExportDeclaration(props: T_ExportDeclaration) {
	switch (props.type) {
		
		case 'ExportAllDeclaration':
			return <ExportAllDeclaration  {...props as any}></ExportAllDeclaration>;
		
		case 'ExportDefaultDeclaration':
			return <ExportDefaultDeclaration  {...props as any}></ExportDefaultDeclaration>;
		
		case 'ExportNamedDeclaration':
			return <ExportNamedDeclaration  {...props as any}></ExportNamedDeclaration>;
		

		default:
			break;
	}
	return <div></div>;
}

export default ExportDeclaration;
