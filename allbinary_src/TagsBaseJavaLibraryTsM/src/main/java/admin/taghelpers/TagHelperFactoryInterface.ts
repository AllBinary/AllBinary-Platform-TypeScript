
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
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TagHelperFactoryInterface {
        

                //@Throws(Exception.constructor, LicensingException.constructor)
            
    getInstance(hashMap: HashMap<any, any>, pageContext: PageContext): any

}



