
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { awt } from '../../../../../java/awt.js';
//not GWT import const awt

import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { HelpSet } from '../../../../../javax/help/HelpSet.js';
//not GWT import const HelpSet

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Rectangle } from './Rectangle.js';
//sameFolderImports - not GWT import - same folder const Rectangle
import { Color } from './Color.js';
//sameFolderImports - not GWT import - same folder const Color
import { Point } from './Point.js';
//sameFolderImports - not GWT import - same folder const Point

export interface InputRobotInterface {
        

    getName(): string;

    getHelpSet(): HelpSet;

    createScreenCapture(screenRect: Rectangle): BufferedImage;

    delay(ms: Integer): void;

    getAutoDelay(): Integer;

    getPixelColor(x: Integer, y: Integer): Color;

    isAutoWaitForIdle(): boolean;

    keyPress(keycode: Integer): void;

    keyRelease(keycode: Integer): void;

    getMousePoint(): Point;

    mouseMove(x: Integer, y: Integer): void;

    mousePress(buttons: Integer): void;

    mouseRelease(buttons: Integer): void;

    mouseWheel(wheelAmt: Integer): void;

    setAutoDelay(ms: Integer): void;

    setAutoWaitForIdle(isOn: boolean): void;

    toString(): string;

    waitForIdle(): void;

    mouseMove(point: Point): void;

                //@Throws(Exception.constructor)
            
    mouseMoveToTarget(rectangle: Rectangle): void;

                //@Throws(Exception.constructor)
            
    mouseMoveToTarget(rectangle: Rectangle, x: Integer, y: Integer): void;

}

