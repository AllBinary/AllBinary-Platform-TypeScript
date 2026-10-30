
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
//not GWT import const CategoryView

import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { ThemeInterface } from '../../../../../../org/allbinary/logic/visual/theme/ThemeInterface.js';
//not GWT import const ThemeInterface

import { ThemePropertiesView } from '../../../../../../org/allbinary/logic/visual/theme/ThemePropertiesView.js';
//not GWT import const ThemePropertiesView

import { ThemeValidation } from '../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js';
//not GWT import const ThemeValidation

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreThemeCategoryInterface } from './StoreThemeCategoryInterface.js';
//not GWT import - same folder const StoreThemeCategoryInterface

export class StoreThemeCategoryPathView extends CategoryView implements DomNodeInterface {
        

public constructor (categoryInterface: StoreThemeCategoryInterface){
            super(categoryInterface as StoreThemeCategoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = super.toXmlNode(document)!;;
    

    let storeThemeCategoryInterface: StoreThemeCategoryInterface = this.getCategoryInterface() as StoreThemeCategoryInterface;;
    

    let themeArray: any[] = storeThemeCategoryInterface!.getThemes()!.toArray()!;;
    

    let size: number = themeArray!.length
                ;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let themeValidation: ThemeValidation = themeArray[i]! as ThemeValidation;;
    

    let domNodeInterface: DomNodeInterface = new ThemePropertiesView(themeValidation as ThemeInterface) as DomNodeInterface;;
    
node.appendChild(domNodeInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

