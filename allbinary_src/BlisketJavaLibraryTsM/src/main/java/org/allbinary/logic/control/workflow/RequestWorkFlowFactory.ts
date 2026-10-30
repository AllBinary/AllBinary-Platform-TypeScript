
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
//not GWT import const HashMap

import { ServletConfig } from '../../../../../javax/servlet/ServletConfig.js';
//not GWT import const ServletConfig

import { ServletContext } from '../../../../../javax/servlet/ServletContext.js';
//not GWT import const ServletContext

import { ServletRequest } from '../../../../../javax/servlet/ServletRequest.js';
//not GWT import const ServletRequest

import { ServletResponse } from '../../../../../javax/servlet/ServletResponse.js';
//not GWT import const ServletResponse

import { HttpServletRequest } from '../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { WorkFlowEntityFactory } from '../../../../../org/allbinary/data/tables/workflow/WorkFlowEntityFactory.js';
//not GWT import const WorkFlowEntityFactory

import { WeblisketSession } from '../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

import { LicensingException } from '../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WorkFlowInterface } from './WorkFlowInterface.js';
//sameFolderImports - not GWT import - same folder const WorkFlowInterface
import { WorkFlowData } from './WorkFlowData.js';
//sameFolderImports - not GWT import - same folder const WorkFlowData

export class RequestWorkFlowFactory
            extends Object
         {
        
static getInstance(...args: any[]): any {
   
    if (args.length === 4) return this.getInstance$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 2) return this.getInstance$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public static getInstance$overload1(request: ServletRequest, response: ServletResponse, servletConfig: ServletConfig, servletContext: ServletContext): WorkFlowInterface{

    let httpRequest: HttpServletRequest = request as HttpServletRequest;;
    

    let requestCommand: string = httpRequest!.getPathInfo()!;;
    

    let index: number = requestCommand!.indexOf(AbPathData.getInstance()!.SEPARATOR)!;;
    

    let storeName: string = requestCommand!.substring(0, index)!;;
    

    let requestName: string = requestCommand!.substring(index, requestCommand!.length)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WorkFlowEntityFactory.getInstance()!.create2()!.get(requestName, storeName);;
    
}


                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public static getInstance$overload2(hashMap: HashMap<any, any>, pageContext: PageContext): WorkFlowInterface{

    let workFlowName: string = pageContext!.getRequest()!.getParameter(WorkFlowData.getInstance()!.NAME) as string;;
    

    let weblisketSession: WeblisketSession = new WeblisketSession(hashMap, pageContext);;
    

    let storeName: string = weblisketSession!.getStoreName()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WorkFlowEntityFactory.getInstance()!.create2()!.get(workFlowName, storeName);;
    
}


private constructor (){

            super();
        }


}

