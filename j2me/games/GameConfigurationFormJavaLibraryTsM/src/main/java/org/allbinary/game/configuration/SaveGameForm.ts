
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { System } from '../../../../java/lang/System.js';
        
            import { Long } from '../../../../java/lang/Long.js';
        
import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      
import { TextField } from '../../../../javax/microedition/lcdui/TextField.js';
      
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SaveGameForm extends CommandForm {
        

    private static FORM: CommandForm = CommandForm.NULL_COMMAND_FORM;

                //@Throws(Exception.constructor)
            
    public static createForm(commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor): CommandForm{
SaveGameForm.FORM= new SaveGameForm(commandListener, title, backgrounBasicColor, foregroundBasicColor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SaveGameForm.FORM;
    
}


    public static getInstance(): CommandForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SaveGameForm.FORM;
    
}

private constructor (commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

    var timeString: string = (Date.now()).toString()!;
;
    
this.append(new TextField("Name: ", timeString, 30, TextField.ANY));
    
this.initCommands(commandListener);
    
}


    public initCommands(cmdListener: CommandListener){

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;
;
    
this.removeAllCommands();
    
this.addCommand(gameCommandsFactory!.SAVE);
    
this.addCommand(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.setCommandListener(cmdListener);
    
}


}
                
            

