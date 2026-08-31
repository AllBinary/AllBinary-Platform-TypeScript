
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

        


import { AdminConfigurationHelperFactory } from '../../admin/taghelpers/AdminConfigurationHelperFactory.js';
      //not GWT import const AdminConfigurationHelperFactory = globalThis.admin.taghelpers.AdminConfigurationHelperFactory;

      
import { AdminConfigurationRequestHelperFactory } from '../../admin/taghelpers/AdminConfigurationRequestHelperFactory.js';
      //not GWT import const AdminConfigurationRequestHelperFactory = globalThis.admin.taghelpers.AdminConfigurationRequestHelperFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';
//not GWT import const TableTag = globalThis.admin.tags.TableTag;

                
export class AdminConfigurationTag extends TableTag {
        

public constructor (){

            super();
        this.setTagHelperFactory(new AdminConfigurationHelperFactory());
    
this.setTagRequestHelperFactory(new AdminConfigurationRequestHelperFactory());
    
}


}



