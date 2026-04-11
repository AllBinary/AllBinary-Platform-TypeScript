
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2022 AllBinary
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
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    

export class AboutCommandProcessor
            extends Object
         {
        

    private static readonly instance: AboutCommandProcessor = new AboutCommandProcessor();
        
        

    public static getInstance(): AboutCommandProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public process(midletCommandListener: CommandListener, command: Command, canvas: Canvas){
    //var midletCommandListener = midletCommandListener
    //var command = command
    //var canvas = canvas
midletCommandListener!.commandAction(command, canvas);
    
}


}
                
            

