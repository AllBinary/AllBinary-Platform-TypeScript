
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
//not GWT import const awt

import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { HelpSet } from '../../../../../javax/help/HelpSet.js';
//not GWT import const HelpSet

import { PointHelper } from '../../../../../org/allbinary/input/automation/PointHelper.js';
//not GWT import const PointHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputRobotInterface } from './InputRobotInterface.js';
//sameFolderImports - not GWT import - same folder const InputRobotInterface
import { Robot } from './Robot.js';
//sameFolderImports - not GWT import - same folder const Robot
import { GraphicsDevice } from './GraphicsDevice.js';
//sameFolderImports - not GWT import - same folder const GraphicsDevice
import { MouseInfo } from './MouseInfo.js';
//sameFolderImports - not GWT import - same folder const MouseInfo
import { Point } from './Point.js';
//sameFolderImports - not GWT import - same folder const Point
import { Rectangle } from './Rectangle.js';
//sameFolderImports - not GWT import - same folder const Rectangle
import { Color } from './Color.js';
//sameFolderImports - not GWT import - same folder const Color

export class InputRobot
            extends Object
         implements InputRobotInterface {
        

    public static readonly NAME: string = "Java Robot";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private robot: Robot;

public constructor (graphicsDevice: GraphicsDevice){

            super();
        this.robot= new Robot(graphicsDevice);
    
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

    let point: Point = MouseInfo.getPointerInfo()!.getLocation()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return point;
    
}

mouseMoveToTarget(...args: any[]): any {
   
    if (args.length === 3) return this.mouseMoveToTarget$overload1(args[0], args[1], args[2]);
   
    if (args.length === 1) return this.mouseMoveToTarget$overload2(args[0]);
   
   throw new TypeError('No matching overload: mouseMoveToTarget'); }
  
                //@Throws(Exception.constructor)
            
    public mouseMoveToTarget$overload1(rectangle: Rectangle, x: Integer, y: Integer){

    let point: Point = PointHelper.getCenterPoint(rectangle)!;;
    
this.robot.mouseMove(point.x +x, point.y +y);
    

    let message: string = new StringMaker().append("Moved Mouse To: x: ")!.appendint(point.x)!.append(" y: ")!.appendint(point.y)!.append(" in the middle of: ")!.append(StringUtil.getInstance()!.toString(rectangle))!.toString()!;;
    
this.logUtil!.putF(message, this, "moveMouseToTarget");
    
}

mouseMove(...args: any[]): any {
   
    if (args.length === 1) return this.mouseMove$overload1(args[0]);
   
    if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.mouseMove$overload2(args[0], args[1]);
   
    if (args.length === 2) return this.mouseMove$overload3(args[0], args[1]);
   
   throw new TypeError('No matching overload: mouseMove'); }
  
    public mouseMove$overload1(point: Point){
this.mouseMove(point.x, point.y);
    
}


    public mouseMove$overload2(x: number, y: number){
this.robot.mouseMove(x, y);
    

    let message: string = new StringMaker().append("Moved Mouse To: x: ")!.appendint(x)!.append(" y: ")!.appendint(y)!.toString()!;;
    
this.logUtil!.putF(message, this, "moveMouse");
    
}


                //@Throws(Exception.constructor)
            
    public mouseMoveToTarget$overload2(rectangle: Rectangle){
this.mouseMoveToTarget(rectangle, 0, 0);
    
}


    public createScreenCapture(screenRect: Rectangle): BufferedImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.robot.createScreenCapture(screenRect);;
    
}


    public delay(ms: Integer){
this.robot.delay(ms);
    
}


    public getAutoDelay(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.robot.getAutoDelay();;
    
}


    public getPixelColor(x: Integer, y: Integer): Color{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.robot.getPixelColor(x, y);;
    
}


    public isAutoWaitForIdle(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.robot.isAutoWaitForIdle();;
    
}


    public keyPress(keycode: Integer){
this.robot.keyPress(keycode);
    
}


    public keyRelease(keycode: Integer){
this.robot.keyRelease(keycode);
    
}


    public mouseMove$overload3(x: Integer, y: Integer){
this.robot.mouseMove(x, y);
    
}


    public mousePress(buttons: Integer){
this.robot.mousePress(buttons);
    
}


    public mouseRelease(buttons: Integer){
this.robot.mouseRelease(buttons);
    
}


    public mouseWheel(wheelAmt: Integer){
this.robot.mouseWheel(wheelAmt);
    
}


    public setAutoDelay(ms: Integer){
this.robot.setAutoDelay(ms);
    
}


    public setAutoWaitForIdle(isOn: boolean){
this.robot.setAutoWaitForIdle(isOn);
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.robot.toString();;
    
}


    public waitForIdle(){
this.robot.waitForIdle();
    
}


    public on(){
}


    public off(){
}


}

