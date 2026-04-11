
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
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { NullCanvas } from "../../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { PlayerGameInput } from "../../../../../org/allbinary/game/input/PlayerGameInput.js";

    
import { MyCanvas } from "../../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { BaseMotionGestureEventListener } from "../../../../../org/allbinary/input/motion/gesture/observer/BaseMotionGestureEventListener.js";

    
import { MotionGestureEvent } from "../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicMenuInputProcessor extends PlayerGameInput
                , BaseMotionGestureEventListener {
        

    public readonly motionGestureEventList: BasicArrayList = new BasicArrayList();
        
        

    private canvas: Canvas = NullCanvas.NULL_CANVAS;
        
        
protected constructor (gameKeyEventList: BasicArrayList, playerInputId: number, gameCanvas: Canvas)                        

                            : super(gameKeyEventList, playerInputId){

            super();
            var gameKeyEventList = gameKeyEventList
var playerInputId = playerInputId
var gameCanvas = gameCanvas


                            //For kotlin this is before the body of the constructor.
                    
this.canvas= gameCanvas;
    
}


    public onMotionGestureEvent(motionGestureEvent: MotionGestureEvent){
var motionGestureEvent = motionGestureEvent
motionGestureEventList!.add(motionGestureEvent);
    
}


    setCanvas(canvas: MyCanvas){
var canvas = canvas
this.canvas= canvas;
    
}


    getCanvas(): MyCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return canvas as MyCanvas;
    
}


                //@Throws(Error::class)
            
    public processInput(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


}
                
            

