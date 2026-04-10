
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
        



import { CategoryData } from "../../../../../org/allbinary/business/category/CategoryData.js";

    
import { DomNodeInterface } from "../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Element } from "../../../../../org/w3c/dom/Element.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

export class CategoryPropertiesView
            extends Object
        
                , DomNodeInterface {
        

    categoryPropertiesInterface: CategoryPropertiesInterface
public constructor (categoryPropertiesInterface: CategoryPropertiesInterface){

            super();
            var categoryPropertiesInterface = categoryPropertiesInterface
this.categoryPropertiesInterface= categoryPropertiesInterface
}


                @Throws(Exception::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var categoryNode: Node = document.createElement(CategoryData.getInstance()!.NAME)!;
        
        


    var newCategoryNode: Element = categoryNode as Element;
        
        

setAttribute(CategoryData.getInstance()!.LABEL, this.categoryPropertiesInterface!.getValue())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryNode;
    
}


}
                
            

