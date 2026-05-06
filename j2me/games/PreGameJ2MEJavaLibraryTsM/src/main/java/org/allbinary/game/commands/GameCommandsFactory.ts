
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


        
import { Command } from '../../../../javax/microedition/lcdui/Command.js';

    
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';

    
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';

    
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameCommandsFactory
            extends Object
         {
        

    private static readonly instance: GameCommandsFactory = new GameCommandsFactory();

    public static getInstance(): GameCommandsFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameCommandsFactory.instance;
    
}


    public readonly TOGGLE_FULLSCREEN: Command = new Command("Toggle FullScreen", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly TOGGLE_KEYBOARD: Command = new Command("Keyboard", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly SET_MENU_DISPLAYABLE: Command = new Command("Set Menu Displayable", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly APPLICATION_UPDATE: Command = new Command(CommonStrings.getInstance()!.UPDATE, StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly DISPLAY_ABOUT: Command = new Command(CanvasStrings.getInstance()!.ABOUT, StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);

    public readonly OPEN_WEB_URL: Command = new Command("Open Web URL", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);

    public readonly CLOSE_OPTIONS: Command = new Command("Back", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly DISPLAY_OPTIONS: Command = new Command(CanvasStrings.getInstance()!.OPTIONS, StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);

    public readonly START_TRACE: Command = new Command("Start Trace", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly STOP_TRACE: Command = new Command("Stop Trace", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly DEFAULT_OPTIONS: Command = new Command("Default", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly SHOW_GAME_CANVAS: Command = new Command("Back to Game", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly CLOSE_AND_SHOW_GAME_CANVAS: Command = new Command("Back", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly QUIT_COMMAND: Command = new Command("Quit", StringUtil.getInstance()!.EMPTY_STRING, Command.STOP, 1);

    public readonly RESTART_COMMAND: Command = new Command("Restart", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 0);

    public readonly DISPLAY_SAVE_FORM: Command = new Command("Save To", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 3);

    public readonly SAVE: Command = new Command("Save", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 3);

    public readonly DISPLAY_LOAD_FORM: Command = new Command("Load", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 3);

    public readonly LOAD_FILE: Command = new Command("Load File", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 3);

    public readonly DELETE_FILE: Command = new Command("Delete File", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly EXIT_COMMAND: Command = new Command("Exit", StringUtil.getInstance()!.EMPTY_STRING, Command.EXIT, 2);

    public readonly EXIT_WITHOUT_PROGRESS_COMMAND: Command = new Command("Exit Without Progress", StringUtil.getInstance()!.EMPTY_STRING, Command.EXIT, 2);

    public readonly START_COMMAND: Command = new Command(CommonStrings.getInstance()!.START, StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly CONTINUE_COMMAND: Command = new Command("Continue", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly SELECT_COMMAND: Command = new Command("Select", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly FEATURE_UPDATE: Command = new Command("Feature Update", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public readonly BUY_COMMAND: Command = new Command("BUY", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
protected constructor (){

            super();
        }


}
                
            

