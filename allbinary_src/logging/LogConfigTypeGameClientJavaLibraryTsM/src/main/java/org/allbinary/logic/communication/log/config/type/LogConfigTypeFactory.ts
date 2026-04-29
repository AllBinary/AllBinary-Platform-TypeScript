
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LogConfigType } from "./LogConfigType.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

export class LogConfigTypeFactory
            extends Object
         {
        

    private static readonly instance: LogConfigTypeFactory = new LogConfigTypeFactory();

    public static getInstance(): LogConfigTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogConfigTypeFactory.instance;
    
}


    private readonly NO_DESCRIPTION: string = "No Description";

    public readonly OS: LogConfigType = new LogConfigType("Operating System", this.NO_DESCRIPTION);

    public readonly FACTORYERROR: LogConfigType = new LogConfigType("Factory Error", this.NO_DESCRIPTION);
private constructor (){

            super();
        LogConfigTypes.LOGGING.add(OS);
    
LogConfigTypes.LOGGING.add(this.FACTORYERROR);
    
}


}
                
            

