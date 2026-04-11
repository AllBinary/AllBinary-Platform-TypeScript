
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../java/util/Hashtable.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    

export class GameInfo
            extends Object
         {
        

    public static readonly NONE: GameInfo = new GameInfo(GameTypeFactory.getInstance()!.NONE, GameMode.NONE,  -1,  -1);
        
        

    public static readonly LEVEL_NAME: string = "LEVEL";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly gameInfoData: GameInfoData = GameInfoData.getInstance()!;
        
        

    private readonly gameType: GameType

    private readonly gameMode: GameMode

    private readonly playerType: PlayerType

    private highestLevel: number= 0

    private currentLevel: number
public constructor (gameType: GameType, gameMode: GameMode, highestLevel: number, currentLevel: number){

            super();
                //var gameType = gameType
    //var gameMode = gameMode
    //var highestLevel = highestLevel
    //var currentLevel = currentLevel
this.gameType= gameType;
    
this.gameMode= gameMode;
    
this.setHighestLevel(highestLevel);
    
this.currentLevel= currentLevel;
    
this.playerType= PlayerTypesFactory.getInstance()!.PLAYER_TYPE_ONE;
    
}

public constructor (gameType: GameType, gameMode: GameMode, playerType: PlayerType, highestLevel: number, currentLevel: number){

            super();
            var gameType = gameType
var gameMode = gameMode
var playerType = playerType
var highestLevel = highestLevel
var currentLevel = currentLevel
this.gameType= gameType;
    
this.gameMode= gameMode;
    
this.setHighestLevel(highestLevel);
    
this.currentLevel= currentLevel;
    
this.playerType= playerType;
    
}


    public getGameType(): GameType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameType;
    
}


    public getGameMode(): GameMode{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameMode;
    
}


    public getPlayerType(): PlayerType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return playerType;
    
}


    public getHighestLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highestLevel;
    
}


    public setHighestLevel(highestLevel: number){
    //var highestLevel = highestLevel
this.highestLevel= highestLevel;
    
}


    public getCurrentLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentLevel;
    
}


    private readonly NEW_LEVEL: string = "New Level: ";
        
        

    private readonly SET_CURRENT_LEVEL: string = "setCurrentLevel";
        
        

    public setCurrentLevel(currentLevel: number){
    //var currentLevel = currentLevel
this.currentLevel= currentLevel;
    
logUtil!.put(new StringMaker().
                            append(NEW_LEVEL)!.appendint(this.getCurrentLevel())!.toString(), this, SET_CURRENT_LEVEL);
    
}


    private readonly NEXT: string = "Next ";
        
        

    private readonly NEXT_GAME_LEVEL: string = "nextGameLevel";
        
        

    public nextGameLevel(){

                        if(this.getCurrentLevel() < this.getHighestLevel())
                        
                                    {
                                    this.currentLevel++;
    

                                    }
                                
logUtil!.put(new StringMaker().
                            append(NEXT)!.append(NEW_LEVEL)!.appendint(this.getCurrentLevel())!.toString(), this, NEXT_GAME_LEVEL);
    
}


    public previousGameLevel(){

                        if(this.getCurrentLevel() > 1)
                        this.currentLevel--
}


    public isLastLevel(): boolean{

                        if(this.getCurrentLevel() >= this.getHighestLevel())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public toHashtable(): Hashtable<any, any>{

    var hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        
;
    
hashtable.put(this.gameInfoData!.GAME_TYPE, this.getGameType()!.toString());
    
hashtable.put(this.gameInfoData!.GAME_MODE, this.gameMode!.toString());
    
hashtable.put(this.gameInfoData!.PLAYER_TYPE, this.playerType!.toString());
    
hashtable.put(this.gameInfoData!.HIGHEST_LEVEL, Integer.toString(this.getHighestLevel()));
    
hashtable.put(this.gameInfoData!.CURRENT_LEVEL, this.currentLevel.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    
stringBuffer!.append(this.gameInfoData!.GAME_TYPE);
    
stringBuffer!.append(commonSeps!.EQUALS);
    
stringBuffer!.append(this.getGameType()!.toString());
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
stringBuffer!.append(this.gameInfoData!.GAME_MODE);
    
stringBuffer!.append(commonSeps!.EQUALS);
    
stringBuffer!.append(this.gameMode!.toString());
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
stringBuffer!.append(this.gameInfoData!.PLAYER_TYPE);
    
stringBuffer!.append(commonSeps!.EQUALS);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.playerType));
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
stringBuffer!.append(this.gameInfoData!.HIGHEST_LEVEL);
    
stringBuffer!.append(commonSeps!.EQUALS);
    
stringBuffer!.appendint(this.getHighestLevel());
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
stringBuffer!.append(this.gameInfoData!.CURRENT_LEVEL);
    
stringBuffer!.append(commonSeps!.EQUALS);
    
stringBuffer!.appendint(this.currentLevel);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

