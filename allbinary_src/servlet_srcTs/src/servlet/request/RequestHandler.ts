
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
        
import { io } from '../../java/io.js';
//not GWT import const io = globalThis.java.io;

      
import { net } from '../../java/net.js';
//not GWT import const net = globalThis.java.net;

      
import { servlet } from '../../javax/servlet.js';
//not GWT import const servlet = globalThis.javax.servlet;

      
import { http } from '../../javax/servlet/http.js';
//not GWT import const http = globalThis.javax.servlet.http;

      
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { WorkFlowInterface } from '../../org/allbinary/logic/control/workflow/WorkFlowInterface.js';
//not GWT import const WorkFlowInterface = globalThis.org.allbinary.logic.control.workflow.WorkFlowInterface;

      
import { RequestWorkFlowFactory } from '../../org/allbinary/logic/control/workflow/RequestWorkFlowFactory.js';
//not GWT import const RequestWorkFlowFactory = globalThis.org.allbinary.logic.control.workflow.RequestWorkFlowFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HttpServlet } from './HttpServlet.js';
//not GWT import - same folder const HttpServlet = globalThis.servlet.request.HttpServlet;

                import { ServletConfig } from './ServletConfig.js';
//not GWT import - same folder const ServletConfig = globalThis.servlet.request.ServletConfig;

                import { PrintWriter } from './PrintWriter.js';
//not GWT import - same folder const PrintWriter = globalThis.servlet.request.PrintWriter;

                import { ServletRequest } from './ServletRequest.js';
//not GWT import - same folder const ServletRequest = globalThis.servlet.request.ServletRequest;

                import { ServletResponse } from './ServletResponse.js';
//not GWT import - same folder const ServletResponse = globalThis.servlet.request.ServletResponse;

                import { HttpServletRequest } from './HttpServletRequest.js';
//not GWT import - same folder const HttpServletRequest = globalThis.servlet.request.HttpServletRequest;

                import { HttpServletResponse } from './HttpServletResponse.js';
//not GWT import - same folder const HttpServletResponse = globalThis.servlet.request.HttpServletResponse;

                
export class RequestHandler extends HttpServlet {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(ServletException.constructor)
            
    public init(config: ServletConfig){
super.init(config);
    
}


    public destroy(){
}


                //@Throws(ServletException.constructor, IOException.constructor)
            
    processRequest(request: HttpServletRequest, response: HttpServletResponse){

        try {
            response.setContentType("text/html");
    

    var out: PrintWriter = response.getWriter()!;;
    

    var workflowInterface: WorkFlowInterface = RequestWorkFlowFactory.getInstance(request as ServletRequest, response as ServletResponse, this.getServletConfig(), this.getServletContext())!;;
    

                        if(workflowInterface != 
                                    null
                                )
                        
                                    {
                                    out.print(workflowInterface!.process());
    

                                    }
                                
out.flush();
    
out.close();
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SERVLETERROR))
                        
                                    {
                                    this.logUtil!.put("Servlet LicensingException", this, "processRequest()", e);
    

                                    }
                                
response.sendRedirect(abcs.globals.URLGLOBALS.LICENSEERRORPAGE);
    
}

                //: 
/* catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SERVLETERROR))
                        
                                    {
                                    this.logUtil!.put("Servlet Exception", this, "processRequest()", e);
    

                                    }
                                
response.sendRedirect(abcs.globals.URLGLOBALS.ERRORPAGE);
    
}
*/
}


                //@Throws(ServletException.constructor, IOException.constructor)
            
    doGet(request: HttpServletRequest, response: HttpServletResponse){
this.processRequest(request, response);
    
}


                //@Throws(ServletException.constructor, IOException.constructor)
            
    doPost(request: HttpServletRequest, response: HttpServletResponse){
this.processRequest(request, response);
    
}


    public getServletInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "WorkFlow Request Handler";
    
}


}



