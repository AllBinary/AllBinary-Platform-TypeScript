
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

    
import { EmailEvent } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/EmailEvent.js";

    
import { UserEmailEventListenerInterface } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class LogUserEmailEventListenerModule
            extends Object
        
                , UserEmailEventListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public onEmailSendRequest(userEmailInfoEvent: EmailEvent){
var userEmailInfoEvent = userEmailInfoEvent

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var message: string = "Logging EmailEvent - Temporary Listener for debugging.\n\n" +userEmailInfoEvent!.toString();
        
        
;
    
this.logUtil!.putF(message, this, "onEmailSendRequest");
    

                                    }
                                
}


}
                
            

