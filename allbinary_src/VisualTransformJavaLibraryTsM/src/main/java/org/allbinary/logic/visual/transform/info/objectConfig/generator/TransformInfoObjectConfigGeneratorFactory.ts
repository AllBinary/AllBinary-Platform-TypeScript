
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
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { InputOutputTypeData } from '../../../../../../../../org/allbinary/logic/io/InputOutputTypeData.js';
//not GWT import const InputOutputTypeData

import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfigGeneratorFactoryInterface } from './TransformInfoObjectConfigGeneratorFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigGeneratorFactoryInterface
import { StoreFileGenerator } from './StoreFileGenerator.js';
//sameFolderImports - not GWT import - same folder const StoreFileGenerator
import { BasicGenerator } from './BasicGenerator.js';
//sameFolderImports - not GWT import - same folder const BasicGenerator
import { TransformInfoObjectConfigGenerator } from './TransformInfoObjectConfigGenerator.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigGenerator

export class TransformInfoObjectConfigGeneratorFactory
            extends Object
         implements TransformInfoObjectConfigGeneratorFactoryInterface {
        

    private static readonly instance: TransformInfoObjectConfigGeneratorFactory = new TransformInfoObjectConfigGeneratorFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): TransformInfoObjectConfigGeneratorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoObjectConfigGeneratorFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(transformInfoInterface: TransformInfoInterface): TransformInfoObjectConfigGenerator{

    let type: string = transformInfoInterface!.getObjectConfigInterface()!.getOutputTypeName() as string;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
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

