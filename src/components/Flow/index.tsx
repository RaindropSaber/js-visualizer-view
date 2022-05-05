import { Flow as T_Flow } from '@babel/types/lib/index.d';


import AnyTypeAnnotation from '../AnyTypeAnnotation';

import ArrayTypeAnnotation from '../ArrayTypeAnnotation';

import BooleanTypeAnnotation from '../BooleanTypeAnnotation';

import BooleanLiteralTypeAnnotation from '../BooleanLiteralTypeAnnotation';

import NullLiteralTypeAnnotation from '../NullLiteralTypeAnnotation';

import ClassImplements from '../ClassImplements';

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

import DeclaredPredicate from '../DeclaredPredicate';

import ExistsTypeAnnotation from '../ExistsTypeAnnotation';

import FunctionTypeAnnotation from '../FunctionTypeAnnotation';

import FunctionTypeParam from '../FunctionTypeParam';

import GenericTypeAnnotation from '../GenericTypeAnnotation';

import InferredPredicate from '../InferredPredicate';

import InterfaceExtends from '../InterfaceExtends';

import InterfaceDeclaration from '../InterfaceDeclaration';

import InterfaceTypeAnnotation from '../InterfaceTypeAnnotation';

import IntersectionTypeAnnotation from '../IntersectionTypeAnnotation';

import MixedTypeAnnotation from '../MixedTypeAnnotation';

import EmptyTypeAnnotation from '../EmptyTypeAnnotation';

import NullableTypeAnnotation from '../NullableTypeAnnotation';

import NumberLiteralTypeAnnotation from '../NumberLiteralTypeAnnotation';

import NumberTypeAnnotation from '../NumberTypeAnnotation';

import ObjectTypeAnnotation from '../ObjectTypeAnnotation';

import ObjectTypeInternalSlot from '../ObjectTypeInternalSlot';

import ObjectTypeCallProperty from '../ObjectTypeCallProperty';

import ObjectTypeIndexer from '../ObjectTypeIndexer';

import ObjectTypeProperty from '../ObjectTypeProperty';

import ObjectTypeSpreadProperty from '../ObjectTypeSpreadProperty';

import OpaqueType from '../OpaqueType';

import QualifiedTypeIdentifier from '../QualifiedTypeIdentifier';

import StringLiteralTypeAnnotation from '../StringLiteralTypeAnnotation';

import StringTypeAnnotation from '../StringTypeAnnotation';

import SymbolTypeAnnotation from '../SymbolTypeAnnotation';

import ThisTypeAnnotation from '../ThisTypeAnnotation';

import TupleTypeAnnotation from '../TupleTypeAnnotation';

import TypeofTypeAnnotation from '../TypeofTypeAnnotation';

import TypeAlias from '../TypeAlias';

import TypeAnnotation from '../TypeAnnotation';

import TypeCastExpression from '../TypeCastExpression';

import TypeParameter from '../TypeParameter';

import TypeParameterDeclaration from '../TypeParameterDeclaration';

import TypeParameterInstantiation from '../TypeParameterInstantiation';

import UnionTypeAnnotation from '../UnionTypeAnnotation';

import Variance from '../Variance';

import VoidTypeAnnotation from '../VoidTypeAnnotation';

import EnumDeclaration from '../EnumDeclaration';

import EnumBooleanBody from '../EnumBooleanBody';

import EnumNumberBody from '../EnumNumberBody';

import EnumStringBody from '../EnumStringBody';

import EnumSymbolBody from '../EnumSymbolBody';

import EnumBooleanMember from '../EnumBooleanMember';

import EnumNumberMember from '../EnumNumberMember';

import EnumStringMember from '../EnumStringMember';

import EnumDefaultedMember from '../EnumDefaultedMember';

import IndexedAccessType from '../IndexedAccessType';

import OptionalIndexedAccessType from '../OptionalIndexedAccessType';


function Flow(props: T_Flow) {
	switch (props.type) {
		
		case 'AnyTypeAnnotation':
			return <AnyTypeAnnotation  {...props as any}></AnyTypeAnnotation>;
		
		case 'ArrayTypeAnnotation':
			return <ArrayTypeAnnotation  {...props as any}></ArrayTypeAnnotation>;
		
		case 'BooleanTypeAnnotation':
			return <BooleanTypeAnnotation  {...props as any}></BooleanTypeAnnotation>;
		
		case 'BooleanLiteralTypeAnnotation':
			return <BooleanLiteralTypeAnnotation  {...props as any}></BooleanLiteralTypeAnnotation>;
		
		case 'NullLiteralTypeAnnotation':
			return <NullLiteralTypeAnnotation  {...props as any}></NullLiteralTypeAnnotation>;
		
		case 'ClassImplements':
			return <ClassImplements  {...props as any}></ClassImplements>;
		
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
		
		case 'DeclaredPredicate':
			return <DeclaredPredicate  {...props as any}></DeclaredPredicate>;
		
		case 'ExistsTypeAnnotation':
			return <ExistsTypeAnnotation  {...props as any}></ExistsTypeAnnotation>;
		
		case 'FunctionTypeAnnotation':
			return <FunctionTypeAnnotation  {...props as any}></FunctionTypeAnnotation>;
		
		case 'FunctionTypeParam':
			return <FunctionTypeParam  {...props as any}></FunctionTypeParam>;
		
		case 'GenericTypeAnnotation':
			return <GenericTypeAnnotation  {...props as any}></GenericTypeAnnotation>;
		
		case 'InferredPredicate':
			return <InferredPredicate  {...props as any}></InferredPredicate>;
		
		case 'InterfaceExtends':
			return <InterfaceExtends  {...props as any}></InterfaceExtends>;
		
		case 'InterfaceDeclaration':
			return <InterfaceDeclaration  {...props as any}></InterfaceDeclaration>;
		
		case 'InterfaceTypeAnnotation':
			return <InterfaceTypeAnnotation  {...props as any}></InterfaceTypeAnnotation>;
		
		case 'IntersectionTypeAnnotation':
			return <IntersectionTypeAnnotation  {...props as any}></IntersectionTypeAnnotation>;
		
		case 'MixedTypeAnnotation':
			return <MixedTypeAnnotation  {...props as any}></MixedTypeAnnotation>;
		
		case 'EmptyTypeAnnotation':
			return <EmptyTypeAnnotation  {...props as any}></EmptyTypeAnnotation>;
		
		case 'NullableTypeAnnotation':
			return <NullableTypeAnnotation  {...props as any}></NullableTypeAnnotation>;
		
		case 'NumberLiteralTypeAnnotation':
			return <NumberLiteralTypeAnnotation  {...props as any}></NumberLiteralTypeAnnotation>;
		
		case 'NumberTypeAnnotation':
			return <NumberTypeAnnotation  {...props as any}></NumberTypeAnnotation>;
		
		case 'ObjectTypeAnnotation':
			return <ObjectTypeAnnotation  {...props as any}></ObjectTypeAnnotation>;
		
		case 'ObjectTypeInternalSlot':
			return <ObjectTypeInternalSlot  {...props as any}></ObjectTypeInternalSlot>;
		
		case 'ObjectTypeCallProperty':
			return <ObjectTypeCallProperty  {...props as any}></ObjectTypeCallProperty>;
		
		case 'ObjectTypeIndexer':
			return <ObjectTypeIndexer  {...props as any}></ObjectTypeIndexer>;
		
		case 'ObjectTypeProperty':
			return <ObjectTypeProperty  {...props as any}></ObjectTypeProperty>;
		
		case 'ObjectTypeSpreadProperty':
			return <ObjectTypeSpreadProperty  {...props as any}></ObjectTypeSpreadProperty>;
		
		case 'OpaqueType':
			return <OpaqueType  {...props as any}></OpaqueType>;
		
		case 'QualifiedTypeIdentifier':
			return <QualifiedTypeIdentifier  {...props as any}></QualifiedTypeIdentifier>;
		
		case 'StringLiteralTypeAnnotation':
			return <StringLiteralTypeAnnotation  {...props as any}></StringLiteralTypeAnnotation>;
		
		case 'StringTypeAnnotation':
			return <StringTypeAnnotation  {...props as any}></StringTypeAnnotation>;
		
		case 'SymbolTypeAnnotation':
			return <SymbolTypeAnnotation  {...props as any}></SymbolTypeAnnotation>;
		
		case 'ThisTypeAnnotation':
			return <ThisTypeAnnotation  {...props as any}></ThisTypeAnnotation>;
		
		case 'TupleTypeAnnotation':
			return <TupleTypeAnnotation  {...props as any}></TupleTypeAnnotation>;
		
		case 'TypeofTypeAnnotation':
			return <TypeofTypeAnnotation  {...props as any}></TypeofTypeAnnotation>;
		
		case 'TypeAlias':
			return <TypeAlias  {...props as any}></TypeAlias>;
		
		case 'TypeAnnotation':
			return <TypeAnnotation  {...props as any}></TypeAnnotation>;
		
		case 'TypeCastExpression':
			return <TypeCastExpression  {...props as any}></TypeCastExpression>;
		
		case 'TypeParameter':
			return <TypeParameter  {...props as any}></TypeParameter>;
		
		case 'TypeParameterDeclaration':
			return <TypeParameterDeclaration  {...props as any}></TypeParameterDeclaration>;
		
		case 'TypeParameterInstantiation':
			return <TypeParameterInstantiation  {...props as any}></TypeParameterInstantiation>;
		
		case 'UnionTypeAnnotation':
			return <UnionTypeAnnotation  {...props as any}></UnionTypeAnnotation>;
		
		case 'Variance':
			return <Variance  {...props as any}></Variance>;
		
		case 'VoidTypeAnnotation':
			return <VoidTypeAnnotation  {...props as any}></VoidTypeAnnotation>;
		
		case 'EnumDeclaration':
			return <EnumDeclaration  {...props as any}></EnumDeclaration>;
		
		case 'EnumBooleanBody':
			return <EnumBooleanBody  {...props as any}></EnumBooleanBody>;
		
		case 'EnumNumberBody':
			return <EnumNumberBody  {...props as any}></EnumNumberBody>;
		
		case 'EnumStringBody':
			return <EnumStringBody  {...props as any}></EnumStringBody>;
		
		case 'EnumSymbolBody':
			return <EnumSymbolBody  {...props as any}></EnumSymbolBody>;
		
		case 'EnumBooleanMember':
			return <EnumBooleanMember  {...props as any}></EnumBooleanMember>;
		
		case 'EnumNumberMember':
			return <EnumNumberMember  {...props as any}></EnumNumberMember>;
		
		case 'EnumStringMember':
			return <EnumStringMember  {...props as any}></EnumStringMember>;
		
		case 'EnumDefaultedMember':
			return <EnumDefaultedMember  {...props as any}></EnumDefaultedMember>;
		
		case 'IndexedAccessType':
			return <IndexedAccessType  {...props as any}></IndexedAccessType>;
		
		case 'OptionalIndexedAccessType':
			return <OptionalIndexedAccessType  {...props as any}></OptionalIndexedAccessType>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Flow;
