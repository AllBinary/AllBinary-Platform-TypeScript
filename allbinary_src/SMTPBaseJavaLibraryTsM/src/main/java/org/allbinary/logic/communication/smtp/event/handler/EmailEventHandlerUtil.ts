
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
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { UserInterface } from '../../../../../../../org/allbinary/business/user/UserInterface.js';
      //not GWT import const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
import { UserConfigurationInterface } from '../../../../../../../org/allbinary/business/user/modules/configuration/UserConfigurationInterface.js';
      //not GWT import const UserConfigurationInterface = globalThis.org.allbinary.business.user.modules.configuration.UserConfigurationInterface;

      
import { StdUtil } from '../../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { UserEmailConfigurationInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationInterface.js';
      //not GWT import const UserEmailConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfigurationInterface;

      
import { UserEmailEventsConfigurationInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationInterface.js';
      //not GWT import const UserEmailEventsConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventsConfigurationInterface;

      
import { UserEmailEventListenerInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js';
      //not GWT import const UserEmailEventListenerInterface = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventListenerInterface;

      
import { UserEmailEventNameData } from '../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      //not GWT import const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
import { LogUserEmailEventListenerModule } from '../../../../../../../org/allbinary/logic/communication/smtp/event/modules/log/LogUserEmailEventListenerModule.js';
      //not GWT import const LogUserEmailEventListenerModule = globalThis.org.allbinary.logic.communication.smtp.event.modules.log.LogUserEmailEventListenerModule;

      
//not plain js import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailEventHandler } from './UserEmailEventHandler.js';
//not GWT import const UserEmailEventHandler = globalThis.org.allbinary.logic.communication.smtp.event.handler.UserEmailEventHandler;

                
export class EmailEventHandlerUtil
            extends Object
         {
        

    private static readonly instance: EmailEventHandlerUtil = new EmailEventHandlerUtil();

    public static getInstance(): EmailEventHandlerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EmailEventHandlerUtil.instance;
    
}


                //@Throws(Exception.constructor)
            
    public static getUserEmailEventListenerVector(abeClientInformation: AbeClientInformationInterface, userEmailEventNameData: UserEmailEventNameData, userInterface: UserInterface): BasicArrayList{

    var userConfigurationInterface: UserConfigurationInterface = userInterface!.getUserConfigurationInterface()!;;
    

    var userEmailConfigurationInterface: UserEmailConfigurationInterface = userConfigurationInterface!.getUserEmailConfigurationInterface()!;;
    

    var userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface = userEmailConfigurationInterface!.getUserEmailEventsConfigurationInterface()!;;
    

    var userEmailEventListenerInterface: UserEmailEventListenerInterface = userEmailEventsConfigurationInterface!.getEventListener(abeClientInformation, userEmailEventNameData, userInterface)!;;
    

    var vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(userEmailEventListenerInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getEventHandler(abeClientInformation: AbeClientInformationInterface, userEmailEventNameData: UserEmailEventNameData, userVector: BasicArrayList): UserEmailEventHandler{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Returning UserEmailEventHandler for ");
    
stringBuffer!.appendint(userVector!.size());
    
stringBuffer!.append(" users.");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "getEventHandler");
    

                                    }
                                

    var userEmailEventHandler: UserEmailEventHandler = new UserEmailEventHandler();;
    
userEmailEventHandler!.addListener(new LogUserEmailEventListenerModule());
    

    var size: number = userVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var userInterface: UserInterface = userVector!.get(index) as UserInterface;;
    

    var vector: BasicArrayList = EmailEventHandlerUtil.getUserEmailEventListenerVector(abeClientInformation, userEmailEventNameData, userInterface)!;;
    
userEmailEventHandler!.addListener(vector);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userEmailEventHandler;
    
}


}



