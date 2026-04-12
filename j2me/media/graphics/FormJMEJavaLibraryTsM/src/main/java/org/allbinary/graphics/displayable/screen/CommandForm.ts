
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
        



import { Stack } from "../../../../../java/util/Stack.js";

    
import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Form } from "../../../../../javax/microedition/lcdui/Form.js";

    
import { NullCommandListener } from "../../../../../javax/microedition/lcdui/NullCommandListener.js";

    
import { Processor } from "../../../../../org/allbinary/canvas/Processor.js";

    
import { MenuListener } from "../../../../../org/allbinary/game/displayable/canvas/MenuListener.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { MyCommandInterface } from "../../../../../org/allbinary/graphics/displayable/command/MyCommandInterface.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class CommandForm extends Form
                , MyCommandInterface
                , MenuListener {
        

    public static readonly NULL_COMMAND_FORM: CommandForm = new CommandForm(NullCommandListener.NULL_COMMAND_LISTENER, StringUtil.getInstance()!.EMPTY_STRING, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly repaintProcessor: Processor = ScreenRepaintProcessorFactory.getInstance()!.getInstance(this)!;
        
        

    private commandStack: Stack<any>
public constructor (commandListener: CommandListener, formTitle: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(formTitle){

            super();
            var commandListener = commandListener
var formTitle = formTitle
var backgrounBasicColor = backgrounBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.commandStack= new Stack<any>();
    

        try {
            repaintProcessor!.process();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


    public initCommands(cmdListener: CommandListener){
    //var cmdListener = cmdListener
}


    public open(){
this.logUtil!.putF(this.commonStrings!.START, this, "open");
    
}


    public close(){
this.logUtil!.putF(this.commonStrings!.START, this, commonStrings!.CLOSE);
    
}


                //@Throws(Error::class)
            
    public update(){
this.repaintProcessor!.process();
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public addCommand(command: Command){
var command = command
commandStack!.push(command);
    
super.addCommand(command);
    
}


    public removeAllCommands(){

    var size: number = commandStack!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
super.removeCommand(commandStack!.pop();

                         as Command);
    
}

}


}
                
            

