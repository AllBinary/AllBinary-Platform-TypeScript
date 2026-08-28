
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { RequestDispatcher } from '../../../../../../javax/servlet/RequestDispatcher.js';
      const RequestDispatcher = globalThis.javax.servlet.RequestDispatcher;

      
//not game specific package import { ServletException } from '../../../../../../javax/servlet/ServletException.js';
      const ServletException = globalThis.javax.servlet.ServletException;

      
//not game specific package import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { HttpServletResponse } from '../../../../../../javax/servlet/http/HttpServletResponse.js';
      const HttpServletResponse = globalThis.javax.servlet.http.HttpServletResponse;

      
//not game specific package import { JspTagException } from '../../../../../../javax/servlet/jsp/JspTagException.js';
      const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
//not game specific package import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { LogConfigTypeFactory } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
      const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;

      
//not game specific package import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
      const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbResponseHandler
            extends Object
         {
        

                //@Throws(JspTagException.constructor)
            
    public static sendJspTagRedirect(pageContext: PageContext, e: Exception){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

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
                                



                            throw new JspTagException();
                    
}

}


                //@Throws(ServletException.constructor)
            
    public static sendServletRedirect(pageContext: PageContext, e: Exception){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

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
                                



                            throw new ServletException();
                    
}

}


                //@Throws(JspTagException.constructor)
            
    public static sendJspTagLicensingRedirect(pageContext: PageContext, e: Exception){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

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
                                



                            throw new JspTagException();
                    
}

}


                //@Throws(ServletException.constructor)
            
    public static sendServletLicensingRedirect(pageContext: PageContext, e: Exception){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

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
                                



                            throw new ServletException();
                    
}

}


                //@Throws(Exception.constructor)
            
    public static sendRedirect(pageContext: PageContext, page: string){

    var request: HttpServletRequest = pageContext!.getRequest() as HttpServletRequest;;
    

    var response: HttpServletResponse = pageContext!.getResponse() as HttpServletResponse;;
    

    var requestDispatcher: RequestDispatcher = request.getRequestDispatcher(page)!;;
    

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



