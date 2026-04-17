
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
        



import { MESSAGES } from "../../../../org/allbinary/globals/MESSAGES.js";

    
import { ValidationComponentInterface } from "../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ShippingAddressView } from "./ShippingAddressView.js";

export class SelectValidationView extends ShippingAddressView implements ValidationComponentInterface {
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MESSAGES.CONTACTADMIN;
    
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

