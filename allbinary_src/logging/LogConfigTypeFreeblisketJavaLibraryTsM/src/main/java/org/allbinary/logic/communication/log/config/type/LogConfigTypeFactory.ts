
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { PreLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LogConfigTypeFactory
            extends Object
         {
        

    private static readonly instance: LogConfigTypeFactory = new LogConfigTypeFactory();
        
        

    public static getInstance(): LogConfigTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly NO_DESCRIPTION: string = "No Description";
        
        

    public readonly AUTHENTICATION: LogConfigType = new LogConfigType("Authentication", NO_DESCRIPTION);
        
        

    public readonly AUTHENTICATIONERROR: LogConfigType = new LogConfigType("Authentication Error", NO_DESCRIPTION);
        
        

    public readonly CATEGORY: LogConfigType = new LogConfigType("Category", NO_DESCRIPTION);
        
        

    public readonly CATEGORYERROR: LogConfigType = new LogConfigType("Category Error", NO_DESCRIPTION);
        
        

    public readonly CRYPT: LogConfigType = new LogConfigType("Crypt", NO_DESCRIPTION);
        
        

    public readonly CRYPTERROR: LogConfigType = new LogConfigType("Crypt Error", NO_DESCRIPTION);
        
        

    public readonly EMAILLOGGING: LogConfigType = new LogConfigType("Email", NO_DESCRIPTION);
        
        

    public readonly EMAILLOGGINGERROR: LogConfigType = new LogConfigType("Email Error", NO_DESCRIPTION);
        
        

    public readonly ENTITYFACTORYERROR: LogConfigType = new LogConfigType("Entity Factory Error", NO_DESCRIPTION);
        
        

    public readonly NETBEANS_MODULE: LogConfigType = new LogConfigType("NetBeans Module", NO_DESCRIPTION);
        
        

    public readonly NETBEANS_MODULE_ERROR: LogConfigType = new LogConfigType("NetBeans Module Error", NO_DESCRIPTION);
        
        

    public readonly FACTORYERROR: LogConfigType = new LogConfigType("General Factory Error", NO_DESCRIPTION);
        
        

    public readonly FILE: LogConfigType = new LogConfigType("File", NO_DESCRIPTION);
        
        

    public readonly FILEERROR: LogConfigType = new LogConfigType("File Error", NO_DESCRIPTION);
        
        

    public readonly HTTP: LogConfigType = new LogConfigType("HTTP", NO_DESCRIPTION);
        
        

    public readonly HTTPERROR: LogConfigType = new LogConfigType("HTTP Error", NO_DESCRIPTION);
        
        

    public readonly HTTPREQUEST: LogConfigType = new LogConfigType("Http Request", NO_DESCRIPTION);
        
        

    public readonly HTTPREQUESTERROR: LogConfigType = new LogConfigType("Http Request Error", NO_DESCRIPTION);
        
        

    public readonly IDLOGGING: LogConfigType = new LogConfigType("ID Logging", NO_DESCRIPTION);
        
        

    public readonly JSPEXTRAOUTPUT: LogConfigType = new LogConfigType("JSP Extra Output", NO_DESCRIPTION);
        
        

    public readonly JSPTAGEXTRAOUTPUT: LogConfigType = new LogConfigType("JSP Tag Extra Output", NO_DESCRIPTION);
        
        

    public readonly JSPTAG: LogConfigType = new LogConfigType("JSP Tag", NO_DESCRIPTION);
        
        

    public readonly JSPTAGERROR: LogConfigType = new LogConfigType("JSP Tag Error", NO_DESCRIPTION);
        
        

    public readonly LICENSING: LogConfigType = new LogConfigType("Licensing", NO_DESCRIPTION);
        
        

    public readonly LICENSINGERROR: LogConfigType = new LogConfigType("Licensing Error", NO_DESCRIPTION);
        
        

    public readonly LOADER: LogConfigType = new LogConfigType("Loader", NO_DESCRIPTION);
        
        

    public readonly LOADERERROR: LogConfigType = new LogConfigType("Loader Error", NO_DESCRIPTION);
        
        

    public readonly OS: LogConfigType = new LogConfigType("OS", NO_DESCRIPTION);
        
        

    public readonly OSERROR: LogConfigType = new LogConfigType("OS Error", NO_DESCRIPTION);
        
        

    public readonly PAYMENT: LogConfigType = new LogConfigType("Payment", NO_DESCRIPTION);
        
        

    public readonly PAYMENTERROR: LogConfigType = new LogConfigType("Payment Error", NO_DESCRIPTION);
        
        

    public readonly PRELOADER: LogConfigType = new LogConfigType("PreLoader", NO_DESCRIPTION);
        
        

    public readonly PRELOADERERROR: LogConfigType = new LogConfigType("PreLoader Error", NO_DESCRIPTION);
        
        

    public readonly PRODUCTSEARCHLOGGING: LogConfigType = new LogConfigType("Product Search Logging", NO_DESCRIPTION);
        
        

    public readonly PRODUCTSEARCHLOGGINGERROR: LogConfigType = new LogConfigType("Product Search Logging Error", NO_DESCRIPTION);
        
        

    public readonly SERVLET: LogConfigType = new LogConfigType("Servlet", NO_DESCRIPTION);
        
        

    public readonly SERVLETERROR: LogConfigType = new LogConfigType("Servlet Error", NO_DESCRIPTION);
        
        

    public readonly SHIPPINGERROR: LogConfigType = new LogConfigType("Shipping Error", NO_DESCRIPTION);
        
        

    public readonly SQLLOGGINGERROR: LogConfigType = new LogConfigType("SQL Error", NO_DESCRIPTION);
        
        

    public readonly SQLLOGGING: LogConfigType = new LogConfigType("SQL Logging", NO_DESCRIPTION);
        
        

    public readonly SQLTAGS: LogConfigType = new LogConfigType("SQL Tag Logging", NO_DESCRIPTION);
        
        

    public readonly SQLTAGSERROR: LogConfigType = new LogConfigType("SQL Tag Error", NO_DESCRIPTION);
        
        

    public readonly STYLE: LogConfigType = new LogConfigType("Style", NO_DESCRIPTION);
        
        

    public readonly STYLEERROR: LogConfigType = new LogConfigType("Style Error", NO_DESCRIPTION);
        
        

    public readonly TAGHELPER: LogConfigType = new LogConfigType("Tag Helper", NO_DESCRIPTION);
        
        

    public readonly TAGHELPERERROR: LogConfigType = new LogConfigType("Tag Helper Error", NO_DESCRIPTION);
        
        

    public readonly TAGHELPERFACTORY: LogConfigType = new LogConfigType("Tag Helper Factory", NO_DESCRIPTION);
        
        

    public readonly TAGHELPERFACTORYERROR: LogConfigType = new LogConfigType("Tag Helper Factory Error", NO_DESCRIPTION);
        
        

    public readonly TAX: LogConfigType = new LogConfigType("Tax", NO_DESCRIPTION);
        
        

    public readonly TAXERROR: LogConfigType = new LogConfigType("Tax Error", NO_DESCRIPTION);
        
        

    public readonly VALIDATION: LogConfigType = new LogConfigType("Validation", NO_DESCRIPTION);
        
        

    public readonly VALIDATIONERROR: LogConfigType = new LogConfigType("Validation Error", NO_DESCRIPTION);
        
        

    public readonly VIEW: LogConfigType = new LogConfigType("View", NO_DESCRIPTION);
        
        

    public readonly VIEWERROR: LogConfigType = new LogConfigType("View Error", NO_DESCRIPTION);
        
        

    public readonly VIEWFACTORYERROR: LogConfigType = new LogConfigType("View Factory Error", NO_DESCRIPTION);
        
        

    public readonly WORKFLOW: LogConfigType = new LogConfigType("Workflow", NO_DESCRIPTION);
        
        

    public readonly WORKFLOWERROR: LogConfigType = new LogConfigType("Workflow Error", NO_DESCRIPTION);
        
        

    public readonly XMLLOGGING: LogConfigType = new LogConfigType("XML Logging", NO_DESCRIPTION);
        
        

    public readonly XMLLOGGINGERROR: LogConfigType = new LogConfigType("XML Logging Error", NO_DESCRIPTION);
        
        

    public readonly XSLLOGGING: LogConfigType = new LogConfigType("XSL Logging", NO_DESCRIPTION);
        
        

    public readonly XSLLOGGINGERROR: LogConfigType = new LogConfigType("XSL Logging Error", NO_DESCRIPTION);
        
        

    public readonly REPLACE: LogConfigType = new LogConfigType("Replace", NO_DESCRIPTION);
        
        

    public readonly REPLACE_INFO: LogConfigType = new LogConfigType("Replace Info", NO_DESCRIPTION);
        
        

    public readonly REPLACEERROR: LogConfigType = new LogConfigType("Replace Error", NO_DESCRIPTION);
        
        

    public readonly SQLLOGGINGPOOL: LogConfigType = new LogConfigType("SQL Pool", NO_DESCRIPTION);
        
        

    public readonly SQLLOGGINGPOOLERROR: LogConfigType = new LogConfigType("SQL Pool Error", NO_DESCRIPTION);
        
        

    public readonly STATICPAGEGENERATIONLOGGING: LogConfigType = new LogConfigType("Static Page Generation Logging", NO_DESCRIPTION);
        
        

    public readonly STATICPAGEGENERATIONLOGGINGERROR: LogConfigType = new LogConfigType("Static Page Generation Logging Error", NO_DESCRIPTION);
        
        
private constructor (){

            super();
            PreLogUtil.put("FreeBlisket", this, CommonStrings.getInstance()!.CONSTRUCTOR);
    
}


}
                
            

