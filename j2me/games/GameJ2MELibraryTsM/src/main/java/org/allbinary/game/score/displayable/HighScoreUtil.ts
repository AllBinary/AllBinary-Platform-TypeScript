
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
        
//not game specific package import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
      const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not game specific package import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
      const HighScore = globalThis.org.allbinary.game.score.HighScore;

      
//not game specific package import { HighScoreNamePersistanceSingleton } from '../../../../../org/allbinary/game/score/HighScoreNamePersistanceSingleton.js';
      const HighScoreNamePersistanceSingleton = globalThis.org.allbinary.game.score.HighScoreNamePersistanceSingleton;

      
//not game specific package import { HighScores } from '../../../../../org/allbinary/game/score/HighScores.js';
      const HighScores = globalThis.org.allbinary.game.score.HighScores;

      
//not game specific package import { HighScoresFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js';
      const HighScoresFactoryInterface = globalThis.org.allbinary.game.score.HighScoresFactoryInterface;

      
//not game specific package import { HighScoresHelperBaseInterface } from '../../../../../org/allbinary/game/score/HighScoresHelperBaseInterface.js';
      const HighScoresHelperBaseInterface = globalThis.org.allbinary.game.score.HighScoresHelperBaseInterface;

      
//not game specific package import { HighScoresResultsListener } from '../../../../../org/allbinary/game/score/HighScoresResultsListener.js';
      const HighScoresResultsListener = globalThis.org.allbinary.game.score.HighScoresResultsListener;

      
//not game specific package import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
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



