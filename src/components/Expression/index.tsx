import { Expression as T_Expression } from '@babel/types/lib/index.d';


import ArrayExpression from '../ArrayExpression';

import AssignmentExpression from '../AssignmentExpression';

import BinaryExpression from '../BinaryExpression';

import CallExpression from '../CallExpression';

import ConditionalExpression from '../ConditionalExpression';

import FunctionExpression from '../FunctionExpression';

import Identifier from '../Identifier';

import StringLiteral from '../StringLiteral';

import NumericLiteral from '../NumericLiteral';

import NullLiteral from '../NullLiteral';

import BooleanLiteral from '../BooleanLiteral';

import RegExpLiteral from '../RegExpLiteral';

import LogicalExpression from '../LogicalExpression';

import MemberExpression from '../MemberExpression';

import NewExpression from '../NewExpression';

import ObjectExpression from '../ObjectExpression';

import SequenceExpression from '../SequenceExpression';

import ParenthesizedExpression from '../ParenthesizedExpression';

import ThisExpression from '../ThisExpression';

import UnaryExpression from '../UnaryExpression';

import UpdateExpression from '../UpdateExpression';

import ArrowFunctionExpression from '../ArrowFunctionExpression';

import ClassExpression from '../ClassExpression';

import MetaProperty from '../MetaProperty';

import Super from '../Super';

import TaggedTemplateExpression from '../TaggedTemplateExpression';

import TemplateLiteral from '../TemplateLiteral';

import YieldExpression from '../YieldExpression';

import AwaitExpression from '../AwaitExpression';

import Import from '../Import';

import BigIntLiteral from '../BigIntLiteral';

import OptionalMemberExpression from '../OptionalMemberExpression';

import OptionalCallExpression from '../OptionalCallExpression';

import TypeCastExpression from '../TypeCastExpression';

import JSXElement from '../JSXElement';

import JSXFragment from '../JSXFragment';

import BindExpression from '../BindExpression';

import DoExpression from '../DoExpression';

import RecordExpression from '../RecordExpression';

import TupleExpression from '../TupleExpression';

import DecimalLiteral from '../DecimalLiteral';

import ModuleExpression from '../ModuleExpression';

import TopicReference from '../TopicReference';

import PipelineTopicExpression from '../PipelineTopicExpression';

import PipelineBareFunction from '../PipelineBareFunction';

import PipelinePrimaryTopicReference from '../PipelinePrimaryTopicReference';

import TSAsExpression from '../TSAsExpression';

import TSTypeAssertion from '../TSTypeAssertion';

import TSNonNullExpression from '../TSNonNullExpression';


function Expression(props: T_Expression) {
	switch (props.type) {
		
		case 'ArrayExpression':
			return <ArrayExpression  {...props as any}></ArrayExpression>;
		
		case 'AssignmentExpression':
			return <AssignmentExpression  {...props as any}></AssignmentExpression>;
		
		case 'BinaryExpression':
			return <BinaryExpression  {...props as any}></BinaryExpression>;
		
		case 'CallExpression':
			return <CallExpression  {...props as any}></CallExpression>;
		
		case 'ConditionalExpression':
			return <ConditionalExpression  {...props as any}></ConditionalExpression>;
		
		case 'FunctionExpression':
			return <FunctionExpression  {...props as any}></FunctionExpression>;
		
		case 'Identifier':
			return <Identifier  {...props as any}></Identifier>;
		
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
		
		case 'ObjectExpression':
			return <ObjectExpression  {...props as any}></ObjectExpression>;
		
		case 'SequenceExpression':
			return <SequenceExpression  {...props as any}></SequenceExpression>;
		
		case 'ParenthesizedExpression':
			return <ParenthesizedExpression  {...props as any}></ParenthesizedExpression>;
		
		case 'ThisExpression':
			return <ThisExpression  {...props as any}></ThisExpression>;
		
		case 'UnaryExpression':
			return <UnaryExpression  {...props as any}></UnaryExpression>;
		
		case 'UpdateExpression':
			return <UpdateExpression  {...props as any}></UpdateExpression>;
		
		case 'ArrowFunctionExpression':
			return <ArrowFunctionExpression  {...props as any}></ArrowFunctionExpression>;
		
		case 'ClassExpression':
			return <ClassExpression  {...props as any}></ClassExpression>;
		
		case 'MetaProperty':
			return <MetaProperty  {...props as any}></MetaProperty>;
		
		case 'Super':
			return <Super  {...props as any}></Super>;
		
		case 'TaggedTemplateExpression':
			return <TaggedTemplateExpression  {...props as any}></TaggedTemplateExpression>;
		
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
		
		case 'OptionalMemberExpression':
			return <OptionalMemberExpression  {...props as any}></OptionalMemberExpression>;
		
		case 'OptionalCallExpression':
			return <OptionalCallExpression  {...props as any}></OptionalCallExpression>;
		
		case 'TypeCastExpression':
			return <TypeCastExpression  {...props as any}></TypeCastExpression>;
		
		case 'JSXElement':
			return <JSXElement  {...props as any}></JSXElement>;
		
		case 'JSXFragment':
			return <JSXFragment  {...props as any}></JSXFragment>;
		
		case 'BindExpression':
			return <BindExpression  {...props as any}></BindExpression>;
		
		case 'DoExpression':
			return <DoExpression  {...props as any}></DoExpression>;
		
		case 'RecordExpression':
			return <RecordExpression  {...props as any}></RecordExpression>;
		
		case 'TupleExpression':
			return <TupleExpression  {...props as any}></TupleExpression>;
		
		case 'DecimalLiteral':
			return <DecimalLiteral  {...props as any}></DecimalLiteral>;
		
		case 'ModuleExpression':
			return <ModuleExpression  {...props as any}></ModuleExpression>;
		
		case 'TopicReference':
			return <TopicReference  {...props as any}></TopicReference>;
		
		case 'PipelineTopicExpression':
			return <PipelineTopicExpression  {...props as any}></PipelineTopicExpression>;
		
		case 'PipelineBareFunction':
			return <PipelineBareFunction  {...props as any}></PipelineBareFunction>;
		
		case 'PipelinePrimaryTopicReference':
			return <PipelinePrimaryTopicReference  {...props as any}></PipelinePrimaryTopicReference>;
		
		case 'TSAsExpression':
			return <TSAsExpression  {...props as any}></TSAsExpression>;
		
		case 'TSTypeAssertion':
			return <TSTypeAssertion  {...props as any}></TSTypeAssertion>;
		
		case 'TSNonNullExpression':
			return <TSNonNullExpression  {...props as any}></TSNonNullExpression>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Expression;
