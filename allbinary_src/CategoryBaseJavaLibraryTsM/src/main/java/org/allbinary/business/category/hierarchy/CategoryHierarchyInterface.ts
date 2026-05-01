
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
        



            import { Object } from "../../../../../java/lang/Object.js";


        
import { CategoryInterface } from "../../../../../org/allbinary/business/category/CategoryInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface CategoryHierarchyInterface {
        

    getLevel(): number

    getLevelString(): string

    getRoot(): CategoryInterface

    getParent(): CategoryInterface

    setLevel(level: number)

    setRoot(categoryInterface: CategoryInterface)

    setParent(categoryInterface: CategoryInterface)

}
                
            

