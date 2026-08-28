
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Choice, ChoiceI } from '../../../../javax/microedition/lcdui/Choice.js';
      const Choice = globalThis.javax.microedition.lcdui.Choice;

      
//not game specific package import { Command } from '../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
//not game specific package import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
      const GameFeatureFormUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureFormUtil;

      
//not game specific package import { InGameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/InGameFeatureChoiceGroups.js';
      const InGameFeatureChoiceGroups = globalThis.org.allbinary.game.configuration.feature.InGameFeatureChoiceGroups;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
      const CommandForm = globalThis.org.allbinary.graphics.displayable.screen.CommandForm;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InGameOptionsForm extends CommandForm {
        

    public static readonly DISPLAY: Command = new Command("Options In Game", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public static readonly SAVE: Command = new Command("Save", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public static readonly DEFAULT: Command = new Command("Default", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

 constructor (commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

    var gameFeatureFormUtil: GameFeatureFormUtil = GameFeatureFormUtil.getInstance()!;;
    
gameFeatureFormUtil!.addChoiceGroup(this, InGameFeatureChoiceGroups.getExclusiveInstance()!.get(), ChoiceI.EXCLUSIVE);
    
gameFeatureFormUtil!.addChoiceGroup(this, InGameFeatureChoiceGroups.getMultipleInstance()!.get(), ChoiceI.MULTIPLE);
    
this.initCommands(commandListener);
    
}


    public initCommands(cmdListener: CommandListener){
this.removeAllCommands();
    
this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.addCommand(InGameOptionsForm.DEFAULT);
    
this.setCommandListener(cmdListener);
    
}


}



