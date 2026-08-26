
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
        



//not game specific package import { AdminConfigurationHelperFactory } from '../../admin/taghelpers/AdminConfigurationHelperFactory.js';
      const AdminConfigurationHelperFactory = globalThis.admin.taghelpers.AdminConfigurationHelperFactory;

      
//not game specific package import { AdminConfigurationRequestHelperFactory } from '../../admin/taghelpers/AdminConfigurationRequestHelperFactory.js';
      const AdminConfigurationRequestHelperFactory = globalThis.admin.taghelpers.AdminConfigurationRequestHelperFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';

export class AdminConfigurationTag extends TableTag {
        

public constructor (){

            super();
        this.setTagHelperFactory(new AdminConfigurationHelperFactory());
    
this.setTagRequestHelperFactory(new AdminConfigurationRequestHelperFactory());
    
}


}
                
            

