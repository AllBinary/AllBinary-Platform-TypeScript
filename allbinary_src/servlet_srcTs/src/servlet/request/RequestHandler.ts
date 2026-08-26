
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
        
//not game specific package import { io } from '../../java/io.js';
      const io = globalThis.java.io;

      
//not game specific package import { net } from '../../java/net.js';
      const net = globalThis.java.net;

      
//not game specific package import { servlet } from '../../javax/servlet.js';
      const servlet = globalThis.javax.servlet;

      
//not game specific package import { http } from '../../javax/servlet/http.js';
      const http = globalThis.javax.servlet.http;

      
//not game specific package import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
//not game specific package import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { WorkFlowInterface } from '../../org/allbinary/logic/control/workflow/WorkFlowInterface.js';
      const WorkFlowInterface = globalThis.org.allbinary.logic.control.workflow.WorkFlowInterface;

      
//not game specific package import { RequestWorkFlowFactory } from '../../org/allbinary/logic/control/workflow/RequestWorkFlowFactory.js';
      const RequestWorkFlowFactory = globalThis.org.allbinary.logic.control.workflow.RequestWorkFlowFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HttpServlet } from './HttpServlet.js';
import { ServletConfig } from './ServletConfig.js';
import { PrintWriter } from './PrintWriter.js';
import { ServletRequest } from './ServletRequest.js';
import { ServletResponse } from './ServletResponse.js';
import { HttpServletRequest } from './HttpServletRequest.js';
import { HttpServletResponse } from './HttpServletResponse.js';

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
                
            

