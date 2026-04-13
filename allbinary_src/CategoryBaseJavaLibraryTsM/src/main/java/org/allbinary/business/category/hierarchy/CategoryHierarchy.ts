
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { CategoryData } from "../../../../../org/allbinary/business/category/CategoryData.js";

    
import { CategoryInterface } from "../../../../../org/allbinary/business/category/CategoryInterface.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class CategoryHierarchy
            extends Object
        
                , CategoryHierarchyInterface {
        

    private rootCategoryInterface: CategoryInterface

    private parentCategoryInterface: CategoryInterface

    private level: number
public constructor (rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface){

            super();
            var rootCategoryInterface = rootCategoryInterface
var parentCategoryInterface = parentCategoryInterface
this.level= 0;
    
this.setRoot(rootCategoryInterface);
    
this.setParent(parentCategoryInterface);
    
}

public constructor (rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, level: number){

            super();
            var rootCategoryInterface = rootCategoryInterface
var parentCategoryInterface = parentCategoryInterface
var level = level
this.level= level;
    
this.setRoot(rootCategoryInterface);
    
this.setParent(parentCategoryInterface);
    
}

public constructor (rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesHashMap: HashMap<any, any>){

            super();
            var rootCategoryInterface = rootCategoryInterface
var parentCategoryInterface = parentCategoryInterface
var categoryPropertiesHashMap = categoryPropertiesHashMap

    var levelString: string = StringUtil.getInstance()!.getInstance(categoryPropertiesHashMap!.get(CategoryData.getInstance()!.LEVEL);

                         as String)!;
        
        
;
    
this.level= Integer.valueOf(levelString)!.toInt();
    
this.setRoot(rootCategoryInterface);
    
this.setParent(parentCategoryInterface);
    
}


    public getLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.level;
    
}


    public getLevelString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.level.toString();

                        ;
    
}


    public setLevel(level: number){
var level = level
this.level= level;
    
}


    public setParent(categoryInterface: CategoryInterface){
var categoryInterface = categoryInterface
this.parentCategoryInterface= categoryInterface;
    
}


    public setRoot(categoryInterface: CategoryInterface){
var categoryInterface = categoryInterface
this.rootCategoryInterface= categoryInterface;
    
}


    public getRoot(): CategoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rootCategoryInterface;
    
}


    public getParent(): CategoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.parentCategoryInterface;
    
}


}
                
            

