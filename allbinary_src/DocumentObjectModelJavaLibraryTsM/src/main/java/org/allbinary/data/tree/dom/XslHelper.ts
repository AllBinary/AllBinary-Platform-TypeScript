
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream

import { File } from '../../../../../java/io/File.js';
//not GWT import const File

import { OutputStream } from '../../../../../java/io/OutputStream.js';
//not GWT import const OutputStream

import { StringBufferInputStream } from '../../../../../java/io/StringBufferInputStream.js';
//not GWT import const StringBufferInputStream

import { Templates } from '../../../../../javax/xml/transform/Templates.js';
//not GWT import const Templates

import { Transformer } from '../../../../../javax/xml/transform/Transformer.js';
//not GWT import const Transformer

import { TransformerFactory } from '../../../../../javax/xml/transform/TransformerFactory.js';
//not GWT import const TransformerFactory

import { URIResolver } from '../../../../../javax/xml/transform/URIResolver.js';
//not GWT import const URIResolver

import { StreamResult } from '../../../../../javax/xml/transform/stream/StreamResult.js';
//not GWT import const StreamResult

import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
//not GWT import const StreamSource

import { XmlDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const XmlDocumentHelper

import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //import org.allbinary.data.tree.dom.document.DomDocumentHelper;
export class XslHelper
            extends Object
         {
        

    private static readonly instance: XslHelper = new XslHelper();

    public static getInstance(): XslHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return XslHelper.instance;
    
}


private constructor (){

            super();
        }

translate(...args: any[]): any {
   
    if (args.length === 3) return this.translate$overload1(args[0], args[1], args[2]);
   
    if (args.length === 4) return this.translate$overload2(args[0], args[1], args[2], args[3]);
   
    if (args.length === 2) return this.translate$overload3(args[0], args[1]);
   
    if (args.length === 2) return this.translate$overload4(args[0], args[1]);
   
    if (args.length === 3) return this.translate$overload5(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: translate'); }
  
                //@Throws(Exception.constructor)
            
    public translate$overload1(xsltStreamSource: StreamSource, xmlStreamSource: StreamSource, streamResult: StreamResult): OutputStream{

 try { 
    let transformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    

    let transformer: Transformer = transformerFactory!.newTransformer(xsltStreamSource)!;;
    
transformer.transform(xmlStreamSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streamResult!.getOutputStream();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public translate$overload2(resolver: URIResolver, xsltStreamSource: StreamSource, xmlStreamSource: StreamSource, streamResult: StreamResult): OutputStream{

 try { 
    let tFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    
tFactory!.setURIResolver(resolver);
    

    let transformer: Transformer = tFactory!.newTransformer(xsltStreamSource)!;;
    
transformer.transform(xmlStreamSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streamResult!.getOutputStream();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public translateTemplate(templates: Templates, xmlStreamSource: StreamSource): string{

 try { 
    let outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    

    let streamResult: StreamResult = new StreamResult(outputStream);;
    
templates.newTransformer()!.transform(xmlStreamSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streamResult!.getOutputStream()!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public translate$overload3(xsltStreamSource: StreamSource, xmlDocument: Document): string{

 try { 
    let outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xsltStreamSource, new StreamSource(new StringBufferInputStream(XmlDocumentHelper.toString(xmlDocument))), new StreamResult(outputStream))!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public translate$overload4(xsltStreamSource: StreamSource, xmlStreamSource: StreamSource): string{

 try { 
    let outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xsltStreamSource, xmlStreamSource, new StreamResult(outputStream))!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public translate$overload5(resolver: URIResolver, xsltStreamSource: StreamSource, xmlStreamSource: StreamSource): string{

 try { 
    let outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(resolver, xsltStreamSource, xmlStreamSource, new StreamResult(outputStream))!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public export(outputFile: File, xsltFilePath: string, xmlDocument: Document){

 try { outputFile!.createNewFile();
    
this.translate(new StreamSource(xsltFilePath), new StreamSource(new StringBufferInputStream(XmlDocumentHelper.toString(xmlDocument))), new StreamResult(outputFile));
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


}

