
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

        


import { HashMap } from '../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryInterface } from './CategoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.business.category.CategoryInterface;

                
export interface CategoryFactoryInterface {
        

    getRootInstance(): CategoryInterface

    getRootInstance(categoryPath: AbPath): CategoryInterface

    getRootInstanceFromNode(node: Node): CategoryInterface

    getInstance(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, name: string): CategoryInterface

    getInstance(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, node: Node): CategoryInterface

    getInstance(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesHashMap: HashMap<any, any>): CategoryInterface

}



