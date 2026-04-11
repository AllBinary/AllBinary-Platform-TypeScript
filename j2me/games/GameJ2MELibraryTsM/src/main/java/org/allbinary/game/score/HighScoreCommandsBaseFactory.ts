
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

    
import { J2MEUtil } from "../../../../org/allbinary/J2MEUtil.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class HighScoreCommandsBaseFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly HIGH_SCORE_COMMANDS: Command[]
protected constructor (HIGH_SCORE_COMMANDS: Command[]){

            super();
            var HIGH_SCORE_COMMANDS = HIGH_SCORE_COMMANDS

                        if(J2MEUtil.isJ2ME())
                        
                                    {
                                    this.HIGH_SCORE_COMMANDS= 
                                                [
                                                    HighScoreCommands.getInstance()!.PERSONAL;
        
        
                                                ];
    

                                    }
                                
                        else {
                            this.HIGH_SCORE_COMMANDS= HIGH_SCORE_COMMANDS;
    

                        }
                            
}


    public isHighScoreCommand(command: Command): boolean{
var command = command




                        for (
    var index: number = HIGH_SCORE_COMMANDS.length -1;
        
        
index >= 0; index--)
        {

                        if(command == HIGH_SCORE_COMMANDS[index])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public getIndex(command: Command): number{
var command = command




                        for (
    var index: number = HIGH_SCORE_COMMANDS.length -1;
        
        
index >= 0; index--)
        {

                        if(command == HIGH_SCORE_COMMANDS[index])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}




                            throw Error("No Such Command")
}


}
                
            

