
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
        



            import { Object } from '../../java/lang/Object.js';
        
//not game specific package import { GameCommandsFactory } from '../../org/allbinary/game/commands/GameCommandsFactory.js';
      const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
//not game specific package import { MultiPlayerGameFeatureFactory } from '../../org/allbinary/game/configuration/feature/MultiPlayerGameFeatureFactory.js';
      const MultiPlayerGameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MultiPlayerGameFeatureFactory;

      
//not game specific package import { MyCanvas } from '../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not game specific package import { GenericOperatingSystem } from '../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
      const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;

      
//not game specific package import { OperatingSystemFactory } from '../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
      const OperatingSystemFactory = globalThis.org.allbinary.logic.system.os.OperatingSystemFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PostGameCommandFactory
            extends Object
         {
        

    private static readonly instance: PostGameCommandFactory = new PostGameCommandFactory();

    public static getInstance(): PostGameCommandFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PostGameCommandFactory.instance;
    
}


    public addCommands(canvas: MyCanvas){

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;;
    

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;;
    

                        if(!operatingSystemInterface!.isOverScan())
                        
                                    {
                                    canvas.addCommand(gameCommandsFactory!.TOGGLE_KEYBOARD);
    

                                    }
                                
MultiPlayerGameFeatureFactory.getInstance()!.addCommands(canvas);
    
}


}
                
            

