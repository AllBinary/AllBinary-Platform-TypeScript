
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
import { PreLogUtil } from '../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      
import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LogConfigType } from './LogConfigType.js';

export class LogConfigTypeFactory
            extends Object
         {
        

    private static readonly instance: LogConfigTypeFactory = new LogConfigTypeFactory();

    public static getInstance(): LogConfigTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogConfigTypeFactory.instance;
    
}


    private readonly NO_DESCRIPTION: string = "No Description";

    public readonly AUTHENTICATION: LogConfigType = new LogConfigType("Authentication", this.NO_DESCRIPTION);

    public readonly AUTHENTICATIONERROR: LogConfigType = new LogConfigType("Authentication Error", this.NO_DESCRIPTION);

    public readonly CATEGORY: LogConfigType = new LogConfigType("Category", this.NO_DESCRIPTION);

    public readonly CATEGORYERROR: LogConfigType = new LogConfigType("Category Error", this.NO_DESCRIPTION);

    public readonly CRYPT: LogConfigType = new LogConfigType("Crypt", this.NO_DESCRIPTION);

    public readonly CRYPTERROR: LogConfigType = new LogConfigType("Crypt Error", this.NO_DESCRIPTION);

    public readonly EMAILLOGGING: LogConfigType = new LogConfigType("Email", this.NO_DESCRIPTION);

    public readonly EMAILLOGGINGERROR: LogConfigType = new LogConfigType("Email Error", this.NO_DESCRIPTION);

    public readonly ENTITYFACTORYERROR: LogConfigType = new LogConfigType("Entity Factory Error", this.NO_DESCRIPTION);

    public readonly NETBEANS_MODULE: LogConfigType = new LogConfigType("NetBeans Module", this.NO_DESCRIPTION);

    public readonly NETBEANS_MODULE_ERROR: LogConfigType = new LogConfigType("NetBeans Module Error", this.NO_DESCRIPTION);

    public readonly FACTORYERROR: LogConfigType = new LogConfigType("General Factory Error", this.NO_DESCRIPTION);

    public readonly FILE: LogConfigType = new LogConfigType("File", this.NO_DESCRIPTION);

    public readonly FILEERROR: LogConfigType = new LogConfigType("File Error", this.NO_DESCRIPTION);

    public readonly HTTP: LogConfigType = new LogConfigType("HTTP", this.NO_DESCRIPTION);

    public readonly HTTPERROR: LogConfigType = new LogConfigType("HTTP Error", this.NO_DESCRIPTION);

    public readonly HTTPREQUEST: LogConfigType = new LogConfigType("Http Request", this.NO_DESCRIPTION);

    public readonly HTTPREQUESTERROR: LogConfigType = new LogConfigType("Http Request Error", this.NO_DESCRIPTION);

    public readonly IDLOGGING: LogConfigType = new LogConfigType("ID Logging", this.NO_DESCRIPTION);

    public readonly JSPEXTRAOUTPUT: LogConfigType = new LogConfigType("JSP Extra Output", this.NO_DESCRIPTION);

    public readonly JSPTAGEXTRAOUTPUT: LogConfigType = new LogConfigType("JSP Tag Extra Output", this.NO_DESCRIPTION);

    public readonly JSPTAG: LogConfigType = new LogConfigType("JSP Tag", this.NO_DESCRIPTION);

    public readonly JSPTAGERROR: LogConfigType = new LogConfigType("JSP Tag Error", this.NO_DESCRIPTION);

    public readonly LICENSING: LogConfigType = new LogConfigType("Licensing", this.NO_DESCRIPTION);

    public readonly LICENSINGERROR: LogConfigType = new LogConfigType("Licensing Error", this.NO_DESCRIPTION);

    public readonly LOADER: LogConfigType = new LogConfigType("Loader", this.NO_DESCRIPTION);

    public readonly LOADERERROR: LogConfigType = new LogConfigType("Loader Error", this.NO_DESCRIPTION);

    public readonly OS: LogConfigType = new LogConfigType("OS", this.NO_DESCRIPTION);

    public readonly OSERROR: LogConfigType = new LogConfigType("OS Error", this.NO_DESCRIPTION);

    public readonly PAYMENT: LogConfigType = new LogConfigType("Payment", this.NO_DESCRIPTION);

    public readonly PAYMENTERROR: LogConfigType = new LogConfigType("Payment Error", this.NO_DESCRIPTION);

    public readonly PRELOADER: LogConfigType = new LogConfigType("PreLoader", this.NO_DESCRIPTION);

    public readonly PRELOADERERROR: LogConfigType = new LogConfigType("PreLoader Error", this.NO_DESCRIPTION);

    public readonly PRODUCTSEARCHLOGGING: LogConfigType = new LogConfigType("Product Search Logging", this.NO_DESCRIPTION);

    public readonly PRODUCTSEARCHLOGGINGERROR: LogConfigType = new LogConfigType("Product Search Logging Error", this.NO_DESCRIPTION);

    public readonly SERVLET: LogConfigType = new LogConfigType("Servlet", this.NO_DESCRIPTION);

    public readonly SERVLETERROR: LogConfigType = new LogConfigType("Servlet Error", this.NO_DESCRIPTION);

    public readonly SHIPPINGERROR: LogConfigType = new LogConfigType("Shipping Error", this.NO_DESCRIPTION);

    public readonly SQLLOGGINGERROR: LogConfigType = new LogConfigType("SQL Error", this.NO_DESCRIPTION);

    public readonly SQLLOGGING: LogConfigType = new LogConfigType("SQL Logging", this.NO_DESCRIPTION);

    public readonly SQLTAGS: LogConfigType = new LogConfigType("SQL Tag Logging", this.NO_DESCRIPTION);

    public readonly SQLTAGSERROR: LogConfigType = new LogConfigType("SQL Tag Error", this.NO_DESCRIPTION);

    public readonly STYLE: LogConfigType = new LogConfigType("Style", this.NO_DESCRIPTION);

    public readonly STYLEERROR: LogConfigType = new LogConfigType("Style Error", this.NO_DESCRIPTION);

    public readonly TAGHELPER: LogConfigType = new LogConfigType("Tag Helper", this.NO_DESCRIPTION);

    public readonly TAGHELPERERROR: LogConfigType = new LogConfigType("Tag Helper Error", this.NO_DESCRIPTION);

    public readonly TAGHELPERFACTORY: LogConfigType = new LogConfigType("Tag Helper Factory", this.NO_DESCRIPTION);

    public readonly TAGHELPERFACTORYERROR: LogConfigType = new LogConfigType("Tag Helper Factory Error", this.NO_DESCRIPTION);

    public readonly TAX: LogConfigType = new LogConfigType("Tax", this.NO_DESCRIPTION);

    public readonly TAXERROR: LogConfigType = new LogConfigType("Tax Error", this.NO_DESCRIPTION);

    public readonly VALIDATION: LogConfigType = new LogConfigType("Validation", this.NO_DESCRIPTION);

    public readonly VALIDATIONERROR: LogConfigType = new LogConfigType("Validation Error", this.NO_DESCRIPTION);

    public readonly VIEW: LogConfigType = new LogConfigType("View", this.NO_DESCRIPTION);

    public readonly VIEWERROR: LogConfigType = new LogConfigType("View Error", this.NO_DESCRIPTION);

    public readonly VIEWFACTORYERROR: LogConfigType = new LogConfigType("View Factory Error", this.NO_DESCRIPTION);

    public readonly WORKFLOW: LogConfigType = new LogConfigType("Workflow", this.NO_DESCRIPTION);

    public readonly WORKFLOWERROR: LogConfigType = new LogConfigType("Workflow Error", this.NO_DESCRIPTION);

    public readonly XMLLOGGING: LogConfigType = new LogConfigType("XML Logging", this.NO_DESCRIPTION);

    public readonly XMLLOGGINGERROR: LogConfigType = new LogConfigType("XML Logging Error", this.NO_DESCRIPTION);

    public readonly XSLLOGGING: LogConfigType = new LogConfigType("XSL Logging", this.NO_DESCRIPTION);

    public readonly XSLLOGGINGERROR: LogConfigType = new LogConfigType("XSL Logging Error", this.NO_DESCRIPTION);

    public readonly REPLACE: LogConfigType = new LogConfigType("Replace", this.NO_DESCRIPTION);

    public readonly REPLACE_INFO: LogConfigType = new LogConfigType("Replace Info", this.NO_DESCRIPTION);

    public readonly REPLACEERROR: LogConfigType = new LogConfigType("Replace Error", this.NO_DESCRIPTION);

    public readonly SQLLOGGINGPOOL: LogConfigType = new LogConfigType("SQL Pool", this.NO_DESCRIPTION);

    public readonly SQLLOGGINGPOOLERROR: LogConfigType = new LogConfigType("SQL Pool Error", this.NO_DESCRIPTION);

    public readonly STATICPAGEGENERATIONLOGGING: LogConfigType = new LogConfigType("Static Page Generation Logging", this.NO_DESCRIPTION);

    public readonly STATICPAGEGENERATIONLOGGINGERROR: LogConfigType = new LogConfigType("Static Page Generation Logging Error", this.NO_DESCRIPTION);
private constructor (){

            super();
        PreLogUtil.put("FreeBlisket", this, CommonStrings.getInstance()!.CONSTRUCTOR);
    
}


}
                
            

