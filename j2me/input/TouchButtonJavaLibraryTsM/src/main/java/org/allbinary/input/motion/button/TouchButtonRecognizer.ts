
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
        



import { DownGameKeyEventHandler } from "../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { UpGameKeyEventHandler } from "../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { RectangleCollisionUtil } from "../../../../../org/allbinary/math/RectangleCollisionUtil.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class TouchButtonRecognizer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly rectangleCollisionUtil: RectangleCollisionUtil = RectangleCollisionUtil.getInstance()!;
        
        

    private readonly upGameKeyEventHandler: UpGameKeyEventHandler = UpGameKeyEventHandler.getInstance()!;
        
        

    private readonly downGameKeyEventHandler: DownGameKeyEventHandler = DownGameKeyEventHandler.getInstance()!;
        
        

    private lastPressedTouchButtonInput: TouchButtonInput = BasicTouchInputFactory.getInstance()!.NONE;
        
        

    private readonly currentlyPressedTouchButtonSingleton: CurrentlyPressedTouchButtonSingleton = CurrentlyPressedTouchButtonSingleton.getInstance()!;
        
        

export inner class ReleaseHelper
            extends Object
         {
        

    readonly touchButtonRecognizer: TouchButtonRecognizer
public constructor (touchButtonRecognizer: TouchButtonRecognizer){

            super();
            var touchButtonRecognizer = touchButtonRecognizer
this.touchButtonRecognizer= touchButtonRecognizer
}


                @Throws(Exception::class)
            
    public release(touchButtonInput: TouchButtonInput, deviceId: number){
var touchButtonInput = touchButtonInput
var deviceId = deviceId




                        for (
    var index: number = currentlyPressedTouchButtonSingleton!.size() -1;
        
        
index >= 0; index--)
        {

    var nextTouchButtonInput: TouchButtonInput = currentlyPressedTouchButtonSingleton!.get(index)!;
        
        


    var gameKeyEvent: GameKeyEvent = nextTouchButtonInput!.getGameKeyEvent()!;
        
        

fireEvent(gameKeyEvent)
fireEvent(gameKeyEvent)
remove(index)
}

}


}
                
            
export inner class MultitouchReleaseHelper extends ReleaseHelper {
        
public constructor (touchButtonRecognizer: TouchButtonRecognizer)                        

                            : super(touchButtonRecognizer){

            super();
            var touchButtonRecognizer = touchButtonRecognizer


                            //For kotlin this is before the body of the constructor.
                    
}


                @Throws(Exception::class)
            
    public release(touchButtonInput: TouchButtonInput, deviceId: number){
var touchButtonInput = touchButtonInput
var deviceId = deviceId

    var cancelTouchButtonInput: TouchButtonInput = CancelTouchButtonInputFactory.getInstance()!.getCancel(touchButtonInput)!;
        
        





                        for (
    var index: number = currentlyPressedTouchButtonSingleton!.size() -1;
        
        
index >= 0; index--)
        {

    var nextTouchButtonInput: TouchButtonInput = currentlyPressedTouchButtonSingleton!.get(index)!;
        
        


    
                        if(cancelTouchButtonInput == nextTouchButtonInput)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = nextTouchButtonInput!.getGameKeyEvent()!;
        
        

fireEvent(gameKeyEvent)
fireEvent(gameKeyEvent)
remove(index)

                                    }
                                
}

}


}
                
            
    private readonly releaseHelper: ReleaseHelper
public constructor (){

            super();
            
    
                        if(TouchScreenFactory.getInstance()!.isMultiTouch())
                        
                                    {
                                    this.releaseHelper= MultitouchReleaseHelper(this)

                                    }
                                
                        else {
                            this.releaseHelper= ReleaseHelper(this)

                        }
                            
}


                @Throws(Exception::class)
            
    processRelease(touchButtonInput: TouchButtonInput, deviceId: number){
var touchButtonInput = touchButtonInput
var deviceId = deviceId
release(touchButtonInput, deviceId)

    var gameKeyEvent: GameKeyEvent = touchButtonInput!.getGameKeyEvent()!;
        
        

fireEvent(gameKeyEvent)
fireEvent(gameKeyEvent)
remove(touchButtonInput)
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public releaseTouchButtonInput(x: number, y: number, deviceId: number): boolean{
var x = x
var y = y
var deviceId = deviceId

    var touchButtonInput: TouchButtonInput = lastPressedTouchButtonInput;
        
        


    
                        if(currentlyPressedTouchButtonSingleton!.contains(touchButtonInput))
                        
                                    {
                                    lastPressedTouchButtonInput= BasicTouchInputFactory.getInstance()!.NONE
this.processRelease(touchButtonInput, deviceId)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            
    var list: BasicArrayList = TouchButtonFactory.getInstance()!.getList()!;
        
        


    var rectangle: Rectangle


    var point: GPoint


    var touchButton: TouchButton





                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {
touchButton= list.objectArray[index]! as TouchButton
rectangle= touchButton!.getRectangle()
point= rectangle.getPoint()

    
                        if(rectangleCollisionUtil!.isInside(point.getX(), point.getY(), rectangle.getMaxX(), rectangle.getMaxY(), x, y))
                        
                                    {
                                    touchButtonInput= touchButton!.getTouchButtonInput()
this.processRelease(touchButtonInput, deviceId)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}


                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public pressTouchButtonInput(x: number, y: number, deviceId: number): boolean{
var x = x
var y = y
var deviceId = deviceId

    var list: BasicArrayList = TouchButtonFactory.getInstance()!.getList()!;
        
        


    var rectangle: Rectangle


    var point: GPoint


    var touchButton: TouchButton


    var touchButtonInput: TouchButtonInput





                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {
touchButton= list.objectArray[index]! as TouchButton
rectangle= touchButton!.getRectangle()
point= rectangle.getPoint()

    
                        if(rectangleCollisionUtil!.isInside(point.getX(), point.getY(), rectangle.getMaxX(), rectangle.getMaxY(), x, y))
                        
                                    {
                                    touchButtonInput= touchButton!.getTouchButtonInput()

    
                        if(!currentlyPressedTouchButtonSingleton!.contains(touchButtonInput))
                        
                                    {
                                    release(touchButtonInput, deviceId)
lastPressedTouchButtonInput= touchButtonInput
add(touchButtonInput)

    var gameKeyEvent: GameKeyEvent = touchButtonInput!.getGameKeyEvent()!;
        
        

fireEvent(gameKeyEvent)
fireEvent(gameKeyEvent)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

