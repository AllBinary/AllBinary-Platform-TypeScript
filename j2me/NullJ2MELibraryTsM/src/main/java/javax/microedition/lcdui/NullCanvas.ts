
        /* Generated Code Do Not Modify */
        



import { Stack } from "../../../java/util/Stack.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Canvas } from "./Canvas.js";

import { Image } from "./Image.js";

import { Form } from "./Form.js";

import { RuntimeException } from "./RuntimeException.js";

import { Command } from "./Command.js";

import { CommandListener } from "./CommandListener.js";

import { Graphics } from "./Graphics.js";

export class NullCanvas extends Canvas {
        

    public static readonly NULL_IMAGE_ARRAY: Image[] = [];

    public static readonly NULL_IMAGE: Image = new Image();

    public static readonly NULL_CANVAS: NullCanvas = new NullCanvas();

    public static readonly NULL_SCREEN: Form = new Form(StringUtil.getInstance()!.EMPTY_STRING);
public constructor (){

            super();
        }


    public setFullScreenMode(mode: boolean){
var mode = mode
}


    sizeChanged(w: number, h: number){
var w = w
var h = h
}


    public getCommandStack(): Stack<any>{



                            throw Error();
                    
}


    public isCommand(command: Command): boolean{
var command = command



                            throw Error();
                    
}


    public addCommand(command: Command){
var command = command
}


    public removeCommand(command: Command){
var command = command
}


    public removeAllCommands(){
}


    public setCommandListener(l: CommandListener){
var l = l
}


    public getCustomCommandListener(): CommandListener{



                            throw Error();
                    
}


    public isPaused(): boolean{



                            throw Error();
                    
}


    public removePauseCommand(){
}


    public pause(){
}


    public unPause(){
}


                //@Throws(Error::class)
            
    process(){
}


    paint(graphics: Graphics){
var graphics = graphics
}


    public destroy(){
}


    setPaused(isPaused: boolean){
var isPaused = isPaused



                            throw Error();
                    
}


    pointerDragged(x: number, y: number){
var x = x
var y = y
}


    pointerPressed(x: number, y: number){
var x = x
var y = y
}


    pointerReleased(x: number, y: number){
var x = x
var y = y
}


}
                
            

