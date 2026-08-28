
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
      const CategoryData = globalThis.org.allbinary.business.category.CategoryData;

      
//not game specific package import { DomNodeInterface } from '../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Element } from '../../../../../org/w3c/dom/Element.js';
      const Element = globalThis.org.w3c.dom.Element;

      
//not game specific package import { Node } from '../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryPropertiesInterface } from './CategoryPropertiesInterface.js';

export class CategoryPropertiesView
            extends Object
         implements DomNodeInterface {
        

    categoryPropertiesInterface: CategoryPropertiesInterface;

public constructor (categoryPropertiesInterface: CategoryPropertiesInterface){

            super();
        this.categoryPropertiesInterface= categoryPropertiesInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var categoryNode: Node = document.createElement(CategoryData.getInstance()!.NAME)!;;
    

    var newCategoryNode: Element = categoryNode as Element;;
    
newCategoryNode!.setAttribute(CategoryData.getInstance()!.LABEL, this.categoryPropertiesInterface!.getValue());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryNode;
    
}


}



