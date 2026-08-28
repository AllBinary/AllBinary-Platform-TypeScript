
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { NullCanvas } from '../../../../../javax/microedition/lcdui/NullCanvas.js';
      const NullCanvas = globalThis.javax.microedition.lcdui.NullCanvas;

      
//not game specific package import { PlayerGameInput } from '../../../../../org/allbinary/game/input/PlayerGameInput.js';
      const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;

      
//not game specific package import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not game specific package import { BaseMotionGestureEventListener } from '../../../../../org/allbinary/input/motion/gesture/observer/BaseMotionGestureEventListener.js';
      const BaseMotionGestureEventListener = globalThis.org.allbinary.input.motion.gesture.observer.BaseMotionGestureEventListener;

      
//not game specific package import { MotionGestureEvent } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
      const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
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



