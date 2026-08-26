
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
        



            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { StoreFrontFactory } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { UserInterface } from '../../../../../../../../org/allbinary/business/user/UserInterface.js';
      const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
//not game specific package import { OrderHistory } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
      const OrderHistory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistory;

      
//not game specific package import { UserEntityFactory } from '../../../../../../../../org/allbinary/data/tables/user/UserEntityFactory.js';
      const UserEntityFactory = globalThis.org.allbinary.data.tables.user.UserEntityFactory;

      
//not game specific package import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { UserEmailEventNameData } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
//not game specific package import { UserEmailEventHandler } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js';
      const UserEmailEventHandler = globalThis.org.allbinary.logic.communication.smtp.event.handler.UserEmailEventHandler;

      
//not game specific package import { AdminUserEmailEventHandlerSingletons } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js';
      const AdminUserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.AdminUserEmailEventHandlerSingletons;

      
//not game specific package import { StoreAdminUserEmailEventHandlerSingletons } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/StoreAdminUserEmailEventHandlerSingletons.js';
      const StoreAdminUserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.StoreAdminUserEmailEventHandlerSingletons;

      
//not game specific package import { UserEmailEventHandlerSingletons } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/factory/UserEmailEventHandlerSingletons.js';
      const UserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.UserEmailEventHandlerSingletons;

      
//not game specific package import { AdminEmailInfo } from '../../../../../../../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js';
      const AdminEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.AdminEmailInfo;

      
//not game specific package import { BasicEmailInfo } from '../../../../../../../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
      const BasicEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.BasicEmailInfo;

      
//not game specific package import { EmailInfo } from '../../../../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
      const EmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.EmailInfo;

      
//not game specific package import { StoreEmailInfo } from '../../../../../../../../org/allbinary/logic/communication/smtp/info/StoreEmailInfo.js';
      const StoreEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.StoreEmailInfo;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OrderStatusEmail
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface;

    private orderHistory: OrderHistory;

    private storeFrontInterface: StoreFrontInterface;

    private user: UserInterface;

public constructor (abeClientInformation: AbeClientInformationInterface, orderHistory: OrderHistory){

            super();
        this.abeClientInformation= abeClientInformation;
    
this.orderHistory= orderHistory;
    

    var storeName: string = orderHistory!.getStoreName()!;;
    
this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    
this.user= UserEntityFactory.getInstance()!.getUser(orderHistory!.getUserName());
    
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
                                    this.logUtil!.putF("Order Email", this, "emailStoreAdmin");
    

                                    }
                                

    var adminEmailSubject: string = "Order " +this.orderHistory!.getStatus() +" Attempt";;
    

    var adminEmailTextBody: string = "Order attempt: " +this.orderHistory!.getId() +" Preprocessing by: " +this.user.getUserName();;
    

    var adminBasicEmailInfo: BasicEmailInfo = new AdminEmailInfo(adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;;
    

    var storeAdminBasicEmailInfo: BasicEmailInfo = new StoreEmailInfo(this.storeFrontInterface, adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;;
    

    var storeAdminEmailInfo: EmailInfo = new EmailInfo(storeAdminBasicEmailInfo);;
    

    var adminEmailInfo: EmailInfo = new EmailInfo(adminBasicEmailInfo);;
    

    var userEmailEventNameData: UserEmailEventNameData = UserEmailEventNameData.getInstance(this.orderHistory!.getStatus())!;;
    

    var adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, userEmailEventNameData)!;;
    

    var storeAdminUserEmailEventHandler: UserEmailEventHandler = StoreAdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(userEmailEventNameData, this.abeClientInformation, this.storeFrontInterface)!;;
    
storeAdminUserEmailEventHandler!.receiveEmailInfo(userEmailEventNameData, storeAdminEmailInfo);
    
adminUserEmailEventHandler!.receiveEmailInfo(userEmailEventNameData, adminEmailInfo);
    

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
                                

    var subject: string = "Order " +this.orderHistory!.getStatus() +" Attempt";;
    

    var textBody: string = "Order attempt: " +this.orderHistory!.getId() +" Preprocessing by: " +this.user.getUserName();;
    

    var basicEmailInfo: BasicEmailInfo = new StoreEmailInfo(this.storeFrontInterface, subject, textBody) as BasicEmailInfo;;
    

    var emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);;
    

    var userEmailEventNameData: UserEmailEventNameData = UserEmailEventNameData.getInstance(this.orderHistory!.getStatus())!;;
    

    var userEmailEventHandler: UserEmailEventHandler = UserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, userEmailEventNameData, this.user)!;;
    
userEmailEventHandler!.receiveEmailInfo(userEmailEventNameData, emailInfo);
    

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
                
            

