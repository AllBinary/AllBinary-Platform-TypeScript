
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
        
import { Vector } from '../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { ABHashMap } from '../../../org/allbinary/util/ABHashMap.js';
      //not GWT import const ABHashMap = globalThis.org.allbinary.util.ABHashMap;

      
import { ABHashtable } from '../../../org/allbinary/util/ABHashtable.js';
      //not GWT import const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
import { ABStack } from '../../../org/allbinary/util/ABStack.js';
      //not GWT import const ABStack = globalThis.org.allbinary.util.ABStack;

      
import { ABVector } from '../../../org/allbinary/util/ABVector.js';
      //not GWT import const ABVector = globalThis.org.allbinary.util.ABVector;

      
















                                        
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

    /*actual*/ public readonly NULL_TABLE: ABHashtable = this.createHashtable()!;

    /*actual*/ public readonly NULL_MAP: ABHashMap = this.createHashMap()!;

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



