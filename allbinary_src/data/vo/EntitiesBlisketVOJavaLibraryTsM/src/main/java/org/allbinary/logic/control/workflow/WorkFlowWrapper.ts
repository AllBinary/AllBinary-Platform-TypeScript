
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { Method } from '../../../../../java/lang/reflect/Method.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WorkFlowInterface } from './WorkFlowInterface.js';

export class WorkFlowWrapper
            extends Object
         implements WorkFlowInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private anyType: any
public constructor (anyType: any = {}){

            super();
        var anyType = anyType
this.anyType= anyType;
    
}


    getWorkFlowObject(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.anyType;
    
}


                //@Throws(Exception.constructor)
            
    public getName(): string{

        try {
            
    var helperClass: Function = this.anyType!.constructor!;
;
    

    var method: Method = helperClass!.getMethod("getName", 
                            null)!;
;
    

    var result: string = method.invoke(this.anyType, 
                            null) as string;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Reflection Exception";
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getName()", e);
    

                                    }
                                



                            throw new Exception(error);
                    
}

}


                //@Throws(Exception.constructor)
            
    public getStoreName(): string{

        try {
            
    var helperClass: Function = this.anyType!.constructor!;
;
    

    var method: Method = helperClass!.getMethod("getStoreName", 
                            null)!;
;
    

    var result: string = method.invoke(this.anyType, 
                            null) as string;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Reflection Exception";
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getStoreName()", e);
    

                                    }
                                



                            throw new Exception(error);
                    
}

}


                //@Throws(Exception.constructor)
            
    public process(): Integer{

        try {
            
    var helperClass: Function = this.anyType!.constructor!;
;
    

    var method: Method = helperClass!.getMethod(this.commonStrings!.PROCESS, 
                            null)!;
;
    

    var result: Integer = method.invoke(this.anyType, 
                            null) as Integer;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Reflection Exception";
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    

                                    }
                                



                            throw new Exception(error);
                    
}

}


}
                
            

