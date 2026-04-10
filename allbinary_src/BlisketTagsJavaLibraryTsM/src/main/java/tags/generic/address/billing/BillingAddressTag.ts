
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

    
import { BillingAddressData } from "../../../../org/allbinary/business/user/address/BillingAddressData.js";

    
import { AbResponseHandler } from "../../../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LicensingException } from "../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { StoreValidationTransformTag } from "../../../../tags/StoreValidationTransformTag.js";

    

export class BillingAddressTag extends StoreValidationTransformTag {
        
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
                                    this.this.setName("Basic Billing Address View")
this.this.setObjectFile("views.generic.address.billing.ValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.EDIT) == 0)
                        
                                    {
                                    this.this.setName("Basic Billing Address View")
this.this.setObjectFile("views.generic.address.billing.EditValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.NEW) == 0)
                        
                                    {
                                    this.this.setName("Basic Billing Address View")
this.this.setObjectFile("views.generic.address.billing.NewValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.INSERT) == 0)
                        
                                    {
                                    this.this.setName("Basic Billing Address View")
this.this.setObjectFile("views.generic.address.billing.AddValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.DELETE) == 0)
                        
                                    {
                                    this.this.setName("Basic Billing Address View")
this.this.setObjectFile("views.generic.address.billing.DeleteValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(BillingAddressData.SELECT) == 0)
                        
                                    {
                                    this.this.setName("Basic Billing Address View")
this.this.setObjectFile("views.generic.address.billing.SelectValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(BillingAddressData.SETTOSHIPPINGADDRESS) == 0)
                        
                                    {
                                    this.this.setName("Basic Billing Address View")
this.this.setObjectFile("views.generic.address.billing.SetValidationView")

                                    }
                                
                        else {
                            


                            throw Error("No Such View Command: " +this.getCommand())

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();
    

                                    }
                                



                            throw Error("Command Null")
} catch(e: LicensingException)
            {
AbResponseHandler.sendJspTagLicensingRedirect(this.pageContext, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}
 catch(e: Exception)
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

