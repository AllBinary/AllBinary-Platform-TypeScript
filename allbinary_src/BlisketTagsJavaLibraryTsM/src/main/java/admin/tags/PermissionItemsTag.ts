
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

        


import { PermissionItemsHelperFactory } from '../../admin/taghelpers/PermissionItemsHelperFactory.js';
      //not GWT import const PermissionItemsHelperFactory = globalThis.admin.taghelpers.PermissionItemsHelperFactory;

      
import { PermissionItemsRequestHelperFactory } from '../../admin/taghelpers/PermissionItemsRequestHelperFactory.js';
      //not GWT import const PermissionItemsRequestHelperFactory = globalThis.admin.taghelpers.PermissionItemsRequestHelperFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';
//not GWT import const  = globalThis.admin.tags.TableTag;

                
export class PermissionItemsTag extends TableTag {
        

public constructor (){

            super();
        this.setTagHelperFactory(new PermissionItemsHelperFactory());
    
this.setTagRequestHelperFactory(new PermissionItemsRequestHelperFactory());
    
}


}



