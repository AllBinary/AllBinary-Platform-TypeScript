
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

    
import { Vector } from "../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { StoreFront } from "../../org/allbinary/business/context/modules/storefront/StoreFront.js";

    
import { StoreFrontInterface } from "../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { Portion } from "../../org/allbinary/business/installer/Portion.js";

    
import { StoreFrontsEntityFactory } from "../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntityFactory.js";

    
import { WeblisketSession } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { UserEmailEventNameData } from "../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js";

    
import { UserEmailEventHandler } from "../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js";

    
import { AdminUserEmailEventHandlerSingletons } from "../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js";

    
import { StoreAdminUserEmailEventHandlerSingletons } from "../../org/allbinary/logic/communication/smtp/event/handler/factory/StoreAdminUserEmailEventHandlerSingletons.js";

    
import { AdminEmailInfo } from "../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js";

    
import { BasicEmailInfo } from "../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js";

    
import { EmailInfo } from "../../org/allbinary/logic/communication/smtp/info/EmailInfo.js";

    
import { StoreEmailInfo } from "../../org/allbinary/logic/communication/smtp/info/StoreEmailInfo.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    

export class StoreFrontsRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private readonly pageContext: PageContext

    private readonly request: HttpServletRequest

    private readonly weblisketSession: WeblisketSession

    private storeName: string

    private modifyingStoreFrontInterface: StoreFrontInterface

    private readonly portion: Portion
public constructor (hashMap: HashMap<Any, Any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.pageContext= pageContext
this.request= pageContext!.getRequest() as HttpServletRequest
this.weblisketSession= WeblisketSession(hashMap, pageContext)
this.portion= Portion(hashMap)
this.getFormData()
}


                //@Throws(Error::class)
            
    getFormData(){
this.storeName= this.weblisketSession!.getStoreName()
this.modifyingStoreFrontInterface= StoreFront(this.request) as StoreFrontInterface
}


    public update(): string{

        try {
            
    var success: string = "Updated Successfully";
        
        


    var hashMapData: HashMap<Any, Any> = this.modifyingStoreFrontInterface!.toHashMap()!;
        
        

StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!.update(hashMapData)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(success, this, "update()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to update storefronts table";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(Error::class)
            
    public sendStoreCreatedEmails(){

    var storeManagerEmailSubject: string = "Store Manager Nofification For Store: " +this.modifyingStoreFrontInterface!.getName();
        
        


    var adminEmailSubject: string = "Admin Notification For Store: " +this.modifyingStoreFrontInterface!.getName();
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Store Created: ")
stringBuffer!.append(this.modifyingStoreFrontInterface!.getName())
stringBuffer!.append("\n\n")
stringBuffer!.append("Click here for the Admin Interface:\n")
stringBuffer!.append(this.modifyingStoreFrontInterface!.getCurrentHomeHostName())
stringBuffer!.append("/admin/login.jsp\n\n")
stringBuffer!.append("Goto Your Store:\n")
stringBuffer!.append(this.modifyingStoreFrontInterface!.getCurrentHomeHostName())
stringBuffer!.append(this.modifyingStoreFrontInterface!.getName())
stringBuffer!.append("/index.jsp")
stringBuffer!.append("\n\n")
stringBuffer!.append("UserName: ")
stringBuffer!.append(this.weblisketSession!.getUserName())

    var adminEmailTextBody: string = stringBuffer!.toString()!;
        
        


    var adminBasicEmailInfo: BasicEmailInfo = AdminEmailInfo(adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;
        
        


    var storeAdminBasicEmailInfo: BasicEmailInfo = StoreEmailInfo(this.modifyingStoreFrontInterface, storeManagerEmailSubject, adminEmailTextBody) as BasicEmailInfo;
        
        


    var storeAdminEmailInfo: EmailInfo = new EmailInfo(storeAdminBasicEmailInfo);
        
        


    var adminEmailInfo: EmailInfo = new EmailInfo(adminBasicEmailInfo);
        
        


    var adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.STORECREATED)!;
        
        


    var storeAdminUserEmailEventHandler: UserEmailEventHandler = StoreAdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(UserEmailEventNameData.STORECREATED, this.abeClientInformation, this.modifyingStoreFrontInterface)!;
        
        

storeAdminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.STORECREATED, storeAdminEmailInfo)
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.STORECREATED, adminEmailInfo)
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public install(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Intall StoreFront Successfully: ")
stringBuffer!.appendint(this.portion.getCurrent()!.toInt())
stringBuffer!.append(" of ")
stringBuffer!.appendint(this.portion.getTotal()!.toInt())

    var success: string = stringBuffer!.toString()!;
        
        

this.modifyingStoreFrontInterface!.install(this.portion.getCurrent()!.toInt(), this.portion.getTotal()!.toInt())

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(success, this, "install()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to Install storefront";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "install()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public insert(): string{

        try {
            
    var success: string = "Added Successfully";
        
        


    var values: Vector = this.modifyingStoreFrontInterface!.toVector()!;
        
        

StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!.insert(values)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(success, this, "insert()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to add storefront";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "insert()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            
    var success: string = "Delete Successfully";
        
        

StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!.delete(this.storeName)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(success, this, "delete()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to delete storefronts table";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "delete()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

