
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
        
            import { System } from '../../../../../../java/lang/System.js';
        
import { InputStream } from '../../../../../../java/io/InputStream.js';
//not GWT import const InputStream

import { StringBufferInputStream } from '../../../../../../java/io/StringBufferInputStream.js';
//not GWT import const StringBufferInputStream

import { DocumentBuilder } from '../../../../../../javax/xml/parsers/DocumentBuilder.js';
//not GWT import const DocumentBuilder

import { DocumentBuilderFactory } from '../../../../../../javax/xml/parsers/DocumentBuilderFactory.js';
//not GWT import const DocumentBuilderFactory

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DomDocumentHelper
            extends Object
         {
        

    public static init(){
System.setProperty("jdk.xml.maxElementDepth", "0");
    
System.setProperty("jdk.xml.xpathExprOpLimit", "0");
    
System.setProperty("jdk.xml.xpathTotalOpLimit", "0");
    

    var LIMIT: string = "500000";;
    
System.setProperty("jdk.xml.maxGeneralEntitySizeLimit", LIMIT);
    
System.setProperty("jdk.xml.totalEntitySizeLimit", LIMIT);
    
}


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


private constructor (){

            super();
        }


}



