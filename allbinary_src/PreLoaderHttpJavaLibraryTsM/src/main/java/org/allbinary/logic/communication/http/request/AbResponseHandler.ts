
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
        



import { RequestDispatcher } from "../../../../../../javax/servlet/RequestDispatcher.js";

    
import { ServletException } from "../../../../../../javax/servlet/ServletException.js";

    
import { HttpServletRequest } from "../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { HttpServletResponse } from "../../../../../../javax/servlet/http/HttpServletResponse.js";

    
import { JspTagException } from "../../../../../../javax/servlet/jsp/JspTagException.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    

export class AbResponseHandler
            extends Object
         {
        

                //@Throws(JspTagException::class)
            
    public static sendJspTagRedirect(pageContext: PageContext, e: Error){
var pageContext = pageContext
var e = e

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put("Jsp Tag Exception", "AbResponseHandler", "sendJspRedirect()", e);
    

                                    }
                                
AbResponseHandler.sendRedirect(pageContext, FREEBLISKET_PATH_GLOBALS.getInstance()!.ERRORPAGE);
    

                //: 
} catch(e2) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.LICENSINGERROR))
                        
                                    {
                                    logUtil!.put("Exception in Redirect Handling", "AbResponseHandler", "sendJspRedirect", e);
    

                                    }
                                



                            throw new JspTagException()
}

}


                //@Throws(ServletException::class)
            
    public static sendServletRedirect(pageContext: PageContext, e: Error){
var pageContext = pageContext
var e = e

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put("Jsp Tag Exception", "AbResponseHandler", "sendJspRedirect()", e);
    

                                    }
                                
AbResponseHandler.sendRedirect(pageContext, FREEBLISKET_PATH_GLOBALS.getInstance()!.ERRORPAGE);
    

                //: 
} catch(e2) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.LICENSINGERROR))
                        
                                    {
                                    logUtil!.put("Exception in Redirect Handling", "AbResponseHandler", "sendJspRedirect", e);
    

                                    }
                                



                            throw new ServletException()
}

}


                //@Throws(JspTagException::class)
            
    public static sendJspTagLicensingRedirect(pageContext: PageContext, e: Error){
var pageContext = pageContext
var e = e

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put("Licensing Exception", "AbResponseHandler", "sendJspTagLicensingRedirect()", e);
    

                                    }
                                
AbResponseHandler.sendRedirect(pageContext, FREEBLISKET_PATH_GLOBALS.getInstance()!.LICENSEERRORPAGE);
    

                //: 
} catch(e2) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.LICENSINGERROR))
                        
                                    {
                                    logUtil!.put("Exception in Redirect Handling", "AbResponseHandler", "sendJspTagLicensingRedirect", e);
    

                                    }
                                



                            throw new JspTagException()
}

}


                //@Throws(ServletException::class)
            
    public static sendServletLicensingRedirect(pageContext: PageContext, e: Error){
var pageContext = pageContext
var e = e

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put("Licensing Exception", "AbResponseHandler", "sendServletLicensingRedirect()", e);
    

                                    }
                                
AbResponseHandler.sendRedirect(pageContext, FREEBLISKET_PATH_GLOBALS.getInstance()!.LICENSEERRORPAGE);
    

                //: 
} catch(e2) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.LICENSINGERROR))
                        
                                    {
                                    logUtil!.put("Exception in Redirect Handling", "AbResponseHandler", "sendServletLicensingRedirect", e);
    

                                    }
                                



                            throw new ServletException()
}

}


                //@Throws(Error::class)
            
    public static sendRedirect(pageContext: PageContext, page: string){
var pageContext = pageContext
var page = page

    var request: HttpServletRequest = pageContext!.getRequest();

                         as HttpServletRequest;
        
        
;
    

    var response: HttpServletResponse = pageContext!.getResponse();

                         as HttpServletResponse;
        
        
;
    

    var requestDispatcher: RequestDispatcher = request.getRequestDispatcher(page)!;
        
        
;
    

                        if(response.isCommitted())
                        
                                    {
                                    response.sendRedirect(page);
    

                                    }
                                
                        else {
                            
        try {
            requestDispatcher!.forward(request, response);
    

                //: 
} catch(e) 
            {
pageContext!.getOut()!.print("Error: " +page);
    
}


                        }
                            
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


}
                
            

