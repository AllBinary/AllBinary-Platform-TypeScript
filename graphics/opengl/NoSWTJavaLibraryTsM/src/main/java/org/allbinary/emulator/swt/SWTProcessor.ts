
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Runnable } from '../../../../java/lang/Runnable.js';
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Display } from '../../../../org/eclipse/swt/widgets/Display.js';
      const Display = globalThis.org.eclipse.swt.widgets.Display;

      
//not game specific package import { NullRunnable } from '../../../../org/allbinary/thread/NullRunnable.js';
      const NullRunnable = globalThis.org.allbinary.thread.NullRunnable;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SWTProcessor
            extends Object
         {
        

    private static readonly instance: SWTProcessor = new SWTProcessor();

    public static getInstance(): SWTProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SWTProcessor.instance;
    
}


    public runnable: Runnable = NullRunnable.getInstance()!;

    public process(display: Display){
display.sleep();
    
}


}



