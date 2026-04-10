
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
        



import { InputStream } from "../../../../../java/io/InputStream.js";

    
import { URIResolver } from "../../../../../javax/xml/transform/URIResolver.js";

    
import { StreamSource } from "../../../../../javax/xml/transform/stream/StreamSource.js";

    
import { CompositeTransformInfoInterface } from "../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js";

    

interface BasicTransformerInterface extends CompositeTransformInfoInterface {
        

    public setInputStream(inputStream: InputStream)

    public setURIResolver(uriResolver: URIResolver)

    public getStreamSource(): StreamSource

    public getInputStream(): InputStream

    public getURIResolver(): URIResolver

                //@Throws(Error::class)
            
    public translate(xmlDocumentStr: string): string

}
                
            

