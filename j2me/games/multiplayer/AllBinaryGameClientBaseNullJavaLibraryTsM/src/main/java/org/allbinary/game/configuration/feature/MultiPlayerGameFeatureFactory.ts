
        /* Generated Code Do Not Modify */
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { GameCommandsFactory } from "../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    

export class MultiPlayerGameFeatureFactory
            extends Object
         {
        

    private static readonly instance: MultiPlayerGameFeatureFactory = new MultiPlayerGameFeatureFactory();
        
        

    public static getInstance(): MultiPlayerGameFeatureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public addCommands(anyType: any = {}){
    //var anyType = anyType

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;
        
        
;
    

    var canvas: Canvas = anyType as Canvas;
        
        
;
    
canvas.addCommand(gameCommandsFactory!.QUIT_COMMAND);
    
}


}
                
            

