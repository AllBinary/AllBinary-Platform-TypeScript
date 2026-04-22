
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

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { AbContext } from "../../org/allbinary/business/context/AbContext.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { URLGLOBALS } from "../../org/allbinary/globals/URLGLOBALS.js";

    
import { AcceptableResponseGenerator } from "../../org/allbinary/logic/communication/http/AcceptableResponseGenerator.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { UserEmailEventNameData } from "../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js";

    
import { UserEmailEventHandler } from "../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js";

    
import { AdminUserEmailEventHandlerSingletons } from "../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js";

    
import { StoreAdminUserEmailEventHandlerSingletons } from "../../org/allbinary/logic/communication/smtp/event/handler/factory/StoreAdminUserEmailEventHandlerSingletons.js";

    
import { AdminEmailInfo } from "../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js";

    
import { BasicEmailInfo } from "../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js";

    
import { EmailInfo } from "../../org/allbinary/logic/communication/smtp/info/EmailInfo.js";

    
import { StoreEmailInfo } from "../../org/allbinary/logic/communication/smtp/info/StoreEmailInfo.js";

    
import { SearchParams } from "../../org/allbinary/logic/control/search/SearchParams.js";

    
import { SearchRequest } from "../../org/allbinary/logic/control/search/SearchRequest.js";

    
import { FileUtil } from "../../org/allbinary/logic/io/file/FileUtil.js";

    
import { AbPath } from "../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../org/allbinary/logic/io/path/AbPathData.js";

    
import { AbeClientInformationInterface } from "../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { TransformInfoData } from "../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { ProductListingFactory } from "../../views/admin/inventory/listings/ProductListingFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TagHelperInterface } from "./TagHelperInterface.js";

export class StaticPagesRequestHelper extends AbContext implements TagHelperInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private request: HttpServletRequest

    private storeName: string

    private searchParams: SearchParams

    private xslFile: string
public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){
            super(propertiesHashMap, pageContext);
                    var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    
this.request= pageContext!.getRequest();

                         as HttpServletRequest;
    
this.xslFile= propertiesHashMap!.get(TransformInfoData.getInstance()!.TEMPLATEFILENAME);

                         as String;
    
this.getFormData();
    
}


    getFormData(){
this.storeName= this.request.getParameter(StoreFrontData.getInstance()!.NAME);
    
this.searchParams= new SearchParams(this.request);
    
}


                //@Throws(Error::class)
            
    email(){

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Generated Static Pages Notification Email", this, "email");
    

                                    }
                                

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.storeName)!;
        
        
;
    

    var adminEmailSubject: string = "Generated Static Pages Email Notification";
        
        
;
    

    var adminEmailTextBody: string = "Generated static pages for store: " +this.storeName;
        
        
;
    

    var adminBasicEmailInfo: BasicEmailInfo = new AdminEmailInfo(adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;
        
        
;
    

    var storeAdminBasicEmailInfo: BasicEmailInfo = new StoreEmailInfo(storeFrontInterface, adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;
        
        
;
    

    var storeAdminEmailInfo: EmailInfo = new EmailInfo(storeAdminBasicEmailInfo);
        
        
;
    

    var adminEmailInfo: EmailInfo = new EmailInfo(adminBasicEmailInfo);
        
        
;
    

    var adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.STOREGENERATINGSTATICPAGES)!;
        
        
;
    

    var storeAdminUserEmailEventHandler: UserEmailEventHandler = StoreAdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(UserEmailEventNameData.STOREGENERATINGSTATICPAGES, this.abeClientInformation, storeFrontInterface)!;
        
        
;
    
storeAdminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.STOREGENERATINGSTATICPAGES, storeAdminEmailInfo);
    
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.STOREGENERATINGSTATICPAGES, adminEmailInfo);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "email", e);
    

                                    }
                                
}

}


    public generateStaticPages(): string{

        try {
            
    var contentType: string = AcceptableResponseGenerator.getInstance()!.get(this.request)!;
        
        
;
    

    var searchRequest: SearchRequest = new SearchRequest(
                            null, this.searchParams, xslFile, contentType, this.getPropertiesHashMap(), this.getPageContext());
        
        
;
    

    var success: string = ProductListingFactory.getInstance(searchRequest)!.generateAll(this.storeName)!;
        
        
;
    
this.email();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "generateStaticPages()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to generate staticpages table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "generateStaticPages()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public makePublic(): string{

        try {
            
    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.storeName)!;
        
        
;
    

    var fromAbPath: AbPath = new AbPath(storeFrontInterface!.getTestHtmlPath() +storeFrontInterface!.getStaticPath());
        
        
;
    

    var toAbPath: AbPath = new AbPath(URLGLOBALS.getWebappPath() +storeFrontInterface!.getName() +AbPathData.getInstance()!.SEPARATOR +storeFrontInterface!.getStaticPath());
        
        
;
    
FileUtil.getInstance()!.copy(fromAbPath, toAbPath);
    

    var success: string = "Made Public";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "makePublic()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to makePublic";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "makePublic()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

