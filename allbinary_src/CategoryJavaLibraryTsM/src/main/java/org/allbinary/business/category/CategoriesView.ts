
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
        



import { DomNodeInterface } from "../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CategoryInterface } from "./CategoryInterface.js";

export class CategoriesView
            extends Object
         implements DomNodeInterface {
        

    private categoryInterface: CategoryInterface
public constructor (categoryInterface: CategoryInterface){

            super();
        var categoryInterface = categoryInterface
this.categoryInterface= categoryInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = new CategoryView(this.categoryInterface).
                            toXmlNode(document)!;
        
        
;
    

    var childArray: any[] = this.categoryInterface!.getChildNodes()!.toArray()!;
        
        
;
    

    var size: number = childArray!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var childCategoryInterface: CategoryInterface = childArray[i]! as CategoryInterface;
        
        
;
    

    var childCategoryNode: Node = new CategoriesView(childCategoryInterface).
                            toXmlNode(document)!;
        
        
;
    
node.appendChild(childCategoryNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

