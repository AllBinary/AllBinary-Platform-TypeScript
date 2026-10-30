
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
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
//not GWT import const JspTagException

import { Tag } from '../../javax/servlet/jsp/tagext/Tag.js';
//not GWT import const Tag

import { MultipartRequestParamForwardHelper } from '../../admin/taghelpers/MultipartRequestParamForwardHelper.js';
//not GWT import const MultipartRequestParamForwardHelper

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
//not GWT import const AbResponseHandler

import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

import { CustomTagSupport } from '../../tags/CustomTagSupport.js';
//not GWT import const CustomTagSupport

import { HelperTag } from '../../tags/HelperTag.js';
//not GWT import const HelperTag

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ParentInventoryTagHelper } from './ParentInventoryTagHelper.js';
//not GWT import - same folder const ParentInventoryTagHelper
import { AbTagData } from './AbTagData.js';
//not GWT import - same folder const AbTagData

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
    let parentTag: HelperTag = this.getParent() as HelperTag;;
    
ParentInventoryTagHelper.getInstance()!.isValid(this, parentTag);
    

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(AbTagData.PARENT, parentTag);
    

    let multipartRequestParamForwardHelper: MultipartRequestParamForwardHelper = new MultipartRequestParamForwardHelper(parentTag, this.page, this.command, this.paramVector, this.pageContext);;
    
multipartRequestParamForwardHelper!.forward();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Tag.SKIP_BODY;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  
AbResponseHandler.sendJspTagLicensingRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Tag.SKIP_BODY;
    

 }
  else {
  const e = caught;
  
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Tag.SKIP_BODY;
    

 }
   }
 
}


}

