
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
        
            import { Integer } from '../../java/lang/Integer.js';
        
//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { StoreFront } from '../../org/allbinary/business/context/modules/storefront/StoreFront.js';
      const StoreFront = globalThis.org.allbinary.business.context.modules.storefront.StoreFront;

      
//not game specific package import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { StoreFrontFactory } from '../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { Portion } from '../../org/allbinary/business/installer/Portion.js';
      const Portion = globalThis.org.allbinary.business.installer.Portion;

      
//not game specific package import { UserInterface } from '../../org/allbinary/business/user/UserInterface.js';
      const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
//not game specific package import { QuoteRequest } from '../../org/allbinary/business/user/quoterequest/QuoteRequest.js';
      const QuoteRequest = globalThis.org.allbinary.business.user.quoterequest.QuoteRequest;

      
//not game specific package import { UserEntityFactory } from '../../org/allbinary/data/tables/user/UserEntityFactory.js';
      const UserEntityFactory = globalThis.org.allbinary.data.tables.user.UserEntityFactory;

      
//not game specific package import { QuoteRequestEntity } from '../../org/allbinary/data/tables/user/quoterequest/QuoteRequestEntity.js';
      const QuoteRequestEntity = globalThis.org.allbinary.data.tables.user.quoterequest.QuoteRequestEntity;

      
//not game specific package import { QuoteRequestEntityFactory } from '../../org/allbinary/data/tables/user/quoterequest/QuoteRequestEntityFactory.js';
      const QuoteRequestEntityFactory = globalThis.org.allbinary.data.tables.user.quoterequest.QuoteRequestEntityFactory;

      
//not game specific package import { WeblisketSession } from '../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not game specific package import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { UserEmailEventNameData } from '../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
//not game specific package import { UserEmailEventHandler } from '../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js';
      const UserEmailEventHandler = globalThis.org.allbinary.logic.communication.smtp.event.handler.UserEmailEventHandler;

      
//not game specific package import { AdminUserEmailEventHandlerSingletons } from '../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js';
      const AdminUserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.AdminUserEmailEventHandlerSingletons;

      
//not game specific package import { StoreAdminUserEmailEventHandlerSingletons } from '../../org/allbinary/logic/communication/smtp/event/handler/factory/StoreAdminUserEmailEventHandlerSingletons.js';
      const StoreAdminUserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.StoreAdminUserEmailEventHandlerSingletons;

      
//not game specific package import { UserEmailEventHandlerSingletons } from '../../org/allbinary/logic/communication/smtp/event/handler/factory/UserEmailEventHandlerSingletons.js';
      const UserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.UserEmailEventHandlerSingletons;

      
//not game specific package import { BasicEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
      const BasicEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.BasicEmailInfo;

      
//not game specific package import { EmailInfo } from '../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
      const EmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.EmailInfo;

      
//not game specific package import { StoreEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/StoreEmailInfo.js';
      const StoreEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.StoreEmailInfo;

      
//not game specific package import { AbSqlTableUtil } from '../../org/allbinary/logic/communication/sql/AbSqlTableUtil.js';
      const AbSqlTableUtil = globalThis.org.allbinary.logic.communication.sql.AbSqlTableUtil;

      
//not game specific package import { StringMaker } from '../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicTable } from './BasicTable.js';

export class QuoteHelper extends BasicTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private readonly weblisketSession: WeblisketSession;

    private readonly storeFrontInterface: StoreFrontInterface;

    private readonly portion: Portion;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
    var storeName: string = hashMap!.get(StoreFrontData.getInstance()!.NAME) as string;;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    

                                    }
                                
                        else {
                            this.storeFrontInterface= new StoreFront();
    

                        }
                            
this.weblisketSession= new WeblisketSession(hashMap, pageContext);
    
this.portion= new Portion(hashMap);
    
}


                //@Throws(Exception.constructor)
            
    emailUser(quoteRequest: QuoteRequest){

    var user: UserInterface = UserEntityFactory.getInstance()!.getUser(quoteRequest!.getUserName())!;;
    

    var userEmailSubject: string = "Quote Request Receipt";;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("This is just a verification email. ");
    
stringBuffer!.append("We usually respond to quote request within 24 hours.");
    
stringBuffer!.append("\n\nThank You For Your Business.");
    

    var userEmailTextBody: string = stringBuffer!.toString()!;;
    

    var basicEmailInfo: BasicEmailInfo = new StoreEmailInfo(this.storeFrontInterface, userEmailSubject, userEmailTextBody) as BasicEmailInfo;;
    

    var emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);;
    

    var userEmailEventHandler: UserEmailEventHandler = UserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.QUOTEREQUEST, user)!;;
    
userEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.QUOTEREQUEST, emailInfo);
    
}


                //@Throws(Exception.constructor)
            
    emailAdmins(quoteRequest: QuoteRequest){

    var adminEmailSubject: string = "Quote Request";;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("\nUserName: ");
    
stringBuffer!.append(quoteRequest!.getUserName());
    
stringBuffer!.append("\nProject Info: \n");
    
stringBuffer!.append(quoteRequest!.getProjectInfo());
    
stringBuffer!.append("\nUser Comments: \n");
    
stringBuffer!.append(quoteRequest!.getUserComments());
    
stringBuffer!.append("\nBudget: \n");
    
stringBuffer!.append(quoteRequest!.getBudget());
    
stringBuffer!.append("\nTime Frame: \n");
    
stringBuffer!.append(quoteRequest!.getTimeFrame());
    
stringBuffer!.append("\nComments: \n");
    
stringBuffer!.append(quoteRequest!.getComments());
    

    var adminEmailTextBody: string = stringBuffer!.toString()!;;
    

    var basicEmailInfo: BasicEmailInfo = new StoreEmailInfo(this.storeFrontInterface, adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;;
    

    var emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);;
    

    var storeAdminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.QUOTEREQUEST)!;;
    

    var adminUserEmailEventHandler: UserEmailEventHandler = StoreAdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(UserEmailEventNameData.QUOTEREQUEST, this.abeClientInformation, this.storeFrontInterface)!;;
    
storeAdminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.QUOTEREQUEST, emailInfo);
    
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.QUOTEREQUEST, emailInfo);
    
}


                //@Throws(Exception.constructor)
            
    public email(): string{

        try {
            
    var quoteRequestEntity: QuoteRequestEntity = QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!;;
    

    var userName: string = this.weblisketSession!.getUserName()!;;
    

    var vector: Vector = quoteRequestEntity!.getIds(userName)!;;
    

    var id: number = 0;;
    

    var size: number = vector.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var nextId: number = (get as Integer).intValue()!;;
    

                        if(id < nextId)
                        
                                    {
                                    id= nextId;
    

                                    }
                                
}


    var quoteRequest: QuoteRequest = quoteRequestEntity!.get(userName, id)!;;
    

                        if(quoteRequest != 
                                    null
                                )
                        
                                    {
                                    this.emailUser(quoteRequest);
    
this.emailAdmins(quoteRequest);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Thank You For Your Business.<p/>";
    

                                    }
                                
                        else {
                            


                            throw new Exception("No Quote Request");
                    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "email", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Thank You For Your Business.<p>";
    
}

}


    public drop(): string{

        try {
            
    var success: string = QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!.dropTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, this.commonStrings!.DROP);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to drop QuoteRequest table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.DROP, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public create(): string{

        try {
            
    var success: string = QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!.createTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "create()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to create new QuoteRequest table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "create()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public restore(): string{

        try {
            
    var success: string = "Restore Successful";;
    

    var result: string = AbSqlTableUtil.getInstance()!.restoreTable(QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance(), portion)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "restore()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to restore backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "restore()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public backup(): string{

        try {
            
    var success: string = "Restore Successful";;
    

    var result: string = AbSqlTableUtil.getInstance()!.backupTable(QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "backup()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to make backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

