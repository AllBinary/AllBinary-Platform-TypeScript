
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

      
//not game specific package import { DownloadItemsHelperFactory } from '../../admin/taghelpers/DownloadItemsHelperFactory.js';
      const DownloadItemsHelperFactory = globalThis.admin.taghelpers.DownloadItemsHelperFactory;

      
//not game specific package import { DownloadItemsRequestHelperFactory } from '../../admin/taghelpers/DownloadItemsRequestHelperFactory.js';
      const DownloadItemsRequestHelperFactory = globalThis.admin.taghelpers.DownloadItemsRequestHelperFactory;

      
//not game specific package import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';
import { ParentInventoryTagHelper } from './ParentInventoryTagHelper.js';
import { AbTagData } from './AbTagData.js';

export class DownloadItemsTag extends TableTag {
        

public constructor (){

            super();
        this.setTagHelperFactory(new DownloadItemsHelperFactory());
    
this.setTagRequestHelperFactory(new DownloadItemsRequestHelperFactory());
    
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



