
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
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { LocationPaintableInterface } from '../../../org/allbinary/graphics/paint/LocationPaintableInterface.js';
      const LocationPaintableInterface = globalThis.org.allbinary.graphics.paint.LocationPaintableInterface;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface AnimationInterface extends LocationPaintableInterface {
        

                //@Throws(Exception.constructor)
            
    nextFrame()

    paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number)

}
                
            

