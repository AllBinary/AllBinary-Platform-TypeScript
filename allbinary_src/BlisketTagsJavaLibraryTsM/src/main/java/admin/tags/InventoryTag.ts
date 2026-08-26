
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
        
//not game specific package import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
//not game specific package import { Tag } from '../../javax/servlet/jsp/tagext/Tag.js';
      const Tag = globalThis.javax.servlet.jsp.tagext.Tag;

      
//not game specific package import { InventoryHelperFactory } from '../../admin/taghelpers/InventoryHelperFactory.js';
      const InventoryHelperFactory = globalThis.admin.taghelpers.InventoryHelperFactory;

      
//not game specific package import { InventoryRequestHelperFactory } from '../../admin/taghelpers/InventoryRequestHelperFactory.js';
      const InventoryRequestHelperFactory = globalThis.admin.taghelpers.InventoryRequestHelperFactory;

      
//not game specific package import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';
import { ParentInventoryTagHelper } from './ParentInventoryTagHelper.js';
import { AbTagData } from './AbTagData.js';

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
                
            

