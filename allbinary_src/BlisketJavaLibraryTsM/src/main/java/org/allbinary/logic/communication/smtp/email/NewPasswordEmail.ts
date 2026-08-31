
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
      //not GWT import const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { UserEmailEventNameData } from '../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      //not GWT import const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
import { UserEmailEventHandler } from '../../../../../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js';
      //not GWT import const UserEmailEventHandler = globalThis.org.allbinary.logic.communication.smtp.event.handler.UserEmailEventHandler;

      
import { AdminUserEmailEventHandlerSingletons } from '../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js';
      //not GWT import const AdminUserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.AdminUserEmailEventHandlerSingletons;

      
import { UserEmailEventHandlerSingletons } from '../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/UserEmailEventHandlerSingletons.js';
      //not GWT import const UserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.UserEmailEventHandlerSingletons;

      
import { AdminEmailInfo } from '../../../../../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js';
      //not GWT import const AdminEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.AdminEmailInfo;

      
import { BasicEmailInfo } from '../../../../../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
      //not GWT import const BasicEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.BasicEmailInfo;

      
import { EmailInfo } from '../../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
      //not GWT import const EmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.EmailInfo;

      
import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
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
                                

    var emailSubject: string = "New Password For User: " +this.userInterface!.getUserName();;
    

    var emailBody: string = "New Password: " +this.newPassword;;
    

    var basicEmailInfo: BasicEmailInfo = new AdminEmailInfo(emailSubject, emailBody) as BasicEmailInfo;;
    

    var emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);;
    

    var adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.NEWPASSWORD)!;;
    
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.NEWPASSWORD, emailInfo);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "emailAdmin", e);
    

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
                                

    var subject: string = "New Password";;
    

    var body: string = "New Password: " +this.newPassword;;
    

    var basicEmailInfo: BasicEmailInfo = new AdminEmailInfo(subject, body) as BasicEmailInfo;;
    

    var emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);;
    

    var userEmailEventHandler: UserEmailEventHandler = UserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.NEWPASSWORD, this.userInterface)!;;
    
userEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.NEWPASSWORD, emailInfo);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "notifyUser", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



