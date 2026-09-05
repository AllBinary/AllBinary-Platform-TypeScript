
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

      
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { NullCanvas } from '../../../../../javax/microedition/lcdui/NullCanvas.js';
//not GWT import const NullCanvas = globalThis.javax.microedition.lcdui.NullCanvas;

      
import { PlayerGameInput } from '../../../../../org/allbinary/game/input/PlayerGameInput.js';
//not GWT import const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;

      
import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
//not GWT import const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
import { BaseMotionGestureEventListener } from '../../../../../org/allbinary/input/motion/gesture/observer/BaseMotionGestureEventListener.js';
//not GWT import const BaseMotionGestureEventListener = globalThis.org.allbinary.input.motion.gesture.observer.BaseMotionGestureEventListener;

      
import { MotionGestureEvent } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
//not GWT import const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicMenuInputProcessor extends PlayerGameInput implements BaseMotionGestureEventListener {
        

    public readonly motionGestureEventList: BasicArrayList = new BasicArrayListD();

    private canvas: Canvas = NullCanvas.NULL_CANVAS;

protected constructor (gameKeyEventList: BasicArrayList, playerInputId: number, gameCanvas: Canvas){
            super(gameKeyEventList, new BasicArrayListD(), playerInputId);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.canvas= gameCanvas;
    
}


    public onMotionGestureEvent(motionGestureEvent: MotionGestureEvent){
this.motionGestureEventList!.add(motionGestureEvent);
    
}


    public onScrolledMotionGestureEvent(motionGestureEvent: MotionGestureEvent){
}


    setCanvas(canvas: MyCanvas){
this.canvas= canvas;
    
}


    getCanvas(): MyCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.canvas as MyCanvas;
    
}


                //@Throws(Exception.constructor)
            
    public processInputList(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


}



