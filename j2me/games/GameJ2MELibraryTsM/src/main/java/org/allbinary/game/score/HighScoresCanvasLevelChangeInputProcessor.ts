
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
        



import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { GameKeyEventHandler } from '../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
      
import { GameKeyEventUtil } from '../../../../org/allbinary/game/input/event/GameKeyEventUtil.js';
      
import { HighScoresCanvas } from '../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js';
      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoresCanvasInputProcessor } from './HighScoresCanvasInputProcessor.js';

export class HighScoresCanvasLevelChangeInputProcessor extends HighScoresCanvasInputProcessor implements UpdateMyFontInterface {
        

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private readonly INSTRUCTIONS: string = "(Right = Next Track, Left = Previous Track)";

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private anchor: number = Anchor.TOP_LEFT;

    private fontHeight: number = 0;

public constructor (highScoresCanvas: HighScoresCanvas){
            super(highScoresCanvas);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.fontHeight= font.getHeight();
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public open(){
GameKeyEventHandler.getInstance()!.addListener(this);
    
}


    public close(){
GameKeyEventHandler.getInstance()!.removeListener(this);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public update(){

    var list: BasicArrayList = this.getGameKeyEventList()!;;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var anyType: any = list.objectArray[index]!;;
    

    var key: number = GameKeyEventUtil.getKey(anyType)!;;
    

                        if(key == Canvas.RIGHT)
                        
                                    {
                                    this.getHighScoresCanvas()!.getGameInfo()!.nextGameLevel();
    

                                    }
                                
                             else 
                        if(key == Canvas.LEFT)
                        
                                    {
                                    this.getHighScoresCanvas()!.getGameInfo()!.previousGameLevel();
    

                                    }
                                
this.getHighScoresCanvas()!.executeUpdate();
    
}

list.clear();
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    

    var width: number = this.displayInfoSingleton!.getLastWidth()!;;
    

    var topScoresWidth: number = (graphics.getFont()!.stringWidth(this.INSTRUCTIONS)>>1);;
    
graphics.drawString(this.INSTRUCTIONS, (width>>1) -topScoresWidth, this.fontHeight *2, this.anchor);
    
}


}
                
            

