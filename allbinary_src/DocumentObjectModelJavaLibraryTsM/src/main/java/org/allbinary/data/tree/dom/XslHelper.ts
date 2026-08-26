
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
        
//not game specific package import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
      const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
//not game specific package import { File } from '../../../../../java/io/File.js';
      const File = globalThis.java.io.File;

      
//not game specific package import { OutputStream } from '../../../../../java/io/OutputStream.js';
      const OutputStream = globalThis.java.io.OutputStream;

      
//not game specific package import { StringBufferInputStream } from '../../../../../java/io/StringBufferInputStream.js';
      const StringBufferInputStream = globalThis.java.io.StringBufferInputStream;

      
//not game specific package import { Transformer } from '../../../../../javax/xml/transform/Transformer.js';
      const Transformer = globalThis.javax.xml.transform.Transformer;

      
//not game specific package import { TransformerFactory } from '../../../../../javax/xml/transform/TransformerFactory.js';
      const TransformerFactory = globalThis.javax.xml.transform.TransformerFactory;

      
//not game specific package import { URIResolver } from '../../../../../javax/xml/transform/URIResolver.js';
      const URIResolver = globalThis.javax.xml.transform.URIResolver;

      
//not game specific package import { StreamResult } from '../../../../../javax/xml/transform/stream/StreamResult.js';
      const StreamResult = globalThis.javax.xml.transform.stream.StreamResult;

      
//not game specific package import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
      const StreamSource = globalThis.javax.xml.transform.stream.StreamSource;

      
//not game specific package import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
















                                        
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


                //@Throws(Exception.constructor)
            
    public translate(xsltStreamSource: StreamSource, xmlStreamSource: StreamSource, streamResult: StreamResult): OutputStream{

        try {
            
    var transformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    

    var transformer: Transformer = transformerFactory!.newTransformer(xsltStreamSource)!;;
    
transformer.transform(xmlStreamSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streamResult!.getOutputStream();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public translate(resolver: URIResolver, xsltStreamSource: StreamSource, xmlStreamSource: StreamSource, streamResult: StreamResult): OutputStream{

        try {
            
    var tFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    
tFactory!.setURIResolver(resolver);
    

    var transformer: Transformer = tFactory!.newTransformer(xsltStreamSource)!;;
    
transformer.transform(xmlStreamSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streamResult!.getOutputStream();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public translate(xsltStreamSource: StreamSource, xmlDocument: Document): string{

        try {
            
    var outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xsltStreamSource, new StreamSource(new StringBufferInputStream(DomDocumentHelper.toString(xmlDocument))), new StreamResult(outputStream))!.toString();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public translate(xsltStreamSource: StreamSource, xmlStreamSource: StreamSource): string{

        try {
            
    var outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xsltStreamSource, xmlStreamSource, new StreamResult(outputStream))!.toString();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public translate(resolver: URIResolver, xsltStreamSource: StreamSource, xmlStreamSource: StreamSource): string{

        try {
            
    var outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(resolver, xsltStreamSource, xmlStreamSource, new StreamResult(outputStream))!.toString();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public export(outputFile: File, xsltFilePath: string, xmlDocument: Document){

        try {
            outputFile!.createNewFile();
    
this.translate(new StreamSource(xsltFilePath), new StreamSource(new StringBufferInputStream(DomDocumentHelper.toString(xmlDocument))), new StreamResult(outputFile));
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


}
                
            

