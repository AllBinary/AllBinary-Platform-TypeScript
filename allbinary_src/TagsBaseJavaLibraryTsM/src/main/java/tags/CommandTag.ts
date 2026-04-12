
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
        




export class CommandTag extends CustomTagSupport {
        

    readonly tagStrings: TagStrings = TagStrings.getInstance()!;
        
        

    private command: string
public constructor (){

            super();
            }


    public setCommand(command: string){
var command = command
this.command= command;
    
}


    public getCommand(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.command;
    
}


}
                
            

