
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { CategoryHierarchyInterface } from '../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js';
//not GWT import const CategoryHierarchyInterface = globalThis.org.allbinary.business.category.hierarchy.CategoryHierarchyInterface;

      
import { CategoryPropertiesInterface } from '../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
//not GWT import const CategoryPropertiesInterface = globalThis.org.allbinary.business.category.properties.CategoryPropertiesInterface;

      
import { TableMappingInterface } from '../../../../org/allbinary/data/tables/TableMappingInterface.js';
//not GWT import const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
import { ValidationInterface } from '../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
//not GWT import const ValidationInterface = globalThis.org.allbinary.logic.control.validate.ValidationInterface;

      
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface CategoryInterface extends TableMappingInterface, ValidationInterface {
        

    getChildNodes(): BasicArrayList

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



