
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Vector } from '../../../../java/util/Vector.js';

    
import { CategoryHierarchyInterface } from '../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js';

    
import { CategoryPropertiesInterface } from '../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';

    
import { TableMappingInterface } from '../../../../org/allbinary/data/tables/TableMappingInterface.js';

    
import { ValidationInterface } from '../../../../org/allbinary/logic/control/validate/ValidationInterface.js';

    
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface CategoryInterface extends TableMappingInterface, ValidationInterface {
        

    getChildNodes(): Vector

    addChildProperty(categoryPropertiesInterface: CategoryPropertiesInterface): boolean

    addChild(categoryInterface: CategoryInterface): boolean

    removeChild(categoryInterface: CategoryInterface): boolean

                //@Throws(Exception.constructor)
            
    isLeaf(): boolean

    getProperties(): CategoryPropertiesInterface

    setProperties(categoryPropertiesInterface: CategoryPropertiesInterface)

    getHierarchy(): CategoryHierarchyInterface

    setHierarchy(categoryHierarchyInterface: CategoryHierarchyInterface)

                //@Throws(Exception.constructor)
            
    getPath(): AbPath

                //@Throws(Exception.constructor)
            
    getFilePath(): AbPath

                //@Throws(Exception.constructor)
            
    getWebAppPath(): AbPath

                //@Throws(Exception.constructor)
            
    getRootFilePath(): AbPath

                //@Throws(Exception.constructor)
            
    log()

}
                
            

