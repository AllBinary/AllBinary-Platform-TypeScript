
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
        



import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { Tag } from "../../javax/servlet/jsp/tagext/Tag.js";

    
import { InventoryHelperFactory } from "../../admin/taghelpers/InventoryHelperFactory.js";

    
import { InventoryRequestHelperFactory } from "../../admin/taghelpers/InventoryRequestHelperFactory.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    

import { GLOBALS2 } from "./GLOBALS2.js";

import { GLOBALS2 } from "./GLOBALS2.js";

import { ParentInventoryTagHelper } from "./ParentInventoryTagHelper.js";

import { AbTagData } from "./AbTagData.js";

export class InventoryTag extends TableTag {
        

    private storeName: string
public constructor ()                        

                            : super(){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTagHelperFactory(new InventoryHelperFactory());
    
this.setTagRequestHelperFactory(new InventoryRequestHelperFactory());
    
}


    public setStoreName(value: string){
var value = value
this.storeName= value;
    
}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(this.isEnabled())
                        
                                    {
                                    
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.BACKUP) != 0 && this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.RESTORE) != 0 && this.getCommand()!.compareTo(this.commonStrings!.CREATE) != 0 && this.getCommand()!.compareTo(this.commonStrings!.DROP) != 0)
                        
                                    {
                                    
    var parentTag: Tag = this.getParent()!;
        
        
;
    
ParentInventoryTagHelper.getInstance()!.isValid(this, parentTag);
    
this.getPropertiesHashMap()!.put(AbTagData.PARENT, parentTag);
    
this.getPropertiesHashMap()!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();

                        ;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

