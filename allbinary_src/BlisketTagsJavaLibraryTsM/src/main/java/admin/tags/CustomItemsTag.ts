
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
        



//not game specific package import { CustomItemsHelperFactory } from '../../admin/taghelpers/CustomItemsHelperFactory.js';
      const CustomItemsHelperFactory = globalThis.admin.taghelpers.CustomItemsHelperFactory;

      
//not game specific package import { CustomItemsRequestHelperFactory } from '../../admin/taghelpers/CustomItemsRequestHelperFactory.js';
      const CustomItemsRequestHelperFactory = globalThis.admin.taghelpers.CustomItemsRequestHelperFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';

export class CustomItemsTag extends TableTag {
        

public constructor (){

            super();
        this.setTagHelperFactory(new CustomItemsHelperFactory());
    
this.setTagRequestHelperFactory(new CustomItemsRequestHelperFactory());
    
}


}



