
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
        



            import { Object } from "../../../../../java/lang/Object.js";


        
            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { awt } from "../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { HelpSet } from "../../../../../javax/help/HelpSet.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Rectangle } from "./Rectangle.js";
import { Color } from "./Color.js";
import { Point } from "./Point.js";

export interface InputRobotInterface {
        

    getName(): string

    getHelpSet(): HelpSet

    createScreenCapture(screenRect: Rectangle): BufferedImage

    delay(ms: number)

    getAutoDelay(): number

    getPixelColor(x: number, y: number): Color

    isAutoWaitForIdle(): boolean

    keyPress(keycode: number)

    keyRelease(keycode: number)

    getMousePoint(): Point

    mouseMove(x: number, y: number)

    mousePress(buttons: number)

    mouseRelease(buttons: number)

    mouseWheel(wheelAmt: number)

    setAutoDelay(ms: number)

    setAutoWaitForIdle(isOn: boolean)

    toString(): string

    waitForIdle()

    mouseMove(point: Point)

                //@Throws(Error::class)
            
    mouseMoveToTarget(rectangle: Rectangle)

                //@Throws(Error::class)
            
    mouseMoveToTarget(rectangle: Rectangle, x: number, y: number)

}
                
            

