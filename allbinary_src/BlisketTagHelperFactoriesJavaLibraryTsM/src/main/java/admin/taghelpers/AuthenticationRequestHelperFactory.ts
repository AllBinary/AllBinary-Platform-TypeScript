
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
        
import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap

import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelperFactory } from './TagHelperFactory.js';
//sameFolderImports - not GWT import - same folder const TagHelperFactory
import { AuthenticationRequestHelper } from './AuthenticationRequestHelper.js';
//sameFolderImports - not GWT import - same folder const AuthenticationRequestHelper

export class AuthenticationRequestHelperFactory extends TagHelperFactory {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }

getInstance(...args: any[]): any {
   
    if (args.length === 2) return this.getInstance$overload1(args[0], args[1]);
   
    if (args.length === 2) return this.getInstance$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(LicensingException.constructor)
            
    public getInstance$overload1(hashMap: HashMap<any, any>, pageContext: PageContext): any{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AuthenticationRequestHelper(hashMap, pageContext);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


                //@Throws(LicensingException.constructor)
            
    public getInstance$overload2(hashMap: HashMap<any, any>, httpServletRequest: HttpServletRequest): any{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AuthenticationRequestHelper(hashMap, httpServletRequest);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

