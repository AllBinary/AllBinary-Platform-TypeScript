
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
//not GWT import const CategoryData

import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
//not GWT import const CategoryInterface

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryHierarchyInterface } from './CategoryHierarchyInterface.js';
//sameFolderImports - not GWT import - same folder const CategoryHierarchyInterface

export class CategoryHierarchy
            extends Object
         implements CategoryHierarchyInterface {
        

    private rootCategoryInterface: CategoryInterface;

    private parentCategoryInterface: CategoryInterface;

    private level: number;

    public constructor(...args: any[]) {
        super();if(args.length === 2) {
            
            this.constructor$0(args[0], args[1]);
            
        }
        else if(args.length === 3 && args[0] instanceof CategoryInterface && args[1] instanceof CategoryInterface && typeof args[2] === 'number') {
            
            this.constructor$1(args[0], args[1], args[2]);
            
        }
        else if(args.length === 3) {
            
            this.constructor$2(args[0], args[1], args[2]);
            
        }
        
    }
    
    private constructor$0(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface): void {
        this.level= 0;
    
this.setRoot(rootCategoryInterface);
    
this.setParent(parentCategoryInterface);
    

    }
    
    private constructor$1(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, level: number): void {
        this.level= level;
    
this.setRoot(rootCategoryInterface);
    
this.setParent(parentCategoryInterface);
    

    }
    
    private constructor$2(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesHashMap: HashMap<any, any>): void {
        
    let levelString: string = StringUtil.getInstance()!.getNonNull(categoryPropertiesHashMap!.get(CategoryData.getInstance()!.LEVEL) as string)!;;
    
this.level= Integer.valueOf(levelString)!.intValue();
    
this.setRoot(rootCategoryInterface);
    
this.setParent(parentCategoryInterface);
    

    }
    
    public getLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.level;
    
}


    public getLevelString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.level.toString();;
    
}


    public setLevel(level: number){
this.level= level;
    
}


    public setParent(categoryInterface: CategoryInterface){
this.parentCategoryInterface= categoryInterface;
    
}


    public setRoot(categoryInterface: CategoryInterface){
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

