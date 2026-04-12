
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
        



import { Choice } from "../../../../javax/microedition/lcdui/Choice.js";

    
import { Command } from "../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../javax/microedition/lcdui/CommandListener.js";

    
import { GameCommandsFactory } from "../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { GameFeatureFormUtil } from "../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js";

    
import { InGameFeatureChoiceGroups } from "../../../../org/allbinary/game/configuration/feature/InGameFeatureChoiceGroups.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { CommandForm } from "../../../../org/allbinary/graphics/displayable/screen/CommandForm.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class InGameOptionsForm extends CommandForm {
        

    public static readonly DISPLAY: Command = new Command("Options In Game", Command.SCREEN, 1);
        
        

    public static readonly SAVE: Command = new Command("Save", Command.SCREEN, 1);
        
        

    public static readonly DEFAULT: Command = new Command("Default", Command.SCREEN, 1);
        
        
 constructor (commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(commandListener, title, backgrounBasicColor, foregroundBasicColor){

            super();
            var commandListener = commandListener
var title = title
var backgrounBasicColor = backgrounBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

    var gameFeatureFormUtil: GameFeatureFormUtil = GameFeatureFormUtil.getInstance()!;
        
        
;
    
gameFeatureFormUtil!.addChoiceGroup(this, InGameFeatureChoiceGroups.getExclusiveInstance()!.get(), Choice.EXCLUSIVE);
    
gameFeatureFormUtil!.addChoiceGroup(this, InGameFeatureChoiceGroups.getMultipleInstance()!.get(), Choice.MULTIPLE);
    
this.initCommands(commandListener);
    
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
this.removeAllCommands();
    
this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.addCommand(InGameOptionsForm.DEFAULT);
    
this.setCommandListener(cmdListener);
    
}


}
                
            

