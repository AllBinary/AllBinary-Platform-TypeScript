
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
        



import { ByteArrayOutputStream } from "../../../../../java/io/ByteArrayOutputStream.js";

    
import { File } from "../../../../../java/io/File.js";

    
import { OutputStream } from "../../../../../java/io/OutputStream.js";

    
import { StringBufferInputStream } from "../../../../../java/io/StringBufferInputStream.js";

    
import { Transformer } from "../../../../../javax/xml/transform/Transformer.js";

    
import { TransformerFactory } from "../../../../../javax/xml/transform/TransformerFactory.js";

    
import { URIResolver } from "../../../../../javax/xml/transform/URIResolver.js";

    
import { StreamResult } from "../../../../../javax/xml/transform/stream/StreamResult.js";

    
import { StreamSource } from "../../../../../javax/xml/transform/stream/StreamSource.js";

    
import { DomDocumentHelper } from "../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    

export class XslHelper
            extends Object
         {
        

    private static readonly instance: XslHelper = new XslHelper();
        
        

    public static getInstance(): XslHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public translate(xsltStreamSource: StreamSource, xmlStreamSource: StreamSource, streamResult: StreamResult): OutputStream{
    //var xsltStreamSource = xsltStreamSource
    //var xmlStreamSource = xmlStreamSource
    //var streamResult = streamResult

        try {
            
    var transformerFactory: TransformerFactory = TransformerFactory.newInstance()!;
        
        


    var transformer: Transformer = transformerFactory!.newTransformer(xsltStreamSource)!;
        
        

transformer.transform(xmlStreamSource, streamResult)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streamResult!.getOutputStream();
    
} catch(e: Exception)
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public translate(resolver: URIResolver, xsltStreamSource: StreamSource, xmlStreamSource: StreamSource, streamResult: StreamResult): OutputStream{
    //var resolver = resolver
    //var xsltStreamSource = xsltStreamSource
    //var xmlStreamSource = xmlStreamSource
    //var streamResult = streamResult

        try {
            
    var tFactory: TransformerFactory = TransformerFactory.newInstance()!;
        
        

tFactory!.setURIResolver(resolver)

    var transformer: Transformer = tFactory!.newTransformer(xsltStreamSource)!;
        
        

transformer.transform(xmlStreamSource, streamResult)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streamResult!.getOutputStream();
    
} catch(e: Exception)
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public translate(xsltStreamSource: StreamSource, xmlDocument: Document): string{
    //var xsltStreamSource = xsltStreamSource
    //var xmlDocument = xmlDocument

        try {
            
    var outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xsltStreamSource, StreamSource(StringBufferInputStream(DomDocumentHelper.toString(xmlDocument))), StreamResult(outputStream))!.toString();
    
} catch(e: Exception)
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public translate(xsltStreamSource: StreamSource, xmlStreamSource: StreamSource): string{
    //var xsltStreamSource = xsltStreamSource
    //var xmlStreamSource = xmlStreamSource

        try {
            
    var outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xsltStreamSource, xmlStreamSource, StreamResult(outputStream))!.toString();
    
} catch(e: Exception)
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public translate(resolver: URIResolver, xsltStreamSource: StreamSource, xmlStreamSource: StreamSource): string{
    //var resolver = resolver
    //var xsltStreamSource = xsltStreamSource
    //var xmlStreamSource = xmlStreamSource

        try {
            
    var outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(resolver, xsltStreamSource, xmlStreamSource, StreamResult(outputStream))!.toString();
    
} catch(e: Exception)
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public export(outputFile: File, xsltFilePath: string, xmlDocument: Document){
    //var outputFile = outputFile
    //var xsltFilePath = xsltFilePath
    //var xmlDocument = xmlDocument

        try {
            outputFile!.createNewFile()
this.this.translate(StreamSource(xsltFilePath), StreamSource(StringBufferInputStream(DomDocumentHelper.toString(xmlDocument))), StreamResult(outputFile))
} catch(e: Exception)
            {



                            throw e
}

}


}
                
            

