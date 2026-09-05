
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

        


import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { BasicGroupItemsHelperFactory } from '../../admin/taghelpers/BasicGroupItemsHelperFactory.js';
//not GWT import const BasicGroupItemsHelperFactory = globalThis.admin.taghelpers.BasicGroupItemsHelperFactory;

      
import { BasicGroupItemsRequestHelperFactory } from '../../admin/taghelpers/BasicGroupItemsRequestHelperFactory.js';
//not GWT import const BasicGroupItemsRequestHelperFactory = globalThis.admin.taghelpers.BasicGroupItemsRequestHelperFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';
//not GWT import - same folder const TableTag = globalThis.admin.tags.TableTag;

                
export class BasicGroupItemsTag extends TableTag {
        

    private propertiesHashMap: HashMap<any, any>;

public constructor (){

            super();
        this.setTagHelperFactory(new BasicGroupItemsHelperFactory());
    
this.setTagRequestHelperFactory(new BasicGroupItemsRequestHelperFactory());
    
}


}



