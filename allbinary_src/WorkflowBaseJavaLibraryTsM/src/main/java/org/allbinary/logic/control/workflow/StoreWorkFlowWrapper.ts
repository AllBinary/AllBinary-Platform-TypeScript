
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
        
import { Method } from '../../../../../java/lang/reflect/Method.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WorkFlowWrapper } from './WorkFlowWrapper.js';

export class StoreWorkFlowWrapper extends WorkFlowWrapper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
public constructor (anyType: any = {}){
            super(anyType);
                    var anyType = anyType


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public getStoreName(): string{

        try {
            
    var helperClass: Function = this.getWorkFlowObject()!.constructor!;
;
    

    var method: Method = helperClass!.getMethod("getStoreName", 
                            null)!;
;
    

    var result: string = method.invoke(this.getWorkFlowObject(), 
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
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getStoreName()", e);
    

                                    }
                                



                            throw new Exception(error);
                    
}

}


}
                
            

