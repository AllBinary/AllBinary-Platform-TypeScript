
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
        



            import { Object } from '../../../java/lang/Object.js';
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { DisplayInfoSingleton } from '../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StaticViewPosition } from './StaticViewPosition.js';
import { ViewPositionBase } from './ViewPositionBase.js';

export class CenterStaticViewPositionFactory
            extends Object
         {
        

public constructor (){

            super();
        }


    public getInstance(z: number): ViewPositionBase{

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StaticViewPosition((displayInfoSingleton!.getLastWidth()>>1), (displayInfoSingleton!.getLastHeight()>>1), z);
    
}


}
                
            

