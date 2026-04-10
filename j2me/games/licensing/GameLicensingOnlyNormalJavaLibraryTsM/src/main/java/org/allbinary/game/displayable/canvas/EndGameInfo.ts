
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
        



import { GameInfo } from "../../../../../org/allbinary/game/GameInfo.js";

    
import { MyCanvas } from "../../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

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
    //var gameInfo = gameInfo
    //var myCanvas = myCanvas
this.setGameOverStr(this.NORMAL_GAME_OVER)
this.setWinStr(this.NORMAL_GAME_OVER_WIN)
}


    public getGameOverStr(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameOverStr;
    
}


    public setGameOverStr(gameOverStr: string){
var gameOverStr = gameOverStr
this.gameOverStr= gameOverStr
}


    public getWinStr(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return winStr;
    
}


    public setWinStr(winStr: string){
var winStr = winStr
this.winStr= winStr
}


}
                
            

