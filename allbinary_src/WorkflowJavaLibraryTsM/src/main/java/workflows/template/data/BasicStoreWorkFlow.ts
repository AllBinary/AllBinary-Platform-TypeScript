
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
        



            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { PageContext } from '../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { StoreFrontData } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { StoreWorkFlowInterface } from '../../../org/allbinary/logic/control/workflow/StoreWorkFlowInterface.js';
      const StoreWorkFlowInterface = globalThis.org.allbinary.logic.control.workflow.StoreWorkFlowInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicWorkFlow } from './BasicWorkFlow.js';

export class BasicStoreWorkFlow extends BasicWorkFlow implements StoreWorkFlowInterface {
        

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){
            super(propertiesHashMap, pageContext);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getPropertiesHashMap()!.get(StoreFrontData.getInstance()!.NAME) as string;
    
}


}
                
            

