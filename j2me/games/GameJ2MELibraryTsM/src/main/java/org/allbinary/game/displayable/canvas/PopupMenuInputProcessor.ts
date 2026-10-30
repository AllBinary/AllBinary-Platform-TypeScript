
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
        
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
//not GWT import const GameInputStrings

import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent

import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle

import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
//not GWT import const MyCanvas

import { MotionGestureInput } from '../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
//not GWT import const MotionGestureInput

import { TouchMotionGestureFactory } from '../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
//not GWT import const TouchMotionGestureFactory

import { MotionGestureEvent } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
//not GWT import const MotionGestureEvent

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { RectangleCollisionUtil } from '../../../../../org/allbinary/math/RectangleCollisionUtil.js';
//not GWT import const RectangleCollisionUtil

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';
//not GWT import - same folder const BasicMenuInputProcessor
import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';
//not GWT import - same folder const AllBinaryGameCanvas

export class PopupMenuInputProcessor extends BasicMenuInputProcessor {
        

    private readonly rectangleCollisionUtil: RectangleCollisionUtil = RectangleCollisionUtil.getInstance()!;

    private readonly CLICK_DELAY: number = 120;

    private readonly clickTimeHelper: TimeDelayHelper = new TimeDelayHelper(this.CLICK_DELAY);

    private rectangle: Rectangle;

public constructor (gameKeyEventList: BasicArrayList, playerInputId: number, gameCanvas: MyCanvas, rectangle: Rectangle){
            super(gameKeyEventList, playerInputId, gameCanvas);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.rectangle= rectangle;
    
}


    public init(rectangle: Rectangle){
this.rectangle= rectangle;
    
}


                //@Throws(Exception.constructor)
            
    public processInput(key: number): number{

                        if(key == Canvas.KEY_STAR)
                        
                                    {
                                    
    let gameCanvas: AllBinaryGameCanvas = this.getCanvas() as AllBinaryGameCanvas;;
    
gameCanvas!.toggleMenu();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(Exception.constructor)
            
    public processInputList(): number{

 try { 
    let motionInputsIndex: number = this.processMotionInputs()!;;
    

    let list: BasicArrayList = this.getGameKeyEventList()!;;
    

    let size: number = list.size()!;;
    

    let key: number = 0;;
    

    let gameKeyEvent: GameKeyEvent;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
gameKeyEvent= list.objectArray[index]! as GameKeyEvent;
    

                        if(gameKeyEvent != 
                                    null
                                )
                        
                                    {
                                    key= gameKeyEvent!.getKey();
    

                        if(this.processInput(key) == 1)
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                
}

this.clear();
    

                        if(size > 0 || motionInputsIndex >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, GameInputStrings.getInstance()!.PROCESS_INPUT, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public processMotionInputs(): number{

    let lastIndex: number = this.motionGestureEventList!.size() -1;;
    

                        if(lastIndex >= 0)
                        
                                    {
                                    
    let motionGestureEvent: MotionGestureEvent = this.motionGestureEventList!.objectArray[lastIndex]! as MotionGestureEvent;;
    
this.processMotionInput(motionGestureEvent);
    

                                    }
                                
this.motionGestureEventList!.clear();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastIndex;
    
}


                //@Throws(Exception.constructor)
            
    processMotionInput(motionGestureEvent: MotionGestureEvent){

                        if(motionGestureEvent == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF("Exception: Bug", this, this.gameInputStrings!.PROCESS_MOTION_INPUT);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    let touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;;
    

    let motionGestureInput: MotionGestureInput = motionGestureEvent!.getMotionGesture()!;;
    

                        if(motionGestureInput == touchMotionGestureFactory!.RELEASED)
                        
                                    {
                                    
    let point: GPoint = motionGestureEvent!.getCurrentPoint()!;;
    

    let rectPoint: GPoint = this.rectangle.getPoint()!;;
    

                        if(this.rectangleCollisionUtil!.isInside(rectPoint!.getX(), rectPoint!.getY(), this.rectangle.getMaxX() +20, this.rectangle.getMaxY(), point.getX(), point.getY()))
                        
                                    {
                                    
                        if(this.clickTimeHelper!.isTimeTNT())
                        
                                    {
                                    
    let gameCanvas: AllBinaryGameCanvas = this.getCanvas() as AllBinaryGameCanvas;;
    
gameCanvas!.toggleMenu();
    

                                    }
                                

                                    }
                                

                                    }
                                
}


}

