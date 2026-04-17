
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

    
import { TransformInfoFactoryInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoFactoryInterface.js";

    
import { TransformInfoObjectConfigAndManipulatorFactoryBase } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigAndManipulatorFactoryBase.js";

    
import { TransformInfoObjectConfigGeneratorFactoryInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/TransformInfoObjectConfigGeneratorFactoryInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TransformInfoEntity } from "./TransformInfoEntity.js";

export class TransformInfoEntityFactory
            extends Object
         {
        

    public static getInstance(transformInfoObjectConfigGeneratorFactoryInterface: TransformInfoObjectConfigGeneratorFactoryInterface, transformInfoObjectConfigAndManipulatorFactoryInterface: TransformInfoObjectConfigAndManipulatorFactoryBase, transformInfoFactoryInterface: TransformInfoFactoryInterface): TransformInfoEntity{
var transformInfoObjectConfigGeneratorFactoryInterface = transformInfoObjectConfigGeneratorFactoryInterface
var transformInfoObjectConfigAndManipulatorFactoryInterface = transformInfoObjectConfigAndManipulatorFactoryInterface
var transformInfoFactoryInterface = transformInfoFactoryInterface

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoEntity(transformInfoObjectConfigGeneratorFactoryInterface, transformInfoObjectConfigAndManipulatorFactoryInterface, transformInfoFactoryInterface);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, "TransformInfoEntityFactory", commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

private constructor (){

            super();
            }


}
                
            

