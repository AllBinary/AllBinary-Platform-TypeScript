
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
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { AppUrlGlobals } from '../../org/allbinary/globals/AppUrlGlobals.js';
//not GWT import const AppUrlGlobals = globalThis.org.allbinary.globals.AppUrlGlobals;

      
import { URLGLOBALS } from '../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomLoaderHelper
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        }


public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getWebappPath(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return org.allbinary.globals.URLGLOBALS.getWebappPath();;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(Exception.constructor)
            
    public setWebappPath(path: string){

        try {
            
    var urlGlobals: AppUrlGlobals = new AppUrlGlobals();;
    
urlGlobals!.setWebappPath(path);
    
URLGLOBALS.init(urlGlobals);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setWebappPath()", e);
    

                                    }
                                
}

}


}



