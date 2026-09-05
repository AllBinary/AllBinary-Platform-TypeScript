
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
        
import { Source } from '../../../../../javax/xml/transform/Source.js';
//not GWT import const Source = globalThis.javax.xml.transform.Source;

      
import { TransformerException } from '../../../../../javax/xml/transform/TransformerException.js';
//not GWT import const TransformerException = globalThis.javax.xml.transform.TransformerException;

      
import { URIResolver } from '../../../../../javax/xml/transform/URIResolver.js';
//not GWT import const URIResolver = globalThis.javax.xml.transform.URIResolver;

      
import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
//not GWT import const StreamSource = globalThis.javax.xml.transform.stream.StreamSource;

      
import { FREEBLISKET_PATH_GLOBALS } from '../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
//not GWT import const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { CryptFileReader } from '../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
import { AbFilePath } from '../../../../../org/allbinary/logic/io/path/AbFilePath.js';
//not GWT import const AbFilePath = globalThis.org.allbinary.logic.io.path.AbFilePath;

      
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { TransformInfoHttpStoreInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpStoreInterface.js';
//not GWT import const TransformInfoHttpStoreInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpStoreInterface;

      
import { TransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TransformInfoTemplateData } from '../../../../../org/allbinary/logic/visual/transform/info/template/TransformInfoTemplateData.js';
//not GWT import const TransformInfoTemplateData = globalThis.org.allbinary.logic.visual.transform.info.template.TransformInfoTemplateData;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { URIResolverStrings } from './URIResolverStrings.js';
//not GWT import - same folder const URIResolverStrings = globalThis.org.allbinary.data.tree.dom.URIResolverStrings;

                import { BasicUriResolver } from './BasicUriResolver.js';
//not GWT import - same folder const BasicUriResolver = globalThis.org.allbinary.data.tree.dom.BasicUriResolver;

                
export class StoreUriResolver
            extends Object
         implements URIResolver {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly uriResolverStrings: URIResolverStrings = URIResolverStrings.getInstance()!;

    private basicURIResolver: BasicUriResolver;

    private parentTransformInfoInterface: TransformInfoInterface;

public constructor (parentTransformInfoInterface: TransformInfoInterface, basicURIResolver: BasicUriResolver){

            super();
        this.parentTransformInfoInterface= parentTransformInfoInterface;
    
this.basicURIResolver= basicURIResolver;
    
}


                //@Throws(TransformerException.constructor)
            
    public resolve(href: string, base: string): Source{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    

    var transformInfoHttpStoreInterface: TransformInfoHttpStoreInterface = this.parentTransformInfoInterface as TransformInfoHttpStoreInterface;;
    
stringBuffer!.append(URLGLOBALS.getMainPath())!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)!.append(transformInfoHttpStoreInterface!.getStoreName())!.append(AbPathData.getInstance()!.SEPARATOR)!.append(href);
    

    var fileAbPath: AbPath = new AbFilePath(stringBuffer!.toString()) as AbPath;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XMLLOGGING))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.uriResolverStrings!.ATTEMPT);
    
stringBuffer!.append(href);
    
stringBuffer!.append(this.uriResolverStrings!.BASE);
    
stringBuffer!.append(base);
    
stringBuffer!.append(this.uriResolverStrings!.NEW_PATH);
    
stringBuffer!.append(fileAbPath!.toString());
    
stringBuffer!.append(this.uriResolverStrings!.NOTE);
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    
stringBuffer!.append(this.uriResolverStrings!.URL_GLOBAL);
    
stringBuffer!.append(this.uriResolverStrings!.REQUIRED_EXTENSION);
    
stringBuffer!.append(this.basicURIResolver!.getExtension());
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.uriResolverStrings!.RESOLVE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StreamSource(new CryptFileReader(TransformInfoTemplateData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoTemplateData.getInstance()!.ENCRYPTED_EXTENSION).getInputStream(fileAbPath));
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {



                            throw new TransformerException(e);
                    
}
*/
}


    public toString(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH +"{Store Name if Any}/{import url}";
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "StoreUriResolver - Does not work without webapp path should be changed";
    
}

}


}



