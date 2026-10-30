
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { UserInterface } from '../../../../../../../org/allbinary/business/user/UserInterface.js';
//not GWT import const UserInterface

import { UserConfigurationInterface } from '../../../../../../../org/allbinary/business/user/modules/configuration/UserConfigurationInterface.js';
//not GWT import const UserConfigurationInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { UserEmailConfigurationInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationInterface.js';
//not GWT import const UserEmailConfigurationInterface

import { UserEmailEventsConfigurationInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationInterface.js';
//not GWT import const UserEmailEventsConfigurationInterface

import { UserEmailEventListenerInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js';
//not GWT import const UserEmailEventListenerInterface

import { UserEmailEventNameData } from '../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
//not GWT import const UserEmailEventNameData

import { LogUserEmailEventListenerModule } from '../../../../../../../org/allbinary/logic/communication/smtp/event/modules/log/LogUserEmailEventListenerModule.js';
//not GWT import const LogUserEmailEventListenerModule

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailEventHandler } from './UserEmailEventHandler.js';
//not GWT import - same folder const UserEmailEventHandler

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

    let userConfigurationInterface: UserConfigurationInterface = userInterface!.getUserConfigurationInterface()!;;
    

    let userEmailConfigurationInterface: UserEmailConfigurationInterface = userConfigurationInterface!.getUserEmailConfigurationInterface()!;;
    

    let userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface = userEmailConfigurationInterface!.getUserEmailEventsConfigurationInterface()!;;
    

    let userEmailEventListenerInterface: UserEmailEventListenerInterface = userEmailEventsConfigurationInterface!.getEventListener(abeClientInformation, userEmailEventNameData, userInterface)!;;
    

    let vector: BasicArrayList = new BasicArrayListD();;
    
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
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Returning UserEmailEventHandler for ");
    
stringBuffer!.appendint(userVector!.size());
    
stringBuffer!.append(" users.");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "getEventHandler");
    

                                    }
                                

    let userEmailEventHandler: UserEmailEventHandler = new UserEmailEventHandler();;
    
userEmailEventHandler!.addListener(new LogUserEmailEventListenerModule());
    

    let size: number = userVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let userInterface: UserInterface = userVector!.get(index) as UserInterface;;
    

    let vector: BasicArrayList = EmailEventHandlerUtil.getUserEmailEventListenerVector(abeClientInformation, userEmailEventNameData, userInterface)!;;
    
userEmailEventHandler!.addListener(vector);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userEmailEventHandler;
    
}


}

