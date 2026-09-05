
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Arrays } from '../../../../../../java/util/Arrays.js';
//not GWT import const Arrays = globalThis.java.util.Arrays;

      
import { CategoryView } from '../../../../../../org/allbinary/business/category/CategoryView.js';
//not GWT import const CategoryView = globalThis.org.allbinary.business.category.CategoryView;

      
import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ThemeValidation } from '../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js';
//not GWT import const ThemeValidation = globalThis.org.allbinary.logic.visual.theme.ThemeValidation;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreThemeCategoryInterface } from './StoreThemeCategoryInterface.js';
//not GWT import - same folder const StoreThemeCategoryInterface = globalThis.org.allbinary.business.category.store.theme.StoreThemeCategoryInterface;

                import { ThemeComparator } from './ThemeComparator.js';
//not GWT import - same folder const ThemeComparator = globalThis.org.allbinary.business.category.store.theme.ThemeComparator;

                
export class StoreThemeCategoryView extends CategoryView implements DomNodeInterface {
        

public constructor (categoryInterface: StoreThemeCategoryInterface){
            super(categoryInterface as StoreThemeCategoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = super.toXmlNode(document)!;;
    

    var storeThemeCategoryInterface: StoreThemeCategoryInterface = this.getCategoryInterface() as StoreThemeCategoryInterface;;
    

    var themeValidationArray: ThemeValidation[] = storeThemeCategoryInterface!.getThemes()!.toArray() as ThemeValidation[];;
    
Arrays.sort(themeValidationArray, new ThemeComparator());
    

    var size: number = themeValidationArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var themeValidation: ThemeValidation = themeValidationArray[index]! as ThemeValidation;;
    
node.appendChild(themeValidation!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



