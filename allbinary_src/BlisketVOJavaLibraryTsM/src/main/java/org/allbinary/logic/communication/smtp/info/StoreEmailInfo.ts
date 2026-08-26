
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { ContextConfigurationInterface } from '../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterface.js';
      const ContextConfigurationInterface = globalThis.org.allbinary.business.context.configuration.ContextConfigurationInterface;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { EmailServerConfigurationInterface } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js';
      const EmailServerConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfigurationInterface;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicEmailInfo } from './BasicEmailInfo.js';

export class StoreEmailInfo extends BasicEmailInfo {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private storeFrontInterface: StoreFrontInterface;

public constructor (storeFrontInterface: StoreFrontInterface, subject: string, textBody: string){
            super(subject, textBody);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.storeFrontInterface= storeFrontInterface;
    
this.init();
    
}


                //@Throws(Exception.constructor)
            
    init(){

    var contextConfigurationInterface: ContextConfigurationInterface = this.storeFrontInterface!.getContextConfigurationInterface()!;;
    

    var emailServerConfigurationInterface: EmailServerConfigurationInterface = contextConfigurationInterface!.getEmailServerConfigurationInterface()!;;
    
this.setEmailServerConfigurationInterface(emailServerConfigurationInterface);
    
}


}
                
            

