
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

        


            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { UserInterface } from '../../../../../../../../org/allbinary/business/user/UserInterface.js';
      //not GWT import const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
import { UserEmailEventListenerInterface } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js';
      //not GWT import const UserEmailEventListenerInterface = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventListenerInterface;

      
import { UserEmailEventNameData } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      //not GWT import const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
import { AbeClientInformationInterface } from '../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailEventConfigurationInterface } from './UserEmailEventConfigurationInterface.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventConfigurationInterface;

                
export interface UserEmailEventsConfigurationInterface {
        

    getEventConfigurationHashMap(): HashMap<any, any>

    addUserEmailEventConfiguration(userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface)

                //@Throws(Exception.constructor)
            
    getEventListener(abeClientInformation: AbeClientInformationInterface, userEmailEventNameData: UserEmailEventNameData, userInterface: UserInterface): UserEmailEventListenerInterface

}



