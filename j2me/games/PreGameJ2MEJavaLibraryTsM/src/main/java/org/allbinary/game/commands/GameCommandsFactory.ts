
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
        



import { Command } from "../../../../javax/microedition/lcdui/Command.js";

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameCommandsFactory
            extends Object
         {
        

    private static readonly instance: GameCommandsFactory = new GameCommandsFactory();
        
        

    public static getInstance(): GameCommandsFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly TOGGLE_FULLSCREEN: Command = new Command("Toggle FullScreen", Command.SCREEN, 1);
        
        

    public readonly TOGGLE_KEYBOARD: Command = new Command("Keyboard", Command.SCREEN, 1);
        
        

    public readonly SET_MENU_DISPLAYABLE: Command = new Command("Set Menu Displayable", Command.SCREEN, 1);
        
        

    public readonly APPLICATION_UPDATE: Command = new Command(CommonStrings.getInstance()!.UPDATE, Command.SCREEN, 1);
        
        

    public readonly DISPLAY_ABOUT: Command = new Command(CanvasStrings.getInstance()!.ABOUT, Command.SCREEN, 2);
        
        

    public readonly OPEN_WEB_URL: Command = new Command("Open Web URL", Command.SCREEN, 2);
        
        

    public readonly CLOSE_OPTIONS: Command = new Command("Back", Command.SCREEN, 1);
        
        

    public readonly DISPLAY_OPTIONS: Command = new Command(CanvasStrings.getInstance()!.OPTIONS, Command.SCREEN, 2);
        
        

    public readonly START_TRACE: Command = new Command("Start Trace", Command.SCREEN, 1);
        
        

    public readonly STOP_TRACE: Command = new Command("Stop Trace", Command.SCREEN, 1);
        
        

    public readonly DEFAULT_OPTIONS: Command = new Command("Default", Command.SCREEN, 1);
        
        

    public readonly SHOW_GAME_CANVAS: Command = new Command("Back to Game", Command.SCREEN, 1);
        
        

    public readonly CLOSE_AND_SHOW_GAME_CANVAS: Command = new Command("Back", Command.SCREEN, 1);
        
        

    public readonly QUIT_COMMAND: Command = new Command("Quit", Command.STOP, 1);
        
        

    public readonly RESTART_COMMAND: Command = new Command("Restart", Command.SCREEN, 0);
        
        

    public readonly DISPLAY_SAVE_FORM: Command = new Command("Save To", Command.SCREEN, 3);
        
        

    public readonly SAVE: Command = new Command("Save", Command.SCREEN, 3);
        
        

    public readonly DISPLAY_LOAD_FORM: Command = new Command("Load", Command.SCREEN, 3);
        
        

    public readonly LOAD_FILE: Command = new Command("Load File", Command.SCREEN, 3);
        
        

    public readonly DELETE_FILE: Command = new Command("Delete File", Command.SCREEN, 1);
        
        

    public readonly EXIT_COMMAND: Command = new Command("Exit", Command.EXIT, 2);
        
        

    public readonly EXIT_WITHOUT_PROGRESS_COMMAND: Command = new Command("Exit Without Progress", Command.EXIT, 2);
        
        

    public readonly START_COMMAND: Command = new Command(CommonStrings.getInstance()!.START, Command.SCREEN, 1);
        
        

    public readonly CONTINUE_COMMAND: Command = new Command("Continue", Command.SCREEN, 1);
        
        

    public readonly SELECT_COMMAND: Command = new Command("Select", Command.SCREEN, 1);
        
        

    public readonly FEATURE_UPDATE: Command = new Command("Feature Update", Command.SCREEN, 1);
        
        

    public readonly BUY_COMMAND: Command = new Command("BUY", Command.SCREEN, 1);
        
        
protected constructor (){

            super();
            }


}
                
            

