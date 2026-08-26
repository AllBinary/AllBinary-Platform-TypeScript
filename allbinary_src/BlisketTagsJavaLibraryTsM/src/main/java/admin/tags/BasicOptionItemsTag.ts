
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
        



//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { BasicOptionItemsHelperFactory } from '../../admin/taghelpers/BasicOptionItemsHelperFactory.js';
      const BasicOptionItemsHelperFactory = globalThis.admin.taghelpers.BasicOptionItemsHelperFactory;

      
//not game specific package import { BasicOptionItemsRequestHelperFactory } from '../../admin/taghelpers/BasicOptionItemsRequestHelperFactory.js';
      const BasicOptionItemsRequestHelperFactory = globalThis.admin.taghelpers.BasicOptionItemsRequestHelperFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';

export class BasicOptionItemsTag extends TableTag {
        

    private propertiesHashMap: HashMap<any, any>;

public constructor (){

            super();
        this.setTagHelperFactory(new BasicOptionItemsHelperFactory());
    
this.setTagRequestHelperFactory(new BasicOptionItemsRequestHelperFactory());
    
}


}
                
            

