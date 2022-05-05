import { FlowType as T_FlowType } from '@babel/types/lib/index.d';


import AnyTypeAnnotation from '../AnyTypeAnnotation';

import ArrayTypeAnnotation from '../ArrayTypeAnnotation';

import BooleanTypeAnnotation from '../BooleanTypeAnnotation';

import BooleanLiteralTypeAnnotation from '../BooleanLiteralTypeAnnotation';

import NullLiteralTypeAnnotation from '../NullLiteralTypeAnnotation';

import ExistsTypeAnnotation from '../ExistsTypeAnnotation';

import FunctionTypeAnnotation from '../FunctionTypeAnnotation';

import GenericTypeAnnotation from '../GenericTypeAnnotation';

import InterfaceTypeAnnotation from '../InterfaceTypeAnnotation';

import IntersectionTypeAnnotation from '../IntersectionTypeAnnotation';

import MixedTypeAnnotation from '../MixedTypeAnnotation';

import EmptyTypeAnnotation from '../EmptyTypeAnnotation';

import NullableTypeAnnotation from '../NullableTypeAnnotation';

import NumberLiteralTypeAnnotation from '../NumberLiteralTypeAnnotation';

import NumberTypeAnnotation from '../NumberTypeAnnotation';

import ObjectTypeAnnotation from '../ObjectTypeAnnotation';

import StringLiteralTypeAnnotation from '../StringLiteralTypeAnnotation';

import StringTypeAnnotation from '../StringTypeAnnotation';

import SymbolTypeAnnotation from '../SymbolTypeAnnotation';

import ThisTypeAnnotation from '../ThisTypeAnnotation';

import TupleTypeAnnotation from '../TupleTypeAnnotation';

import TypeofTypeAnnotation from '../TypeofTypeAnnotation';

import UnionTypeAnnotation from '../UnionTypeAnnotation';

import VoidTypeAnnotation from '../VoidTypeAnnotation';

import IndexedAccessType from '../IndexedAccessType';

import OptionalIndexedAccessType from '../OptionalIndexedAccessType';


function FlowType(props: T_FlowType) {
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
		
		case 'ExistsTypeAnnotation':
			return <ExistsTypeAnnotation  {...props as any}></ExistsTypeAnnotation>;
		
		case 'FunctionTypeAnnotation':
			return <FunctionTypeAnnotation  {...props as any}></FunctionTypeAnnotation>;
		
		case 'GenericTypeAnnotation':
			return <GenericTypeAnnotation  {...props as any}></GenericTypeAnnotation>;
		
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
		
		case 'UnionTypeAnnotation':
			return <UnionTypeAnnotation  {...props as any}></UnionTypeAnnotation>;
		
		case 'VoidTypeAnnotation':
			return <VoidTypeAnnotation  {...props as any}></VoidTypeAnnotation>;
		
		case 'IndexedAccessType':
			return <IndexedAccessType  {...props as any}></IndexedAccessType>;
		
		case 'OptionalIndexedAccessType':
			return <OptionalIndexedAccessType  {...props as any}></OptionalIndexedAccessType>;
		

		default:
			break;
	}
	return <div></div>;
}

export default FlowType;
