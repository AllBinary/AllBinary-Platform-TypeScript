
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
        



//not game specific package import { XmlOptionItemsHelperFactory } from '../../admin/taghelpers/XmlOptionItemsHelperFactory.js';
      const XmlOptionItemsHelperFactory = globalThis.admin.taghelpers.XmlOptionItemsHelperFactory;

      
//not game specific package import { XmlOptionItemsRequestHelperFactory } from '../../admin/taghelpers/XmlOptionItemsRequestHelperFactory.js';
      const XmlOptionItemsRequestHelperFactory = globalThis.admin.taghelpers.XmlOptionItemsRequestHelperFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';

export class XmlOptionItemsTag extends TableTag {
        

public constructor (){

            super();
        this.setTagHelperFactory(new XmlOptionItemsHelperFactory());
    
this.setTagRequestHelperFactory(new XmlOptionItemsRequestHelperFactory());
    
}


}
                
            

