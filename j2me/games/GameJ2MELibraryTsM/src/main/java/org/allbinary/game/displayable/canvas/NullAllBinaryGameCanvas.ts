
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
//not plain js import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvasInterface } from './AllBinaryGameCanvasInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvasInterface;

                
export class NullAllBinaryGameCanvas
            extends Object
         implements AllBinaryGameCanvasInterface {
        

    public static readonly NULL_ALLBINARY_GAME_CANVAS: NullAllBinaryGameCanvas = new NullAllBinaryGameCanvas();

    public getLayerManager(): AllBinaryGameLayerManager{



                            throw new RuntimeException();
                    
}


    public addCommand(cmd: Command){



                            throw new RuntimeException();
                    
}


    public getHeight(): number{



                            throw new RuntimeException();
                    
}


    public getWidth(): number{



                            throw new RuntimeException();
                    
}


    public removeCommand(cmd: Command){



                            throw new RuntimeException();
                    
}


    public setCommandListener(l: CommandListener){



                            throw new RuntimeException();
                    
}


}



