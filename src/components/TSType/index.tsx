import { TSType as T_TSType } from '@babel/types/lib/index.d';


import TSAnyKeyword from '../TSAnyKeyword';

import TSBooleanKeyword from '../TSBooleanKeyword';

import TSBigIntKeyword from '../TSBigIntKeyword';

import TSIntrinsicKeyword from '../TSIntrinsicKeyword';

import TSNeverKeyword from '../TSNeverKeyword';

import TSNullKeyword from '../TSNullKeyword';

import TSNumberKeyword from '../TSNumberKeyword';

import TSObjectKeyword from '../TSObjectKeyword';

import TSStringKeyword from '../TSStringKeyword';

import TSSymbolKeyword from '../TSSymbolKeyword';

import TSUndefinedKeyword from '../TSUndefinedKeyword';

import TSUnknownKeyword from '../TSUnknownKeyword';

import TSVoidKeyword from '../TSVoidKeyword';

import TSThisType from '../TSThisType';

import TSFunctionType from '../TSFunctionType';

import TSConstructorType from '../TSConstructorType';

import TSTypeReference from '../TSTypeReference';

import TSTypePredicate from '../TSTypePredicate';

import TSTypeQuery from '../TSTypeQuery';

import TSTypeLiteral from '../TSTypeLiteral';

import TSArrayType from '../TSArrayType';

import TSTupleType from '../TSTupleType';

import TSOptionalType from '../TSOptionalType';

import TSRestType from '../TSRestType';

import TSUnionType from '../TSUnionType';

import TSIntersectionType from '../TSIntersectionType';

import TSConditionalType from '../TSConditionalType';

import TSInferType from '../TSInferType';

import TSParenthesizedType from '../TSParenthesizedType';

import TSTypeOperator from '../TSTypeOperator';

import TSIndexedAccessType from '../TSIndexedAccessType';

import TSMappedType from '../TSMappedType';

import TSLiteralType from '../TSLiteralType';

import TSExpressionWithTypeArguments from '../TSExpressionWithTypeArguments';

import TSImportType from '../TSImportType';


function TSType(props: T_TSType) {
	switch (props.type) {
		
		case 'TSAnyKeyword':
			return <TSAnyKeyword  {...props as any}></TSAnyKeyword>;
		
		case 'TSBooleanKeyword':
			return <TSBooleanKeyword  {...props as any}></TSBooleanKeyword>;
		
		case 'TSBigIntKeyword':
			return <TSBigIntKeyword  {...props as any}></TSBigIntKeyword>;
		
		case 'TSIntrinsicKeyword':
			return <TSIntrinsicKeyword  {...props as any}></TSIntrinsicKeyword>;
		
		case 'TSNeverKeyword':
			return <TSNeverKeyword  {...props as any}></TSNeverKeyword>;
		
		case 'TSNullKeyword':
			return <TSNullKeyword  {...props as any}></TSNullKeyword>;
		
		case 'TSNumberKeyword':
			return <TSNumberKeyword  {...props as any}></TSNumberKeyword>;
		
		case 'TSObjectKeyword':
			return <TSObjectKeyword  {...props as any}></TSObjectKeyword>;
		
		case 'TSStringKeyword':
			return <TSStringKeyword  {...props as any}></TSStringKeyword>;
		
		case 'TSSymbolKeyword':
			return <TSSymbolKeyword  {...props as any}></TSSymbolKeyword>;
		
		case 'TSUndefinedKeyword':
			return <TSUndefinedKeyword  {...props as any}></TSUndefinedKeyword>;
		
		case 'TSUnknownKeyword':
			return <TSUnknownKeyword  {...props as any}></TSUnknownKeyword>;
		
		case 'TSVoidKeyword':
			return <TSVoidKeyword  {...props as any}></TSVoidKeyword>;
		
		case 'TSThisType':
			return <TSThisType  {...props as any}></TSThisType>;
		
		case 'TSFunctionType':
			return <TSFunctionType  {...props as any}></TSFunctionType>;
		
		case 'TSConstructorType':
			return <TSConstructorType  {...props as any}></TSConstructorType>;
		
		case 'TSTypeReference':
			return <TSTypeReference  {...props as any}></TSTypeReference>;
		
		case 'TSTypePredicate':
			return <TSTypePredicate  {...props as any}></TSTypePredicate>;
		
		case 'TSTypeQuery':
			return <TSTypeQuery  {...props as any}></TSTypeQuery>;
		
		case 'TSTypeLiteral':
			return <TSTypeLiteral  {...props as any}></TSTypeLiteral>;
		
		case 'TSArrayType':
			return <TSArrayType  {...props as any}></TSArrayType>;
		
		case 'TSTupleType':
			return <TSTupleType  {...props as any}></TSTupleType>;
		
		case 'TSOptionalType':
			return <TSOptionalType  {...props as any}></TSOptionalType>;
		
		case 'TSRestType':
			return <TSRestType  {...props as any}></TSRestType>;
		
		case 'TSUnionType':
			return <TSUnionType  {...props as any}></TSUnionType>;
		
		case 'TSIntersectionType':
			return <TSIntersectionType  {...props as any}></TSIntersectionType>;
		
		case 'TSConditionalType':
			return <TSConditionalType  {...props as any}></TSConditionalType>;
		
		case 'TSInferType':
			return <TSInferType  {...props as any}></TSInferType>;
		
		case 'TSParenthesizedType':
			return <TSParenthesizedType  {...props as any}></TSParenthesizedType>;
		
		case 'TSTypeOperator':
			return <TSTypeOperator  {...props as any}></TSTypeOperator>;
		
		case 'TSIndexedAccessType':
			return <TSIndexedAccessType  {...props as any}></TSIndexedAccessType>;
		
		case 'TSMappedType':
			return <TSMappedType  {...props as any}></TSMappedType>;
		
		case 'TSLiteralType':
			return <TSLiteralType  {...props as any}></TSLiteralType>;
		
		case 'TSExpressionWithTypeArguments':
			return <TSExpressionWithTypeArguments  {...props as any}></TSExpressionWithTypeArguments>;
		
		case 'TSImportType':
			return <TSImportType  {...props as any}></TSImportType>;
		

		default:
			break;
	}
	return <div></div>;
}

export default TSType;
