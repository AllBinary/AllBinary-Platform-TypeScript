
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../java/util/Vector.js";

    
import { CategoryHierarchyInterface } from "../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js";

    
import { CategoryPropertiesInterface } from "../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js";

    
import { TableMappingInterface } from "../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { ValidationInterface } from "../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    

interface CategoryInterface extends TableMappingInterface, ValidationInterface {
        

    public getChildNodes(): Vector

    public addChildProperty(categoryPropertiesInterface: CategoryPropertiesInterface): boolean

    public addChild(categoryInterface: CategoryInterface): boolean

    public removeChild(categoryInterface: CategoryInterface): boolean

                //@Throws(Error::class)
            
    public isLeaf(): boolean

    public getProperties(): CategoryPropertiesInterface

    public setProperties(categoryPropertiesInterface: CategoryPropertiesInterface)

    public getHierarchy(): CategoryHierarchyInterface

    public setHierarchy(categoryHierarchyInterface: CategoryHierarchyInterface)

                //@Throws(Error::class)
            
    public getPath(): AbPath

                //@Throws(Error::class)
            
    public getFilePath(): AbPath

                //@Throws(Error::class)
            
    public getWebAppPath(): AbPath

                //@Throws(Error::class)
            
    public getRootFilePath(): AbPath

                //@Throws(Error::class)
            
    public log()

}
                
            

