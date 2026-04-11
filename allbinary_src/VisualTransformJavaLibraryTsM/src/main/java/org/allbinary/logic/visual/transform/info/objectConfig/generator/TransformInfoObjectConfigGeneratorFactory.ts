
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
        



import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { InputOutputTypeData } from "../../../../../../../../org/allbinary/logic/io/InputOutputTypeData.js";

    
import { TransformInfoInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class TransformInfoObjectConfigGeneratorFactory
            extends Object
        
                , TransformInfoObjectConfigGeneratorFactoryInterface {
        

    private static readonly instance: TransformInfoObjectConfigGeneratorFactory = new TransformInfoObjectConfigGeneratorFactory();
        
        

    public static getInstance(): TransformInfoObjectConfigGeneratorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(transformInfoInterface: TransformInfoInterface): TransformInfoObjectConfigGenerator{
var transformInfoInterface = transformInfoInterface

    var type: string = transformInfoInterface!.getObjectConfigInterface()!.getOutputTypeName();

                         as String;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put("Generating Instance for type: " +type, this, commonStrings!.GET_INSTANCE);
    

                                    }
                                

                        if(type == 
                                    null
                                 || type.compareTo(InputOutputTypeData.getInstance()!.RESPONSE) == 0 || transformInfoInterface!.isChild())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicGenerator();
    

                                    }
                                
                             else 
                        if(type.compareTo(InputOutputTypeData.getInstance()!.FILE) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StoreFileGenerator(transformInfoInterface);
    

                                    }
                                
                        else {
                            


                            throw Error("No Such TransformInfoObjectConfigGenerator Type")

                        }
                            
}


}
                
            

