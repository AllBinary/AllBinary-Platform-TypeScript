
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
        



import { io } from "../../java/io.js";

    
import { net } from "../../java/net.js";

    
import { servlet } from "../../javax/servlet.js";

    
import { http } from "../../javax/servlet/http.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { WorkFlowInterface } from "../../org/allbinary/logic/control/workflow/WorkFlowInterface.js";

    
import { RequestWorkFlowFactory } from "../../org/allbinary/logic/control/workflow/RequestWorkFlowFactory.js";

    

export class RequestHandler extends HttpServlet {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                //@Throws(ServletException::class)
            
    public init(config: ServletConfig){
var config = config
super.init(config);
    
}


    public destroy(){
}


                //@Throws(ServletException::class, IOException::class)
            
    processRequest(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response

        try {
            response.setContentType("text/html");
    

    var out: PrintWriter = response.getWriter()!;
        
        
;
    

    var workflowInterface: WorkFlowInterface = RequestWorkFlowFactory.getInstance(request as ServletRequest, response as ServletResponse, this.getServletConfig(), this.getServletContext())!;
        
        
;
    

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
                                    logUtil!.put("Servlet LicensingException", this, "processRequest()", e);
    

                                    }
                                
response.sendRedirect(abcs.globals.URLGLOBALS.LICENSEERRORPAGE);
    
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SERVLETERROR))
                        
                                    {
                                    logUtil!.put("Servlet Exception", this, "processRequest()", e);
    

                                    }
                                
response.sendRedirect(abcs.globals.URLGLOBALS.ERRORPAGE);
    
}

}


                //@Throws(ServletException::class, IOException::class)
            
    doGet(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response
processRequest(request, response);
    
}


                //@Throws(ServletException::class, IOException::class)
            
    doPost(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response
processRequest(request, response);
    
}


    public getServletInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "WorkFlow Request Handler";
    
}


}
                
            

