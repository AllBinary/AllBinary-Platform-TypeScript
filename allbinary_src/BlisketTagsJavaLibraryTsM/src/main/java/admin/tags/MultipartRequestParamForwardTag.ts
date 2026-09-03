
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
        
import { HashMap } from '../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      //not GWT import const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
import { Tag } from '../../javax/servlet/jsp/tagext/Tag.js';
      //not GWT import const Tag = globalThis.javax.servlet.jsp.tagext.Tag;

      
import { MultipartRequestParamForwardHelper } from '../../admin/taghelpers/MultipartRequestParamForwardHelper.js';
      //not GWT import const MultipartRequestParamForwardHelper = globalThis.admin.taghelpers.MultipartRequestParamForwardHelper;

      
import { StdUtil } from '../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      //not GWT import const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
import { CustomTagSupport } from '../../tags/CustomTagSupport.js';
      //not GWT import const CustomTagSupport = globalThis.tags.CustomTagSupport;

      
import { HelperTag } from '../../tags/HelperTag.js';
      //not GWT import const HelperTag = globalThis.tags.HelperTag;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ParentInventoryTagHelper } from './ParentInventoryTagHelper.js';
//not GWT import const ParentInventoryTagHelper = globalThis.admin.tags.ParentInventoryTagHelper;

                import { AbTagData } from './AbTagData.js';
//not GWT import const AbTagData = globalThis.admin.tags.AbTagData;

                
export class MultipartRequestParamForwardTag extends CustomTagSupport {
        

    private page: string;

    private command: string;

    private paramVector: BasicArrayList;

    public setPage(page: string){
this.page= page;
    
}


    public setCommand(command: string){
this.command= command;
    
}


    public setParamVector(paramVector: BasicArrayList){
this.paramVector= paramVector;
    
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            
    var parentTag: HelperTag = this.getParent() as HelperTag;;
    
ParentInventoryTagHelper.getInstance()!.isValid(this, parentTag);
    

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
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



