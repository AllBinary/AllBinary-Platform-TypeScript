
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../../java/util/HashMap.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    

interface CategoryFactoryInterface {
        

    getRootInstance(): CategoryInterface

    getRootInstance(categoryPath: AbPath): CategoryInterface

    getRootInstanceFromNode(node: Node): CategoryInterface

    getInstance(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, name: string): CategoryInterface

    getInstance(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, node: Node): CategoryInterface

    getInstance(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesHashMap: HashMap<any, any>): CategoryInterface

}
                
            

