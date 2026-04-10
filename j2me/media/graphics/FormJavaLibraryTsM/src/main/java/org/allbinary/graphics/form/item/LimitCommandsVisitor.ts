
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

    
import { GameCommandsFactory } from "../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { ScreenInfo } from "../../../../../org/allbinary/graphics/form/ScreenInfo.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { Visitor } from "../../../../../org/allbinary/logic/util/visitor/Visitor.js";

    

export class LimitCommandsVisitor extends Visitor {
        

    private readonly isNotSmallDisplay: boolean
public constructor (){

            super();
            
    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

isNotSmallDisplay= (displayInfo!.isPortrait() && displayInfo!.getLastHeight() > ScreenInfo.getInstance()!.SMALL_WIDTH) || (!displayInfo!.isPortrait() && displayInfo!.getLastHeight() > ScreenInfo.getInstance()!.SMALL_HEIGHT)
}


    public visit(anyType: any = {}): any = {}{
var anyType = anyType

    var command: Command = anyType as Command;
        
        


    var booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;
        
        


                        if(isNotSmallDisplay || command.getPriority() == 1 || command == GameCommandsFactory.getInstance()!.EXIT_COMMAND || command == GameCommandsFactory.getInstance()!.EXIT_WITHOUT_PROGRESS_COMMAND)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return booleanFactory!.TRUE;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return booleanFactory!.FALSE;
    

                        }
                            
}


}
                
            

