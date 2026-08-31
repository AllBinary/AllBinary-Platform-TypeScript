
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { Document } from '../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryInterface } from './CategoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.business.category.CategoryInterface;

                import { CategoryView } from './CategoryView.js';
//not GWT import const  = globalThis.org.allbinary.business.category.CategoryView;

                
export class CategoriesView
            extends Object
         implements DomNodeInterface {
        

    private categoryInterface: CategoryInterface;

public constructor (categoryInterface: CategoryInterface){

            super();
        this.categoryInterface= categoryInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = new CategoryView(this.categoryInterface).toXmlNode(document)!;;
    

    var childArray: any[] = this.categoryInterface!.getChildNodes()!.toArray()!;;
    

    var size: number = childArray!.length
                ;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var childCategoryInterface: CategoryInterface = childArray[i]! as CategoryInterface;;
    

    var childCategoryNode: Node = new CategoriesView(childCategoryInterface).toXmlNode(document)!;;
    
node.appendChild(childCategoryNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



