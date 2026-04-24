
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
        



import { Arrays } from "../../../../../../java/util/Arrays.js";

    
import { CategoryView } from "../../../../../../org/allbinary/business/category/CategoryView.js";

    
import { DomNodeInterface } from "../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ThemeValidation } from "../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { StoreThemeCategoryInterface } from "./StoreThemeCategoryInterface.js";

export class StoreThemeCategoryView extends CategoryView implements DomNodeInterface {
        
public constructor (categoryInterface: StoreThemeCategoryInterface){
            super(categoryInterface as StoreThemeCategoryInterface);
                        //var categoryInterface = categoryInterface


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
    //var document = document

    var node: Node = super.toXmlNode(document)!;
        
        
;
    

    var storeThemeCategoryInterface: StoreThemeCategoryInterface = this.getCategoryInterface(); as StoreThemeCategoryInterface;
        
        
;
    

    var themeValidationArray: ThemeValidation[] = storeThemeCategoryInterface!.getThemes()!.toArray(); as Array<ThemeValidation?>;
        
        
;
    
Arrays.sort(themeValidationArray, new ThemeComparator());
    

    var size: number = themeValidationArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var themeValidation: ThemeValidation = themeValidationArray[index]! as ThemeValidation;
        
        
;
    
node.appendChild(themeValidation!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

