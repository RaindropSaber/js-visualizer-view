import { Statement as T_Statement } from '@babel/types/lib/index.d';


import BlockStatement from '../BlockStatement';

import BreakStatement from '../BreakStatement';

import ContinueStatement from '../ContinueStatement';

import DebuggerStatement from '../DebuggerStatement';

import DoWhileStatement from '../DoWhileStatement';

import EmptyStatement from '../EmptyStatement';

import ExpressionStatement from '../ExpressionStatement';

import ForInStatement from '../ForInStatement';

import ForStatement from '../ForStatement';

import FunctionDeclaration from '../FunctionDeclaration';

import IfStatement from '../IfStatement';

import LabeledStatement from '../LabeledStatement';

import ReturnStatement from '../ReturnStatement';

import SwitchStatement from '../SwitchStatement';

import ThrowStatement from '../ThrowStatement';

import TryStatement from '../TryStatement';

import VariableDeclaration from '../VariableDeclaration';

import WhileStatement from '../WhileStatement';

import WithStatement from '../WithStatement';

import ClassDeclaration from '../ClassDeclaration';

import ExportAllDeclaration from '../ExportAllDeclaration';

import ExportDefaultDeclaration from '../ExportDefaultDeclaration';

import ExportNamedDeclaration from '../ExportNamedDeclaration';

import ForOfStatement from '../ForOfStatement';

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

import TSImportEqualsDeclaration from '../TSImportEqualsDeclaration';

import TSExportAssignment from '../TSExportAssignment';

import TSNamespaceExportDeclaration from '../TSNamespaceExportDeclaration';


function Statement(props: T_Statement) {
	switch (props.type) {
		
		case 'BlockStatement':
			return <BlockStatement  {...props as any}></BlockStatement>;
		
		case 'BreakStatement':
			return <BreakStatement  {...props as any}></BreakStatement>;
		
		case 'ContinueStatement':
			return <ContinueStatement  {...props as any}></ContinueStatement>;
		
		case 'DebuggerStatement':
			return <DebuggerStatement  {...props as any}></DebuggerStatement>;
		
		case 'DoWhileStatement':
			return <DoWhileStatement  {...props as any}></DoWhileStatement>;
		
		case 'EmptyStatement':
			return <EmptyStatement  {...props as any}></EmptyStatement>;
		
		case 'ExpressionStatement':
			return <ExpressionStatement  {...props as any}></ExpressionStatement>;
		
		case 'ForInStatement':
			return <ForInStatement  {...props as any}></ForInStatement>;
		
		case 'ForStatement':
			return <ForStatement  {...props as any}></ForStatement>;
		
		case 'FunctionDeclaration':
			return <FunctionDeclaration  {...props as any}></FunctionDeclaration>;
		
		case 'IfStatement':
			return <IfStatement  {...props as any}></IfStatement>;
		
		case 'LabeledStatement':
			return <LabeledStatement  {...props as any}></LabeledStatement>;
		
		case 'ReturnStatement':
			return <ReturnStatement  {...props as any}></ReturnStatement>;
		
		case 'SwitchStatement':
			return <SwitchStatement  {...props as any}></SwitchStatement>;
		
		case 'ThrowStatement':
			return <ThrowStatement  {...props as any}></ThrowStatement>;
		
		case 'TryStatement':
			return <TryStatement  {...props as any}></TryStatement>;
		
		case 'VariableDeclaration':
			return <VariableDeclaration  {...props as any}></VariableDeclaration>;
		
		case 'WhileStatement':
			return <WhileStatement  {...props as any}></WhileStatement>;
		
		case 'WithStatement':
			return <WithStatement  {...props as any}></WithStatement>;
		
		case 'ClassDeclaration':
			return <ClassDeclaration  {...props as any}></ClassDeclaration>;
		
		case 'ExportAllDeclaration':
			return <ExportAllDeclaration  {...props as any}></ExportAllDeclaration>;
		
		case 'ExportDefaultDeclaration':
			return <ExportDefaultDeclaration  {...props as any}></ExportDefaultDeclaration>;
		
		case 'ExportNamedDeclaration':
			return <ExportNamedDeclaration  {...props as any}></ExportNamedDeclaration>;
		
		case 'ForOfStatement':
			return <ForOfStatement  {...props as any}></ForOfStatement>;
		
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
		
		case 'TSImportEqualsDeclaration':
			return <TSImportEqualsDeclaration  {...props as any}></TSImportEqualsDeclaration>;
		
		case 'TSExportAssignment':
			return <TSExportAssignment  {...props as any}></TSExportAssignment>;
		
		case 'TSNamespaceExportDeclaration':
			return <TSNamespaceExportDeclaration  {...props as any}></TSNamespaceExportDeclaration>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Statement;
