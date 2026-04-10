
        /* Generated Code Do Not Modify */
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { BaseGameStatistics } from "../../../../../org/allbinary/canvas/BaseGameStatistics.js";

    
import { GameStatisticsFactory } from "../../../../../org/allbinary/canvas/GameStatisticsFactory.js";

    

export class NullDisplayable extends Canvas {
        

    private static readonly SINGLETON: NullDisplayable = new NullDisplayable();
        
        

    public static getInstance(): NullDisplayable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}

private constructor (){

            super();
            }


    private readonly baseGameStatistics: BaseGameStatistics = GameStatisticsFactory.getInstance()!;
        
        

    public paint(graphics: Graphics){
var graphics = graphics
baseGameStatistics!.nextRefresh()
}


}
                
            

