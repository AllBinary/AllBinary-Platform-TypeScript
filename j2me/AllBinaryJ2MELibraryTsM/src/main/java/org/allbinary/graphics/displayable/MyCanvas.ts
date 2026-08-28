
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Stack } from '../../../../java/util/Stack.js';
      const Stack = globalThis.java.util.Stack;

      
//not game specific package import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { Command } from '../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { NullCommandListener } from '../../../../javax/microedition/lcdui/NullCommandListener.js';
      const NullCommandListener = globalThis.javax.microedition.lcdui.NullCommandListener;

      
//not game specific package import { MyCommandInterface } from '../../../../org/allbinary/graphics/displayable/command/MyCommandInterface.js';
      const MyCommandInterface = globalThis.org.allbinary.graphics.displayable.command.MyCommandInterface;

      
//not game specific package import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
      const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;

      
//not game specific package import { TouchJ2ME } from '../../../../org/allbinary/input/TouchJ2ME.js';
      const TouchJ2ME = globalThis.org.allbinary.input.TouchJ2ME;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Sound } from '../../../../org/allbinary/media/audio/Sound.js';
      const Sound = globalThis.org.allbinary.media.audio.Sound;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DisplayableInterface } from './DisplayableInterface.js';
import { CanvasStrings } from './CanvasStrings.js';
import { DisplayInfoSingleton } from './DisplayInfoSingleton.js';

export class MyCanvas extends Canvas implements DisplayableInterface, MyCommandInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    readonly displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private readonly name: string;

    private readonly childNameList: BasicArrayList;

    private readonly commandStack: Stack<any>;

    private commandListener: CommandListener = NullCommandListener.NULL_COMMAND_LISTENER;

    private paused: boolean= false;

public constructor (name: string, childNameList: BasicArrayList){

            super();
        this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR);
    
this.displayInfo!.update(this, this.canvasStrings!.CONSTRUCTOR);
    
this.name= name;
    
this.childNameList= childNameList;
    
this.commandStack= new Stack();
    
}


    public setFullScreenMode(mode: boolean){
super.setFullScreenMode(mode);
    
this.displayInfo!.update(this, this.canvasStrings!.SET_FULL_SCREEN_MODE);
    
}


    sizeChanged(w: number, h: number){
this.displayInfo!.update(this, this.canvasStrings!.SIZE_CHANGED);
    
}


    public getCommandStack(): Stack<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.commandStack;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public isCommand(command: Command): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.commandStack!.contains(command);;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addCommand(command: Command){

                        if(!this.commandStack!.contains(command))
                        
                                    {
                                    this.commandStack!.push(command);
    
super.addCommand(command);
    

                                    }
                                
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeCommand(command: Command){
this.commandStack!.removeElement(command);
    
super.removeCommand(command);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeAllCommands(){

    var size: number = this.commandStack!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
super.removeCommand(this.commandStack!.pop() as Command);
    
}

}


    public setCommandListener(l: CommandListener){
super.setCommandListener(l);
    
this.commandListener= l;
    
}


    public getCustomCommandListener(): CommandListener{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.commandListener;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public isPaused(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paused;
    
}


    public removePauseCommand(){
this.removeCommand(MyCommandsFactory.getInstance()!.PAUSE_COMMAND);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public pause(){
this.logUtil!.putF(this.commonStrings!.START, this, this.canvasStrings!.PAUSE);
    
this.removePauseCommand();
    
this.addCommand(MyCommandsFactory.getInstance()!.RESUME_COMMAND);
    
this.setPaused(true);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public unPause(){
this.logUtil!.putF(this.commonStrings!.START, this, this.canvasStrings!.UN_PAUSE);
    
this.removeCommand(MyCommandsFactory.getInstance()!.RESUME_COMMAND);
    
this.addCommand(MyCommandsFactory.getInstance()!.PAUSE_COMMAND);
    
this.setPaused(false);
    
}


                //@Throws(Exception.constructor)
            
    process(){
this.displayInfo!.process();
    
}


    paint(graphics: Graphics){
}


    public draw(graphics: Graphics){
}


    public hasChild(displayable: MyCanvas): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.childNameList!.contains(displayable.name);;
    
}


    public destroy(){
this.logUtil!.putF("Destroyed MyCanvas", this, "destroy");
    
}


    setPaused(isPaused: boolean){
this.paused= isPaused;
    
}


    public keyPressedByDevice(keyCode: number, deviceId: number){
}


    public keyRepeatedByDevice(keyCode: number, deviceId: number){
}


    public keyReleasedByDevice(keyCode: number, deviceId: number){
}


    private readonly touchME: TouchJ2ME = new TouchJ2ME();

    pointerDragged(x: number, y: number){
this.touchME!.pointerDragged(x, y);
    
}


    pointerPressed(x: number, y: number){
this.touchME!.pointerPressed(x, y);
    
}


    pointerReleased(x: number, y: number){
this.touchME!.pointerReleased(x, y);
    
}


    public nextSong(nextSongSound: Sound, leftVolume: number, rightVolume: number){
}


}



