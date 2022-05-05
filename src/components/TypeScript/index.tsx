import { TypeScript as T_TypeScript } from '@babel/types/lib/index.d';


import TSParameterProperty from '../TSParameterProperty';

import TSDeclareFunction from '../TSDeclareFunction';

import TSDeclareMethod from '../TSDeclareMethod';

import TSQualifiedName from '../TSQualifiedName';

import TSCallSignatureDeclaration from '../TSCallSignatureDeclaration';

import TSConstructSignatureDeclaration from '../TSConstructSignatureDeclaration';

import TSPropertySignature from '../TSPropertySignature';

import TSMethodSignature from '../TSMethodSignature';

import TSIndexSignature from '../TSIndexSignature';

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

import TSNamedTupleMember from '../TSNamedTupleMember';

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

import TSInterfaceDeclaration from '../TSInterfaceDeclaration';

import TSInterfaceBody from '../TSInterfaceBody';

import TSTypeAliasDeclaration from '../TSTypeAliasDeclaration';

import TSAsExpression from '../TSAsExpression';

import TSTypeAssertion from '../TSTypeAssertion';

import TSEnumDeclaration from '../TSEnumDeclaration';

import TSEnumMember from '../TSEnumMember';

import TSModuleDeclaration from '../TSModuleDeclaration';

import TSModuleBlock from '../TSModuleBlock';

import TSImportType from '../TSImportType';

import TSImportEqualsDeclaration from '../TSImportEqualsDeclaration';

import TSExternalModuleReference from '../TSExternalModuleReference';

import TSNonNullExpression from '../TSNonNullExpression';

import TSExportAssignment from '../TSExportAssignment';

import TSNamespaceExportDeclaration from '../TSNamespaceExportDeclaration';

import TSTypeAnnotation from '../TSTypeAnnotation';

import TSTypeParameterInstantiation from '../TSTypeParameterInstantiation';

import TSTypeParameterDeclaration from '../TSTypeParameterDeclaration';

import TSTypeParameter from '../TSTypeParameter';


function TypeScript(props: T_TypeScript) {
	switch (props.type) {
		
		case 'TSParameterProperty':
			return <TSParameterProperty  {...props as any}></TSParameterProperty>;
		
		case 'TSDeclareFunction':
			return <TSDeclareFunction  {...props as any}></TSDeclareFunction>;
		
		case 'TSDeclareMethod':
			return <TSDeclareMethod  {...props as any}></TSDeclareMethod>;
		
		case 'TSQualifiedName':
			return <TSQualifiedName  {...props as any}></TSQualifiedName>;
		
		case 'TSCallSignatureDeclaration':
			return <TSCallSignatureDeclaration  {...props as any}></TSCallSignatureDeclaration>;
		
		case 'TSConstructSignatureDeclaration':
			return <TSConstructSignatureDeclaration  {...props as any}></TSConstructSignatureDeclaration>;
		
		case 'TSPropertySignature':
			return <TSPropertySignature  {...props as any}></TSPropertySignature>;
		
		case 'TSMethodSignature':
			return <TSMethodSignature  {...props as any}></TSMethodSignature>;
		
		case 'TSIndexSignature':
			return <TSIndexSignature  {...props as any}></TSIndexSignature>;
		
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
		
		case 'TSNamedTupleMember':
			return <TSNamedTupleMember  {...props as any}></TSNamedTupleMember>;
		
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
		
		case 'TSInterfaceDeclaration':
			return <TSInterfaceDeclaration  {...props as any}></TSInterfaceDeclaration>;
		
		case 'TSInterfaceBody':
			return <TSInterfaceBody  {...props as any}></TSInterfaceBody>;
		
		case 'TSTypeAliasDeclaration':
			return <TSTypeAliasDeclaration  {...props as any}></TSTypeAliasDeclaration>;
		
		case 'TSAsExpression':
			return <TSAsExpression  {...props as any}></TSAsExpression>;
		
		case 'TSTypeAssertion':
			return <TSTypeAssertion  {...props as any}></TSTypeAssertion>;
		
		case 'TSEnumDeclaration':
			return <TSEnumDeclaration  {...props as any}></TSEnumDeclaration>;
		
		case 'TSEnumMember':
			return <TSEnumMember  {...props as any}></TSEnumMember>;
		
		case 'TSModuleDeclaration':
			return <TSModuleDeclaration  {...props as any}></TSModuleDeclaration>;
		
		case 'TSModuleBlock':
			return <TSModuleBlock  {...props as any}></TSModuleBlock>;
		
		case 'TSImportType':
			return <TSImportType  {...props as any}></TSImportType>;
		
		case 'TSImportEqualsDeclaration':
			return <TSImportEqualsDeclaration  {...props as any}></TSImportEqualsDeclaration>;
		
		case 'TSExternalModuleReference':
			return <TSExternalModuleReference  {...props as any}></TSExternalModuleReference>;
		
		case 'TSNonNullExpression':
			return <TSNonNullExpression  {...props as any}></TSNonNullExpression>;
		
		case 'TSExportAssignment':
			return <TSExportAssignment  {...props as any}></TSExportAssignment>;
		
		case 'TSNamespaceExportDeclaration':
			return <TSNamespaceExportDeclaration  {...props as any}></TSNamespaceExportDeclaration>;
		
		case 'TSTypeAnnotation':
			return <TSTypeAnnotation  {...props as any}></TSTypeAnnotation>;
		
		case 'TSTypeParameterInstantiation':
			return <TSTypeParameterInstantiation  {...props as any}></TSTypeParameterInstantiation>;
		
		case 'TSTypeParameterDeclaration':
			return <TSTypeParameterDeclaration  {...props as any}></TSTypeParameterDeclaration>;
		
		case 'TSTypeParameter':
			return <TSTypeParameter  {...props as any}></TSTypeParameter>;
		

		default:
			break;
	}
	return <div></div>;
}

export default TypeScript;
