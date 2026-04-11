
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../java/util/HashMap.js";

    

//import { Vector } from "../../java/util/Vector.js";

    
import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { Tag } from "../../javax/servlet/jsp/tagext/Tag.js";

    
import { MultipartRequestParamForwardHelper } from "../../admin/taghelpers/MultipartRequestParamForwardHelper.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CustomTagSupport } from "../../tags/CustomTagSupport.js";

    
import { HelperTag } from "../../tags/HelperTag.js";

    

export class MultipartRequestParamForwardTag extends CustomTagSupport {
        

    private page: string

    private command: string

    private paramVector: Vector

    public setPage(page: string){
var page = page
this.page= page;
    
}


    public setCommand(command: string){
var command = command
this.command= command;
    
}


    public setParamVector(paramVector: Vector){
var paramVector = paramVector
this.paramVector= paramVector;
    
}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
    var parentTag: HelperTag = this.getParent();

                         as HelperTag;
        
        
;
    
ParentInventoryTagHelper.getInstance()!.isValid(this, parentTag);
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(AbTagData.PARENT, parentTag);
    

    var multipartRequestParamForwardHelper: MultipartRequestParamForwardHelper = new MultipartRequestParamForwardHelper(parentTag, this.page, this.command, this.paramVector, this.pageContext);
        
        
;
    
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
 catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Tag.SKIP_BODY;
    
}

}


}
                
            

