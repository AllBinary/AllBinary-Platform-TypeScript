
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

    
import { GameKeyEventHandler } from "../../../../org/allbinary/game/input/event/GameKeyEventHandler.js";

    
import { GameKeyEventUtil } from "../../../../org/allbinary/game/input/event/GameKeyEventUtil.js";

    
import { HighScoresCanvas } from "../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class HighScoresCanvasLevelChangeInputProcessor extends HighScoresCanvasInputProcessor {
        

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

    private readonly INSTRUCTIONS: string = "(Right = Next Track, Left = Previous Track)";
        
        

    private anchor: number = Anchor.TOP_LEFT;
        
        
public constructor (highScoresCanvas: HighScoresCanvas)                        

                            : super(highScoresCanvas){

            super();
            var highScoresCanvas = highScoresCanvas


                            //For kotlin this is before the body of the constructor.
                    
}


    public open(){
GameKeyEventHandler.getInstance()!.addListener(this)
}


    public close(){
GameKeyEventHandler.getInstance()!.removeListener(this)
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public update(){

    var list: BasicArrayList = this.getGameKeyEventList()!;
        
        


    var size: number = list.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var anyType: any = {} = list.objectArray[index]!;
        
        


    var key: number = GameKeyEventUtil.getKey(anyType)!;
        
        


                        if(key == Canvas.RIGHT)
                        
                                    {
                                    this.getHighScoresCanvas()!.getGameInfo()!.nextGameLevel()

                                    }
                                
                             else 
                        if(key == Canvas.LEFT)
                        
                                    {
                                    this.getHighScoresCanvas()!.getGameInfo()!.previousGameLevel()

                                    }
                                
this.getHighScoresCanvas()!.executeUpdate()
}

list.clear()
}


    public paint(graphics: Graphics){
var graphics = graphics

    var myFont: MyFont = MyFont.getInstance()!;
        
        


    var width: number = this.displayInfoSingleton!.getLastWidth()!;
        
        


    var topScoresWidth: number = (graphics.getFont()!.stringWidth(INSTRUCTIONS) shr 1);
        
        

graphics.drawString(INSTRUCTIONS, (width shr 1) -topScoresWidth, myFont!.DEFAULT_CHAR_HEIGHT *2, anchor)
}


}
                
            

