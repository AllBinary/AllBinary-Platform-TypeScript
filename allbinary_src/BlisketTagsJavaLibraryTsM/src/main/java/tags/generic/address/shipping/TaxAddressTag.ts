
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
        



import { JspTagException } from "../../../../javax/servlet/jsp/JspTagException.js";

    
import { AbResponseHandler } from "../../../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LicensingException } from "../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { StoreValidationTransformTag } from "../../../../tags/StoreValidationTransformTag.js";

    

export class TaxAddressTag extends StoreValidationTransformTag {
        
public constructor (){

            super();
            }


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.VIEW) == 0)
                        
                                    {
                                    this.setName("Basic Shipping Address View");
    
this.setObjectFile("views.generic.address.shipping.TaxValidationView");
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.NEW) == 0)
                        
                                    {
                                    this.setName("Basic Shipping Address View");
    
this.setObjectFile("views.generic.address.shipping.NewValidationView");
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.INSERT) == 0)
                        
                                    {
                                    this.setName("Basic Shipping Address View");
    
this.setObjectFile("views.generic.address.shipping.AddTaxValidationView");
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.UPDATE) == 0)
                        
                                    {
                                    this.setName("Basic Shipping Address View");
    
this.setObjectFile("views.generic.address.shipping.UpdateTaxValidationView");
    

                                    }
                                
                        else {
                            


                            throw Error("No Such View Command: " +this.getCommand())

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();

                        ;
    

                                    }
                                



                            throw Error("Command Null")

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
                
            

