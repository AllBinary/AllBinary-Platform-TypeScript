
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
        
//not game specific package import { ByteArrayOutputStream } from '../../../../../../java/io/ByteArrayOutputStream.js';
      const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
//not game specific package import { InputStream } from '../../../../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { StringBufferInputStream } from '../../../../../../java/io/StringBufferInputStream.js';
      const StringBufferInputStream = globalThis.java.io.StringBufferInputStream;

      
//not game specific package import { DocumentBuilder } from '../../../../../../javax/xml/parsers/DocumentBuilder.js';
      const DocumentBuilder = globalThis.javax.xml.parsers.DocumentBuilder;

      
//not game specific package import { DocumentBuilderFactory } from '../../../../../../javax/xml/parsers/DocumentBuilderFactory.js';
      const DocumentBuilderFactory = globalThis.javax.xml.parsers.DocumentBuilderFactory;

      
//not game specific package import { Transformer } from '../../../../../../javax/xml/transform/Transformer.js';
      const Transformer = globalThis.javax.xml.transform.Transformer;

      
//not game specific package import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
      const TransformerFactory = globalThis.javax.xml.transform.TransformerFactory;

      
//not game specific package import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
      const DOMSource = globalThis.javax.xml.transform.dom.DOMSource;

      
//not game specific package import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
      const StreamResult = globalThis.javax.xml.transform.stream.StreamResult;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
















                                        
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
                
            

