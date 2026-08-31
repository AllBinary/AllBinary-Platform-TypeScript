
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

        


            import { Exception } from '../../java/lang/Exception.js';
        
import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      //not GWT import const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
import { Tag } from '../../javax/servlet/jsp/tagext/Tag.js';
      //not GWT import const Tag = globalThis.javax.servlet.jsp.tagext.Tag;

      
import { InventoryHelperFactory } from '../../admin/taghelpers/InventoryHelperFactory.js';
      //not GWT import const InventoryHelperFactory = globalThis.admin.taghelpers.InventoryHelperFactory;

      
import { InventoryRequestHelperFactory } from '../../admin/taghelpers/InventoryRequestHelperFactory.js';
      //not GWT import const InventoryRequestHelperFactory = globalThis.admin.taghelpers.InventoryRequestHelperFactory;

      
import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      //not GWT import const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';
//not GWT import const TableTag = globalThis.admin.tags.TableTag;

                import { ParentInventoryTagHelper } from './ParentInventoryTagHelper.js';
//not GWT import const ParentInventoryTagHelper = globalThis.admin.tags.ParentInventoryTagHelper;

                import { AbTagData } from './AbTagData.js';
//not GWT import const AbTagData = globalThis.admin.tags.AbTagData;

                
export class InventoryTag extends TableTag {
        

    private storeName: string;

public constructor (){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTagHelperFactory(new InventoryHelperFactory());
    
this.setTagRequestHelperFactory(new InventoryRequestHelperFactory());
    
}


    public setStoreName(value: string){
this.storeName= value;
    
}


                //@Throws(JspTagException.constructor)
            
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
                                    
    var parentTag: Tag = this.getParent()!;;
    
ParentInventoryTagHelper.getInstance()!.isValid(this, parentTag);
    
this.getPropertiesHashMap()!.put(AbTagData.PARENT, parentTag);
    
this.getPropertiesHashMap()!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();;
    

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



