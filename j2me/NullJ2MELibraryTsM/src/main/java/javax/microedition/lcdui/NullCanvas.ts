
        /* Generated Code Do Not Modify */
        



import { Stack } from "../../../java/util/Stack.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    

export class NullCanvas extends Canvas {
        

    public static readonly NULL_IMAGE_ARRAY: Image[] = new Array(0);
        
        

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


    public getCommandStack(): Stack<Any>{



                            throw RuntimeException()
}


    public isCommand(command: Command): boolean{
var command = command



                            throw RuntimeException()
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



                            throw RuntimeException()
}


    public isPaused(): boolean{



                            throw RuntimeException()
}


    public removePauseCommand(){
}


    public pause(){
}


    public unPause(){
}


                @Throws(Exception::class)
            
    process(){
}


    paint(graphics: Graphics){
var graphics = graphics
}


    public destroy(){
}


    setPaused(isPaused: boolean){
var isPaused = isPaused



                            throw RuntimeException()
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
                
            

