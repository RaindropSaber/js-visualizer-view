import { TSBaseType as T_TSBaseType } from '@babel/types/lib/index.d';


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

import TSLiteralType from '../TSLiteralType';


function TSBaseType(props: T_TSBaseType) {
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
		
		case 'TSLiteralType':
			return <TSLiteralType  {...props as any}></TSLiteralType>;
		

		default:
			break;
	}
	return <div></div>;
}

export default TSBaseType;
