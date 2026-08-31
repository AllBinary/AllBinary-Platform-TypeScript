
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { TextField } from '../../../../../javax/microedition/lcdui/TextField.js';
      const TextField = globalThis.javax.microedition.lcdui.TextField;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      //not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { CustomTextBox } from '../../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
      //not GWT import const CustomTextBox = globalThis.org.allbinary.graphics.form.item.CustomTextBox;

      
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      //not GWT import const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { SimpleTextPaintable } from '../../../../../org/allbinary/graphics/paint/SimpleTextPaintable.js';
      //not GWT import const SimpleTextPaintable = globalThis.org.allbinary.graphics.paint.SimpleTextPaintable;

      
import { VirtualKeyboardEventHandler } from '../../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
      //not GWT import const VirtualKeyboardEventHandler = globalThis.org.allbinary.input.event.VirtualKeyboardEventHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LicenseRegistrationTextBox extends CustomTextBox {
        

    public static readonly DISPLAY_COMMAND: Command = new Command("Register", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 3);

    public static readonly SUBMIT_COMMAND: Command = new Command("Submit", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 3);

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly pleaseWaitPaintable: Paintable = new SimpleTextPaintable(commonStrings!.PLEASE_WAIT, BasicColorFactory.getInstance()!.WHITE);

    private paintable: Paintable = NullPaintable.getInstance()!;

public constructor (cmdListener: CommandListener, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(cmdListener, "Enter Registration Code:", StringUtil.getInstance()!.EMPTY_STRING, 60, TextField.ANY, Font.getDefaultFont(), backgrounBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public initCommands(cmdListener: CommandListener){
this.removeAllCommands();
    
this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.addCommand(GameCommandsFactory.getInstance()!.TOGGLE_KEYBOARD);
    
this.addCommand(SUBMIT_COMMAND);
    
this.setCommandListener(cmdListener);
    
}


    public open(){

        try {
            
    var virtualKeyboardEventHandler: VirtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance()!;;
    
virtualKeyboardEventHandler!.fireEvent(virtualKeyboardEventHandler!.SHOW_EVENT);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "open", e);
    
}

super.open();
    
this.paintable= NullPaintable.getInstance();
    
this.repaint();
    
}


    public close(){

        try {
            
    var virtualKeyboardEventHandler: VirtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance()!;;
    
virtualKeyboardEventHandler!.fireEvent(virtualKeyboardEventHandler!.HIDE_EVENT);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "open", e);
    
}

this.paintable= this.pleaseWaitPaintable;
    
this.repaint();
    
super.close();
    
}


    public paint(graphics: Graphics){
super.paint(graphics);
    
this.paintable.paint(graphics);
    
}


    public submit(){

    var commandListener: CommandListener = this.getCustomCommandListener()!;;
    
commandListener!.commandAction(SUBMIT_COMMAND, this);
    
}


}



