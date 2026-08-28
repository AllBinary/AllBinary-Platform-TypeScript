
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Stack } from '../../../../../java/util/Stack.js';
      const Stack = globalThis.java.util.Stack;

      
//not game specific package import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { Form } from '../../../../../javax/microedition/lcdui/Form.js';
      const Form = globalThis.javax.microedition.lcdui.Form;

      
//not game specific package import { NullCommandListener } from '../../../../../javax/microedition/lcdui/NullCommandListener.js';
      const NullCommandListener = globalThis.javax.microedition.lcdui.NullCommandListener;

      
//not game specific package import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
      const Processor = globalThis.org.allbinary.canvas.Processor;

      
//not game specific package import { MenuListener } from '../../../../../org/allbinary/game/displayable/canvas/MenuListener.js';
      const MenuListener = globalThis.org.allbinary.game.displayable.canvas.MenuListener;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { MyCommandInterface } from '../../../../../org/allbinary/graphics/displayable/command/MyCommandInterface.js';
      const MyCommandInterface = globalThis.org.allbinary.graphics.displayable.command.MyCommandInterface;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScreenRepaintProcessorFactory } from './ScreenRepaintProcessorFactory.js';

export class CommandForm extends Form implements MyCommandInterface, MenuListener {
        

    private static NULL_COMMAND_FORM: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getNullCommandForm(): CommandForm{

                        if(CommandForm.NULL_COMMAND_FORM == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    CommandForm.NULL_COMMAND_FORM= new CommandForm(NullCommandListener.NULL_COMMAND_LISTENER, StringUtil.getInstance()!.EMPTY_STRING, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommandForm.NULL_COMMAND_FORM as CommandForm;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly repaintProcessor: Processor = ScreenRepaintProcessorFactory.getInstance()!.create(this)!;

    private commandStack: Stack<any>;

public constructor (commandListener: CommandListener, formTitle: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(formTitle);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.commandStack= new Stack<any>();
    

        try {
            this.repaintProcessor!.process();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    
}

}


    public initCommands(cmdListener: CommandListener){
}


    public open(){
this.logUtil!.putF(this.commonStrings!.START, this, "open");
    
}


    public close(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CLOSE);
    
}


                //@Throws(Exception.constructor)
            
    public update(){
this.repaintProcessor!.process();
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public addCommand(command: Command){
this.commandStack!.push(command);
    
super.addCommand(command);
    
}


    public removeAllCommands(){

    var size: number = this.commandStack!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
super.removeCommand(this.commandStack!.pop() as Command);
    
}

}


}



