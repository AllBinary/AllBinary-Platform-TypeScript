
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformGeneratorUtil } from "../../../../../../org/allbinary/logic/visual/transform/generator/TransformGeneratorUtil.js";

    
import { TransformInfo } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfo.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    

export class StoreCustomizerComponentUtil
            extends Object
         {
        

    private static readonly instance: StoreCustomizerComponentUtil = new StoreCustomizerComponentUtil();
        
        

    public static getInstance(): StoreCustomizerComponentUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public generate(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): string{
    //var abeClientInformation = abeClientInformation
var transformInfoInterface = transformInfoInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Generating Modified Views For: " +transformInfoInterface!.getName(), this, "generateModifiedViews()");
    

                                    }
                                

    var customizerUtil: CustomizerUtil = CustomizerUtil.getInstance()!;
        
        
;
    

    var allCustomizedViews: Vector = customizerUtil!.getTransformInfoObjectConfigGroupComponentNodes(transformInfoInterface)!;
        
        
;
    

    var size: number = allCustomizedViews!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextTransformInfoInterface: TransformInfo = allCustomizedViews!.get(index);

                         as TransformInfo;
        
        
;
    

    var allViewsToBeModified: Vector = customizerUtil!.getTransformInfoObjectConfigComponentNodesToCustomize(transformInfoInterface, nextTransformInfoInterface)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("View or component that was modified by a Customizer: " +nextTransformInfoInterface!.getName(), this, "generateModifiedViews()");
    

                                    }
                                
generate(abeClientInformation, transformInfoInterface, allViewsToBeModified);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


                //@Throws(Error::class)
            
    generate(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, allViewsToBeModifiedVector: Vector){
    //var abeClientInformation = abeClientInformation
var transformInfoInterface = transformInfoInterface
var allViewsToBeModifiedVector = allViewsToBeModifiedVector

    var customizerUtil: CustomizerUtil = CustomizerUtil.getInstance()!;
        
        
;
    

    var size: number = allViewsToBeModifiedVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextTransformInfoInterface: TransformInfo = allViewsToBeModifiedVector!.get(index);

                         as TransformInfo;
        
        
;
    

    var specifiedTransformInfoInterface: TransformInfoInterface = customizerUtil!.getTransformInfoInterfaceToCustomize(transformInfoInterface, nextTransformInfoInterface)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Retrieved: " +specifiedTransformInfoInterface!.getName(), this, "generateModifiedViews()");
    

                                    }
                                
TransformGeneratorUtil.getInstance()!.generate(abeClientInformation, nextTransformInfoInterface, specifiedTransformInfoInterface);
    
}

}


}
                
            

