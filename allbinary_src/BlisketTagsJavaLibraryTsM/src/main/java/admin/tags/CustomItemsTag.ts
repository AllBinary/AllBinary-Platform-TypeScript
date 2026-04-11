
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
        



import { CustomItemsHelperFactory } from "../../admin/taghelpers/CustomItemsHelperFactory.js";

    
import { CustomItemsRequestHelperFactory } from "../../admin/taghelpers/CustomItemsRequestHelperFactory.js";

    

export class CustomItemsTag extends TableTag {
        
public constructor (){

            super();
            this.setTagHelperFactory(CustomItemsHelperFactory());
    
this.setTagRequestHelperFactory(CustomItemsRequestHelperFactory());
    
}


}
                
            

