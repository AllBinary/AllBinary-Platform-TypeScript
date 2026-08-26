
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { CategoryHierarchyInterface } from '../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js';
      const CategoryHierarchyInterface = globalThis.org.allbinary.business.category.hierarchy.CategoryHierarchyInterface;

      
//not game specific package import { TableMappingInterface } from '../../../../../org/allbinary/data/tables/TableMappingInterface.js';
      const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
//not game specific package import { ValidationInterface } from '../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
      const ValidationInterface = globalThis.org.allbinary.logic.control.validate.ValidationInterface;

      
//not game specific package import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface CategoryPropertiesInterface extends TableMappingInterface, ValidationInterface {
        

    setValue(value: string)

    getValue(): string

                //@Throws(Exception.constructor)
            
    getWebAppPath(): AbPath

                //@Throws(Exception.constructor)
            
    getPath(categoryHierarchyInterface: CategoryHierarchyInterface): AbPath

                //@Throws(Exception.constructor)
            
    getFileName(): string

                //@Throws(Exception.constructor)
            
    isRoot(): boolean

                //@Throws(Exception.constructor)
            
    isRealRoot(): boolean

}
                
            

