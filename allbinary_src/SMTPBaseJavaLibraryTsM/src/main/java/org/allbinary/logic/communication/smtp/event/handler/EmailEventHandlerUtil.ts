
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
        
//not game specific package import { Vector } from '../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { UserInterface } from '../../../../../../../org/allbinary/business/user/UserInterface.js';
      const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
//not game specific package import { UserConfigurationInterface } from '../../../../../../../org/allbinary/business/user/modules/configuration/UserConfigurationInterface.js';
      const UserConfigurationInterface = globalThis.org.allbinary.business.user.modules.configuration.UserConfigurationInterface;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { UserEmailConfigurationInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationInterface.js';
      const UserEmailConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfigurationInterface;

      
//not game specific package import { UserEmailEventsConfigurationInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationInterface.js';
      const UserEmailEventsConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventsConfigurationInterface;

      
//not game specific package import { UserEmailEventListenerInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js';
      const UserEmailEventListenerInterface = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventListenerInterface;

      
//not game specific package import { UserEmailEventNameData } from '../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
//not game specific package import { LogUserEmailEventListenerModule } from '../../../../../../../org/allbinary/logic/communication/smtp/event/modules/log/LogUserEmailEventListenerModule.js';
      const LogUserEmailEventListenerModule = globalThis.org.allbinary.logic.communication.smtp.event.modules.log.LogUserEmailEventListenerModule;

      
//not game specific package import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailEventHandler } from './UserEmailEventHandler.js';

export class EmailEventHandlerUtil
            extends Object
         {
        

    private static readonly instance: EmailEventHandlerUtil = new EmailEventHandlerUtil();

    public static getInstance(): EmailEventHandlerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EmailEventHandlerUtil.instance;
    
}


                //@Throws(Exception.constructor)
            
    public static getUserEmailEventListenerVector(abeClientInformation: AbeClientInformationInterface, userEmailEventNameData: UserEmailEventNameData, userInterface: UserInterface): Vector{

    var userConfigurationInterface: UserConfigurationInterface = userInterface!.getUserConfigurationInterface()!;;
    

    var userEmailConfigurationInterface: UserEmailConfigurationInterface = userConfigurationInterface!.getUserEmailConfigurationInterface()!;;
    

    var userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface = userEmailConfigurationInterface!.getUserEmailEventsConfigurationInterface()!;;
    

    var userEmailEventListenerInterface: UserEmailEventListenerInterface = userEmailEventsConfigurationInterface!.getEventListener(abeClientInformation, userEmailEventNameData, userInterface)!;;
    

    var vector: Vector = new Vector();;
    
vector.add(userEmailEventListenerInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getEventHandler(abeClientInformation: AbeClientInformationInterface, userEmailEventNameData: UserEmailEventNameData, userVector: Vector): UserEmailEventHandler{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Returning UserEmailEventHandler for ");
    
stringBuffer!.appendint(userVector!.length);
    
stringBuffer!.append(" users.");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "getEventHandler");
    

                                    }
                                

    var userEmailEventHandler: UserEmailEventHandler = new UserEmailEventHandler();;
    
userEmailEventHandler!.addListener(new LogUserEmailEventListenerModule());
    

    var size: number = userVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var userInterface: UserInterface = userVector!.get(index) as UserInterface;;
    

    var vector: Vector = EmailEventHandlerUtil.getUserEmailEventListenerVector(abeClientInformation, userEmailEventNameData, userInterface)!;;
    
userEmailEventHandler!.addListener(vector);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userEmailEventHandler;
    
}


}



