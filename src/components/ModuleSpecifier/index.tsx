import { ModuleSpecifier as T_ModuleSpecifier } from '@babel/types/lib/index.d';


import ExportSpecifier from '../ExportSpecifier';

import ImportDefaultSpecifier from '../ImportDefaultSpecifier';

import ImportNamespaceSpecifier from '../ImportNamespaceSpecifier';

import ImportSpecifier from '../ImportSpecifier';

import ExportNamespaceSpecifier from '../ExportNamespaceSpecifier';

import ExportDefaultSpecifier from '../ExportDefaultSpecifier';


function ModuleSpecifier(props: T_ModuleSpecifier) {
	switch (props.type) {
		
		case 'ExportSpecifier':
			return <ExportSpecifier  {...props as any}></ExportSpecifier>;
		
		case 'ImportDefaultSpecifier':
			return <ImportDefaultSpecifier  {...props as any}></ImportDefaultSpecifier>;
		
		case 'ImportNamespaceSpecifier':
			return <ImportNamespaceSpecifier  {...props as any}></ImportNamespaceSpecifier>;
		
		case 'ImportSpecifier':
			return <ImportSpecifier  {...props as any}></ImportSpecifier>;
		
		case 'ExportNamespaceSpecifier':
			return <ExportNamespaceSpecifier  {...props as any}></ExportNamespaceSpecifier>;
		
		case 'ExportDefaultSpecifier':
			return <ExportDefaultSpecifier  {...props as any}></ExportDefaultSpecifier>;
		

		default:
			break;
	}
	return <div></div>;
}

export default ModuleSpecifier;
