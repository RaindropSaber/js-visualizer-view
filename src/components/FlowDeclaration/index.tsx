import { FlowDeclaration as T_FlowDeclaration } from '@babel/types/lib/index.d';


import DeclareClass from '../DeclareClass';

import DeclareFunction from '../DeclareFunction';

import DeclareInterface from '../DeclareInterface';

import DeclareModule from '../DeclareModule';

import DeclareModuleExports from '../DeclareModuleExports';

import DeclareTypeAlias from '../DeclareTypeAlias';

import DeclareOpaqueType from '../DeclareOpaqueType';

import DeclareVariable from '../DeclareVariable';

import DeclareExportDeclaration from '../DeclareExportDeclaration';

import DeclareExportAllDeclaration from '../DeclareExportAllDeclaration';

import InterfaceDeclaration from '../InterfaceDeclaration';

import OpaqueType from '../OpaqueType';

import TypeAlias from '../TypeAlias';


function FlowDeclaration(props: T_FlowDeclaration) {
	switch (props.type) {
		
		case 'DeclareClass':
			return <DeclareClass  {...props as any}></DeclareClass>;
		
		case 'DeclareFunction':
			return <DeclareFunction  {...props as any}></DeclareFunction>;
		
		case 'DeclareInterface':
			return <DeclareInterface  {...props as any}></DeclareInterface>;
		
		case 'DeclareModule':
			return <DeclareModule  {...props as any}></DeclareModule>;
		
		case 'DeclareModuleExports':
			return <DeclareModuleExports  {...props as any}></DeclareModuleExports>;
		
		case 'DeclareTypeAlias':
			return <DeclareTypeAlias  {...props as any}></DeclareTypeAlias>;
		
		case 'DeclareOpaqueType':
			return <DeclareOpaqueType  {...props as any}></DeclareOpaqueType>;
		
		case 'DeclareVariable':
			return <DeclareVariable  {...props as any}></DeclareVariable>;
		
		case 'DeclareExportDeclaration':
			return <DeclareExportDeclaration  {...props as any}></DeclareExportDeclaration>;
		
		case 'DeclareExportAllDeclaration':
			return <DeclareExportAllDeclaration  {...props as any}></DeclareExportAllDeclaration>;
		
		case 'InterfaceDeclaration':
			return <InterfaceDeclaration  {...props as any}></InterfaceDeclaration>;
		
		case 'OpaqueType':
			return <OpaqueType  {...props as any}></OpaqueType>;
		
		case 'TypeAlias':
			return <TypeAlias  {...props as any}></TypeAlias>;
		

		default:
			break;
	}
	return <div></div>;
}

export default FlowDeclaration;
