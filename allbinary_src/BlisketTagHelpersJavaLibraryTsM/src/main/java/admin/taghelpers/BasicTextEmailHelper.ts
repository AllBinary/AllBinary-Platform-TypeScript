
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
        



            import { Exception } from '../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { UserEmailEventNameData } from '../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
//not game specific package import { UserEmailEventHandler } from '../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js';
      const UserEmailEventHandler = globalThis.org.allbinary.logic.communication.smtp.event.handler.UserEmailEventHandler;

      
//not game specific package import { AdminUserEmailEventHandlerSingletons } from '../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js';
      const AdminUserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.AdminUserEmailEventHandlerSingletons;

      
//not game specific package import { AdminEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js';
      const AdminEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.AdminEmailInfo;

      
//not game specific package import { BasicEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
      const BasicEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.BasicEmailInfo;

      
//not game specific package import { EmailInfo } from '../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
      const EmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.EmailInfo;

      
//not game specific package import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelper } from './TagHelper.js';

export class BasicTextEmailHelper extends TagHelper {
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private hashMap: HashMap<any, any>;

    private pageContext: PageContext;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.pageContext= pageContext;
    
this.hashMap= hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public send(){

    var adminEmailSubject: string = this.hashMap!.get("Subject") as string;;
    

    var adminEmailTextBody: string = this.hashMap!.get("Body") as string;;
    

    var adminBasicEmailInfo: BasicEmailInfo = new AdminEmailInfo(adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;;
    

    var adminEmailInfo: EmailInfo = new EmailInfo(adminBasicEmailInfo);;
    

    var adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.INSTALLER)!;;
    
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.INSTALLER, adminEmailInfo);
    
}


}
                
            

