
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

        


            import { Object } from '../../java/lang/Object.js';
        
            import { Exception } from '../../java/lang/Exception.js';
        
import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { AppUrlGlobals } from '../../org/allbinary/globals/AppUrlGlobals.js';
//not GWT import const AppUrlGlobals

import { URLGLOBALS } from '../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomLoaderHelper
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public constructor(...args: any[]) {
        super();if(args.length === 2) {
            
            this.constructor$0(args[0], args[1]);
            
        }
        else if(args.length === 0) {
            
            this.constructor$1();
            
        }
        
    }
    
    private constructor$0(hashMap: HashMap<any, any>, pageContext: PageContext): void {
        
    }
    
    private constructor$1(): void {
        
    }
    
                //@Throws(Exception.constructor)
            
    public getWebappPath(): string{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return org.allbinary.globals.URLGLOBALS.getWebappPath();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public setWebappPath(path: string){

 try { 
    let urlGlobals: AppUrlGlobals = new AppUrlGlobals();;
    
urlGlobals!.setWebappPath(path);
    
URLGLOBALS.init(urlGlobals);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setWebappPath()", e);
    

                                    }
                                

 }
   }
 
}


}

