
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

    
import { PointHelper } from "../../../../../org/allbinary/input/automation/PointHelper.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class InputRobot
            extends Object
        
                , InputRobotInterface {
        

    public static readonly NAME: string = "Java Robot";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private robot: Robot
public constructor (graphicsDevice: GraphicsDevice){

            super();
                //var graphicsDevice = graphicsDevice
this.robot= Robot(graphicsDevice)
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputRobot.NAME;
    
}


    public getHelpSet(): HelpSet{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getMousePoint(): Point{

    var point: Point = MouseInfo.getPointerInfo()!.getLocation()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return point;
    
}


                @Throws(Exception::class)
            
    public mouseMoveToTarget(rectangle: Rectangle, x: Integer, y: Integer){
    //var rectangle = rectangle
    //var x = x
    //var y = y

    var point: Point = PointHelper.getCenterPoint(rectangle)!;
        
        

mouseMove(point.x +x, point.y +y)

    var message: string = StringMaker().
                            append("Moved Mouse To: x: ")!.appendint(point.x)!.append(" y: ")!.appendint(point.y)!.append(" in the middle of: ")!.append(StringUtil.getInstance()!.toString(rectangle))!.toString()!;
        
        

put(message, this, "moveMouseToTarget")
}


    public mouseMove(point: Point){
var point = point
this.mouseMove(point.x, point.y)
}


    public mouseMove(x: number, y: number){
    //var x = x
    //var y = y
mouseMove(x, y)

    var message: string = StringMaker().
                            append("Moved Mouse To: x: ")!.appendint(x)!.append(" y: ")!.appendint(y)!.toString()!;
        
        

put(message, this, "moveMouse")
}


                @Throws(Exception::class)
            
    public mouseMoveToTarget(rectangle: Rectangle){
var rectangle = rectangle
this.mouseMoveToTarget(rectangle, 0, 0)
}


    public createScreenCapture(screenRect: Rectangle): BufferedImage{
var screenRect = screenRect



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.robot.createScreenCapture(screenRect);
    
}


    public delay(ms: Integer){
var ms = ms
delay(ms)
}


    public getAutoDelay(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.robot.getAutoDelay();
    
}


    public getPixelColor(x: Integer, y: Integer): Color{
var x = x
var y = y



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.robot.getPixelColor(x, y);
    
}


    public isAutoWaitForIdle(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.robot.isAutoWaitForIdle();
    
}


    public keyPress(keycode: Integer){
var keycode = keycode
keyPress(keycode)
}


    public keyRelease(keycode: Integer){
var keycode = keycode
keyRelease(keycode)
}


    public mouseMove(x: Integer, y: Integer){
var x = x
var y = y
mouseMove(x, y)
}


    public mousePress(buttons: Integer){
var buttons = buttons
mousePress(buttons)
}


    public mouseRelease(buttons: Integer){
var buttons = buttons
mouseRelease(buttons)
}


    public mouseWheel(wheelAmt: Integer){
var wheelAmt = wheelAmt
mouseWheel(wheelAmt)
}


    public setAutoDelay(ms: Integer){
var ms = ms
setAutoDelay(ms)
}


    public setAutoWaitForIdle(isOn: boolean){
var isOn = isOn
setAutoWaitForIdle(isOn)
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.robot.toString();
    
}


    public waitForIdle(){
waitForIdle()
}


    public on(){
}


    public off(){
}


}
                
            

