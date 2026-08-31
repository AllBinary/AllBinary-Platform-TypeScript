
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      //not GWT import const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
      //not GWT import const GameInputStrings = globalThis.org.allbinary.game.input.GameInputStrings;

      
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      //not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      //not GWT import const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
import { MotionGestureInput } from '../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      //not GWT import const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
import { TouchMotionGestureFactory } from '../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      //not GWT import const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
import { MotionGestureEvent } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
      //not GWT import const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

      
//not plain js import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { RectangleCollisionUtil } from '../../../../../org/allbinary/math/RectangleCollisionUtil.js';
      const RectangleCollisionUtil = globalThis.org.allbinary.math.RectangleCollisionUtil;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';
import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

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
                                    
    var gameCanvas: AllBinaryGameCanvas = this.getCanvas() as AllBinaryGameCanvas;;
    
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
            
    var motionInputsIndex: number = this.processMotionInputs()!;;
    

    var list: BasicArrayList = this.getGameKeyEventList()!;;
    

    var size: number = list.size()!;;
    

    var key: number = 0;;
    

    var gameKeyEvent: GameKeyEvent;;
    




                        for (
    var index: number = 0;index < size; index++)
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
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, GameInputStrings.getInstance()!.PROCESS_INPUT, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

}


                //@Throws(Exception.constructor)
            
    public processMotionInputs(): number{

    var lastIndex: number = this.motionGestureEventList!.size() -1;;
    

                        if(lastIndex >= 0)
                        
                                    {
                                    
    var motionGestureEvent: MotionGestureEvent = this.motionGestureEventList!.objectArray[lastIndex]! as MotionGestureEvent;;
    
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
                                

    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;;
    

    var motionGestureInput: MotionGestureInput = motionGestureEvent!.getMotionGesture()!;;
    

                        if(motionGestureInput == touchMotionGestureFactory!.RELEASED)
                        
                                    {
                                    
    var point: GPoint = motionGestureEvent!.getCurrentPoint()!;;
    

    var rectPoint: GPoint = this.rectangle.getPoint()!;;
    

                        if(this.rectangleCollisionUtil!.isInside(rectPoint!.getX(), rectPoint!.getY(), this.rectangle.getMaxX() +20, this.rectangle.getMaxY(), point.getX(), point.getY()))
                        
                                    {
                                    
                        if(this.clickTimeHelper!.isTimeTNT())
                        
                                    {
                                    
    var gameCanvas: AllBinaryGameCanvas = this.getCanvas() as AllBinaryGameCanvas;;
    
gameCanvas!.toggleMenu();
    

                                    }
                                

                                    }
                                

                                    }
                                
}


}



