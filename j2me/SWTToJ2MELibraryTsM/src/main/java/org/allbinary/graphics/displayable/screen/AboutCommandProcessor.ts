
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
//not game specific package import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AboutCommandProcessor
            extends Object
         {
        

    private static readonly instance: AboutCommandProcessor = new AboutCommandProcessor();

    public static getInstance(): AboutCommandProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AboutCommandProcessor.instance;
    
}


    public process(midletCommandListener: CommandListener, command: Command, canvas: Canvas){
midletCommandListener!.commandAction(command, canvas);
    
}


}



