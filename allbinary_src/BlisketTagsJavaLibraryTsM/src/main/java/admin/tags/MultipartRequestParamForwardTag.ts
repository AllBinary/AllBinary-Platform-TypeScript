
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
        
//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
//not game specific package import { Tag } from '../../javax/servlet/jsp/tagext/Tag.js';
      const Tag = globalThis.javax.servlet.jsp.tagext.Tag;

      
//not game specific package import { MultipartRequestParamForwardHelper } from '../../admin/taghelpers/MultipartRequestParamForwardHelper.js';
      const MultipartRequestParamForwardHelper = globalThis.admin.taghelpers.MultipartRequestParamForwardHelper;

      
//not game specific package import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not game specific package import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
//not game specific package import { CustomTagSupport } from '../../tags/CustomTagSupport.js';
      const CustomTagSupport = globalThis.tags.CustomTagSupport;

      
//not game specific package import { HelperTag } from '../../tags/HelperTag.js';
      const HelperTag = globalThis.tags.HelperTag;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ParentInventoryTagHelper } from './ParentInventoryTagHelper.js';
import { AbTagData } from './AbTagData.js';

export class MultipartRequestParamForwardTag extends CustomTagSupport {
        

    private page: string;

    private command: string;

    private paramVector: Vector;

    public setPage(page: string){
this.page= page;
    
}


    public setCommand(command: string){
this.command= command;
    
}


    public setParamVector(paramVector: Vector){
this.paramVector= paramVector;
    
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            
    var parentTag: HelperTag = this.getParent() as HelperTag;;
    
ParentInventoryTagHelper.getInstance()!.isValid(this, parentTag);
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
hashMap!.put(AbTagData.PARENT, parentTag);
    

    var multipartRequestParamForwardHelper: MultipartRequestParamForwardHelper = new MultipartRequestParamForwardHelper(parentTag, this.page, this.command, this.paramVector, this.pageContext);;
    
multipartRequestParamForwardHelper!.forward();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Tag.SKIP_BODY;
    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagLicensingRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Tag.SKIP_BODY;
    
}

                //: 
/* catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Tag.SKIP_BODY;
    
}
*/
}


}
                
            

