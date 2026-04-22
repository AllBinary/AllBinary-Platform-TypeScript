
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
        



import { JspTagException } from "../javax/servlet/jsp/JspTagException.js";

    
import { StoreFrontData } from "../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { AbResponseHandler } from "../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ValidationTransformTag } from "./ValidationTransformTag.js";

export class StoreValidationTransformTag extends ValidationTransformTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private storeName: string
public constructor (){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public setStoreName(value: string){
var value = value
this.storeName= value;
    
this.getPropertiesHashMap()!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    
}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Tag Start", this, tagStrings!.DO_START_TAG);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();

                        ;
    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

