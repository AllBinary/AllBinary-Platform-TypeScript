
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { InputOutputTypeData } from "../../../../../../org/allbinary/logic/io/InputOutputTypeData.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformFactory } from "../../../../../../org/allbinary/logic/visual/transform/TransformFactory.js";

    
import { TransformInterface } from "../../../../../../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { TransformInfoDomNode } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoDomNode.js";

    
import { TransformInfoHttpInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { StoreFileGenerator } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/StoreFileGenerator.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformGeneratorUtil
            extends Object
         {
        

    private static readonly instance: TransformGeneratorUtil = new TransformGeneratorUtil();
        
        

    public static getInstance(): TransformGeneratorUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public generate(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, ownerTransformInfoInterface: TransformInfoInterface){
    //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface
    //var ownerTransformInfoInterface = ownerTransformInfoInterface

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Generating View: " +transformInfoInterface!.getName(), this, "generate()");
    

                                    }
                                

    var componentInterface: TransformInterface = TransformFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface!.getName(), ownerTransformInfoInterface)!;
        
        
;
    

    var result: string = componentInterface!.view()!;
        
        
;
    

    var httpTransformInfoInterface: TransformInfoHttpInterface = componentInterface!.getTransformInfoInterface();

                         as TransformInfoHttpInterface;
        
        
;
    

    var inputOutputTypeData: InputOutputTypeData = InputOutputTypeData.getInstance()!;
        
        
;
    

                        if(result.indexOf("<HTML>") >= 0)
                        
                                    {
                                    httpTransformInfoInterface!.getPropertiesHashMap()!.put(inputOutputTypeData!.NAME, inputOutputTypeData!.DEFAULT);
    

                                    }
                                
                        else {
                            httpTransformInfoInterface!.getPropertiesHashMap()!.put(inputOutputTypeData!.NAME, inputOutputTypeData!.DEFAULT_FRAGMENT);
    

                        }
                            
new StoreFileGenerator(componentInterface!.getTransformInfoInterface()).
                            process(result);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate a view", this, "generate()", e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    public generate(abeClientInformation: AbeClientInformationInterface, transformInfoDomNode: TransformInfoDomNode, ownerTransformInfoInterface: TransformInfoInterface){
    //var abeClientInformation = abeClientInformation
    //var transformInfoDomNode = transformInfoDomNode
    //var ownerTransformInfoInterface = ownerTransformInfoInterface
generate(abeClientInformation, transformInfoDomNode!.getTransformInfoInterface(), ownerTransformInfoInterface);
    
}


}
                
            

