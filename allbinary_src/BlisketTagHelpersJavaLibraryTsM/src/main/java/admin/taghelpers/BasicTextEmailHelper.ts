
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { UserEmailEventNameData } from "../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js";

    
import { UserEmailEventHandler } from "../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js";

    
import { AdminUserEmailEventHandlerSingletons } from "../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js";

    
import { AdminEmailInfo } from "../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js";

    
import { BasicEmailInfo } from "../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js";

    
import { EmailInfo } from "../../org/allbinary/logic/communication/smtp/info/EmailInfo.js";

    
import { AbeClientInformationInterface } from "../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    

export class BasicTextEmailHelper extends TagHelper {
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private hashMap: HashMap<any, any>

    private pageContext: PageContext
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.pageContext= pageContext;
    
this.hashMap= hashMap;
    
}


                //@Throws(Error::class)
            
    public send(){

    var adminEmailSubject: string = hashMap!.get("Subject");

                         as String;
        
        
;
    

    var adminEmailTextBody: string = hashMap!.get("Body");

                         as String;
        
        
;
    

    var adminBasicEmailInfo: BasicEmailInfo = new AdminEmailInfo(adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;
        
        
;
    

    var adminEmailInfo: EmailInfo = new EmailInfo(adminBasicEmailInfo);
        
        
;
    

    var adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.INSTALLER)!;
        
        
;
    
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.INSTALLER, adminEmailInfo);
    
}


}
                
            

