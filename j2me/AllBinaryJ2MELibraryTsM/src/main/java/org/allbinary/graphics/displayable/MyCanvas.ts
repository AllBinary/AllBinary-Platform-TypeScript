
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
        



import { Stack } from "../../../../java/util/Stack.js";

    
import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { Command } from "../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { NullCommandListener } from "../../../../javax/microedition/lcdui/NullCommandListener.js";

    
import { MyCommandInterface } from "../../../../org/allbinary/graphics/displayable/command/MyCommandInterface.js";

    
import { MyCommandsFactory } from "../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js";

    
import { TouchJ2ME } from "../../../../org/allbinary/input/TouchJ2ME.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Sound } from "../../../../org/allbinary/media/audio/Sound.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class MyCanvas extends Canvas
                , DisplayableInterface
                , MyCommandInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;
        
        

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

    private readonly name: string

    private readonly childNameList: BasicArrayList

    private readonly commandStack: Stack<any>

    private isPaused: boolean= false
public constructor ()                        

                            : this(CommonStrings.getInstance()!.UNKNOWN, new BasicArrayList()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (name: string, childNameList: BasicArrayList){

            super();
                //var name = name
    //var childNameList = childNameList
this.logUtil!.putF(commonStrings!.CONSTRUCTOR, this, commonStrings!.CONSTRUCTOR);
    
displayInfoSingleton!.update(this, canvasStrings!.CONSTRUCTOR);
    
this.name= name;
    
this.childNameList= childNameList;
    
this.commandStack= new Stack();
    
}


    public setFullScreenMode(mode: boolean){
var mode = mode
super.setFullScreenMode(mode);
    
displayInfoSingleton!.update(this, canvasStrings!.SET_FULL_SCREEN_MODE);
    
}


    sizeChanged(w: number, h: number){
var w = w
var h = h
displayInfoSingleton!.update(this, canvasStrings!.SIZE_CHANGED);
    
}


    public getCommandStack(): Stack<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.commandStack;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isCommand(command: Command): boolean{
var command = command



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.commandStack!.contains(command);

                        ;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addCommand(command: Command){
var command = command

                        if(!this.commandStack!.contains(command);

                        )
                        
                                    {
                                    commandStack!.push(command);
    
super.addCommand(command);
    

                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeCommand(command: Command){
var command = command
commandStack!.removeElement(command);
    
super.removeCommand(command);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

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


    private listener: CommandListener = NullCommandListener.NULL_COMMAND_LISTENER;
        
        

    public setCommandListener(l: CommandListener){
var l = l
super.setCommandListener(l);
    
listener= l;
    
}


    public getCustomCommandListener(): CommandListener{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.listener;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isPaused(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isPaused;
    
}


    public removePauseCommand(){
this.removeCommand(MyCommandsFactory.getInstance()!.PAUSE_COMMAND);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public pause(){
this.logUtil!.putF(commonStrings!.START, this, canvasStrings!.PAUSE);
    
this.removePauseCommand();
    
this.addCommand(MyCommandsFactory.getInstance()!.RESUME_COMMAND);
    
this.setPaused(true);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public unPause(){
this.logUtil!.putF(commonStrings!.START, this, canvasStrings!.UN_PAUSE);
    
this.removeCommand(MyCommandsFactory.getInstance()!.RESUME_COMMAND);
    
this.addCommand(MyCommandsFactory.getInstance()!.PAUSE_COMMAND);
    
this.setPaused(false);
    
}


                //@Throws(Error::class)
            
    process(){
displayInfoSingleton!.process();
    
}


    paint(graphics: Graphics){
var graphics = graphics
}


    public draw(graphics: Graphics){
var graphics = graphics
}


    public hasChild(displayable: MyCanvas): boolean{
var displayable = displayable



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.childNameList!.contains(displayable.name);

                        ;
    
}


    public destroy(){
this.logUtil!.putF("Destroyed MyCanvas", this, "destroy");
    
}


    setPaused(isPaused: boolean){
var isPaused = isPaused
this.isPaused= isPaused;
    
}


    public keyPressed(keyCode: number, deviceId: number){
var keyCode = keyCode
var deviceId = deviceId
}


    public keyRepeated(keyCode: number, deviceId: number){
var keyCode = keyCode
var deviceId = deviceId
}


    public keyReleased(keyCode: number, deviceId: number){
var keyCode = keyCode
var deviceId = deviceId
}


    private readonly touchME: TouchJ2ME = new TouchJ2ME();
        
        

    pointerDragged(x: number, y: number){
var x = x
var y = y
touchME!.pointerDragged(x, y);
    
}


    pointerPressed(x: number, y: number){
var x = x
var y = y
touchME!.pointerPressed(x, y);
    
}


    pointerReleased(x: number, y: number){
var x = x
var y = y
touchME!.pointerReleased(x, y);
    
}


    public nextSong(nextSongSound: Sound, leftVolume: number, rightVolume: number){
    //var nextSongSound = nextSongSound
    //var leftVolume = leftVolume
    //var rightVolume = rightVolume
}


}
                
            

