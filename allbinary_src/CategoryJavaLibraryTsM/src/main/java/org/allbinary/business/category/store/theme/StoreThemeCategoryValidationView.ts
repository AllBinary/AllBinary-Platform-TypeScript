
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
        



import { ValidationInterface } from "../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { StoreThemeCategoryView } from "./StoreThemeCategoryView.js";

import { StoreThemeCategoryInterface } from "./StoreThemeCategoryInterface.js";

export class StoreThemeCategoryValidationView extends StoreThemeCategoryView implements ValidationInterface {
        
public constructor (categoryInterface: StoreThemeCategoryInterface)                        

                            : super(categoryInterface as StoreThemeCategoryInterface){

            super();
            var categoryInterface = categoryInterface


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


                //@Throws(Error::class)
            
    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    
}


}
                
            

