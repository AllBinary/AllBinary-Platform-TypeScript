
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
        



import { UserInterface } from "../../../../../../../../../org/allbinary/business/user/UserInterface.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicEmail } from "../../../../../../../../../org/allbinary/logic/communication/smtp/BasicEmail.js";

    
import { EmailInterface } from "../../../../../../../../../org/allbinary/logic/communication/smtp/EmailInterface.js";

    
import { EmailEvent } from "../../../../../../../../../org/allbinary/logic/communication/smtp/event/EmailEvent.js";

    
import { UserEmailEventListenerInterface } from "../../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js";

    
import { EmailQueueFactory } from "../../../../../../../../../org/allbinary/logic/communication/smtp/queue/EmailQueueFactory.js";

    

export class UserEmailEventListenerModule
            extends Object
        
                , UserEmailEventListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private userInterface: UserInterface
public constructor (userInterface: UserInterface){

            super();
            var userInterface = userInterface
this.userInterface= userInterface
}


                @Throws(Exception::class)
            
    public onEmailSendFailure(emailEvent: EmailEvent){
var emailEvent = emailEvent

    var to: string = this.userInterface!.getSecondaryEmail()!;
        
        


    var email: BasicEmail = new BasicEmail(emailEvent!.getEmailInfo(), to);
        
        

offer(email.getEmail() as EmailInterface)
}


                @Throws(Exception::class)
            
    public onEmailSendRequest(emailEvent: EmailEvent){
var emailEvent = emailEvent

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    put("Add Email To Que For Sending: " +emailEvent!.toString(), this, "onEmailSendRequest")

                                    }
                                

    var to: string = this.userInterface!.getMainEmail()!;
        
        


    var email: BasicEmail = new BasicEmail(emailEvent!.getEmailInfo(), to);
        
        

offer(email.getEmail() as EmailInterface)
}


}
                
            

