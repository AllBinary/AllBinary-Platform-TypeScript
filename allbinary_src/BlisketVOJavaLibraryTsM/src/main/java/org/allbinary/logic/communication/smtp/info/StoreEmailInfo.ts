
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

    
import { StoreFrontInterface } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { EmailServerConfigurationInterface } from "../../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class StoreEmailInfo extends BasicEmailInfo {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private storeFrontInterface: StoreFrontInterface
public constructor (storeFrontInterface: StoreFrontInterface, subject: string, textBody: string)                        

                            : super(subject, textBody){

            super();
            var storeFrontInterface = storeFrontInterface
var subject = subject
var textBody = textBody


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)

                                    }
                                
this.storeFrontInterface= storeFrontInterface
this.init()
}


                //@Throws(Error::class)
            
    init(){

    var contextConfigurationInterface: ContextConfigurationInterface = storeFrontInterface!.getContextConfigurationInterface()!;
        
        


    var emailServerConfigurationInterface: EmailServerConfigurationInterface = contextConfigurationInterface!.getEmailServerConfigurationInterface()!;
        
        

this.setEmailServerConfigurationInterface(emailServerConfigurationInterface)
}


}
                
            

