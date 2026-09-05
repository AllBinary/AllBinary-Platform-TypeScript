
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { StreetAddress } from '../../../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
import { ValidationComponentInterface } from '../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
//not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BillingAddressView } from './BillingAddressView.js';
//not GWT import - same folder const BillingAddressView = globalThis.views.generic.address.billing.BillingAddressView;

                
export class NewValidationView extends BillingAddressView implements ValidationComponentInterface {
        

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{
this.streetAddress= new StreetAddress();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Please contact the administrator.";
    
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}



