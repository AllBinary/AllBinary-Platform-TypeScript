
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

      
import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { LocationPaintableInterface } from '../../../org/allbinary/graphics/paint/LocationPaintableInterface.js';
      //not GWT import const LocationPaintableInterface = globalThis.org.allbinary.graphics.paint.LocationPaintableInterface;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface AnimationInterface extends LocationPaintableInterface {
        

                //@Throws(Exception.constructor)
            
    nextFrame()

    paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number)

}



