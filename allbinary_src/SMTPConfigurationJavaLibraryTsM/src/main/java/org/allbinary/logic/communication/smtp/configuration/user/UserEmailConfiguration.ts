
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { UserEmailEventsConfiguration } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfiguration.js';
      //not GWT import const UserEmailEventsConfiguration = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventsConfiguration;

      
import { UserEmailEventsConfigurationInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationInterface.js';
      //not GWT import const UserEmailEventsConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventsConfigurationInterface;

      
//not plain js import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailConfigurationInterface } from './UserEmailConfigurationInterface.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfigurationInterface;

                
export class UserEmailConfiguration
            extends Object
         implements UserEmailConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface;

public constructor (){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.setUserEmailEventsConfigurationInterface(new UserEmailEventsConfiguration());
    
}


public constructor (hashMap: HashMap<any, any>){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.setUserEmailEventsConfigurationInterface(new UserEmailEventsConfiguration(hashMap));
    
}


    public getUserEmailEventsConfigurationInterface(): UserEmailEventsConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailEventsConfigurationInterface;
    
}


    public setUserEmailEventsConfigurationInterface(userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface){
this.userEmailEventsConfigurationInterface= userEmailEventsConfigurationInterface;
    
}


}



