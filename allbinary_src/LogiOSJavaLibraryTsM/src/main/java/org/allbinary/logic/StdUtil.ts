
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
        
import { HashMap } from '../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Hashtable } from '../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { Stack } from '../../../java/util/Stack.js';
      //not GWT import const Stack = globalThis.java.util.Stack;

      
import { Vector } from '../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //ActualPlatform
/*actual*/ export class StdUtil
            extends Object
         {
        

    private static readonly instance: StdUtil = new StdUtil();

    public static getInstance(): StdUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StdUtil.instance;
    
}


    /*actual*/ public readonly EMPTY_VECTOR: Vector<any> = this.createVector()!;

    /*actual*/ public readonly NULL_TABLE: Hashtable<any, any> = this.createHashtable()!;

    /*actual*/ public readonly NULL_MAP: HashMap<any, any> = this.createHashMap()!;

    public createStack(): Stack<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Stack<any>();
    
}


    public createVector(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Vector<any>();
    
}


    public createHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Hashtable<any, any>();
    
}


    public createHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HashMap<any, any>();
    
}


}



