
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { ServletConfig } from "../../../../../javax/servlet/ServletConfig.js";

    
import { ServletContext } from "../../../../../javax/servlet/ServletContext.js";

    
import { ServletRequest } from "../../../../../javax/servlet/ServletRequest.js";

    
import { ServletResponse } from "../../../../../javax/servlet/ServletResponse.js";

    
import { HttpServletRequest } from "../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../../../../javax/servlet/jsp/PageContext.js";

    
import { WorkFlowEntityFactory } from "../../../../../org/allbinary/data/tables/workflow/WorkFlowEntityFactory.js";

    
import { WeblisketSession } from "../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    

export class RequestWorkFlowFactory
            extends Object
         {
        

                @Throws(Exception::class, LicensingException::class)
            
    public static getInstance(request: ServletRequest, response: ServletResponse, servletConfig: ServletConfig, servletContext: ServletContext): WorkFlowInterface{
var request = request
var response = response
var servletConfig = servletConfig
var servletContext = servletContext

    var httpRequest: HttpServletRequest = request as HttpServletRequest;
        
        


    var requestCommand: string = httpRequest!.getPathInfo()!;
        
        


    var index: number = requestCommand!.indexOf(AbPathData.getInstance()!.SEPARATOR)!;
        
        


    var storeName: string = requestCommand!.substring(0, index)!;
        
        


    var requestName: string = requestCommand!.substring(index, requestCommand!.length)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WorkFlowEntityFactory.getInstance()!.create2()!.get(requestName, storeName);
    
}


                @Throws(Exception::class, LicensingException::class)
            
    public static getInstance(hashMap: HashMap<Any, Any>, pageContext: PageContext): WorkFlowInterface{
var hashMap = hashMap
var pageContext = pageContext

    var workFlowName: string = pageContext!.getRequest()!.getParameter(WorkFlowData.getInstance()!.NAME) as String;
        
        


    var weblisketSession: WeblisketSession = new WeblisketSession(hashMap, pageContext);
        
        


    var storeName: string = weblisketSession!.getStoreName()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WorkFlowEntityFactory.getInstance()!.create2()!.get(workFlowName, storeName);
    
}

private constructor (){

            super();
            }


}
                
            

