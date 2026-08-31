
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { ServletConfig } from '../../../../../javax/servlet/ServletConfig.js';
      //not GWT import const ServletConfig = globalThis.javax.servlet.ServletConfig;

      
import { ServletContext } from '../../../../../javax/servlet/ServletContext.js';
      //not GWT import const ServletContext = globalThis.javax.servlet.ServletContext;

      
import { ServletRequest } from '../../../../../javax/servlet/ServletRequest.js';
      //not GWT import const ServletRequest = globalThis.javax.servlet.ServletRequest;

      
import { ServletResponse } from '../../../../../javax/servlet/ServletResponse.js';
      //not GWT import const ServletResponse = globalThis.javax.servlet.ServletResponse;

      
import { HttpServletRequest } from '../../../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { WorkFlowEntityFactory } from '../../../../../org/allbinary/data/tables/workflow/WorkFlowEntityFactory.js';
      //not GWT import const WorkFlowEntityFactory = globalThis.org.allbinary.data.tables.workflow.WorkFlowEntityFactory;

      
import { WeblisketSession } from '../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      //not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not plain js import { AbPathData } from '../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
import { LicensingException } from '../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WorkFlowInterface } from './WorkFlowInterface.js';
//not GWT import const WorkFlowInterface = globalThis.org.allbinary.logic.control.workflow.WorkFlowInterface;

                import { WorkFlowData } from './WorkFlowData.js';
//not GWT import const WorkFlowData = globalThis.org.allbinary.logic.control.workflow.WorkFlowData;

                
export class RequestWorkFlowFactory
            extends Object
         {
        

                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public static getInstance(request: ServletRequest, response: ServletResponse, servletConfig: ServletConfig, servletContext: ServletContext): WorkFlowInterface{

    var httpRequest: HttpServletRequest = request as HttpServletRequest;;
    

    var requestCommand: string = httpRequest!.getPathInfo()!;;
    

    var index: number = requestCommand!.indexOf(AbPathData.getInstance()!.SEPARATOR)!;;
    

    var storeName: string = requestCommand!.substring(0, index)!;;
    

    var requestName: string = requestCommand!.substring(index, requestCommand!.length)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WorkFlowEntityFactory.getInstance()!.create2()!.get(requestName, storeName);;
    
}


                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public static getInstance(hashMap: HashMap<any, any>, pageContext: PageContext): WorkFlowInterface{

    var workFlowName: string = pageContext!.getRequest()!.getParameter(WorkFlowData.getInstance()!.NAME) as string;;
    

    var weblisketSession: WeblisketSession = new WeblisketSession(hashMap, pageContext);;
    

    var storeName: string = weblisketSession!.getStoreName()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WorkFlowEntityFactory.getInstance()!.create2()!.get(workFlowName, storeName);;
    
}


private constructor (){

            super();
        }


}



