
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
        
import { CategoryView } from '../../../../../../org/allbinary/business/category/CategoryView.js';
      //not GWT import const CategoryView = globalThis.org.allbinary.business.category.CategoryView;

      
import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ThemeInterface } from '../../../../../../org/allbinary/logic/visual/theme/ThemeInterface.js';
      //not GWT import const ThemeInterface = globalThis.org.allbinary.logic.visual.theme.ThemeInterface;

      
import { ThemePropertiesView } from '../../../../../../org/allbinary/logic/visual/theme/ThemePropertiesView.js';
      //not GWT import const ThemePropertiesView = globalThis.org.allbinary.logic.visual.theme.ThemePropertiesView;

      
import { ThemeValidation } from '../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js';
      //not GWT import const ThemeValidation = globalThis.org.allbinary.logic.visual.theme.ThemeValidation;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreThemeCategoryInterface } from './StoreThemeCategoryInterface.js';
//not GWT import const StoreThemeCategoryInterface = globalThis.org.allbinary.business.category.store.theme.StoreThemeCategoryInterface;

                
export class StoreThemeCategoryPathView extends CategoryView implements DomNodeInterface {
        

public constructor (categoryInterface: StoreThemeCategoryInterface){
            super(categoryInterface as StoreThemeCategoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = super.toXmlNode(document)!;;
    

    var storeThemeCategoryInterface: StoreThemeCategoryInterface = this.getCategoryInterface() as StoreThemeCategoryInterface;;
    

    var themeArray: any[] = storeThemeCategoryInterface!.getThemes()!.toArray()!;;
    

    var size: number = themeArray!.length
                ;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var themeValidation: ThemeValidation = themeArray[i]! as ThemeValidation;;
    

    var domNodeInterface: DomNodeInterface = new ThemePropertiesView(themeValidation as ThemeInterface) as DomNodeInterface;;
    
node.appendChild(domNodeInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



