
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
        



import { DomDocumentHelper } from "../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CryptFileReader } from "../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { AbPath } from "../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringValidationUtil } from "../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformInfoInterface } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    

export class TransformInfoObjectConfigAndManipulatorFactory extends TransformInfoObjectConfigAndManipulatorFactoryBase {
        

    private static readonly instance: TransformInfoObjectConfigAndManipulatorFactory = new TransformInfoObjectConfigAndManipulatorFactory();
        
        

    public static getInstance(): TransformInfoObjectConfigAndManipulatorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, objectConfigFileAbPath: AbPath): TransformInfoObjectConfigInterface{
    //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface
    //var objectConfigFileAbPath = objectConfigFileAbPath

        try {
            
    var data: string = new CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).
                            get(objectConfigFileAbPath)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(abeClientInformation, transformInfoInterface, DomDocumentHelper.create(data));

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Could Not Load Object Config", getInstance(), commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): TransformInfoObjectConfigInterface{
    //var abeClientInformation = abeClientInformation
var transformInfoInterface = transformInfoInterface

        try {
            
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(transformInfoInterface != 
                                    null
                                 && !stringValidationUtil!.isEmpty(transformInfoInterface!.getStoreName());

                        )
                        
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

    var error: string = "Failed To Get Instance: ";
        
        
;
    

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
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, document: Document): TransformInfoObjectConfigInterface{
    //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface
    //var document = document

        try {
            
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(transformInfoInterface != 
                                    null
                                 && !stringValidationUtil!.isEmpty(transformInfoInterface!.getStoreName());

                        )
                        
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

    var error: string = "Failed To Get Instance: ";
        
        
;
    

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
                                



                            throw e
}

}


}
                
            

