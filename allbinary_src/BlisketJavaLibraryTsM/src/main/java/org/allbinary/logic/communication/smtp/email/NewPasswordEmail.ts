
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
        



import { UserInterface } from "../../../../../../org/allbinary/business/user/UserInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { UserEmailEventNameData } from "../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js";

    
import { UserEmailEventHandler } from "../../../../../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js";

    
import { AdminUserEmailEventHandlerSingletons } from "../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js";

    
import { UserEmailEventHandlerSingletons } from "../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/UserEmailEventHandlerSingletons.js";

    
import { AdminEmailInfo } from "../../../../../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js";

    
import { BasicEmailInfo } from "../../../../../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js";

    
import { EmailInfo } from "../../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class NewPasswordEmail
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface

    private userInterface: UserInterface

    private newPassword: string
public constructor (abeClientInformation: AbeClientInformationInterface, userInterface: UserInterface, newPassword: string){

            super();
                //var abeClientInformation = abeClientInformation
    //var userInterface = userInterface
var newPassword = newPassword
this.abeClientInformation= abeClientInformation;
    
this.userInterface= userInterface;
    
this.newPassword= newPassword;
    
}


                //@Throws(Error::class)
            
    public process(){
this.notifyStoreAdmin();
    
this.notifyUser();
    
}


                //@Throws(Error::class)
            
    notifyStoreAdmin(){

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put("notifyStoreAdmin", this, "notifyStoreAdmin");
    

                                    }
                                

    var emailSubject: string = "New Password For User: " +this.userInterface!.getUserName();
        
        
;
    

    var emailBody: string = "New Password: " +this.newPassword;
        
        
;
    

    var basicEmailInfo: BasicEmailInfo = new AdminEmailInfo(emailSubject, emailBody) as BasicEmailInfo;
        
        
;
    

    var emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);
        
        
;
    

    var adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(abeClientInformation, UserEmailEventNameData.NEWPASSWORD)!;
        
        
;
    
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.NEWPASSWORD, emailInfo);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.EXCEPTION, this, "emailAdmin", e);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    notifyUser(){

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put("Email User", this, "notifyUser()");
    

                                    }
                                

    var subject: string = "New Password";
        
        
;
    

    var body: string = "New Password: " +newPassword;
        
        
;
    

    var basicEmailInfo: BasicEmailInfo = new AdminEmailInfo(subject, body) as BasicEmailInfo;
        
        
;
    

    var emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);
        
        
;
    

    var userEmailEventHandler: UserEmailEventHandler = UserEmailEventHandlerSingletons.getInstance()!.getInstance(abeClientInformation, UserEmailEventNameData.NEWPASSWORD, this.userInterface)!;
        
        
;
    
userEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.NEWPASSWORD, emailInfo);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.EXCEPTION, this, "notifyUser", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

