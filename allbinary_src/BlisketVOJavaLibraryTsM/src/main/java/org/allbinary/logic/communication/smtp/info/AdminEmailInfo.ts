
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
        



import { ContextConfigurationInterface } from "../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterface.js";

    
import { AdminConfiguration } from "../../../../../../org/allbinary/business/user/modules/admin/configuration/AdminConfiguration.js";

    
import { AdminConfigurationInterface } from "../../../../../../org/allbinary/business/user/modules/admin/configuration/AdminConfigurationInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { EmailServerConfigurationInterface } from "../../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class AdminEmailInfo extends BasicEmailInfo {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (subject: string, textBody: string)                        

                            : super(subject, textBody){

            super();
            var subject = subject
var textBody = textBody


                            //For kotlin this is before the body of the constructor.
                    

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)

                                    }
                                
this.init()
}


                @Throws(Exception::class)
            
    init(){

    var adminConfigurationInterface: AdminConfigurationInterface = AdminConfiguration() as AdminConfigurationInterface;
        
        


    var contextConfigurationInterface: ContextConfigurationInterface = adminConfigurationInterface!.getContextConfigurationInterface()!;
        
        


    var emailServerConfigurationInterface: EmailServerConfigurationInterface = contextConfigurationInterface!.getEmailServerConfigurationInterface()!;
        
        

this.setEmailServerConfigurationInterface(emailServerConfigurationInterface)
}


}
                
            

