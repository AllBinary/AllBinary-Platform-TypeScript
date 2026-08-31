
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

        


import { CustomItemsHelperFactory } from '../../admin/taghelpers/CustomItemsHelperFactory.js';
      //not GWT import const CustomItemsHelperFactory = globalThis.admin.taghelpers.CustomItemsHelperFactory;

      
import { CustomItemsRequestHelperFactory } from '../../admin/taghelpers/CustomItemsRequestHelperFactory.js';
      //not GWT import const CustomItemsRequestHelperFactory = globalThis.admin.taghelpers.CustomItemsRequestHelperFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';
//not GWT import const TableTag = globalThis.admin.tags.TableTag;

                
export class CustomItemsTag extends TableTag {
        

public constructor (){

            super();
        this.setTagHelperFactory(new CustomItemsHelperFactory());
    
this.setTagRequestHelperFactory(new CustomItemsRequestHelperFactory());
    
}


}



