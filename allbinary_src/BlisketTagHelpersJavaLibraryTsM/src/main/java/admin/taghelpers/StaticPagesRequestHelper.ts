
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
        
//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { AbContext } from '../../org/allbinary/business/context/AbContext.js';
      const AbContext = globalThis.org.allbinary.business.context.AbContext;

      
//not game specific package import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { StoreFrontFactory } from '../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { URLGLOBALS } from '../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { AcceptableResponseGenerator } from '../../org/allbinary/logic/communication/http/AcceptableResponseGenerator.js';
      const AcceptableResponseGenerator = globalThis.org.allbinary.logic.communication.http.AcceptableResponseGenerator;

      
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

      
//not game specific package import { AdminEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js';
      const AdminEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.AdminEmailInfo;

      
//not game specific package import { BasicEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
      const BasicEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.BasicEmailInfo;

      
//not game specific package import { EmailInfo } from '../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
      const EmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.EmailInfo;

      
//not game specific package import { StoreEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/StoreEmailInfo.js';
      const StoreEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.StoreEmailInfo;

      
//not game specific package import { SearchParams } from '../../org/allbinary/logic/control/search/SearchParams.js';
      const SearchParams = globalThis.org.allbinary.logic.control.search.SearchParams;

      
//not game specific package import { SearchRequest } from '../../org/allbinary/logic/control/search/SearchRequest.js';
      const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
//not game specific package import { FileUtil } from '../../org/allbinary/logic/io/file/FileUtil.js';
      const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
//not game specific package import { AbPath } from '../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { AbPathData } from '../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { StringUtil } from '../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
//not game specific package import { TransformInfoData } from '../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
//not game specific package import { ProductListingFactory } from '../../views/admin/inventory/listings/ProductListingFactory.js';
      const ProductListingFactory = globalThis.views.admin.inventory.listings.ProductListingFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelperInterface } from './TagHelperInterface.js';

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



