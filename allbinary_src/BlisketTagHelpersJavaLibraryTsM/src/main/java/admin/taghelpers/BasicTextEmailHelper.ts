
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
        
import { HashMap } from '../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { UserEmailEventNameData } from '../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      //not GWT import const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
import { UserEmailEventHandler } from '../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js';
      //not GWT import const UserEmailEventHandler = globalThis.org.allbinary.logic.communication.smtp.event.handler.UserEmailEventHandler;

      
import { AdminUserEmailEventHandlerSingletons } from '../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js';
      //not GWT import const AdminUserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.AdminUserEmailEventHandlerSingletons;

      
import { AdminEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js';
      //not GWT import const AdminEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.AdminEmailInfo;

      
import { BasicEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
      //not GWT import const BasicEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.BasicEmailInfo;

      
import { EmailInfo } from '../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
      //not GWT import const EmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.EmailInfo;

      
import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      //not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
















                                        
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



