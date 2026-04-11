
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
        



import { StoreFrontFactory } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { UserInterface } from "../../../../../../../../org/allbinary/business/user/UserInterface.js";

    
import { OrderHistory } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js";

    
import { UserEntityFactory } from "../../../../../../../../org/allbinary/data/tables/user/UserEntityFactory.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { UserEmailEventNameData } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js";

    
import { UserEmailEventHandler } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js";

    
import { AdminUserEmailEventHandlerSingletons } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js";

    
import { StoreAdminUserEmailEventHandlerSingletons } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/StoreAdminUserEmailEventHandlerSingletons.js";

    
import { UserEmailEventHandlerSingletons } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/UserEmailEventHandlerSingletons.js";

    
import { AdminEmailInfo } from "../../../../../../../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js";

    
import { BasicEmailInfo } from "../../../../../../../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js";

    
import { EmailInfo } from "../../../../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js";

    
import { StoreEmailInfo } from "../../../../../../../../org/allbinary/logic/communication/smtp/info/StoreEmailInfo.js";

    
import { AbeClientInformationInterface } from "../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class OrderStatusEmail
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface

    private orderHistory: OrderHistory

    private storeFrontInterface: StoreFrontInterface

    private user: UserInterface
public constructor (abeClientInformation: AbeClientInformationInterface, orderHistory: OrderHistory){

            super();
                //var abeClientInformation = abeClientInformation
    //var orderHistory = orderHistory
this.abeClientInformation= abeClientInformation;
    
this.orderHistory= orderHistory;
    

    var storeName: string = orderHistory!.getStoreName()!;
        
        
;
    
this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    
this.user= UserEntityFactory.getInstance()!.getUser(orderHistory!.getUserName());
    
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
                                    logUtil!.put("Order Email", this, "emailStoreAdmin");
    

                                    }
                                

    var adminEmailSubject: string = "Order " +this.orderHistory!.getStatus() +" Attempt";
        
        
;
    

    var adminEmailTextBody: string = "Order attempt: " +this.orderHistory!.getId() +" Preprocessing by: " +user.getUserName();
        
        
;
    

    var adminBasicEmailInfo: BasicEmailInfo = new AdminEmailInfo(adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;
        
        
;
    

    var storeAdminBasicEmailInfo: BasicEmailInfo = new StoreEmailInfo(this.storeFrontInterface, adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;
        
        
;
    

    var storeAdminEmailInfo: EmailInfo = new EmailInfo(storeAdminBasicEmailInfo);
        
        
;
    

    var adminEmailInfo: EmailInfo = new EmailInfo(adminBasicEmailInfo);
        
        
;
    

    var userEmailEventNameData: UserEmailEventNameData = UserEmailEventNameData.getInstance(this.orderHistory!.getStatus())!;
        
        
;
    

    var adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, userEmailEventNameData)!;
        
        
;
    

    var storeAdminUserEmailEventHandler: UserEmailEventHandler = StoreAdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(userEmailEventNameData, this.abeClientInformation, this.storeFrontInterface)!;
        
        
;
    
storeAdminUserEmailEventHandler!.receiveEmailInfo(userEmailEventNameData, storeAdminEmailInfo);
    
adminUserEmailEventHandler!.receiveEmailInfo(userEmailEventNameData, adminEmailInfo);
    

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
                                

    var subject: string = "Order " +this.orderHistory!.getStatus() +" Attempt";
        
        
;
    

    var textBody: string = "Order attempt: " +this.orderHistory!.getId() +" Preprocessing by: " +user.getUserName();
        
        
;
    

    var basicEmailInfo: BasicEmailInfo = new StoreEmailInfo(this.storeFrontInterface, subject, textBody) as BasicEmailInfo;
        
        
;
    

    var emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);
        
        
;
    

    var userEmailEventNameData: UserEmailEventNameData = UserEmailEventNameData.getInstance(this.orderHistory!.getStatus())!;
        
        
;
    

    var userEmailEventHandler: UserEmailEventHandler = UserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, userEmailEventNameData, this.user)!;
        
        
;
    
userEmailEventHandler!.receiveEmailInfo(userEmailEventNameData, emailInfo);
    

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
                
            

