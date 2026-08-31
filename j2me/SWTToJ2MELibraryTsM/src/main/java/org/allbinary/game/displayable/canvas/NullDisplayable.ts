
        /* Generated Code Do Not Modify */
        



//not plain js import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BaseGameStatistics } from '../../../../../org/allbinary/canvas/BaseGameStatistics.js';
      //not GWT import const BaseGameStatistics = globalThis.org.allbinary.canvas.BaseGameStatistics;

      
import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
      //not GWT import const GameStatisticsFactory = globalThis.org.allbinary.canvas.GameStatisticsFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //SWTToJ2ME
export class NullDisplayable extends Canvas {
        

    private static readonly SINGLETON: NullDisplayable = new NullDisplayable();

    public static getInstance(): NullDisplayable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullDisplayable.SINGLETON;
    
}


private constructor (){

            super();
        }


    private readonly baseGameStatistics: BaseGameStatistics = GameStatisticsFactory.getInstance()!;

    public paint(graphics: Graphics){
this.baseGameStatistics!.nextRefresh();
    
}


}



