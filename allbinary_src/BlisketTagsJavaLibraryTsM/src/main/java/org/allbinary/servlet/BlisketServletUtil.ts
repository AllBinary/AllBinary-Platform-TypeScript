
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

        


            import { Object } from '../../../java/lang/Object.js';
        
import { HttpServletRequest } from '../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { AppUrlGlobals } from '../../../org/allbinary/globals/AppUrlGlobals.js';
      //not GWT import const AppUrlGlobals = globalThis.org.allbinary.globals.AppUrlGlobals;

      
import { URLGLOBALS } from '../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { AbPathData } from '../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
import { WebappClassLoaderInfo } from '../../../org/allbinary/logic/system/loader/WebappClassLoaderInfo.js';
      //not GWT import const WebappClassLoaderInfo = globalThis.org.allbinary.logic.system.loader.WebappClassLoaderInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BlisketServletUtil
            extends Object
         {
        

    private static readonly instance: BlisketServletUtil = new BlisketServletUtil();

    public static getInstance(): BlisketServletUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BlisketServletUtil.instance;
    
}


    public init(request: HttpServletRequest){

    var urlGlobals: AppUrlGlobals = new AppUrlGlobals();;
    
urlGlobals!.setWebappPath(request.getServletContext()!.getRealPath(AbPathData.getInstance()!.SEPARATOR));
    
URLGLOBALS.init(urlGlobals);
    
WebappClassLoaderInfo.setLoader(constructor.namegetClassLoader());
    
}


}



