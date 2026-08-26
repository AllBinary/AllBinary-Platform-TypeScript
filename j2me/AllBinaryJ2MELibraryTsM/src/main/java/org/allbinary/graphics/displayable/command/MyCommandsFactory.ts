
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MyCommandsFactory
            extends Object
         {
        

    private static readonly instance: MyCommandsFactory = new MyCommandsFactory();

    public static getInstance(): MyCommandsFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MyCommandsFactory.instance;
    
}


    public readonly NO_COMMAND: Command = new Command(StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING,  -1,  -1);

    public readonly GAUGE_CHANGE: Command = new Command("GAUGE_CHANGE", StringUtil.getInstance()!.EMPTY_STRING, Command.ITEM, 1);

    public readonly SET_DISPLAYABLE: Command = new Command("Display", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);

    public readonly PAUSE_COMMAND: Command = new Command("Pause", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 0);

    public readonly RESUME_COMMAND: Command = new Command("Resume", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 0);

protected constructor (){

            super();
        }


}
                
            

