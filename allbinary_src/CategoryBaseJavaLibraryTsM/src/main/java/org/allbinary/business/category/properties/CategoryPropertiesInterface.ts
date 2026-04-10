
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
        



import { CategoryHierarchyInterface } from "../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js";

    
import { TableMappingInterface } from "../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { ValidationInterface } from "../../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    

interface CategoryPropertiesInterface extends TableMappingInterface, ValidationInterface {
        

    public setValue(value: string)

    public getValue(): string

                @Throws(Exception::class)
            
    public getWebAppPath(): AbPath

                @Throws(Exception::class)
            
    public getPath(categoryHierarchyInterface: CategoryHierarchyInterface): AbPath

                @Throws(Exception::class)
            
    public getFileName(): string

                @Throws(Exception::class)
            
    public isRoot(): boolean

                @Throws(Exception::class)
            
    public isRealRoot(): boolean

}
                
            

