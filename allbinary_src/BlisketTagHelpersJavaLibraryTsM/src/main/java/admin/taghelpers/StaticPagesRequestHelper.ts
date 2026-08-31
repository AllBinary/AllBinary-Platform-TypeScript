
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

      
import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { AbContext } from '../../org/allbinary/business/context/AbContext.js';
      //not GWT import const AbContext = globalThis.org.allbinary.business.context.AbContext;

      
import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { StoreFrontFactory } from '../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { URLGLOBALS } from '../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { AcceptableResponseGenerator } from '../../org/allbinary/logic/communication/http/AcceptableResponseGenerator.js';
      //not GWT import const AcceptableResponseGenerator = globalThis.org.allbinary.logic.communication.http.AcceptableResponseGenerator;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { UserEmailEventNameData } from '../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      //not GWT import const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
import { UserEmailEventHandler } from '../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js';
      //not GWT import const UserEmailEventHandler = globalThis.org.allbinary.logic.communication.smtp.event.handler.UserEmailEventHandler;

      
import { AdminUserEmailEventHandlerSingletons } from '../../org/allbinary/logic/communication/smtp/event/handler/factory/AdminUserEmailEventHandlerSingletons.js';
      //not GWT import const AdminUserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.AdminUserEmailEventHandlerSingletons;

      
import { StoreAdminUserEmailEventHandlerSingletons } from '../../org/allbinary/logic/communication/smtp/event/handler/factory/StoreAdminUserEmailEventHandlerSingletons.js';
      //not GWT import const StoreAdminUserEmailEventHandlerSingletons = globalThis.org.allbinary.logic.communication.smtp.event.handler.factory.StoreAdminUserEmailEventHandlerSingletons;

      
import { AdminEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js';
      //not GWT import const AdminEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.AdminEmailInfo;

      
import { BasicEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
      //not GWT import const BasicEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.BasicEmailInfo;

      
import { EmailInfo } from '../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
      //not GWT import const EmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.EmailInfo;

      
import { StoreEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/StoreEmailInfo.js';
      //not GWT import const StoreEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.StoreEmailInfo;

      
import { SearchParams } from '../../org/allbinary/logic/control/search/SearchParams.js';
      //not GWT import const SearchParams = globalThis.org.allbinary.logic.control.search.SearchParams;

      
import { SearchRequest } from '../../org/allbinary/logic/control/search/SearchRequest.js';
      //not GWT import const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
import { FileUtil } from '../../org/allbinary/logic/io/file/FileUtil.js';
      //not GWT import const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
import { AbPath } from '../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { AbPathData } from '../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not plain js import { StringUtil } from '../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      //not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
import { TransformInfoData } from '../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      //not GWT import const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
import { ProductListingFactory } from '../../views/admin/inventory/listings/ProductListingFactory.js';
      //not GWT import const ProductListingFactory = globalThis.views.admin.inventory.listings.ProductListingFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelperInterface } from './TagHelperInterface.js';
//not GWT import const TagHelperInterface = globalThis.admin.taghelpers.TagHelperInterface;

                
export class StaticPagesRequestHelper extends AbContext implements TagHelperInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private request: HttpServletRequest;

    private storeName: string;

    private searchParams: SearchParams;

    private xslFile: string;

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){
            super(propertiesHashMap, pageContext);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.request= pageContext!.getRequest() as HttpServletRequest;
    
this.xslFile= propertiesHashMap!.get(TransformInfoData.getInstance()!.TEMPLATEFILENAME) as string;
    
this.getFormData();
    
}


    getFormData(){
this.storeName= this.request.getParameter(StoreFrontData.getInstance()!.NAME);
    
this.searchParams= new SearchParams(this.request);
    
}


                //@Throws(Exception.constructor)
            
    email(){

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Generated Static Pages Notification Email", this, "email");
    

                                    }
                                

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.storeName)!;;
    

    var adminEmailSubject: string = "Generated Static Pages Email Notification";;
    

    var adminEmailTextBody: string = "Generated static pages for store: " +this.storeName;;
    

    var adminBasicEmailInfo: BasicEmailInfo = new AdminEmailInfo(adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;;
    

    var storeAdminBasicEmailInfo: BasicEmailInfo = new StoreEmailInfo(storeFrontInterface, adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;;
    

    var storeAdminEmailInfo: EmailInfo = new EmailInfo(storeAdminBasicEmailInfo);;
    

    var adminEmailInfo: EmailInfo = new EmailInfo(adminBasicEmailInfo);;
    

    var adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.STOREGENERATINGSTATICPAGES)!;;
    

    var storeAdminUserEmailEventHandler: UserEmailEventHandler = StoreAdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(UserEmailEventNameData.STOREGENERATINGSTATICPAGES, this.abeClientInformation, storeFrontInterface)!;;
    
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
            
    var contentType: string = AcceptableResponseGenerator.getInstance()!.get(this.request)!;;
    

    var searchRequest: SearchRequest = new SearchRequest(
                            null, this.searchParams, this.xslFile, contentType, this.getPropertiesHashMap(), this.getPageContext());;
    

    var success: string = ProductListingFactory.getInstance(searchRequest)!.generateAll(this.storeName)!;;
    
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

    var error: string = "Failed to generate staticpages table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generateStaticPages()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public makePublic(): string{

        try {
            
    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.storeName)!;;
    

    var fromAbPath: AbPath = new AbPath(storeFrontInterface!.getTestHtmlPath() +storeFrontInterface!.getStaticPath(), StringUtil.getInstance()!.EMPTY_STRING);;
    

    var toAbPath: AbPath = new AbPath(URLGLOBALS.getWebappPath() +storeFrontInterface!.getName() +AbPathData.getInstance()!.SEPARATOR +storeFrontInterface!.getStaticPath(), StringUtil.getInstance()!.EMPTY_STRING);;
    
FileUtil.getInstance()!.copy(fromAbPath, toAbPath);
    

    var success: string = "Made Public";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "makePublic()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to makePublic";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "makePublic()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



