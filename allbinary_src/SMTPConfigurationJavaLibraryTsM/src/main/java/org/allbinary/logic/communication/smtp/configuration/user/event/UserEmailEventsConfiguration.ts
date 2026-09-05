
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { UserInterface } from '../../../../../../../../org/allbinary/business/user/UserInterface.js';
//not GWT import const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { UserEmailEventListenerInterface } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js';
//not GWT import const UserEmailEventListenerInterface = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventListenerInterface;

      
import { UserEmailEventNameData } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
//not GWT import const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
import { AbeClientInformationInterface } from '../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailEventsConfigurationInterface } from './UserEmailEventsConfigurationInterface.js';
//not GWT import - same folder const UserEmailEventsConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventsConfigurationInterface;

                import { UserEmailEventConfigurationInterface } from './UserEmailEventConfigurationInterface.js';
//not GWT import - same folder const UserEmailEventConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventConfigurationInterface;

                import { UserEmailEventListenerFactory } from './UserEmailEventListenerFactory.js';
//not GWT import - same folder const UserEmailEventListenerFactory = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventListenerFactory;

                
export class UserEmailEventsConfiguration
            extends Object
         implements UserEmailEventsConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private emailEventHashMap: HashMap<any, any>;

public constructor (){

            super();
        this.init();
    
}


public constructor (hashMap: HashMap<any, any>){

            super();
        this.init();
    
}


    init(){
this.emailEventHashMap= StdUtil.getInstance()!.createHashMap();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, " Constructor");
    

                                    }
                                
}


    public getEventConfigurationHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.emailEventHashMap;
    
}


    public addUserEmailEventConfiguration(userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Adding: " +userEmailEventConfigurationInterface!.log(), this, "addUserEmailEventConfiguration");
    

                                    }
                                
this.emailEventHashMap!.put(userEmailEventConfigurationInterface!.getName(), userEmailEventConfigurationInterface);
    
}


                //@Throws(Exception.constructor)
            
    public getEventListener(abeClientInformation: AbeClientInformationInterface, userEmailEventNameData: UserEmailEventNameData, userInterface: UserInterface): UserEmailEventListenerInterface{

    var userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface = this.emailEventHashMap!.get(userEmailEventNameData!.toString()) as UserEmailEventConfigurationInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserEmailEventListenerFactory.getInstance(abeClientInformation, userEmailEventConfigurationInterface, userInterface);;
    
}


}



