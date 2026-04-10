
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

    

export class WorkFlowWrapper
            extends Object
        
                , WorkFlowInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private anyType: any = {}
public constructor (anyType: any = {}){

            super();
            var anyType = anyType
this.anyType= anyType
}


    getWorkFlowObject(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.anyType;
    
}


                @Throws(Exception::class)
            
    public getName(): string{

        try {
            
    var helperClass: KClass<*> = anyType!::class!;
        
        


    var method: Method = helperClass!.getMethod("getName", 
                            null)!;
        
        


    var result: string = method.invoke(this.anyType, 
                            null) as String;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: Exception)
            {

    var error: string = "Reflection Exception";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "getName()", e)

                                    }
                                



                            throw Exception(error)
}

}


                @Throws(Exception::class)
            
    public getStoreName(): string{

        try {
            
    var helperClass: KClass<*> = anyType!::class!;
        
        


    var method: Method = helperClass!.getMethod("getStoreName", 
                            null)!;
        
        


    var result: string = method.invoke(this.anyType, 
                            null) as String;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: Exception)
            {

    var error: string = "Reflection Exception";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "getStoreName()", e)

                                    }
                                



                            throw Exception(error)
}

}


                @Throws(Exception::class)
            
    public process(): Integer{

        try {
            
    var helperClass: KClass<*> = anyType!::class!;
        
        


    var method: Method = helperClass!.getMethod(commonStrings!.PROCESS, 
                            null)!;
        
        


    var result: Integer = method.invoke(this.anyType, 
                            null) as Integer;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: Exception)
            {

    var error: string = "Reflection Exception";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e)

                                    }
                                



                            throw Exception(error)
}

}


}
                
            

