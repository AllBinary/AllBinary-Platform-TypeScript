
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
        




export class GameInputStrings
            extends Object
         {
        

    private static readonly instance: GameInputStrings = new GameInputStrings();
        
        

    public static getInstance(): GameInputStrings{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly PROCESS_INPUT: string = "processInput";
        
        

    public readonly KEY_PRESSED: string = "keyPressed";
        
        

    public readonly KEY_RELEASED: string = "keyReleased";
        
        

    public readonly KEY_REPEATED: string = "keyRepeated";
        
        

    public readonly ON_PRESS_GAME_KEY: string = "onPressGameKeyEvent";
        
        

    public readonly ON_DOWN_GAME_KEY: string = "onDownGameKeyEvent";
        
        

    public readonly ON_UP_GAME_KEY: string = "onUpGameKeyEvent";
        
        

    public readonly NO_KEY: string = "Key Code Not Mapped For Game: ";
        
        

    public readonly ADD_KEY_EVENT: string = "addGameKeyEvent";
        
        

    public readonly REMOVE_KEY_EVENT: string = "removeGameKeyEvent";
        
        

    public readonly STRAFE_LEFT: string = "strafeLeft";
        
        

    public readonly STRAFE_RIGHT: string = "strafeRight";
        
        

    public readonly PROCESS_MOTION_INPUT: string = "processMotionInput";
        
        

    public readonly UDPATE_CURRENT_TOUCH_INPUT_FACTORY: string = "updateCurrentTouchInputFactory";
        
        

    public readonly ENABLE_PLAYER_GAME_INPUTS: string = "Enabling PlayerGameInputs: ";
        
        

    public readonly ENABLE_PLAYER_GAME_INPUT: string = "Enabling PlayerGameInput: ";
        
        

}
                
            

