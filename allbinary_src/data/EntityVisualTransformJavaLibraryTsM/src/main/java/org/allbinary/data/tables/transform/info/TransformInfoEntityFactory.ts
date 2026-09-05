
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoFactoryInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoFactoryInterface.js';
//not GWT import const TransformInfoFactoryInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoFactoryInterface;

      
import { TransformInfoObjectConfigAndManipulatorFactoryBase } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigAndManipulatorFactoryBase.js';
//not GWT import const TransformInfoObjectConfigAndManipulatorFactoryBase = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigAndManipulatorFactoryBase;

      
import { TransformInfoObjectConfigGeneratorFactoryInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/TransformInfoObjectConfigGeneratorFactoryInterface.js';
//not GWT import const TransformInfoObjectConfigGeneratorFactoryInterface = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.generator.TransformInfoObjectConfigGeneratorFactoryInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoEntity } from './TransformInfoEntity.js';
//not GWT import - same folder const TransformInfoEntity = globalThis.org.allbinary.data.tables.transform.info.TransformInfoEntity;

                
export class TransformInfoEntityFactory
            extends Object
         {
        

    public static getInstance(transformInfoObjectConfigGeneratorFactoryInterface: TransformInfoObjectConfigGeneratorFactoryInterface, transformInfoObjectConfigAndManipulatorFactoryInterface: TransformInfoObjectConfigAndManipulatorFactoryBase, transformInfoFactoryInterface: TransformInfoFactoryInterface): TransformInfoEntity{

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoEntity(transformInfoObjectConfigGeneratorFactoryInterface, transformInfoObjectConfigAndManipulatorFactoryInterface, transformInfoFactoryInterface);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

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



