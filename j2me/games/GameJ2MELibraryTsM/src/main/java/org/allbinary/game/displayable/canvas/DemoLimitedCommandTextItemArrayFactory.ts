
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
        



import { CommandTextItemArrayFactory } from "../../../../../org/allbinary/graphics/form/item/CommandTextItemArrayFactory.js";

    
import { LimitCommandsVisitor } from "../../../../../org/allbinary/graphics/form/item/LimitCommandsVisitor.js";

    

export class DemoLimitedCommandTextItemArrayFactory
            extends Object
         {
        

    private static readonly instance: DemoLimitedCommandTextItemArrayFactory = new DemoLimitedCommandTextItemArrayFactory();
        
        

    public static getInstance(): DemoLimitedCommandTextItemArrayFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly commandTextItemArrayFactory: CommandTextItemArrayFactory = new CommandTextItemArrayFactory(new LimitCommandsVisitor());
        
        

    public getCommandTextItemArrayFactory(): CommandTextItemArrayFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commandTextItemArrayFactory;
    
}


}
                
            

