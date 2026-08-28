
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
        
//not game specific package import { CategoryView } from '../../../../../../org/allbinary/business/category/CategoryView.js';
      const CategoryView = globalThis.org.allbinary.business.category.CategoryView;

      
//not game specific package import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { ThemeInterface } from '../../../../../../org/allbinary/logic/visual/theme/ThemeInterface.js';
      const ThemeInterface = globalThis.org.allbinary.logic.visual.theme.ThemeInterface;

      
//not game specific package import { ThemePropertiesView } from '../../../../../../org/allbinary/logic/visual/theme/ThemePropertiesView.js';
      const ThemePropertiesView = globalThis.org.allbinary.logic.visual.theme.ThemePropertiesView;

      
//not game specific package import { ThemeValidation } from '../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js';
      const ThemeValidation = globalThis.org.allbinary.logic.visual.theme.ThemeValidation;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreThemeCategoryInterface } from './StoreThemeCategoryInterface.js';

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



