
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
        
//not game specific package import { Vector } from '../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { TransformGeneratorUtil } from '../../../../../../org/allbinary/logic/visual/transform/generator/TransformGeneratorUtil.js';
      const TransformGeneratorUtil = globalThis.org.allbinary.logic.visual.transform.generator.TransformGeneratorUtil;

      
//not game specific package import { TransformInfo } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfo.js';
      const TransformInfo = globalThis.org.allbinary.logic.visual.transform.info.TransformInfo;

      
//not game specific package import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomizerUtil } from './CustomizerUtil.js';

export class StoreCustomizerComponentUtil
            extends Object
         {
        

    private static readonly instance: StoreCustomizerComponentUtil = new StoreCustomizerComponentUtil();

    public static getInstance(): StoreCustomizerComponentUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StoreCustomizerComponentUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public generate(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): string{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Generating Modified Views For: " +transformInfoInterface!.getName(), this, "generateModifiedViews()");
    

                                    }
                                

    var customizerUtil: CustomizerUtil = CustomizerUtil.getInstance()!;;
    

    var allCustomizedViews: Vector = customizerUtil!.getTransformInfoObjectConfigGroupComponentNodes(transformInfoInterface)!;;
    

    var size: number = allCustomizedViews!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var nextTransformInfoInterface: TransformInfo = allCustomizedViews!.get(index) as TransformInfo;;
    

    var allViewsToBeModified: Vector = customizerUtil!.getTransformInfoObjectConfigComponentNodesToCustomize(transformInfoInterface, nextTransformInfoInterface)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View or component that was modified by a Customizer: " +nextTransformInfoInterface!.getName(), this, "generateModifiedViews()");
    

                                    }
                                
this.generate(abeClientInformation, transformInfoInterface, allViewsToBeModified);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


                //@Throws(Exception.constructor)
            
    generate(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, allViewsToBeModifiedVector: Vector){

    var customizerUtil: CustomizerUtil = CustomizerUtil.getInstance()!;;
    

    var size: number = allViewsToBeModifiedVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var nextTransformInfoInterface: TransformInfo = allViewsToBeModifiedVector!.get(index) as TransformInfo;;
    

    var specifiedTransformInfoInterface: TransformInfoInterface = customizerUtil!.getTransformInfoInterfaceToCustomize(transformInfoInterface, nextTransformInfoInterface)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Retrieved: " +specifiedTransformInfoInterface!.getName(), this, "generateModifiedViews()");
    

                                    }
                                
TransformGeneratorUtil.getInstance()!.generate(abeClientInformation, nextTransformInfoInterface, specifiedTransformInfoInterface);
    
}

}


}
                
            

