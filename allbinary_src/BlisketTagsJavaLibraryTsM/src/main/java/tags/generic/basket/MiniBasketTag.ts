
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
        



import { JspTagException } from "../../../javax/servlet/jsp/JspTagException.js";

    
import { AbResponseHandler } from "../../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LicensingException } from "../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { StoreValidationTransformTag } from "../../../tags/StoreValidationTransformTag.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MiniBasketTag extends StoreValidationTransformTag {
        
public constructor (){

            super();
        }


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            this.setName("Mini Basket View");
    
this.setObjectFile("views.generic.basket.mini.ValidationView");
    

                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.VIEW) == 0)
                        
                                    {
                                    
                                    }
                                
                        else {
                            


                            throw new Error("No Such View Command: " +this.getCommand())

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();

                        ;
    

                                    }
                                



                            throw new Error("Command Null")

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagLicensingRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

                //: 
 catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

