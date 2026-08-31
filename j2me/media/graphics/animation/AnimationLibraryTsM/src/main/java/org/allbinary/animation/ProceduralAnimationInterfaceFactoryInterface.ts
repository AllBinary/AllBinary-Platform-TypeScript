
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicAnimationInterfaceFactoryInterface } from './BasicAnimationInterfaceFactoryInterface.js';
//not GWT import const BasicAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.BasicAnimationInterfaceFactoryInterface;

                import { Animation } from './Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

                
export interface ProceduralAnimationInterfaceFactoryInterface extends BasicAnimationInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    getInstanceAnimation(animationInterface: Animation): Animation

}



