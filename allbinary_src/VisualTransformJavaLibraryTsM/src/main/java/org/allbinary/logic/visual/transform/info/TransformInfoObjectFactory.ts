
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

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeFactory } from "../../../../../../org/allbinary/logic/system/loader/AbeFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { TransformInterface } from "../../../../../../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class TransformInfoObjectFactory
            extends Object
         {
        

    private static readonly instance: TransformInfoObjectFactory = new TransformInfoObjectFactory();
        
        

    public static getInstance(): TransformInfoObjectFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): TransformInterface{
    //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface

        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put("Creating View: " +transformInfoInterface!.getName(), this, commonStrings!.GET_INSTANCE)

                                    }
                                

    var params: any = {}[] = new Array(1);
        
        


    var classes: KClass<*>[] = new Array(1);
        
        

classes[0]= 
                                    //Otherwise - expression - AssignExpr - value - ClassExpr

params[0]= transformInfoInterface as Object

    var anyType: TransformInterface = AbeFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface!.getObjectFile(), classes, params) as TransformInterface;
        
        


    
                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    
    
                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("\nNo Such View Name: ")
append(transformInfoInterface!.getName())
append("\nNo Such View Object: ")
append(transformInfoInterface!.getObjectFile())



                            throw Exception(stringBuffer!.toString())

                                    }
                                
                        else {
                            


                            throw Exception("No Such View Object since transformInfo is null")

                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
} catch(e: LicensingException)
            {

    var error: string = "Failed To Get Instance: ";
        
        


    
                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    error= error +transformInfoInterface!.getName()

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(error, this, commonStrings!.GET_INSTANCE, e)

                                    }
                                



                            throw e
}
 catch(e: Exception)
            {

    var error: string = "Failed To Get Instance: ";
        
        


    
                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    error= error +transformInfoInterface!.getName()

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(error, this, commonStrings!.GET_INSTANCE, e)

                                    }
                                



                            throw e
}

}


}
                
            

