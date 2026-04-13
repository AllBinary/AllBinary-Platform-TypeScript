
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { awt } from "../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { HelpSet } from "../../../../../javax/help/HelpSet.js";

    

interface InputRobotInterface {
        

    getName(): string

    getHelpSet(): HelpSet

    createScreenCapture(screenRect: Rectangle): BufferedImage

    delay(ms: Integer)

    getAutoDelay(): Integer

    getPixelColor(x: Integer, y: Integer): Color

    isAutoWaitForIdle(): boolean

    keyPress(keycode: Integer)

    keyRelease(keycode: Integer)

    getMousePoint(): Point

    mouseMove(x: Integer, y: Integer)

    mousePress(buttons: Integer)

    mouseRelease(buttons: Integer)

    mouseWheel(wheelAmt: Integer)

    setAutoDelay(ms: Integer)

    setAutoWaitForIdle(isOn: boolean)

    toString(): string

    waitForIdle()

    mouseMove(point: Point)

                //@Throws(Error::class)
            
    mouseMoveToTarget(rectangle: Rectangle)

                //@Throws(Error::class)
            
    mouseMoveToTarget(rectangle: Rectangle, x: Integer, y: Integer)

}
                
            

