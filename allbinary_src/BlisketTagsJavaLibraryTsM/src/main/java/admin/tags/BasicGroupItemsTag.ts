
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { BasicGroupItemsHelperFactory } from "../../admin/taghelpers/BasicGroupItemsHelperFactory.js";

    
import { BasicGroupItemsRequestHelperFactory } from "../../admin/taghelpers/BasicGroupItemsRequestHelperFactory.js";

    

export class BasicGroupItemsTag extends TableTag {
        

    private propertiesHashMap: HashMap<Any, Any>
public constructor (){

            super();
            this.this.setTagHelperFactory(BasicGroupItemsHelperFactory())
this.this.setTagRequestHelperFactory(BasicGroupItemsRequestHelperFactory())
}


}
                
            

