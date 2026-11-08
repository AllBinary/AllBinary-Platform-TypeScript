
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *   
                *  Created By: Travis Berthelot    
        */
        
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { ByteArrayOutputStream } from '../../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream

import { StringReader } from '../../../../../../java/io/StringReader.js';
//not GWT import const StringReader

import { StringWriter } from '../../../../../../java/io/StringWriter.js';
//not GWT import const StringWriter

//not plain js import { Writer } 
const Writer = (globalThis.java?.io?.Writer ?? class {}) as typeof globalThis.java.io.Writer;
type Writer<T = any, U = any> = typeof Writer extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Writer;

import { DocumentBuilderFactory } from '../../../../../../javax/xml/parsers/DocumentBuilderFactory.js';
//not GWT import const DocumentBuilderFactory

import { OutputKeys } from '../../../../../../javax/xml/transform/OutputKeys.js';
//not GWT import const OutputKeys

import { Transformer } from '../../../../../../javax/xml/transform/Transformer.js';
//not GWT import const Transformer

import { TransformerConfigurationException } from '../../../../../../javax/xml/transform/TransformerConfigurationException.js';
//not GWT import const TransformerConfigurationException

import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
//not GWT import const TransformerFactory

import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
//not GWT import const DOMSource

import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
//not GWT import const StreamResult

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory

import { CharacterSetData } from '../../../../../../org/allbinary/logic/java/characters/CharacterSetData.js';
//not GWT import const CharacterSetData

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

//not plain js import { InputSource } 
const InputSource = (globalThis.org?.xml?.sax?.InputSource ?? class {}) as typeof globalThis.org.xml.sax.InputSource;
type InputSource<T = any, U = any> = typeof InputSource extends abstract new (...args: any[]) => infer Instance ? Instance : typeof InputSource;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class XmlDocumentHelper
            extends Object
         {
        

    private static readonly instance: XmlDocumentHelper = new XmlDocumentHelper();

    public static getInstance(): XmlDocumentHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return XmlDocumentHelper.instance;
    
}


                //@Throws(Exception.constructor)
            
    public static toString(document: Document): string{

 try { 
    let domSource: DOMSource = new DOMSource(document);;
    

    let byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    

    let streamResult: StreamResult = new StreamResult(byteArrayOutputStream);;
    

    let copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    

    let copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;;
    
copyTransformer!.transform(domSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return byteArrayOutputStream!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly INDENT_NUMBER: string = "indent-number";

    private indent: number= 0;

    private ignoreDeclaration: boolean= false;

private constructor (){

            super();
        this.init(4, true);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public init(indent: number, ignoreDeclaration: boolean){
this.indent= indent;
    
this.ignoreDeclaration= ignoreDeclaration;
    
}

createTransformer(...args: any[]): any {
   
   
    if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'boolean') return this.createTransformer$overload1(args[0], args[1]);
   
    if (args.length === 0) return this.createTransformer$overload2();
   
   throw new TypeError('No matching overload: createTransformer'); }
  
                //@Throws(TransformerConfigurationException.constructor)
            
    createTransformer$overload1(indent: number, ignoreDeclaration: boolean): Transformer{

    let booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;;
    

    let transformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    
transformerFactory!.setAttribute(this.INDENT_NUMBER, indent);
    

    let transformer: Transformer = transformerFactory!.newTransformer()!;;
    
transformer.setOutputProperty(OutputKeys.ENCODING, CharacterSetData.getInstance()!.UTF_8);
    
transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, (ignoreDeclaration ? booleanFactory!.YES : booleanFactory!.NO));
    
transformer.setOutputProperty(OutputKeys.INDENT, booleanFactory!.YES);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformer;
    
}


                //@Throws(TransformerConfigurationException.constructor)
            
    public createTransformer$overload2(): Transformer{

    let currentIndent: number= 0;;
    

    let currentIgnoreDeclaration: boolean= false;;
    

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        
currentIndent= this.indent;
    
currentIgnoreDeclaration= this.ignoreDeclaration;
    





                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createTransformer(currentIndent, currentIgnoreDeclaration);;
    
}


                //@Throws(Exception.constructor)
            
    public format(xmlString: string): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.formatWithTransformer(xmlString, this.createTransformer());;
    
}


                //@Throws(Exception.constructor)
            
    public formatWithTransformer(xmlString: string, transformer: Transformer): string{

    let src: InputSource = new InputSource(new StringReader(xmlString));;
    

    let document: Document = DocumentBuilderFactory.newInstance()!.newDocumentBuilder()!.parse(src)!;;
    

    let out: Writer = new StringWriter();;
    
transformer.transform(new DOMSource(document), new StreamResult(out));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return out.toString();;
    
}


}

