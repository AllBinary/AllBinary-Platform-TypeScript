
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
//not GWT import const HashMap

import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { AbContext } from '../../org/allbinary/business/context/AbContext.js';
//not GWT import const AbContext

import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData

import { StoreFrontFactory } from '../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { URLGLOBALS } from '../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

import { AcceptableResponseGenerator } from '../../org/allbinary/logic/communication/http/AcceptableResponseGenerator.js';
//not GWT import const AcceptableResponseGenerator

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

import { AdminEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/AdminEmailInfo.js';
//not GWT import const AdminEmailInfo

import { BasicEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
//not GWT import const BasicEmailInfo

import { EmailInfo } from '../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
//not GWT import const EmailInfo

import { StoreEmailInfo } from '../../org/allbinary/logic/communication/smtp/info/StoreEmailInfo.js';
//not GWT import const StoreEmailInfo

import { SearchParams } from '../../org/allbinary/logic/control/search/SearchParams.js';
//not GWT import const SearchParams

import { SearchRequest } from '../../org/allbinary/logic/control/search/SearchRequest.js';
//not GWT import const SearchRequest

import { FileUtil } from '../../org/allbinary/logic/io/file/FileUtil.js';
//not GWT import const FileUtil

import { AbPath } from '../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
//not GWT import const ServiceClientInformationInterfaceFactory

import { TransformInfoData } from '../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
//not GWT import const TransformInfoData

import { ProductListingFactory } from '../../views/admin/inventory/listings/ProductListingFactory.js';
//not GWT import const ProductListingFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelperInterface } from './TagHelperInterface.js';
//sameFolderImports - not GWT import - same folder const TagHelperInterface

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
                                

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.storeName)!;;
    

    let adminEmailSubject: string = "Generated Static Pages Email Notification";;
    

    let adminEmailTextBody: string = "Generated static pages for store: " +this.storeName;;
    

    let adminBasicEmailInfo: BasicEmailInfo = new AdminEmailInfo(adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;;
    

    let storeAdminBasicEmailInfo: BasicEmailInfo = new StoreEmailInfo(storeFrontInterface, adminEmailSubject, adminEmailTextBody) as BasicEmailInfo;;
    

    let storeAdminEmailInfo: EmailInfo = new EmailInfo(storeAdminBasicEmailInfo);;
    

    let adminEmailInfo: EmailInfo = new EmailInfo(adminBasicEmailInfo);;
    

    let adminUserEmailEventHandler: UserEmailEventHandler = AdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(this.abeClientInformation, UserEmailEventNameData.STOREGENERATINGSTATICPAGES)!;;
    

    let storeAdminUserEmailEventHandler: UserEmailEventHandler = StoreAdminUserEmailEventHandlerSingletons.getInstance()!.getInstance(UserEmailEventNameData.STOREGENERATINGSTATICPAGES, this.abeClientInformation, storeFrontInterface)!;;
    
storeAdminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.STOREGENERATINGSTATICPAGES, storeAdminEmailInfo);
    
adminUserEmailEventHandler!.receiveEmailInfo(UserEmailEventNameData.STOREGENERATINGSTATICPAGES, adminEmailInfo);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "email", e);
    

                                    }
                                

 }
   }
 
}


    public generateStaticPages(): string{

 try { 
    let contentType: string = AcceptableResponseGenerator.getInstance()!.get(this.request)!;;
    

    let searchRequest: SearchRequest = new SearchRequest(
                            null, this.searchParams, this.xslFile, contentType, this.getPropertiesHashMap(), this.getPageContext());;
    

    let success: string = ProductListingFactory.getInstance(searchRequest)!.generateAll(this.storeName)!;;
    
this.email();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "generateStaticPages()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to generate staticpages table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generateStaticPages()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public makePublic(): string{

 try { 
    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.storeName)!;;
    

    let fromAbPath: AbPath = new AbPath(storeFrontInterface!.getTestHtmlPath() +storeFrontInterface!.getStaticPath(), StringUtil.getInstance()!.EMPTY_STRING);;
    

    let toAbPath: AbPath = new AbPath(URLGLOBALS.getWebappPath() +storeFrontInterface!.getName() +AbPathData.getInstance()!.SEPARATOR +storeFrontInterface!.getStaticPath(), StringUtil.getInstance()!.EMPTY_STRING);;
    
FileUtil.getInstance()!.copy(fromAbPath, toAbPath);
    

    let success: string = "Made Public";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "makePublic()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to makePublic";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "makePublic()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


}

