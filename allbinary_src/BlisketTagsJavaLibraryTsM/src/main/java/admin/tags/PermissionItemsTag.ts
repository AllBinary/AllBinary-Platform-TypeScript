
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
        



//not game specific package import { PermissionItemsHelperFactory } from '../../admin/taghelpers/PermissionItemsHelperFactory.js';
      const PermissionItemsHelperFactory = globalThis.admin.taghelpers.PermissionItemsHelperFactory;

      
//not game specific package import { PermissionItemsRequestHelperFactory } from '../../admin/taghelpers/PermissionItemsRequestHelperFactory.js';
      const PermissionItemsRequestHelperFactory = globalThis.admin.taghelpers.PermissionItemsRequestHelperFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';

export class PermissionItemsTag extends TableTag {
        

public constructor (){

            super();
        this.setTagHelperFactory(new PermissionItemsHelperFactory());
    
this.setTagRequestHelperFactory(new PermissionItemsRequestHelperFactory());
    
}


}



