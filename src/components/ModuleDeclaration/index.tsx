import { ModuleDeclaration as T_ModuleDeclaration } from '@babel/types/lib/index.d';


import ExportAllDeclaration from '../ExportAllDeclaration';

import ExportDefaultDeclaration from '../ExportDefaultDeclaration';

import ExportNamedDeclaration from '../ExportNamedDeclaration';

import ImportDeclaration from '../ImportDeclaration';


function ModuleDeclaration(props: T_ModuleDeclaration) {
	switch (props.type) {
		
		case 'ExportAllDeclaration':
			return <ExportAllDeclaration  {...props as any}></ExportAllDeclaration>;
		
		case 'ExportDefaultDeclaration':
			return <ExportDefaultDeclaration  {...props as any}></ExportDefaultDeclaration>;
		
		case 'ExportNamedDeclaration':
			return <ExportNamedDeclaration  {...props as any}></ExportNamedDeclaration>;
		
		case 'ImportDeclaration':
			return <ImportDeclaration  {...props as any}></ImportDeclaration>;
		

		default:
			break;
	}
	return <div></div>;
}

export default ModuleDeclaration;
