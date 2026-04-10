
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

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CryptFileReader } from "../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { AbFilePath } from "../../../../../org/allbinary/logic/io/path/AbFilePath.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfoTemplateData } from "../../../../../org/allbinary/logic/visual/transform/info/template/TransformInfoTemplateData.js";

    

export class ContextUriResolver
            extends Object
        
                , URIResolver {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private basicURIResolver: BasicUriResolver
public constructor (basicURIResolver: BasicUriResolver){

            super();
            var basicURIResolver = basicURIResolver
this.basicURIResolver= basicURIResolver
}


                @Throws(TransformerException::class)
            
    public resolve(href: string, base: string): Source{
var href = href
var base = base

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getMainPath())
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.INSTALLPATH)
append(AbPathData.getInstance()!.SEPARATOR)
append(href)

    var fileAbPath: AbPath = new AbFilePath(stringBuffer!.toString());
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XMLLOGGING))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append("attempt to use xsl:import: href=")
append(href)
append("\nBase= ")
append(base)
append("\nNew path= ")
append(fileAbPath!.toString())
append("\nNote: ")
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
append(" is a urlglobal")
append("\nRequired Extension: ")
append(this.basicURIResolver!.getExtension())
put(stringBuffer!.toString(), this, "resolve")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StreamSource(CryptFileReader(TransformInfoTemplateData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoTemplateData.getInstance()!.ENCRYPTED_EXTENSION).
                            getInputStream(fileAbPath));
    
} catch(e: TransformerException)
            {



                            throw e
}
 catch(e: Exception)
            {



                            throw TransformerException(e)
}

}


    public toString(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.INSTALLPATH +"/{import url}";
    
} catch(e: Exception)
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "ContextUriResolver - Does not work without webapp path should be changed";
    
}

}


}
                
            

