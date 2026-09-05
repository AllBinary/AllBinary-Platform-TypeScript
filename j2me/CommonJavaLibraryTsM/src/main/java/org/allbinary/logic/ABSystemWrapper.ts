
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2026 AllBinary 
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
        
            import { System } from '../../../java/lang/System.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ABSystemWrapper
            extends Object
         {
        

    private static readonly instance: ABSystemWrapper = new ABSystemWrapper();

    public static getInstance(): ABSystemWrapper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public arraycopy(src: any = {}, srcPos: number, dest: any = {}, destPos: number, length: number){
System.arraycopy(src, srcPos, dest, destPos, length);
    
}


    public currentTimeMillis(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Date.now();;
    
}


    public gc(){
System.gc();
    
}


}



