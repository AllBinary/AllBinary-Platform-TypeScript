
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
        



import { awt } from "../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { HelpSet } from "../../../../../javax/help/HelpSet.js";

    
import { AbstractInputRobot } from "../../../../../org/allbinary/input/automation/AbstractInputRobot.js";

    
import { PointFactory } from "../../../../../org/allbinary/input/automation/PointFactory.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class NullInputRobot extends AbstractInputRobot
                , InputRobotInterface {
        

    public static readonly LIBRARY_NAME: string = "null";
        
        

    public static readonly NAME: string = "NULL";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor ()                        

                            : super(
                            null){

            super();
            

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
                        return PointFactory.getInstance(0, 0);
    
}


    public keyPress(keycode: Integer){
var keycode = keycode
logUtil!.put("KeyCode: " +keycode, this, "keyPress")
}


    public keyRelease(keycode: Integer){
var keycode = keycode
logUtil!.put("KeyCode: " +keycode, this, "keyRelease")
}


    public mouseMove(x: Integer, y: Integer){
var x = x
var y = y
logUtil!.put("X: " +x +" Y: " +y, this, "mouseMove")
}


    public mousePress(buttons: Integer){
var buttons = buttons
logUtil!.put("Buttons: " +buttons, this, "mousePress")
}


    public mouseRelease(buttons: Integer){
var buttons = buttons
logUtil!.put("Buttons: " +buttons, this, "mouseRelease")
}


    public createScreenCapture(screenRect: Rectangle): BufferedImage{
var screenRect = screenRect



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public delay(ms: Integer){
var ms = ms
}


    public getAutoDelay(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getPixelColor(x: Integer, y: Integer): Color{
var x = x
var y = y



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public isAutoWaitForIdle(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public mouseWheel(wheelAmt: Integer){
var wheelAmt = wheelAmt
}


    public setAutoDelay(ms: Integer){
var ms = ms
}


    public setAutoWaitForIdle(isOn: boolean){
var isOn = isOn
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "DirectXWindowsInputRobot";
    
}


    public waitForIdle(){
}


}
                
            

