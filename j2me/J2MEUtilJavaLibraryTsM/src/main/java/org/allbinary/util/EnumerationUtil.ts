
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
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Enumeration } from '../../../java/util/Enumeration.js';
//not GWT import const Enumeration = globalThis.java.util.Enumeration;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

                //not plain js - same folder import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

                //ArkTs does not have this.  So this is for the ArkTs build.
export class EnumerationUtil
            extends Object
         {
        

    private static readonly instance: EnumerationUtil = new EnumerationUtil();

    public static getInstance(): EnumerationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EnumerationUtil.instance;
    
}


    public hasMoreElements(enumeration: Enumeration<any>): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return enumeration.hasMoreElements();;
    
}


    public nextElement(enumeration: Enumeration<any>): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return enumeration.nextElement()!;;
    
}


    public getAsArray(enumeration: Enumeration<any>): any[]{

    var basicArrayList: BasicArrayList = new BasicArrayListD();;
    

        while(this.hasMoreElements(enumeration))
        {
basicArrayList!.add(this.nextElement(enumeration)!);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayList!.toArray();;
    
}


}



