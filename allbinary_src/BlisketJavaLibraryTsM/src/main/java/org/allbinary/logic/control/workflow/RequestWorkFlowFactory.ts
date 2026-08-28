
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
        
//not game specific package import { HashMap } from '../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { ServletConfig } from '../../../../../javax/servlet/ServletConfig.js';
      const ServletConfig = globalThis.javax.servlet.ServletConfig;

      
//not game specific package import { ServletContext } from '../../../../../javax/servlet/ServletContext.js';
      const ServletContext = globalThis.javax.servlet.ServletContext;

      
//not game specific package import { ServletRequest } from '../../../../../javax/servlet/ServletRequest.js';
      const ServletRequest = globalThis.javax.servlet.ServletRequest;

      
//not game specific package import { ServletResponse } from '../../../../../javax/servlet/ServletResponse.js';
      const ServletResponse = globalThis.javax.servlet.ServletResponse;

      
//not game specific package import { HttpServletRequest } from '../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PageContext } from '../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { WorkFlowEntityFactory } from '../../../../../org/allbinary/data/tables/workflow/WorkFlowEntityFactory.js';
      const WorkFlowEntityFactory = globalThis.org.allbinary.data.tables.workflow.WorkFlowEntityFactory;

      
//not game specific package import { WeblisketSession } from '../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not game specific package import { AbPathData } from '../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { LicensingException } from '../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WorkFlowInterface } from './WorkFlowInterface.js';
import { WorkFlowData } from './WorkFlowData.js';

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



