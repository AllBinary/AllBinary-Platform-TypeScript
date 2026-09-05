
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
        
//not plain js import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Form } from '../../../../../javax/microedition/lcdui/Form.js';
      const Form = globalThis.javax.microedition.lcdui.Form;

      
import { NullCommandListener } from '../../../../../javax/microedition/lcdui/NullCommandListener.js';
      //not GWT import const NullCommandListener = globalThis.javax.microedition.lcdui.NullCommandListener;

      
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
      //not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
import { MenuListener } from '../../../../../org/allbinary/game/displayable/canvas/MenuListener.js';
      //not GWT import const MenuListener = globalThis.org.allbinary.game.displayable.canvas.MenuListener;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { MyCommandInterface } from '../../../../../org/allbinary/graphics/displayable/command/MyCommandInterface.js';
      //not GWT import const MyCommandInterface = globalThis.org.allbinary.graphics.displayable.command.MyCommandInterface;

      
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { ABStack } from '../../../../../org/allbinary/util/ABStack.js';
      const ABStack = globalThis.org.allbinary.util.ABStack;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScreenRepaintProcessorFactory } from './ScreenRepaintProcessorFactory.js';
//not GWT import const ScreenRepaintProcessorFactory = globalThis.org.allbinary.graphics.displayable.screen.ScreenRepaintProcessorFactory;

                
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

    private commandStack: ABStack<any>;

public constructor (commandListener: CommandListener, formTitle: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(formTitle);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.commandStack= StdUtil.getInstance()!.createStack();
    

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

    var size: number = this.commandStack!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
super.removeCommand(this.commandStack!.pop() as Command);
    
}

}


}



