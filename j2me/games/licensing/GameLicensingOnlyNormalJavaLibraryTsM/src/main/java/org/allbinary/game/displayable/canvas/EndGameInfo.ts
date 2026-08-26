
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
      const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not game specific package import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class EndGameInfo
            extends Object
         {
        

    private readonly NORMAL_GAME_OVER: string = "Game Over";

    readonly NORMAL_GAME_OVER_WIN: string = "You Won";

    private gameOverStr: string = StringUtil.getInstance()!.EMPTY_STRING;

    private winStr: string = this.gameOverStr;

public constructor (){

            super();
        }


    public update(gameInfo: GameInfo, myCanvas: MyCanvas){
this.setGameOverStr(this.NORMAL_GAME_OVER);
    
this.setWinStr(this.NORMAL_GAME_OVER_WIN);
    
}


    public getGameOverStr(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameOverStr;
    
}


    public setGameOverStr(gameOverStr: string){
this.gameOverStr= gameOverStr;
    
}


    public getWinStr(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.winStr;
    
}


    public setWinStr(winStr: string){
this.winStr= winStr;
    
}


}
                
            

