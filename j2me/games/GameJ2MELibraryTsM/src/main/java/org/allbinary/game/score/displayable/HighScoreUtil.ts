
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
        



import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { GameInfo } from "../../../../../org/allbinary/game/GameInfo.js";

    
import { HighScore } from "../../../../../org/allbinary/game/score/HighScore.js";

    
import { HighScoreNamePersistanceSingleton } from "../../../../../org/allbinary/game/score/HighScoreNamePersistanceSingleton.js";

    
import { HighScores } from "../../../../../org/allbinary/game/score/HighScores.js";

    
import { HighScoresFactoryInterface } from "../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js";

    
import { HighScoresHelperBase } from "../../../../../org/allbinary/game/score/HighScoresHelperBase.js";

    
import { HighScoresResultsListener } from "../../../../../org/allbinary/game/score/HighScoresResultsListener.js";

    
import { MyCanvas } from "../../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class HighScoreUtil
            extends Object
        
                , HighScoresResultsListener {
        

    public static readonly SUBMIT_TEXTBOX_COMMAND: Command = new Command("Submit", Command.SCREEN, 1);
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly highScoresFactoryInterface: HighScoresFactoryInterface

    private highScoresArray: HighScores[]

    private readonly highScore: HighScore

    private readonly abeClientInformation: AbeClientInformationInterface

    private readonly gameInfo: GameInfo

    private readonly highScoresHelper: HighScoresHelperBase

    private firstTime: boolean = true;
        
        
public constructor (highScoresFactoryInterface: HighScoresFactoryInterface, highScoresHelper: HighScoresHelperBase, abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, cmdListener: CommandListener, name: string, highScore: HighScore){

            super();
                //var highScoresFactoryInterface = highScoresFactoryInterface
    //var highScoresHelper = highScoresHelper
    //var abeClientInformation = abeClientInformation
    //var gameInfo = gameInfo
    //var cmdListener = cmdListener
    //var name = name
    //var highScore = highScore
this.highScoresFactoryInterface= highScoresFactoryInterface;
    
this.highScoresHelper= highScoresHelper;
    
this.highScoresArray= this.highScoresHelper!.getHighScoresArray();
    
this.highScore= highScore;
    
this.abeClientInformation= abeClientInformation;
    
this.gameInfo= gameInfo;
    
}


    public setHighScoresArray(highScoresArray: HighScores[]){
    //var highScoresArray = highScoresArray
this.highScoresArray= highScoresArray;
    
firstTime= false;
    
this.saveHighScore();
    
}


    public update(name: string){
    //var name = name
HighScoreNamePersistanceSingleton.getInstance()!.save(abeClientInformation, gameInfo, name);
    
this.highScore!.setName(name);
    
}


    public saveHighScore(){
this.logUtil!.putF(new StringMaker().
                            append(commonStrings!.START)!.append(StringUtil.getInstance()!.toString(this.highScore))!.toString(), this, "saveHighScore");
    

    var size: number = this.highScoresArray!.length
                ;
        
        
;
    

                        if(firstTime && size == 0)
                        
                                    {
                                    this.logUtil!.putF("Games canvas did not give us any HighScores", this, "saveHighScore");
    
highScoresFactoryInterface!.fetchHighScores(gameInfo, this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var highScores: HighScores
;
    

    var highScoresAsString: string
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
highScores= highScoresArray[index]!;
    
highScores!.addHighScore(this.highScore);
    
highScoresAsString= highScores!.toString();
    
this.logUtil!.putF(new StringMaker().
                            append("Added/Adding Score: ")!.append(highScoresAsString)!.toString(), this, "saveHighScore");
    
}

this.highScoresHelper!.setHighScoresArray(highScoresArray);
    
}


    public submit(myCanvas: MyCanvas){
    //var myCanvas = myCanvas

    var commandListener: CommandListener = myCanvas!.getCustomCommandListener()!;
        
        
;
    
commandListener!.commandAction(SUBMIT_TEXTBOX_COMMAND, myCanvas);
    
}


}
                
            

