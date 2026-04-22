
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
        



import { ByteArrayOutputStream } from "../../../../../../java/io/ByteArrayOutputStream.js";

    
import { InputStream } from "../../../../../../java/io/InputStream.js";

    
import { StringBufferInputStream } from "../../../../../../java/io/StringBufferInputStream.js";

    
import { DocumentBuilder } from "../../../../../../javax/xml/parsers/DocumentBuilder.js";

    
import { DocumentBuilderFactory } from "../../../../../../javax/xml/parsers/DocumentBuilderFactory.js";

    
import { Transformer } from "../../../../../../javax/xml/transform/Transformer.js";

    
import { TransformerFactory } from "../../../../../../javax/xml/transform/TransformerFactory.js";

    
import { DOMSource } from "../../../../../../javax/xml/transform/dom/DOMSource.js";

    
import { StreamResult } from "../../../../../../javax/xml/transform/stream/StreamResult.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DomDocumentHelper
            extends Object
         {
        

    public static create(): Document{

        try {
            
    var factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;
        
        
;
    

    var builder: DocumentBuilder = factory.newDocumentBuilder()!;
        
        
;
    

    var document: Document = builder.newDocument()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(Error::class)
            
    public static create(inputStream: InputStream): Document{
var inputStream = inputStream

        try {
            
    var factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;
        
        
;
    

    var builder: DocumentBuilder = factory.newDocumentBuilder()!;
        
        
;
    

    var document: Document = builder.parse(inputStream)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                //: 
} catch(e) 
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public static create(xmlString: string): Document{
var xmlString = xmlString

        try {
            
    var factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;
        
        
;
    

    var builder: DocumentBuilder = factory.newDocumentBuilder()!;
        
        
;
    

    var document: Document = builder.parse(new StringBufferInputStream(xmlString))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                //: 
} catch(e) 
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public static toString(document: Document): string{
var document = document

        try {
            
    var domSource: DOMSource = new DOMSource(document);
        
        
;
    

    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
        
        
;
    

    var streamResult: StreamResult = new StreamResult(byteArrayOutputStream);
        
        
;
    

    var copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;
        
        
;
    

    var copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;
        
        
;
    
copyTransformer!.transform(domSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return byteArrayOutputStream!.toString();

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

}

private constructor (){

            super();
        }


}
                
            

