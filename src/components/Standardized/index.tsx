import { Standardized as T_Standardized } from '@babel/types/lib/index.d';


import ArrayExpression from '../ArrayExpression';

import AssignmentExpression from '../AssignmentExpression';

import BinaryExpression from '../BinaryExpression';

import InterpreterDirective from '../InterpreterDirective';

import Directive from '../Directive';

import DirectiveLiteral from '../DirectiveLiteral';

import BlockStatement from '../BlockStatement';

import BreakStatement from '../BreakStatement';

import CallExpression from '../CallExpression';

import CatchClause from '../CatchClause';

import ConditionalExpression from '../ConditionalExpression';

import ContinueStatement from '../ContinueStatement';

import DebuggerStatement from '../DebuggerStatement';

import DoWhileStatement from '../DoWhileStatement';

import EmptyStatement from '../EmptyStatement';

import ExpressionStatement from '../ExpressionStatement';

import File from '../File';

import ForInStatement from '../ForInStatement';

import ForStatement from '../ForStatement';

import FunctionDeclaration from '../FunctionDeclaration';

import FunctionExpression from '../FunctionExpression';

import Identifier from '../Identifier';

import IfStatement from '../IfStatement';

import LabeledStatement from '../LabeledStatement';

import StringLiteral from '../StringLiteral';

import NumericLiteral from '../NumericLiteral';

import NullLiteral from '../NullLiteral';

import BooleanLiteral from '../BooleanLiteral';

import RegExpLiteral from '../RegExpLiteral';

import LogicalExpression from '../LogicalExpression';

import MemberExpression from '../MemberExpression';

import NewExpression from '../NewExpression';

import Program from '../Program';

import ObjectExpression from '../ObjectExpression';

import ObjectMethod from '../ObjectMethod';

import ObjectProperty from '../ObjectProperty';

import RestElement from '../RestElement';

import ReturnStatement from '../ReturnStatement';

import SequenceExpression from '../SequenceExpression';

import ParenthesizedExpression from '../ParenthesizedExpression';

import SwitchCase from '../SwitchCase';

import SwitchStatement from '../SwitchStatement';

import ThisExpression from '../ThisExpression';

import ThrowStatement from '../ThrowStatement';

import TryStatement from '../TryStatement';

import UnaryExpression from '../UnaryExpression';

import UpdateExpression from '../UpdateExpression';

import VariableDeclaration from '../VariableDeclaration';

import VariableDeclarator from '../VariableDeclarator';

import WhileStatement from '../WhileStatement';

import WithStatement from '../WithStatement';

import AssignmentPattern from '../AssignmentPattern';

import ArrayPattern from '../ArrayPattern';

import ArrowFunctionExpression from '../ArrowFunctionExpression';

import ClassBody from '../ClassBody';

import ClassExpression from '../ClassExpression';

import ClassDeclaration from '../ClassDeclaration';

import ExportAllDeclaration from '../ExportAllDeclaration';

import ExportDefaultDeclaration from '../ExportDefaultDeclaration';

import ExportNamedDeclaration from '../ExportNamedDeclaration';

import ExportSpecifier from '../ExportSpecifier';

import ForOfStatement from '../ForOfStatement';

import ImportDeclaration from '../ImportDeclaration';

import ImportDefaultSpecifier from '../ImportDefaultSpecifier';

import ImportNamespaceSpecifier from '../ImportNamespaceSpecifier';

import ImportSpecifier from '../ImportSpecifier';

import MetaProperty from '../MetaProperty';

import ClassMethod from '../ClassMethod';

import ObjectPattern from '../ObjectPattern';

import SpreadElement from '../SpreadElement';

import Super from '../Super';

import TaggedTemplateExpression from '../TaggedTemplateExpression';

import TemplateElement from '../TemplateElement';

import TemplateLiteral from '../TemplateLiteral';

import YieldExpression from '../YieldExpression';

import AwaitExpression from '../AwaitExpression';

import Import from '../Import';

import BigIntLiteral from '../BigIntLiteral';

import ExportNamespaceSpecifier from '../ExportNamespaceSpecifier';

import OptionalMemberExpression from '../OptionalMemberExpression';

import OptionalCallExpression from '../OptionalCallExpression';

import ClassProperty from '../ClassProperty';

import ClassAccessorProperty from '../ClassAccessorProperty';

import ClassPrivateProperty from '../ClassPrivateProperty';

import ClassPrivateMethod from '../ClassPrivateMethod';

import PrivateName from '../PrivateName';

import StaticBlock from '../StaticBlock';


function Standardized(props: T_Standardized) {
	switch (props.type) {
		
		case 'ArrayExpression':
			return <ArrayExpression  {...props as any}></ArrayExpression>;
		
		case 'AssignmentExpression':
			return <AssignmentExpression  {...props as any}></AssignmentExpression>;
		
		case 'BinaryExpression':
			return <BinaryExpression  {...props as any}></BinaryExpression>;
		
		case 'InterpreterDirective':
			return <InterpreterDirective  {...props as any}></InterpreterDirective>;
		
		case 'Directive':
			return <Directive  {...props as any}></Directive>;
		
		case 'DirectiveLiteral':
			return <DirectiveLiteral  {...props as any}></DirectiveLiteral>;
		
		case 'BlockStatement':
			return <BlockStatement  {...props as any}></BlockStatement>;
		
		case 'BreakStatement':
			return <BreakStatement  {...props as any}></BreakStatement>;
		
		case 'CallExpression':
			return <CallExpression  {...props as any}></CallExpression>;
		
		case 'CatchClause':
			return <CatchClause  {...props as any}></CatchClause>;
		
		case 'ConditionalExpression':
			return <ConditionalExpression  {...props as any}></ConditionalExpression>;
		
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
		
		case 'File':
			return <File  {...props as any}></File>;
		
		case 'ForInStatement':
			return <ForInStatement  {...props as any}></ForInStatement>;
		
		case 'ForStatement':
			return <ForStatement  {...props as any}></ForStatement>;
		
		case 'FunctionDeclaration':
			return <FunctionDeclaration  {...props as any}></FunctionDeclaration>;
		
		case 'FunctionExpression':
			return <FunctionExpression  {...props as any}></FunctionExpression>;
		
		case 'Identifier':
			return <Identifier  {...props as any}></Identifier>;
		
		case 'IfStatement':
			return <IfStatement  {...props as any}></IfStatement>;
		
		case 'LabeledStatement':
			return <LabeledStatement  {...props as any}></LabeledStatement>;
		
		case 'StringLiteral':
			return <StringLiteral  {...props as any}></StringLiteral>;
		
		case 'NumericLiteral':
			return <NumericLiteral  {...props as any}></NumericLiteral>;
		
		case 'NullLiteral':
			return <NullLiteral  {...props as any}></NullLiteral>;
		
		case 'BooleanLiteral':
			return <BooleanLiteral  {...props as any}></BooleanLiteral>;
		
		case 'RegExpLiteral':
			return <RegExpLiteral  {...props as any}></RegExpLiteral>;
		
		case 'LogicalExpression':
			return <LogicalExpression  {...props as any}></LogicalExpression>;
		
		case 'MemberExpression':
			return <MemberExpression  {...props as any}></MemberExpression>;
		
		case 'NewExpression':
			return <NewExpression  {...props as any}></NewExpression>;
		
		case 'Program':
			return <Program  {...props as any}></Program>;
		
		case 'ObjectExpression':
			return <ObjectExpression  {...props as any}></ObjectExpression>;
		
		case 'ObjectMethod':
			return <ObjectMethod  {...props as any}></ObjectMethod>;
		
		case 'ObjectProperty':
			return <ObjectProperty  {...props as any}></ObjectProperty>;
		
		case 'RestElement':
			return <RestElement  {...props as any}></RestElement>;
		
		case 'ReturnStatement':
			return <ReturnStatement  {...props as any}></ReturnStatement>;
		
		case 'SequenceExpression':
			return <SequenceExpression  {...props as any}></SequenceExpression>;
		
		case 'ParenthesizedExpression':
			return <ParenthesizedExpression  {...props as any}></ParenthesizedExpression>;
		
		case 'SwitchCase':
			return <SwitchCase  {...props as any}></SwitchCase>;
		
		case 'SwitchStatement':
			return <SwitchStatement  {...props as any}></SwitchStatement>;
		
		case 'ThisExpression':
			return <ThisExpression  {...props as any}></ThisExpression>;
		
		case 'ThrowStatement':
			return <ThrowStatement  {...props as any}></ThrowStatement>;
		
		case 'TryStatement':
			return <TryStatement  {...props as any}></TryStatement>;
		
		case 'UnaryExpression':
			return <UnaryExpression  {...props as any}></UnaryExpression>;
		
		case 'UpdateExpression':
			return <UpdateExpression  {...props as any}></UpdateExpression>;
		
		case 'VariableDeclaration':
			return <VariableDeclaration  {...props as any}></VariableDeclaration>;
		
		case 'VariableDeclarator':
			return <VariableDeclarator  {...props as any}></VariableDeclarator>;
		
		case 'WhileStatement':
			return <WhileStatement  {...props as any}></WhileStatement>;
		
		case 'WithStatement':
			return <WithStatement  {...props as any}></WithStatement>;
		
		case 'AssignmentPattern':
			return <AssignmentPattern  {...props as any}></AssignmentPattern>;
		
		case 'ArrayPattern':
			return <ArrayPattern  {...props as any}></ArrayPattern>;
		
		case 'ArrowFunctionExpression':
			return <ArrowFunctionExpression  {...props as any}></ArrowFunctionExpression>;
		
		case 'ClassBody':
			return <ClassBody  {...props as any}></ClassBody>;
		
		case 'ClassExpression':
			return <ClassExpression  {...props as any}></ClassExpression>;
		
		case 'ClassDeclaration':
			return <ClassDeclaration  {...props as any}></ClassDeclaration>;
		
		case 'ExportAllDeclaration':
			return <ExportAllDeclaration  {...props as any}></ExportAllDeclaration>;
		
		case 'ExportDefaultDeclaration':
			return <ExportDefaultDeclaration  {...props as any}></ExportDefaultDeclaration>;
		
		case 'ExportNamedDeclaration':
			return <ExportNamedDeclaration  {...props as any}></ExportNamedDeclaration>;
		
		case 'ExportSpecifier':
			return <ExportSpecifier  {...props as any}></ExportSpecifier>;
		
		case 'ForOfStatement':
			return <ForOfStatement  {...props as any}></ForOfStatement>;
		
		case 'ImportDeclaration':
			return <ImportDeclaration  {...props as any}></ImportDeclaration>;
		
		case 'ImportDefaultSpecifier':
			return <ImportDefaultSpecifier  {...props as any}></ImportDefaultSpecifier>;
		
		case 'ImportNamespaceSpecifier':
			return <ImportNamespaceSpecifier  {...props as any}></ImportNamespaceSpecifier>;
		
		case 'ImportSpecifier':
			return <ImportSpecifier  {...props as any}></ImportSpecifier>;
		
		case 'MetaProperty':
			return <MetaProperty  {...props as any}></MetaProperty>;
		
		case 'ClassMethod':
			return <ClassMethod  {...props as any}></ClassMethod>;
		
		case 'ObjectPattern':
			return <ObjectPattern  {...props as any}></ObjectPattern>;
		
		case 'SpreadElement':
			return <SpreadElement  {...props as any}></SpreadElement>;
		
		case 'Super':
			return <Super  {...props as any}></Super>;
		
		case 'TaggedTemplateExpression':
			return <TaggedTemplateExpression  {...props as any}></TaggedTemplateExpression>;
		
		case 'TemplateElement':
			return <TemplateElement  {...props as any}></TemplateElement>;
		
		case 'TemplateLiteral':
			return <TemplateLiteral  {...props as any}></TemplateLiteral>;
		
		case 'YieldExpression':
			return <YieldExpression  {...props as any}></YieldExpression>;
		
		case 'AwaitExpression':
			return <AwaitExpression  {...props as any}></AwaitExpression>;
		
		case 'Import':
			return <Import  {...props as any}></Import>;
		
		case 'BigIntLiteral':
			return <BigIntLiteral  {...props as any}></BigIntLiteral>;
		
		case 'ExportNamespaceSpecifier':
			return <ExportNamespaceSpecifier  {...props as any}></ExportNamespaceSpecifier>;
		
		case 'OptionalMemberExpression':
			return <OptionalMemberExpression  {...props as any}></OptionalMemberExpression>;
		
		case 'OptionalCallExpression':
			return <OptionalCallExpression  {...props as any}></OptionalCallExpression>;
		
		case 'ClassProperty':
			return <ClassProperty  {...props as any}></ClassProperty>;
		
		case 'ClassAccessorProperty':
			return <ClassAccessorProperty  {...props as any}></ClassAccessorProperty>;
		
		case 'ClassPrivateProperty':
			return <ClassPrivateProperty  {...props as any}></ClassPrivateProperty>;
		
		case 'ClassPrivateMethod':
			return <ClassPrivateMethod  {...props as any}></ClassPrivateMethod>;
		
		case 'PrivateName':
			return <PrivateName  {...props as any}></PrivateName>;
		
		case 'StaticBlock':
			return <StaticBlock  {...props as any}></StaticBlock>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Standardized;
