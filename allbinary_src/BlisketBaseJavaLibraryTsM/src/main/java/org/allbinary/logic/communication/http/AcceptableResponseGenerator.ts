
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
        



import { HttpServletRequest } from "../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

import { AcceptableResponseUtil } from "./AcceptableResponseUtil.js";

export class AcceptableResponseGenerator
            extends Object
         {
        

    private static readonly instance: AcceptableResponseGenerator = new AcceptableResponseGenerator();
        
        

    public static getInstance(): AcceptableResponseGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public get(httpServletRequest: HttpServletRequest): string{
var httpServletRequest = httpServletRequest

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

        try {
            
    var acceptableResponseUtil: AcceptableResponseUtil = AcceptableResponseUtil.getInstance()!;
        
        
;
    

    var acceptable: string = httpServletRequest!.getHeader("accept")!;
        
        
;
    

    var result: string = acceptableResponseUtil!.getTagName(0)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTP))
                        
                                    {
                                    this.logUtil!.putF("Request Type: " +acceptable, this, commonStrings!.GET);
    

                                    }
                                

                        if(acceptable != 
                                    null
                                )
                        
                                    {
                                    
    var size: number = acceptableResponseUtil!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(acceptable.compareTo(acceptableResponseUtil!.get(index)) == 0)
                        
                                    {
                                    result= acceptableResponseUtil!.getTagName(index);
    

                                    }
                                
}


                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTP))
                        
                                    {
                                    this.logUtil!.putF("Response Type: " +result, this, commonStrings!.GET);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET, e);
    

                                    }
                                



                            throw e
}

}


}
                
            

