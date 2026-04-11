
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
        



import { BasicItem } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItem.js";

    
import { ItemInterface } from "../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { ValidationComponentInterface } from "../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    

export class NewValidationView extends InventoryItemView
                , ValidationComponentInterface {
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface, StringUtil.getInstance()!.EMPTY_STRING){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.itemInterface= BasicItem() as ItemInterface;
    
}


    public isValid(): Boolean{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

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


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Creating New Item";
    
}


}
                
            

