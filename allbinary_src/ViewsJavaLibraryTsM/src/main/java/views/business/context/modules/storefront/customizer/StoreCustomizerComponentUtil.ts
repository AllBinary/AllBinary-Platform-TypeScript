
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { TransformGeneratorUtil } from '../../../../../../org/allbinary/logic/visual/transform/generator/TransformGeneratorUtil.js';
//not GWT import const TransformGeneratorUtil = globalThis.org.allbinary.logic.visual.transform.generator.TransformGeneratorUtil;

      
import { TransformInfo } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfo.js';
//not GWT import const TransformInfo = globalThis.org.allbinary.logic.visual.transform.info.TransformInfo;

      
import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomizerUtil } from './CustomizerUtil.js';
//not GWT import - same folder const CustomizerUtil = globalThis.views.business.context.modules.storefront.customizer.CustomizerUtil;

                
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
    

    var allCustomizedViews: BasicArrayList = customizerUtil!.getTransformInfoObjectConfigGroupComponentNodes(transformInfoInterface)!;;
    

    var size: number = allCustomizedViews!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var nextTransformInfoInterface: TransformInfo = allCustomizedViews!.get(index) as TransformInfo;;
    

    var allViewsToBeModified: BasicArrayList = customizerUtil!.getTransformInfoObjectConfigComponentNodesToCustomize(transformInfoInterface, nextTransformInfoInterface)!;;
    

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
            
    generate(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, allViewsToBeModifiedVector: BasicArrayList){

    var customizerUtil: CustomizerUtil = CustomizerUtil.getInstance()!;;
    

    var size: number = allViewsToBeModifiedVector!.size()!;;
    




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



