
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

    
import { GameInputStrings } from "../../../../../org/allbinary/game/input/GameInputStrings.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { MyCanvas } from "../../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { MotionGestureInput } from "../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    
import { TouchMotionGestureFactory } from "../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { MotionGestureEvent } from "../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { RectangleCollisionUtil } from "../../../../../org/allbinary/math/RectangleCollisionUtil.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class PopupMenuInputProcessor extends BasicMenuInputProcessor {
        

    private readonly rectangleCollisionUtil: RectangleCollisionUtil = RectangleCollisionUtil.getInstance()!;
        
        

    private readonly CLICK_DELAY: number = 120;
        
        

    private readonly clickTimeHelper: TimeDelayHelper = new TimeDelayHelper(CLICK_DELAY);
        
        

    private rectangle: Rectangle
public constructor (gameKeyEventList: BasicArrayList, playerInputId: number, gameCanvas: MyCanvas, rectangle: Rectangle)                        

                            : super(gameKeyEventList, playerInputId, gameCanvas){

            super();
                //var gameKeyEventList = gameKeyEventList
    //var playerInputId = playerInputId
    //var gameCanvas = gameCanvas
    //var rectangle = rectangle


                            //For kotlin this is before the body of the constructor.
                    
this.rectangle= rectangle
}


    public init(rectangle: Rectangle){
    //var rectangle = rectangle
this.rectangle= rectangle
}


                //@Throws(Error::class)
            
    public processInput(key: number): number{
    //var key = key

                        if(key == Canvas.KEY_STAR)
                        
                                    {
                                    
    var gameCanvas: AllBinaryGameCanvas = this.getCanvas() as AllBinaryGameCanvas;
        
        

gameCanvas!.toggleMenu()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(Error::class)
            
    public processInput(): number{

        try {
            
    var motionInputsIndex: number = this.processMotionInputs()!;
        
        


    var list: BasicArrayList = this.getGameKeyEventList()!;
        
        


    var size: number = list.size()!;
        
        


    var key: number = 0;
        
        


    var gameKeyEvent: GameKeyEvent





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
gameKeyEvent= list.objectArray[index]! as GameKeyEvent

                        if(gameKeyEvent != 
                                    null
                                )
                        
                                    {
                                    key= gameKeyEvent!.getKey()

                        if(this.processInput(key) == 1)
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                
}

this.clear()

                        if(size > 0 || motionInputsIndex >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

                        }
                            
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, GameInputStrings.getInstance()!.PROCESS_INPUT, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

}


                //@Throws(Error::class)
            
    public processMotionInputs(): number{

    var lastIndex: number = this.motionGestureEventList!.size() -1;
        
        


                        if(lastIndex >= 0)
                        
                                    {
                                    
    var motionGestureEvent: MotionGestureEvent = this.motionGestureEventList!.objectArray[lastIndex]! as MotionGestureEvent;
        
        

this.processMotionInput(motionGestureEvent)

                                    }
                                
motionGestureEventList!.clear()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastIndex;
    
}


                //@Throws(Error::class)
            
    processMotionInput(motionGestureEvent: MotionGestureEvent){
    //var motionGestureEvent = motionGestureEvent

                        if(motionGestureEvent == 
                                    null
                                )
                        
                                    {
                                    logUtil!.put("Exception: Bug", this, gameInputStrings!.PROCESS_MOTION_INPUT)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;
        
        


    var motionGestureInput: MotionGestureInput = motionGestureEvent!.getMotionGesture()!;
        
        


                        if(motionGestureInput == touchMotionGestureFactory!.RELEASED)
                        
                                    {
                                    
    var point: GPoint = motionGestureEvent!.getCurrentPoint()!;
        
        


    var rectPoint: GPoint = rectangle.getPoint()!;
        
        


                        if(rectangleCollisionUtil!.isInside(rectPoint!.getX(), rectPoint!.getY(), rectangle.getMaxX() +20, rectangle.getMaxY(), point.getX(), point.getY()))
                        
                                    {
                                    
                        if(this.clickTimeHelper!.isTime())
                        
                                    {
                                    
    var gameCanvas: AllBinaryGameCanvas = this.getCanvas() as AllBinaryGameCanvas;
        
        

gameCanvas!.toggleMenu()

                                    }
                                

                                    }
                                

                                    }
                                
}


}
                
            

