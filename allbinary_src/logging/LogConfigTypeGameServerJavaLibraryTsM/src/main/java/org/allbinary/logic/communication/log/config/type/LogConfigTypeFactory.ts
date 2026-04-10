
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
        



import { LogConfigTypes } from "../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { LogConfigTypeFactory } from "../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    

export class LogConfigTypeFactory
            extends Object
         {
        

    private static readonly instance: LogConfigTypeFactory = new LogConfigTypeFactory();
        
        

    public static getInstance(): LogConfigTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly NO_DESCRIPTION: string = "No Description";
        
        

    public readonly INIT_SERVER: LogConfigType = new LogConfigType("Init Server", NO_DESCRIPTION);
        
        

    public readonly LOBBY_SERVER: LogConfigType = new LogConfigType("Lobby Server", NO_DESCRIPTION);
        
        

    public readonly GAME_SERVER: LogConfigType = new LogConfigType("Game Server", NO_DESCRIPTION);
        
        

    public readonly GAME_SIMULATOR: LogConfigType = new LogConfigType("Game Simulator", NO_DESCRIPTION);
        
        

    public readonly CUSTOM_TYPES: LogConfigType = new LogConfigType("Custom Types", NO_DESCRIPTION);
        
        
private constructor (){

            super();
            add(this.INIT_SERVER)
}


}
                
            

