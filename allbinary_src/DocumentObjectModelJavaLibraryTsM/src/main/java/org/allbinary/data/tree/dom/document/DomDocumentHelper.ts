
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { ByteArrayOutputStream } from '../../../../../../java/io/ByteArrayOutputStream.js';
      //not GWT import const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
import { InputStream } from '../../../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { StringBufferInputStream } from '../../../../../../java/io/StringBufferInputStream.js';
      //not GWT import const StringBufferInputStream = globalThis.java.io.StringBufferInputStream;

      
import { DocumentBuilder } from '../../../../../../javax/xml/parsers/DocumentBuilder.js';
      //not GWT import const DocumentBuilder = globalThis.javax.xml.parsers.DocumentBuilder;

      
import { DocumentBuilderFactory } from '../../../../../../javax/xml/parsers/DocumentBuilderFactory.js';
      //not GWT import const DocumentBuilderFactory = globalThis.javax.xml.parsers.DocumentBuilderFactory;

      
import { Transformer } from '../../../../../../javax/xml/transform/Transformer.js';
      //not GWT import const Transformer = globalThis.javax.xml.transform.Transformer;

      
import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
      //not GWT import const TransformerFactory = globalThis.javax.xml.transform.TransformerFactory;

      
import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
      //not GWT import const DOMSource = globalThis.javax.xml.transform.dom.DOMSource;

      
import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
      //not GWT import const StreamResult = globalThis.javax.xml.transform.stream.StreamResult;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DomDocumentHelper
            extends Object
         {
        

    public static create(): Document{

        try {
            
    var factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;;
    

    var builder: DocumentBuilder = factory.newDocumentBuilder()!;;
    

    var document: Document = builder.newDocument()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(Exception.constructor)
            
    public static create(inputStream: InputStream): Document{

        try {
            
    var factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;;
    

    var builder: DocumentBuilder = factory.newDocumentBuilder()!;;
    

    var document: Document = builder.parse(inputStream)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public static create(xmlString: string): Document{

        try {
            
    var factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;;
    

    var builder: DocumentBuilder = factory.newDocumentBuilder()!;;
    

    var document: Document = builder.parse(new StringBufferInputStream(xmlString))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public static toString(document: Document): string{

        try {
            
    var domSource: DOMSource = new DOMSource(document);;
    

    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    

    var streamResult: StreamResult = new StreamResult(byteArrayOutputStream);;
    

    var copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    

    var copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;;
    
copyTransformer!.transform(domSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return byteArrayOutputStream!.toString();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


private constructor (){

            super();
        }


}



