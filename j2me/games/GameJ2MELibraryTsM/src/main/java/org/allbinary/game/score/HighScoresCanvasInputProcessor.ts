
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
        



//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { PlayerGameInput } from '../../../../org/allbinary/game/input/PlayerGameInput.js';
      const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;

      
//not game specific package import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { HighScoresCanvas } from '../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js';
      const HighScoresCanvas = globalThis.org.allbinary.game.score.displayable.HighScoresCanvas;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HighScoresCanvasInputProcessor extends PlayerGameInput {
        

    private readonly highScoresCanvas: HighScoresCanvas;

public constructor (highScoresCanvas: HighScoresCanvas){
            super(new BasicArrayListD(), new BasicArrayListD(),  -1);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.highScoresCanvas= highScoresCanvas;
    
}


    public open(){
}


    public close(){
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public onPressGameKeyEvent(gameKeyEvent: GameKeyEvent){
super.onPressGameKeyEvent(gameKeyEvent);
    
this.update();
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public onDownGameKeyEvent(gameKeyEvent: GameKeyEvent){
super.onDownGameKeyEvent(gameKeyEvent);
    
this.update();
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public onUpGameKeyEvent(gameKeyEvent: GameKeyEvent){
super.onUpGameKeyEvent(gameKeyEvent);
    
this.update();
    
}


    public paint(graphics: Graphics){
}


    public getHighScoresCanvas(): HighScoresCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.highScoresCanvas;
    
}


}
                
            

