
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
        



import { CategoryInterface } from "../../../../../org/allbinary/business/category/CategoryInterface.js";

    

export interface CategoryHierarchyInterface {
        

    public getLevel(): number

    public getLevelString(): string

    public getRoot(): CategoryInterface

    public getParent(): CategoryInterface

    public setLevel(level: number)

    public setRoot(categoryInterface: CategoryInterface)

    public setParent(categoryInterface: CategoryInterface)

}
                
            

