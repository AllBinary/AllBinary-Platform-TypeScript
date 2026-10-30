
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
        
import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { StoreFront } from '../../org/allbinary/business/context/modules/storefront/StoreFront.js';
//not GWT import const StoreFront

import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData

import { StoreFrontFactory } from '../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { Portion } from '../../org/allbinary/business/installer/Portion.js';
//not GWT import const Portion

import { UserInterface } from '../../org/allbinary/business/user/UserInterface.js';
//not GWT import const UserInterface

import { QuoteRequest } from '../../org/allbinary/business/user/quoterequest/QuoteRequest.js';
//not GWT import const QuoteRequest

import { UserEntityFactory } from '../../org/allbinary/data/tables/user/UserEntityFactory.js';
//not GWT import const UserEntityFactory

import { QuoteRequestEntity } from '../../org/allbinary/data/tables/user/quoterequest/QuoteRequestEntity.js';
//not GWT import const QuoteRequestEntity

import { QuoteRequestEntityFactory } from '../../org/allbinary/data/tables/user/quoterequest/QuoteRequestEntityFactory.js';
//not GWT import const QuoteRequestEntityFactory

import { WeblisketSession } from '../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { UserEmailEventNameData } from '../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
//not GWT import const UserEmailEventNameData

import { UserEmailEventHandler } from '../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js';
//not GWT import const UserEmailEventHandler

import { AdminUserEmailEventHandlerSingletons } from '../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js';
//not GWT import const AdminUserEmailEventHandlerSingletons

import { StoreAdminUserEmailEventHandlerSingletons } from '../../org/allbinary/logic/communication/smtp/event/handler/factory/StoreAdminUserEmailEventHandlerSingletons.js';
//not GWT import const StoreAdminUserEmailEventHandlerSingletons

import { UserEmailEventHandlerSingletons } from '../../org/allbinary/logic/communication/smtp/event/handler/factory/UserEmailEventHandlerSingletons.js';
//not GWT import const UserEmailEventHandlerSingletons

import { BasicEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
//not GWT import const BasicEmailInfo

import { EmailInfo } from '../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
//not GWT import const EmailInfo

import { StoreEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/StoreEmailInfo.js';
//not GWT import const StoreEmailInfo

import { AbSqlTableUtil } from '../../org/allbinary/logic/communication/sql/AbSqlTableUtil.js';
//not GWT import const AbSqlTableUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
//not GWT import const ServiceClientInformationInterfaceFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicTable } from './BasicTable.js';
//not GWT import - same folder const BasicTable

export class QuoteHelper extends BasicTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private readonly weblisketSession: WeblisketSession;

    private readonly storeFrontInterface: StoreFrontInterface;

    private readonly portion: Portion;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
    let storeName: string = hashMap!.get(StoreFrontData.getInstance()!.NAME) as string;;
    

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

    let user: UserInterface = UserEntityFactory.getInstance()!.getUser(quoteRequest!.getUserName())!;;
    

    let userEmailSubject: string = "Quote Request Receipt";;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("This is just a verification email. ");
    
stringBuffer!.append("We usually respond to quote request within 24 hours.");
    
stringBuffer!.append("\n\nThank You For Your Business.");
    

    let userEmailTextBody: string = stringBuffer!.toString()!;;
    

    let basicEmailInfo: BasicEmailInfo = new StoreEmailInfo(this.storeFrontInterface, userEmailSubject, userEmailTextBody) as BasicEmailInfo;;
    

    let emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);;
    

    let userEmailEventHandler: UserEmailEventHandler = UserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.QUOTEREQUEST, user)!;;
    
userEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.QUOTEREQUEST, emailInfo);
    
}


                //@Throws(Exception.constructor)
            
    emailAdmins(quoteRequest: QuoteRequest){

    let adminEmailSubject: string = "Quote Request";;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
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
    

    let adminEmailTextBody: string = stringBuffer!.toString()!;;
    

    let basicEmailInfo: BasicEmailInfo = new StoreEmailInfo(this.storeFrontInterface, adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;;
    

    let emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);;
    

    let storeAdminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.QUOTEREQUEST)!;;
    

    let adminUserEmailEventHandler: UserEmailEventHandler = StoreAdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(UserEmailEventNameData.QUOTEREQUEST, this.abeClientInformation, this.storeFrontInterface)!;;
    
storeAdminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.QUOTEREQUEST, emailInfo);
    
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.QUOTEREQUEST, emailInfo);
    
}


                //@Throws(Exception.constructor)
            
    public email(): string{

 try { 
    let quoteRequestEntity: QuoteRequestEntity = QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!;;
    

    let userName: string = this.weblisketSession!.getUserName()!;;
    

    let vector: BasicArrayList = quoteRequestEntity!.getIds(userName)!;;
    

    let id: number = 0;;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let nextId: number = (get as Integer).intValue()!;;
    

                        if(id < nextId)
                        
                                    {
                                    id= nextId;
    

                                    }
                                
}


    let quoteRequest: QuoteRequest = quoteRequestEntity!.get(userName, id)!;;
    

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
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "email", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Thank You For Your Business.<p>";
    

 }
   }
 
}


    public drop(): string{

 try { 
    let success: string = QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!.dropTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, this.commonStrings!.DROP);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to drop QuoteRequest table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.DROP, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public create(): string{

 try { 
    let success: string = QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!.createTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "create()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to create new QuoteRequest table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "create()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public restore(): string{

 try { 
    let success: string = "Restore Successful";;
    

    let result: string = AbSqlTableUtil.getInstance()!.restoreTable(QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance(), portion)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "restore()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to restore backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "restore()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public backup(): string{

 try { 
    let success: string = "Restore Successful";;
    

    let result: string = AbSqlTableUtil.getInstance()!.backupTable(QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "backup()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to make backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


}

