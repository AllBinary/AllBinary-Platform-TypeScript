
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
        
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { InputOutputTypeData } from '../../../../../../org/allbinary/logic/io/InputOutputTypeData.js';
      const InputOutputTypeData = globalThis.org.allbinary.logic.io.InputOutputTypeData;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { TransformFactory } from '../../../../../../org/allbinary/logic/visual/transform/TransformFactory.js';
      const TransformFactory = globalThis.org.allbinary.logic.visual.transform.TransformFactory;

      
//not game specific package import { TransformInterface } from '../../../../../../org/allbinary/logic/visual/transform/TransformInterface.js';
      const TransformInterface = globalThis.org.allbinary.logic.visual.transform.TransformInterface;

      
//not game specific package import { TransformInfoDomNode } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoDomNode.js';
      const TransformInfoDomNode = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoDomNode;

      
//not game specific package import { TransformInfoHttpInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
//not game specific package import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { StoreFileGenerator } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/StoreFileGenerator.js';
      const StoreFileGenerator = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.generator.StoreFileGenerator;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformGeneratorUtil
            extends Object
         {
        

    private static readonly instance: TransformGeneratorUtil = new TransformGeneratorUtil();

    public static getInstance(): TransformGeneratorUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformGeneratorUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public generate(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, ownerTransformInfoInterface: TransformInfoInterface){

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Generating View: " +transformInfoInterface!.getName(), this, "generate()");
    

                                    }
                                

    var componentInterface: TransformInterface = TransformFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface!.getName(), ownerTransformInfoInterface)!;;
    

    var result: string = componentInterface!.view()!;;
    

    var httpTransformInfoInterface: TransformInfoHttpInterface = componentInterface!.getTransformInfoInterface() as TransformInfoHttpInterface;;
    

    var inputOutputTypeData: InputOutputTypeData = InputOutputTypeData.getInstance()!;;
    

                        if(result.indexOf("<HTML>") >= 0)
                        
                                    {
                                    httpTransformInfoInterface!.getPropertiesHashMap()!.put(inputOutputTypeData!.NAME, inputOutputTypeData!.DEFAULT);
    

                                    }
                                
                        else {
                            httpTransformInfoInterface!.getPropertiesHashMap()!.put(inputOutputTypeData!.NAME, inputOutputTypeData!.DEFAULT_FRAGMENT);
    

                        }
                            
new StoreFileGenerator(componentInterface!.getTransformInfoInterface()).process(result);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate a view", this, "generate()", e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public generate(abeClientInformation: AbeClientInformationInterface, transformInfoDomNode: TransformInfoDomNode, ownerTransformInfoInterface: TransformInfoInterface){
this.generate(abeClientInformation, transformInfoDomNode!.getTransformInfoInterface(), ownerTransformInfoInterface);
    
}


}



