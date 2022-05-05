import { TSTypeElement as T_TSTypeElement } from '@babel/types/lib/index.d';


import TSCallSignatureDeclaration from '../TSCallSignatureDeclaration';

import TSConstructSignatureDeclaration from '../TSConstructSignatureDeclaration';

import TSPropertySignature from '../TSPropertySignature';

import TSMethodSignature from '../TSMethodSignature';

import TSIndexSignature from '../TSIndexSignature';


function TSTypeElement(props: T_TSTypeElement) {
	switch (props.type) {
		
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
		

		default:
			break;
	}
	return <div></div>;
}

export default TSTypeElement;
