
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { InputOutputTypeData } from '../../../../../../../../org/allbinary/logic/io/InputOutputTypeData.js';
      //not GWT import const InputOutputTypeData = globalThis.org.allbinary.logic.io.InputOutputTypeData;

      
import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not plain js import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfigGeneratorFactoryInterface } from './TransformInfoObjectConfigGeneratorFactoryInterface.js';
//not GWT import const TransformInfoObjectConfigGeneratorFactoryInterface = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.generator.TransformInfoObjectConfigGeneratorFactoryInterface;

                import { StoreFileGenerator } from './StoreFileGenerator.js';
//not GWT import const StoreFileGenerator = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.generator.StoreFileGenerator;

                import { BasicGenerator } from './BasicGenerator.js';
//not GWT import const BasicGenerator = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.generator.BasicGenerator;

                import { TransformInfoObjectConfigGenerator } from './TransformInfoObjectConfigGenerator.js';
//not GWT import const TransformInfoObjectConfigGenerator = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.generator.TransformInfoObjectConfigGenerator;

                
export class TransformInfoObjectConfigGeneratorFactory
            extends Object
         implements TransformInfoObjectConfigGeneratorFactoryInterface {
        

    private static readonly instance: TransformInfoObjectConfigGeneratorFactory = new TransformInfoObjectConfigGeneratorFactory();

    public static getInstance(): TransformInfoObjectConfigGeneratorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoObjectConfigGeneratorFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(transformInfoInterface: TransformInfoInterface): TransformInfoObjectConfigGenerator{

    var type: string = transformInfoInterface!.getObjectConfigInterface()!.getOutputTypeName() as string;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF("Generating Instance for type: " +type, this, commonStrings!.GET_INSTANCE);
    

                                    }
                                

                        if(type == 
                                    null
                                 || type.compareTo(InputOutputTypeData.getInstance()!.RESPONSE) == 0 || transformInfoInterface!.isChild())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicGenerator();
    

                                    }
                                
                             else 
                        if(type.compareTo(InputOutputTypeData.getInstance()!.FILE) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreFileGenerator(transformInfoInterface);
    

                                    }
                                
                        else {
                            


                            throw new Exception("No Such TransformInfoObjectConfigGenerator Type");
                    

                        }
                            
}


}



