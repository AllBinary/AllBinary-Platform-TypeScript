
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
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { GameKeyEvent } from "../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { AllBinaryGameLayer } from "../../../../org/allbinary/game/layer/AllBinaryGameLayer.js";

    
import { RectangleFactory } from "../../../../org/allbinary/graphics/RectangleFactory.js";

    
import { NullPaintable } from "../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { PaintableInterface } from "../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class TestingInputSingleton extends AllBinaryGameLayer
                , GameInputInterface {
        

    private static readonly instance: TestingInputSingleton = new TestingInputSingleton();
        
        

    public static getInstance(): TestingInputSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly inputProcessorArray: GameInputProcessor[] = new Array(InputFactory.getInstance()!.MAX);
        
        
private constructor ()                        

                            : super(RectangleFactory.SINGLETON){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
init(this.inputProcessorArray)
}


    private paintable: PaintableInterface = NullPaintable.getInstance()!;
        
        

    public initInputProcessors(){
}


    public initInputProcessors(aTestInputInterface: TestInputInterface){
var aTestInputInterface = aTestInputInterface

    var testInputInterface: TestInputInterface = aTestInputInterface;
        
        

this.paintable= testInputInterface
this.inputProcessorArray[Canvas.UP]= object: GameInputProcessor()
                                {
                                
                @Throws(Exception::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
var allbinaryLayerManager = allbinaryLayerManager
var gameKeyEvent = gameKeyEvent
up()
}

                                }
                            
this.inputProcessorArray[Canvas.DOWN]= object: GameInputProcessor()
                                {
                                
                @Throws(Exception::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
var allbinaryLayerManager = allbinaryLayerManager
var gameKeyEvent = gameKeyEvent
down()
}

                                }
                            
this.inputProcessorArray[Canvas.LEFT]= object: GameInputProcessor()
                                {
                                
                @Throws(Exception::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
var allbinaryLayerManager = allbinaryLayerManager
var gameKeyEvent = gameKeyEvent
left()
}

                                }
                            
this.inputProcessorArray[Canvas.RIGHT]= object: GameInputProcessor()
                                {
                                
                @Throws(Exception::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
var allbinaryLayerManager = allbinaryLayerManager
var gameKeyEvent = gameKeyEvent
right()
}

                                }
                            
this.inputProcessorArray[Canvas.KEY_NUM7]= object: GameInputProcessor()
                                {
                                
                @Throws(Exception::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
var allbinaryLayerManager = allbinaryLayerManager
var gameKeyEvent = gameKeyEvent
strafeLeft()
}

                                }
                            
this.inputProcessorArray[Canvas.KEY_NUM9]= object: GameInputProcessor()
                                {
                                
                @Throws(Exception::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
var allbinaryLayerManager = allbinaryLayerManager
var gameKeyEvent = gameKeyEvent
strafeRight()
}

                                }
                            
init(this.inputProcessorArray)
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public processInput(allbinaryLayerManager: AllBinaryLayerManager, list: BasicArrayList){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var list = list

    var key: number = 0;
        
        


    var gameKeyEvent: GameKeyEvent


    var size: number = list.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
gameKeyEvent= (list.objectArray[index]! as GameKeyEvent)
key= gameKeyEvent!.getKey()
process(allbinaryLayerManager, GameKeyEvent.NONE)
}

}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public processInput(allbinaryLayerManager: AllBinaryLayerManager){
var allbinaryLayerManager = allbinaryLayerManager
this.processInput(allbinaryLayerManager, this.getGameKeyEventList())
clear()
}


    public paint(graphics: Graphics){
var graphics = graphics
paint(graphics)
}


    public implmentsGameInputInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

