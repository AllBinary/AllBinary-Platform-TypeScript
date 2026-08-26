
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { InputStream } from '../../../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { URIResolver } from '../../../../../javax/xml/transform/URIResolver.js';
      const URIResolver = globalThis.javax.xml.transform.URIResolver;

      
//not game specific package import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
      const StreamSource = globalThis.javax.xml.transform.stream.StreamSource;

      
//not game specific package import { CompositeTransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js';
      const CompositeTransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.CompositeTransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface BasicTransformerInterface extends CompositeTransformInfoInterface {
        

    setInputStream(inputStream: InputStream)

    setURIResolver(uriResolver: URIResolver)

    getStreamSource(): StreamSource

    getInputStream(): InputStream

    getURIResolver(): URIResolver

                //@Throws(Exception.constructor)
            
    translate(xmlDocumentStr: string): string

}
                
            

