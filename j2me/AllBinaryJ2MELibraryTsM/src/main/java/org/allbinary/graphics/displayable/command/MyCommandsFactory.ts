
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

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class MyCommandsFactory
            extends Object
         {
        

    private static readonly instance: MyCommandsFactory = new MyCommandsFactory();
        
        

    public static getInstance(): MyCommandsFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly NO_COMMAND: Command = new Command(StringUtil.getInstance()!.EMPTY_STRING,  -1,  -1);
        
        

    public readonly GAUGE_CHANGE: Command = new Command("GAUGE_CHANGE", Command.ITEM, 1);
        
        

    public readonly SET_DISPLAYABLE: Command = new Command("Display", Command.SCREEN, 2);
        
        

    public readonly PAUSE_COMMAND: Command = new Command("Pause", Command.SCREEN, 0);
        
        

    public readonly RESUME_COMMAND: Command = new Command("Resume", Command.SCREEN, 0);
        
        
protected constructor (){

            super();
            }


}
                
            

