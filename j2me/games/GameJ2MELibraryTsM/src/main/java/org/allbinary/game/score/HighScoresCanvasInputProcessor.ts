
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { PlayerGameInput } from "../../../../org/allbinary/game/input/PlayerGameInput.js";

    
import { GameKeyEvent } from "../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { HighScoresCanvas } from "../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HighScoresCanvasInputProcessor extends PlayerGameInput {
        

    private readonly highScoresCanvas: HighScoresCanvas
public constructor (highScoresCanvas: HighScoresCanvas){
            super(new BasicArrayListD(), new BasicArrayListD(),  -1);
                    var highScoresCanvas = highScoresCanvas


                            //For kotlin this is before the body of the constructor.
                    
this.highScoresCanvas= highScoresCanvas;
    
}


    public open(){
}


    public close(){
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onPressGameKeyEvent(gameKeyEvent: GameKeyEvent){
var gameKeyEvent = gameKeyEvent
super.onPressGameKeyEvent(gameKeyEvent);
    
this.update();
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onDownGameKeyEvent(gameKeyEvent: GameKeyEvent){
var gameKeyEvent = gameKeyEvent
super.onDownGameKeyEvent(gameKeyEvent);
    
this.update();
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onUpGameKeyEvent(gameKeyEvent: GameKeyEvent){
var gameKeyEvent = gameKeyEvent
super.onUpGameKeyEvent(gameKeyEvent);
    
this.update();
    
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public getHighScoresCanvas(): HighScoresCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScoresCanvas;
    
}


}
                
            

