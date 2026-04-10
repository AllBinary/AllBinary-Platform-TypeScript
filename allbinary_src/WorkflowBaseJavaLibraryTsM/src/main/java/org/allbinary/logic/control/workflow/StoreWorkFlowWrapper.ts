
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
        



import { Method } from "../../../../../java/lang/reflect/Method.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class StoreWorkFlowWrapper extends WorkFlowWrapper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (anyType: any = {})                        

                            : super(anyType){

            super();
            var anyType = anyType


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public getStoreName(): string{

        try {
            
    var helperClass: KClass<*> = this.getWorkFlowObject()!.::class!;
        
        


    var method: Method = helperClass!.getMethod("getStoreName", 
                            null)!;
        
        


    var result: string = method.invoke(this.getWorkFlowObject(), 
                            null) as String;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: Exception)
            {

    var error: string = "Reflection Exception";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, "getStoreName()", e)

                                    }
                                



                            throw Error(error)
}

}


}
                
            

