
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

        


            import { Object } from '../java/lang/Object.js';
        
            import { Exception } from '../java/lang/Exception.js';
        
import { HashMap } from '../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { HelperFactory } from '../admin/taghelpers/HelperFactory.js';
//not GWT import const HelperFactory = globalThis.admin.taghelpers.HelperFactory;

      
import { LicensingException } from '../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
import { TagHelperFactoryInterface } from '../admin/taghelpers/TagHelperFactoryInterface.js';
//not GWT import const TagHelperFactoryInterface = globalThis.admin.taghelpers.TagHelperFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StoreTagWorkFlowHelperFactory
            extends Object
         implements TagHelperFactoryInterface {
        

    private static readonly CLASSNAME: string = "taghelpers.StoreTagWorkFlowHelper";

    private static readonly FACTORYNAME: string = "taghelpers.StoreTagWorkFlowHelperFactory";

public constructor (){

            super();
        }


                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public getInstance(propertiesHashMap: HashMap<any, any>, pageContext: PageContext): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HelperFactory.getInstance(FACTORYNAME, CLASSNAME, propertiesHashMap, pageContext);;
    
}


}



