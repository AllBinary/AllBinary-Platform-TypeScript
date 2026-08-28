
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
        



            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { UserInterface } from '../../../../../../../../../org/allbinary/business/user/UserInterface.js';
      const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
//not game specific package import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { BasicEmail } from '../../../../../../../../../org/allbinary/logic/communication/smtp/BasicEmail.js';
      const BasicEmail = globalThis.org.allbinary.logic.communication.smtp.BasicEmail;

      
//not game specific package import { EmailInterface } from '../../../../../../../../../org/allbinary/logic/communication/smtp/EmailInterface.js';
      const EmailInterface = globalThis.org.allbinary.logic.communication.smtp.EmailInterface;

      
//not game specific package import { EmailEvent } from '../../../../../../../../../org/allbinary/logic/communication/smtp/event/EmailEvent.js';
      const EmailEvent = globalThis.org.allbinary.logic.communication.smtp.event.EmailEvent;

      
//not game specific package import { UserEmailEventListenerInterface } from '../../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js';
      const UserEmailEventListenerInterface = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventListenerInterface;

      
//not game specific package import { EmailQueueFactory } from '../../../../../../../../../org/allbinary/logic/communication/smtp/queue/EmailQueueFactory.js';
      const EmailQueueFactory = globalThis.org.allbinary.logic.communication.smtp.queue.EmailQueueFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UserEmailEventListenerModule
            extends Object
         implements UserEmailEventListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private userInterface: UserInterface;

public constructor (userInterface: UserInterface){

            super();
        this.userInterface= userInterface;
    
}


                //@Throws(Exception.constructor)
            
    public onEmailSendFailure(emailEvent: EmailEvent){

    var to: string = this.userInterface!.getSecondaryEmail()!;;
    

    var email: BasicEmail = new BasicEmail(emailEvent!.getEmailInfo(), to);;
    
EmailQueueFactory.getInstance()!.offer(email.getEmail() as EmailInterface);
    
}


                //@Throws(Exception.constructor)
            
    public onEmailSendRequest(emailEvent: EmailEvent){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Add Email To Que For Sending: " +emailEvent!.toString(), this, "onEmailSendRequest");
    

                                    }
                                

    var to: string = this.userInterface!.getMainEmail()!;;
    

    var email: BasicEmail = new BasicEmail(emailEvent!.getEmailInfo(), to);;
    
EmailQueueFactory.getInstance()!.offer(email.getEmail() as EmailInterface);
    
}


}



