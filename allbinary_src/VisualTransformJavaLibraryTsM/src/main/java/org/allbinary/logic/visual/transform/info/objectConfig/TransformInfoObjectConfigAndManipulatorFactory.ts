
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { DomDocumentHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { CryptFileReader } from '../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
      //not GWT import const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
import { AbPath } from '../../../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfigAndManipulatorFactoryBase } from './TransformInfoObjectConfigAndManipulatorFactoryBase.js';
import { TransformInfoObjectConfigData } from './TransformInfoObjectConfigData.js';
import { TransformInfoObjectConfigInterface } from './TransformInfoObjectConfigInterface.js';
import { TransformInfoObjectConfig } from './TransformInfoObjectConfig.js';
import { GenericStoreTransformInfoObjectConfig } from './GenericStoreTransformInfoObjectConfig.js';

export class TransformInfoObjectConfigAndManipulatorFactory extends TransformInfoObjectConfigAndManipulatorFactoryBase {
        

    private static readonly instance: TransformInfoObjectConfigAndManipulatorFactory = new TransformInfoObjectConfigAndManipulatorFactory();

    public static getInstance(): TransformInfoObjectConfigAndManipulatorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoObjectConfigAndManipulatorFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, objectConfigFileAbPath: AbPath): TransformInfoObjectConfigInterface{

        try {
            
    var data: string = new CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).get(objectConfigFileAbPath)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(abeClientInformation, transformInfoInterface, DomDocumentHelper.create(data));;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Could Not Load Object Config", getInstance(), this.commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): TransformInfoObjectConfigInterface{

        try {
            
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(transformInfoInterface != 
                                    null
                                 && !stringValidationUtil!.isEmpty(transformInfoInterface!.getStoreName()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GenericStoreTransformInfoObjectConfig(abeClientInformation, transformInfoInterface) as TransformInfoObjectConfigInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoObjectConfig(transformInfoInterface) as TransformInfoObjectConfigInterface;
    

                        }
                            

                //: 
} catch(e) 
            {

    var error: string = "Failed To Get Instance: ";;
    

                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    error= error +transformInfoInterface!.getName();
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, getInstance(), commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, document: Document): TransformInfoObjectConfigInterface{

        try {
            
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(transformInfoInterface != 
                                    null
                                 && !stringValidationUtil!.isEmpty(transformInfoInterface!.getStoreName()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GenericStoreTransformInfoObjectConfig(abeClientInformation, transformInfoInterface, document) as TransformInfoObjectConfigInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoObjectConfig(transformInfoInterface, document) as TransformInfoObjectConfigInterface;
    

                        }
                            

                //: 
} catch(e) 
            {

    var error: string = "Failed To Get Instance: ";;
    

                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    error= error +transformInfoInterface!.getName();
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, getInstance(), "getInstance(document)", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



