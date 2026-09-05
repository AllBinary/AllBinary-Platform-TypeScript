
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { CommandTextItemArrayFactory } from '../../../../../org/allbinary/graphics/form/item/CommandTextItemArrayFactory.js';
//not GWT import const CommandTextItemArrayFactory = globalThis.org.allbinary.graphics.form.item.CommandTextItemArrayFactory;

      
import { LimitCommandsVisitor } from '../../../../../org/allbinary/graphics/form/item/LimitCommandsVisitor.js';
//not GWT import const LimitCommandsVisitor = globalThis.org.allbinary.graphics.form.item.LimitCommandsVisitor;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameLimitedCommandTextItemArrayFactory
            extends Object
         {
        

    private static readonly instance: GameLimitedCommandTextItemArrayFactory = new GameLimitedCommandTextItemArrayFactory();

    public static getInstance(): GameLimitedCommandTextItemArrayFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameLimitedCommandTextItemArrayFactory.instance;
    
}


    private readonly commandTextItemArrayFactory: CommandTextItemArrayFactory = new CommandTextItemArrayFactory(new LimitCommandsVisitor());

    public getCommandTextItemArrayFactory(): CommandTextItemArrayFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.commandTextItemArrayFactory;
    
}


}



