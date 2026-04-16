
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
        



            import { Integer } from "../../java/lang/Integer.js";
        
import { HashMap } from "../../java/util/HashMap.js";

    
import { Vector } from "../../java/util/Vector.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { StoreFront } from "../../org/allbinary/business/context/modules/storefront/StoreFront.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { Portion } from "../../org/allbinary/business/installer/Portion.js";

    
import { UserInterface } from "../../org/allbinary/business/user/UserInterface.js";

    
import { QuoteRequest } from "../../org/allbinary/business/user/quoterequest/QuoteRequest.js";

    
import { UserEntityFactory } from "../../org/allbinary/data/tables/user/UserEntityFactory.js";

    
import { QuoteRequestEntity } from "../../org/allbinary/data/tables/user/quoterequest/QuoteRequestEntity.js";

    
import { QuoteRequestEntityFactory } from "../../org/allbinary/data/tables/user/quoterequest/QuoteRequestEntityFactory.js";

    
import { WeblisketSession } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { UserEmailEventNameData } from "../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js";

    
import { UserEmailEventHandler } from "../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js";

    
import { AdminUserEmailEventHandlerSingletons } from "../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js";

    
import { StoreAdminUserEmailEventHandlerSingletons } from "../../org/allbinary/logic/communication/smtp/event/handler/factory/StoreAdminUserEmailEventHandlerSingletons.js";

    
import { UserEmailEventHandlerSingletons } from "../../org/allbinary/logic/communication/smtp/event/handler/factory/UserEmailEventHandlerSingletons.js";

    
import { BasicEmailInfo } from "../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js";

    
import { EmailInfo } from "../../org/allbinary/logic/communication/smtp/info/EmailInfo.js";

    
import { StoreEmailInfo } from "../../org/allbinary/logic/communication/smtp/info/StoreEmailInfo.js";

    
import { AbSqlTableUtil } from "../../org/allbinary/logic/communication/sql/AbSqlTableUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class QuoteHelper extends BasicTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private readonly weblisketSession: WeblisketSession

    private readonly storeFrontInterface: StoreFrontInterface

    private readonly portion: Portion
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext

    var storeName: string = hashMap!.get(StoreFrontData.getInstance()!.NAME);

                         as String;
        
        
;
    

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


                //@Throws(Error::class)
            
    emailUser(quoteRequest: QuoteRequest){
var quoteRequest = quoteRequest

    var user: UserInterface = UserEntityFactory.getInstance()!.getUser(quoteRequest!.getUserName())!;
        
        
;
    

    var userEmailSubject: string = "Quote Request Receipt";
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("This is just a verification email. ");
    
stringBuffer!.append("We usually respond to quote request within 24 hours.");
    
stringBuffer!.append("\n\nThank You For Your Business.");
    

    var userEmailTextBody: string = stringBuffer!.toString()!;
        
        
;
    

    var basicEmailInfo: BasicEmailInfo = new StoreEmailInfo(this.storeFrontInterface, userEmailSubject, userEmailTextBody) as BasicEmailInfo;
        
        
;
    

    var emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);
        
        
;
    

    var userEmailEventHandler: UserEmailEventHandler = UserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.QUOTEREQUEST, user)!;
        
        
;
    
userEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.QUOTEREQUEST, emailInfo);
    
}


                //@Throws(Error::class)
            
    emailAdmins(quoteRequest: QuoteRequest){
var quoteRequest = quoteRequest

    var adminEmailSubject: string = "Quote Request";
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
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
    

    var adminEmailTextBody: string = stringBuffer!.toString()!;
        
        
;
    

    var basicEmailInfo: BasicEmailInfo = new StoreEmailInfo(this.storeFrontInterface, adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;
        
        
;
    

    var emailInfo: EmailInfo = new EmailInfo(basicEmailInfo);
        
        
;
    

    var storeAdminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.QUOTEREQUEST)!;
        
        
;
    

    var adminUserEmailEventHandler: UserEmailEventHandler = StoreAdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(UserEmailEventNameData.QUOTEREQUEST, this.abeClientInformation, this.storeFrontInterface)!;
        
        
;
    
storeAdminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.QUOTEREQUEST, emailInfo);
    
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.QUOTEREQUEST, emailInfo);
    
}


                //@Throws(Error::class)
            
    public email(): string{

        try {
            
    var quoteRequestEntity: QuoteRequestEntity = QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!;
        
        
;
    

    var userName: string = this.weblisketSession!.getUserName()!;
        
        
;
    

    var vector: Vector = quoteRequestEntity!.getIds(userName)!;
        
        
;
    

    var id: number = 0;
        
        
;
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextId: number = get = vector.get(index);

                        get as Integer
get.
                    toInt()!;
        
        
;
    

                        if(id < nextId)
                        
                                    {
                                    id= nextId;
    

                                    }
                                
}


    var quoteRequest: QuoteRequest = quoteRequestEntity!.get(userName, id)!;
        
        
;
    

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
                            


                            throw new Error("No Quote Request")

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
            
    var success: string = QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!.dropTable()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, commonStrings!.DROP);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to drop QuoteRequest table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.DROP, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public create(): string{

        try {
            
    var success: string = QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!.createTable()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "create()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to create new QuoteRequest table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "create()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public restore(): string{

        try {
            
    var success: string = "Restore Successful";
        
        
;
    

    var result: string = AbSqlTableUtil.getInstance()!.restoreTable(QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance(), portion)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "restore()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to restore backup";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "restore()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public backup(): string{

        try {
            
    var success: string = "Restore Successful";
        
        
;
    

    var result: string = AbSqlTableUtil.getInstance()!.backupTable(QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance())!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "backup()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to make backup";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "backup()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

