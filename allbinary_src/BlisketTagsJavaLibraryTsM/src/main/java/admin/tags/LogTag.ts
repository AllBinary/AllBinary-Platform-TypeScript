
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

        


import { LogHelperFactory } from '../../admin/taghelpers/LogHelperFactory.js';
//not GWT import const LogHelperFactory = globalThis.admin.taghelpers.LogHelperFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';
//not GWT import - same folder const TableTag = globalThis.admin.tags.TableTag;

                
export class LogTag extends TableTag {
        

public constructor (){

            super();
        this.setTagHelperFactory(new LogHelperFactory());
    
this.setTagRequestHelperFactory(new LogHelperFactory());
    
}


}



