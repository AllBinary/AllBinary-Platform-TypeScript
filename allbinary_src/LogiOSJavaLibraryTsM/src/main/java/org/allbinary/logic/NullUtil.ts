
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
        



import { Hashtable } from "../../../java/util/Hashtable.js";

    
import { Vector } from "../../../java/util/Vector.js";

    

/*actual*/ export class NullUtil
            extends Object
         {
        

    private static readonly instance: NullUtil = new NullUtil();
        
        

    public static getInstance(): NullUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.instance;
    
}


    /*actual*/ public readonly NULL_OBJECT: any = {};
        
        

    /*actual*/ public readonly NULL_CLASS: Function = this.NULL_OBJECT.constructor!;
        
        

    /*actual*/ public readonly NULL_OBJECT_ARRAY: any[] = [];
        
        

    /*actual*/ public readonly NULL_CHAR_ARRAY: string[] = 
                                                        
                                                        new Array(0)
                                                    ;
        
        

    /*actual*/ public readonly NULL_BYTE_ARRAY: number[] = [];
        
        

    /*actual*/ public readonly NULL_SHORT_ARRAY_ARRAY: number[][] = new Array(0) [0];
        
        

    /*actual*/ public readonly NULL_INT_ARRAY: number[] = [];
        
        

    /*actual*/ public readonly NULL_INT_ARRAY_ARRAY: number[][] = new Array(0) [0];
        
        

    /*actual*/ public readonly NULL_INT_ARRAY_ARRAY_ARRAY: number[][][] = Array.from({ length: 0 }, () => Array.from({ length: 0 }, () => new Array(0).fill(0)));
        
        

    /*actual*/ public readonly NULL_FLOAT_ARRAY: number[] = [];
        
        

    /*actual*/ public readonly EMPTY_VECTOR: Vector<any> = new Vector<any>();
        
        

    /*actual*/ public readonly NULL_TABLE: Hashtable<any, any> = new Hashtable<any, any>();
        
        

}
                
            

