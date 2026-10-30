
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { UserInterface } from '../../../../../../org/allbinary/business/user/UserInterface.js';
//not GWT import const UserInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { UserEmailEventNameData } from '../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
//not GWT import const UserEmailEventNameData

import { UserEmailEventHandler } from '../../../../../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js';
//not GWT import const UserEmailEventHandler

import { AdminUserEmailEventHandlerSingletons } from '../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js';
//not GWT import const AdminUserEmailEventHandlerSingletons

import { UserEmailEventHandlerSingletons } from '../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/UserEmailEventHandlerSingletons.js';
//not GWT import const UserEmailEventHandlerSingletons

import { AdminEmailInfo } from '../../../../../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js';
//not GWT import const AdminEmailInfo

import { BasicEmailInfo } from '../../../../../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
//not GWT import const BasicEmailInfo

import { EmailInfo } from '../../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
//not GWT import const EmailInfo

import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NewPasswordEmail
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface;

    private userInterface: UserInterface;

    private newPassword: string;

public constructor (abeClientInformation: AbeClientInformationInterface, userInterface: UserInterface, newPassword: string){

            super();
        this.abeClientInformation= abeClientInformation;
    
this.userInterface= userInterface;
    
this.newPassword= newPassword;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.notifyStoreAdmin();
    
this.notifyUser();
    
}


                //@Throws(Exception.constructor)
            
    notifyStoreAdmin(){

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("notifyStoreAdmin", this, "notifyStoreAdmin");
    

                                    }
                                

    let emailSubject: string = "New Password For User: " +this.userInterface!.getUserName();;
    

    let emailBody: string = "New Password: " +this.newPassword;;
    

    let basicEmailInfo: BasicEmailInfo = new AdminEmailInfo(emailSubject, emailBody) as BasicEmailInfo;;
    

    let emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);;
    

    let adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.NEWPASSWORD)!;;
    
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.NEWPASSWORD, emailInfo);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "emailAdmin", e);
    

                                    }
                                

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    notifyUser(){

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Email User", this, "notifyUser()");
    

                                    }
                                

    let subject: string = "New Password";;
    

    let body: string = "New Password: " +this.newPassword;;
    

    let basicEmailInfo: BasicEmailInfo = new AdminEmailInfo(subject, body) as BasicEmailInfo;;
    

    let emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);;
    

    let userEmailEventHandler: UserEmailEventHandler = UserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.NEWPASSWORD, this.userInterface)!;;
    
userEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.NEWPASSWORD, emailInfo);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "notifyUser", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

