
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

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { TextField } from "../../../../../javax/microedition/lcdui/TextField.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { GameCommandsFactory } from "../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { CustomTextBox } from "../../../../../org/allbinary/graphics/form/item/CustomTextBox.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { SimpleTextPaintable } from "../../../../../org/allbinary/graphics/paint/SimpleTextPaintable.js";

    
import { VirtualKeyboardEventHandler } from "../../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js";

    

export class LicenseRegistrationTextBox extends CustomTextBox {
        

    public static readonly DISPLAY_COMMAND: Command = new Command("Register", Command.SCREEN, 3);
        
        

    public static readonly SUBMIT_COMMAND: Command = new Command("Submit", Command.SCREEN, 3);
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly pleaseWaitPaintable: Paintable = new SimpleTextPaintable(commonStrings!.PLEASE_WAIT, BasicColorFactory.getInstance()!.WHITE);
        
        

    private paintable: Paintable = NullPaintable.getInstance()!;
        
        
public constructor (cmdListener: CommandListener, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(cmdListener, "Enter Registration Code:", StringUtil.getInstance()!.EMPTY_STRING, 60, TextField.ANY, backgrounBasicColor, foregroundBasicColor){

            super();
            var cmdListener = cmdListener
var backgrounBasicColor = backgrounBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
this.removeAllCommands()
this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS)
this.addCommand(GameCommandsFactory.getInstance()!.TOGGLE_KEYBOARD)
this.addCommand(SUBMIT_COMMAND)
this.setCommandListener(cmdListener)
}


    public open(){

        try {
            
    var virtualKeyboardEventHandler: VirtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance()!;
        
        

virtualKeyboardEventHandler!.fireEvent(virtualKeyboardEventHandler!.SHOW_EVENT)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "open", e)
}

super.open()
this.paintable= NullPaintable.getInstance()
this.repaint()
}


    public close(){

        try {
            
    var virtualKeyboardEventHandler: VirtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance()!;
        
        

virtualKeyboardEventHandler!.fireEvent(virtualKeyboardEventHandler!.HIDE_EVENT)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "open", e)
}

this.paintable= this.pleaseWaitPaintable
this.repaint()
super.close()
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics)
this.paintable.paint(graphics)
}


    public submit(){

    var commandListener: CommandListener = this.getCustomCommandListener()!;
        
        

commandListener!.commandAction(SUBMIT_COMMAND, this)
}


}
                
            

