
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
        



import { HashMap } from "../../../java/util/HashMap.js";

    
import { Hashtable } from "../../../java/util/Hashtable.js";

    
import { Vector } from "../../../java/util/Vector.js";

    

/*actual*/ export class NullUtil
            extends Object
         {
        

    private static readonly instance: NullUtil = new NullUtil();
        
        

    /*actual*/ public static getInstance(): NullUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    /*actual*/ public readonly NULL_OBJECT: any = {} = new any = {}();
        
        

    /*actual*/ public readonly NULL_CLASS: KClass<*> = NULL_OBJECT::class!;
        
        

    /*actual*/ public readonly NULL_OBJECT_ARRAY: any = {}[] = new Array(0);
        
        

    /*actual*/ public readonly NULL_BYTE_ARRAY: ByteArray = ByteArray(0);
        
        

    /*actual*/ public readonly NULL_CHAR_ARRAY: string[] = 
                                                        
                                                        new Array(0)
                                                    ;
        
        

    /*actual*/ public readonly NULL_SHORT_ARRAY_ARRAY: ShortArray[] = Array(0) { ShortArray(0) };
        
        

    /*actual*/ public readonly NULL_INT_ARRAY: IntArray = IntArray(0);
        
        

    /*actual*/ public readonly NULL_INT_ARRAY_ARRAY: IntArray[] = Array(0) { IntArray(0) };
        
        

    /*actual*/ public readonly NULL_INT_ARRAY_ARRAY_ARRAY: IntArray[][] = Array(0) { Array(0) { IntArray(0) } };
        
        

    /*actual*/ public readonly NULL_FLOAT_ARRAY: FloatArray = FloatArray(0);
        
        

    /*actual*/ public readonly EMPTY_VECTOR: Vector<Any> = new Vector<Any>();
        
        

    /*actual*/ public readonly NULL_TABLE: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        

    /*actual*/ public readonly NULL_MAP: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

}
                
            

