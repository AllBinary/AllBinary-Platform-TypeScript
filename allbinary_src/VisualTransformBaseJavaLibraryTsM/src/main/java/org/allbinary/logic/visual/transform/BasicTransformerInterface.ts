
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
        
import { InputStream } from '../../../../../java/io/InputStream.js';
      
import { URIResolver } from '../../../../../javax/xml/transform/URIResolver.js';
      
import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
      
import { CompositeTransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js';
      

















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
                
            

