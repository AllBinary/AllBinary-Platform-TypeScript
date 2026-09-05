
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { EventListener } from '../../../../../../java/util/EventListener.js';
//not GWT import const EventListener = globalThis.java.util.EventListener;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmailEvent } from './EmailEvent.js';
//not GWT import - same folder const EmailEvent = globalThis.org.allbinary.logic.communication.smtp.event.EmailEvent;

                
export interface UserEmailEventListenerInterface extends EventListener {
        

                //@Throws(Exception.constructor)
            
    onEmailSendRequest(userEmailInfoEvent: EmailEvent)

}



