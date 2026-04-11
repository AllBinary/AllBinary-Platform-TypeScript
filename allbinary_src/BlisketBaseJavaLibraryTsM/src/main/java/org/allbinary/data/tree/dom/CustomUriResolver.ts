
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
        



import { Source } from "../../../../../javax/xml/transform/Source.js";

    
import { TransformerException } from "../../../../../javax/xml/transform/TransformerException.js";

    
import { URIResolver } from "../../../../../javax/xml/transform/URIResolver.js";

    
import { StreamSource } from "../../../../../javax/xml/transform/stream/StreamSource.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CryptFileReader } from "../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { AbFilePath } from "../../../../../org/allbinary/logic/io/path/AbFilePath.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { TransformInfoTemplateData } from "../../../../../org/allbinary/logic/visual/transform/info/template/TransformInfoTemplateData.js";

    

export class CustomUriResolver
            extends Object
        
                , URIResolver {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private path: string

    private basicURIResolver: BasicUriResolver
public constructor (path: string, basicURIResolver: BasicUriResolver){

            super();
            var path = path
var basicURIResolver = basicURIResolver
this.path= path;
    
this.basicURIResolver= basicURIResolver;
    
}


                //@Throws(TransformerException::class)
            
    public resolve(href: string, base: string): Source{
var href = href
var base = base

        try {
            
    var fileAbPath: AbPath = AbFilePath(path +AbPathData.getInstance()!.SEPARATOR +href) as AbPath;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XMLLOGGING))
                        
                                    {
                                    logUtil!.put("attempt to use xsl:import: href=" +href +"\nBase= " +base +"\nNew path= " +fileAbPath!.toString() +"\nRequired Extension: " +this.basicURIResolver!.getExtension(), this, "resolve");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StreamSource(CryptFileReader(TransformInfoTemplateData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoTemplateData.getInstance()!.ENCRYPTED_EXTENSION).
                            getInputStream(fileAbPath));
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {



                            throw TransformerException(e)
}

}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


}
                
            

