
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
        



import { Command } from "../../../javax/microedition/lcdui/Command.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NotificationUtil
            extends Object
         {
        

    private static readonly SINGLETON: NotificationUtil = new NotificationUtil();
        
        

    public static getInstance(): NotificationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public notify(command: Command, resource: string, message: string){
var command = command
var resource = resource
var message = message
}


}
                
            

