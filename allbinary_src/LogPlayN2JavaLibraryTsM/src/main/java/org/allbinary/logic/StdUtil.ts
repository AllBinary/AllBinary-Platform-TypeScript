
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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

        


            import { Object } from '../../../java/lang/Object.js';
        



//not plain js import { ABHashMap } 
const ABHashMap = globalThis.org.allbinary.util.ABHashMap;
type ABHashMap<T = any, U = any> = typeof ABHashMap extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashMap;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { ABStack } 
const ABStack = globalThis.org.allbinary.util.ABStack;
type ABStack<T = any, U = any> = typeof ABStack extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABStack;

//not plain js import { ABVector } 
const ABVector = globalThis.org.allbinary.util.ABVector;
type ABVector<T = any, U = any> = typeof ABVector extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABVector;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //ActualPlatform
/*actual*/ export class StdUtil
            extends Object
         {
        

    private static readonly instance: StdUtil = new StdUtil();

    /*actual*/ public static getInstance(): StdUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StdUtil.instance;
    
}


    /*actual*/ public readonly EMPTY_VECTOR: ABVector<any> = this.createVector()!;

    /*actual*/ public readonly NULL_TABLE: ABHashtable<any, any> = this.createHashtable()!;

    /*actual*/ public readonly NULL_MAP: ABHashMap<any, any> = this.createHashMap()!;

    public createStack(): ABStack<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ABStack<any>();
    
}


    public createVector(): ABVector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ABVector<any>();
    
}


    public createHashtable(): ABHashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ABHashtable<any, any>();
    
}


    public createHashMap(): ABHashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ABHashMap<any, any>();
    
}


}

