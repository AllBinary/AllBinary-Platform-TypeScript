
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
import { Stack } from '../../../java/util/Stack.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Canvas } from './Canvas.js';
import { Command } from './Command.js';
import { CommandListener } from './CommandListener.js';
import { Graphics } from './Graphics.js';

export class NullCanvas extends Canvas {
        

    public static readonly NULL_CANVAS: NullCanvas = new NullCanvas();
public constructor (){

            super();
        }


    public setFullScreenMode(mode: boolean){
}


    sizeChanged(w: number, h: number){
}


    public getCommandStack(): Stack<any>{



                            throw new RuntimeException();
                    
}


    public isCommand(command: Command): boolean{



                            throw new RuntimeException();
                    
}


    public addCommand(command: Command){
}


    public removeCommand(command: Command){
}


    public removeAllCommands(){
}


    public setCommandListener(l: CommandListener){
}


    public getCustomCommandListener(): CommandListener{



                            throw new RuntimeException();
                    
}


    public isPaused(): boolean{



                            throw new RuntimeException();
                    
}


    public removePauseCommand(){
}


    public pause(){
}


    public unPause(){
}


                //@Throws(Exception.constructor)
            
    process(){
}


    paint(graphics: Graphics){
}


    public destroy(){
}


    setPaused(isPaused: boolean){



                            throw new RuntimeException();
                    
}


    pointerDragged(x: number, y: number){
}


    pointerPressed(x: number, y: number){
}


    pointerReleased(x: number, y: number){
}


}
                
            

