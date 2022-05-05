import { Declaration as T_Declaration } from '@babel/types/lib/index.d';


import FunctionDeclaration from '../FunctionDeclaration';

import VariableDeclaration from '../VariableDeclaration';

import ClassDeclaration from '../ClassDeclaration';

import ExportAllDeclaration from '../ExportAllDeclaration';

import ExportDefaultDeclaration from '../ExportDefaultDeclaration';

import ExportNamedDeclaration from '../ExportNamedDeclaration';

import ImportDeclaration from '../ImportDeclaration';

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

import EnumDeclaration from '../EnumDeclaration';

import TSDeclareFunction from '../TSDeclareFunction';

import TSInterfaceDeclaration from '../TSInterfaceDeclaration';

import TSTypeAliasDeclaration from '../TSTypeAliasDeclaration';

import TSEnumDeclaration from '../TSEnumDeclaration';

import TSModuleDeclaration from '../TSModuleDeclaration';


function Declaration(props: T_Declaration) {
	switch (props.type) {
		
		case 'FunctionDeclaration':
			return <FunctionDeclaration  {...props as any}></FunctionDeclaration>;
		
		case 'VariableDeclaration':
			return <VariableDeclaration  {...props as any}></VariableDeclaration>;
		
		case 'ClassDeclaration':
			return <ClassDeclaration  {...props as any}></ClassDeclaration>;
		
		case 'ExportAllDeclaration':
			return <ExportAllDeclaration  {...props as any}></ExportAllDeclaration>;
		
		case 'ExportDefaultDeclaration':
			return <ExportDefaultDeclaration  {...props as any}></ExportDefaultDeclaration>;
		
		case 'ExportNamedDeclaration':
			return <ExportNamedDeclaration  {...props as any}></ExportNamedDeclaration>;
		
		case 'ImportDeclaration':
			return <ImportDeclaration  {...props as any}></ImportDeclaration>;
		
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
		
		case 'EnumDeclaration':
			return <EnumDeclaration  {...props as any}></EnumDeclaration>;
		
		case 'TSDeclareFunction':
			return <TSDeclareFunction  {...props as any}></TSDeclareFunction>;
		
		case 'TSInterfaceDeclaration':
			return <TSInterfaceDeclaration  {...props as any}></TSInterfaceDeclaration>;
		
		case 'TSTypeAliasDeclaration':
			return <TSTypeAliasDeclaration  {...props as any}></TSTypeAliasDeclaration>;
		
		case 'TSEnumDeclaration':
			return <TSEnumDeclaration  {...props as any}></TSEnumDeclaration>;
		
		case 'TSModuleDeclaration':
			return <TSModuleDeclaration  {...props as any}></TSModuleDeclaration>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Declaration;
