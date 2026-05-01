
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


        
import { CategoryHierarchyInterface } from "../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js";

    
import { TableMappingInterface } from "../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { ValidationInterface } from "../../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface CategoryPropertiesInterface extends TableMappingInterface, ValidationInterface {
        

    setValue(value: string)

    getValue(): string

                //@Throws(Error::class)
            
    getWebAppPath(): AbPath

                //@Throws(Error::class)
            
    getPath(categoryHierarchyInterface: CategoryHierarchyInterface): AbPath

                //@Throws(Error::class)
            
    getFileName(): string

                //@Throws(Error::class)
            
    isRoot(): boolean

                //@Throws(Error::class)
            
    isRealRoot(): boolean

}
                
            

