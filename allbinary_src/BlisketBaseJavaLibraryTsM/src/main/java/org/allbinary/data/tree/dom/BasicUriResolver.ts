
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

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfoTemplateData } from "../../../../../org/allbinary/logic/visual/transform/info/template/TransformInfoTemplateData.js";

    

export class BasicUriResolver
            extends Object
        
                , URIResolver {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly IMPORT_URL: string = "/{import url}";
        
        

    private readonly ATTEMPT: string = "attempt to use xsl:import: href=";
        
        

    private readonly BASE: string = "\nBase= ";
        
        

    private readonly NEW_PATH: string = "\nNew path= ";
        
        

    private readonly NOTE: string = "\nNote: ";
        
        

    private readonly URL_GLOBAL: string = " is a urlglobal";
        
        

    private readonly REQUIRED_EXTENSION: string = "\nRequired Extension: ";
        
        

    private readonly RESOLVE: string = "resolve";
        
        

    private extension: string
public constructor (extension: string){

            super();
            var extension = extension
this.extension= extension
}


    public getExtension(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.extension;
    
}


                @Throws(TransformerException::class)
            
    public resolve(href: string, base: string): Source{
var href = href
var base = base

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getMainPath())
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
append(href)

    var abPath: AbPath = AbFilePath(stringBuffer!.toString()) as AbPath;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XMLLOGGING))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append(ATTEMPT)
append(href)
append(BASE)
append(base)
append(NEW_PATH)
append(abPath!.toString())
append(NOTE)
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
append(URL_GLOBAL)
append(REQUIRED_EXTENSION)
append(extension)
put(stringBuffer!.toString(), this, RESOLVE)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StreamSource(CryptFileReader(TransformInfoTemplateData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoTemplateData.getInstance()!.ENCRYPTED_EXTENSION).
                            getInputStream(abPath));
    
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
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getMainPath())
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
append(IMPORT_URL)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "BasicUriResolver - Does not work without webapp path should be changed";
    
}

}


}
                
            

