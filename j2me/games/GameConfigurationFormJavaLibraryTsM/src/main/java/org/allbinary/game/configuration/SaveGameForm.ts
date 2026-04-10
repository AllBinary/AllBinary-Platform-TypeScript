
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
        



import { CommandListener } from "../../../../javax/microedition/lcdui/CommandListener.js";

    
import { TextField } from "../../../../javax/microedition/lcdui/TextField.js";

    
import { GameCommandsFactory } from "../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { CommandForm } from "../../../../org/allbinary/graphics/displayable/screen/CommandForm.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class SaveGameForm extends CommandForm {
        

    private FORM: CommandForm = CommandForm.NULL_COMMAND_FORM;
        
        

                //@Throws(Error::class)
            
    public static getInstance(commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor): CommandForm{
var commandListener = commandListener
var title = title
var backgrounBasicColor = backgrounBasicColor
var foregroundBasicColor = foregroundBasicColor
FORM= SaveGameForm(commandListener, title, backgrounBasicColor, foregroundBasicColor)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FORM;
    
}


    public static getInstance(): CommandForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FORM;
    
}

private constructor (commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(commandListener, title, backgrounBasicColor, foregroundBasicColor){

            super();
            var commandListener = commandListener
var title = title
var backgrounBasicColor = backgrounBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
logUtil!.put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)

    var timeString: string = (System.currentTimeMillis()).toString()!;
        
        

this.this.append(TextField("Name: ", timeString, 30, TextField.ANY))
this.this.initCommands(commandListener)
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;
        
        

this.this.removeAllCommands()
this.this.addCommand(gameCommandsFactory!.SAVE)
this.this.addCommand(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS)
this.this.setCommandListener(cmdListener)
}


}
                
            

