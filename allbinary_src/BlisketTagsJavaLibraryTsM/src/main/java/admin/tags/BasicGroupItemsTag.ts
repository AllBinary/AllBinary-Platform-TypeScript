
        /* Generated Code Do Not Modify */
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { BasicGroupItemsHelperFactory } from "../../admin/taghelpers/BasicGroupItemsHelperFactory.js";

    
import { BasicGroupItemsRequestHelperFactory } from "../../admin/taghelpers/BasicGroupItemsRequestHelperFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TableTag } from "./TableTag.js";

export class BasicGroupItemsTag extends TableTag {
        

    private propertiesHashMap: HashMap<any, any>
public constructor (){

            super();
        this.setTagHelperFactory(new BasicGroupItemsHelperFactory());
    
this.setTagRequestHelperFactory(new BasicGroupItemsRequestHelperFactory());
    
}


}
                
            

