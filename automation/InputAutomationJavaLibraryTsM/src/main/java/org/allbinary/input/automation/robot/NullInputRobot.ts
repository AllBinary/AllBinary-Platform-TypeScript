
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { awt } from '../../../../../java/awt.js';
      
import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
      
import { HelpSet } from '../../../../../javax/help/HelpSet.js';
      
import { AbstractInputRobot } from '../../../../../org/allbinary/input/automation/AbstractInputRobot.js';
      
import { PointFactory } from '../../../../../org/allbinary/input/automation/PointFactory.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputRobotInterface } from './InputRobotInterface.js';
import { Point } from './Point.js';
import { Rectangle } from './Rectangle.js';
import { Color } from './Color.js';

export class NullInputRobot extends AbstractInputRobot implements InputRobotInterface {
        

    public static readonly LIBRARY_NAME: string = "null";

    public static readonly NAME: string = "NULL";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
public constructor (){
            super(
                            null);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullInputRobot.NAME;
    
}


    public getHelpSet(): HelpSet{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getMousePoint(): Point{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointFactory.getInstance(0, 0);;
    
}


    public keyPress(keycode: Integer){
this.logUtil!.putF("KeyCode: " +keycode, this, "keyPress");
    
}


    public keyRelease(keycode: Integer){
this.logUtil!.putF("KeyCode: " +keycode, this, "keyRelease");
    
}


    public mouseMove(x: Integer, y: Integer){
this.logUtil!.putF("X: " +x +" Y: " +y, this, "mouseMove");
    
}


    public mousePress(buttons: Integer){
this.logUtil!.putF("Buttons: " +buttons, this, "mousePress");
    
}


    public mouseRelease(buttons: Integer){
this.logUtil!.putF("Buttons: " +buttons, this, "mouseRelease");
    
}


    public createScreenCapture(screenRect: Rectangle): BufferedImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public delay(ms: Integer){
}


    public getAutoDelay(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getPixelColor(x: Integer, y: Integer): Color{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public isAutoWaitForIdle(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public mouseWheel(wheelAmt: Integer){
}


    public setAutoDelay(ms: Integer){
}


    public setAutoWaitForIdle(isOn: boolean){
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "DirectXWindowsInputRobot";
    
}


    public waitForIdle(){
}


}
                
            

