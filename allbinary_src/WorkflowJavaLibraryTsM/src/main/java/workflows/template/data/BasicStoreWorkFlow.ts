
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../java/util/HashMap.js";

    
import { PageContext } from "../../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontData } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreWorkFlowInterface } from "../../../org/allbinary/logic/control/workflow/StoreWorkFlowInterface.js";

    

export class BasicStoreWorkFlow extends BasicWorkFlow
                , StoreWorkFlowInterface {
        
public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext)                        

                            : super(propertiesHashMap, pageContext){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getPropertiesHashMap()!.get(StoreFrontData.getInstance()!.NAME);

                         as String;
    
}


}
                
            

