
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
        
import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
      //not GWT import const CategoryData = globalThis.org.allbinary.business.category.CategoryData;

      
import { DomNodeInterface } from '../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { Document } from '../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Element } from '../../../../../org/w3c/dom/Element.js';
      //not GWT import const Element = globalThis.org.w3c.dom.Element;

      
import { Node } from '../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryPropertiesInterface } from './CategoryPropertiesInterface.js';
//not GWT import const  = globalThis.org.allbinary.business.category.properties.CategoryPropertiesInterface;

                
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



