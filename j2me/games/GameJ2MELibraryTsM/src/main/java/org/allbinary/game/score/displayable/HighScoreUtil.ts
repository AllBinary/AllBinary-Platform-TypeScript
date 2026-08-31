
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      //not GWT import const Command = globalThis.javax.microedition.lcdui.Command;

      
import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      //not GWT import const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
      //not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
      //not GWT import const HighScore = globalThis.org.allbinary.game.score.HighScore;

      
import { HighScoreNamePersistanceSingleton } from '../../../../../org/allbinary/game/score/HighScoreNamePersistanceSingleton.js';
      //not GWT import const HighScoreNamePersistanceSingleton = globalThis.org.allbinary.game.score.HighScoreNamePersistanceSingleton;

      
import { HighScores } from '../../../../../org/allbinary/game/score/HighScores.js';
      //not GWT import const HighScores = globalThis.org.allbinary.game.score.HighScores;

      
import { HighScoresFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js';
      //not GWT import const HighScoresFactoryInterface = globalThis.org.allbinary.game.score.HighScoresFactoryInterface;

      
import { HighScoresHelperBaseInterface } from '../../../../../org/allbinary/game/score/HighScoresHelperBaseInterface.js';
      //not GWT import const HighScoresHelperBaseInterface = globalThis.org.allbinary.game.score.HighScoresHelperBaseInterface;

      
import { HighScoresResultsListener } from '../../../../../org/allbinary/game/score/HighScoresResultsListener.js';
      //not GWT import const HighScoresResultsListener = globalThis.org.allbinary.game.score.HighScoresResultsListener;

      
import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      //not GWT import const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HighScoreUtil
            extends Object
         implements HighScoresResultsListener {
        

    public static readonly SUBMIT_TEXTBOX_COMMAND: Command = new Command("Submit", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly highScoresFactoryInterface: HighScoresFactoryInterface;

    private highScoresArray: HighScores[];

    private readonly highScore: HighScore;

    private readonly abeClientInformation: AbeClientInformationInterface;

    private readonly gameInfo: GameInfo;

    private readonly highScoresHelper: HighScoresHelperBaseInterface;

    private firstTime: boolean = true;

public constructor (highScoresFactoryInterface: HighScoresFactoryInterface, highScoresHelper: HighScoresHelperBaseInterface, abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, cmdListener: CommandListener, name: string, highScore: HighScore){

            super();
        this.highScoresFactoryInterface= highScoresFactoryInterface;
    
this.highScoresHelper= highScoresHelper;
    
this.highScoresArray= this.highScoresHelper!.getHighScoresArray();
    
this.highScore= highScore;
    
this.abeClientInformation= abeClientInformation;
    
this.gameInfo= gameInfo;
    
}


    public setHighScoresArray(highScoresArray: HighScores[]){
this.highScoresArray= highScoresArray;
    
this.firstTime= false;
    
this.saveHighScore();
    
}


    public update(name: string){
HighScoreNamePersistanceSingleton.getInstance()!.save(this.abeClientInformation, this.gameInfo, name);
    
this.highScore!.setName(name);
    
}


    public saveHighScore(){
this.logUtil!.putF(new StringMaker().append(this.commonStrings!.START)!.append(StringUtil.getInstance()!.toString(this.highScore))!.toString(), this, "saveHighScore");
    

    var size: number = this.highScoresArray!.length
                ;;
    

                        if(this.firstTime && size == 0)
                        
                                    {
                                    this.logUtil!.putF("Games canvas did not give us any HighScores", this, "saveHighScore");
    
this.highScoresFactoryInterface!.fetchHighScores(this.gameInfo, this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var highScores: HighScores;;
    

    var highScoresAsString: string;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
highScores= this.highScoresArray[index]!;
    
highScores!.addHighScore(this.highScore);
    
highScoresAsString= highScores!.toString();
    
this.logUtil!.putF(new StringMaker().append("Added/Adding Score: ")!.append(highScoresAsString)!.toString(), this, "saveHighScore");
    
}

this.highScoresHelper!.setHighScoresArray(this.highScoresArray);
    
}


    public submit(myCanvas: MyCanvas){

    var commandListener: CommandListener = myCanvas!.getCustomCommandListener()!;;
    
commandListener!.commandAction(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND, myCanvas);
    
}


}



