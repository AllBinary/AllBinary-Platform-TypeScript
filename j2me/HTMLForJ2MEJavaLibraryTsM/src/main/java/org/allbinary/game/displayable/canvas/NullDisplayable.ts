
        /* Generated Code Do Not Modify */

        


import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { BaseGameStatistics } from '../../../../../org/allbinary/canvas/BaseGameStatistics.js';
//not GWT import const BaseGameStatistics

import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
//not GWT import const GameStatisticsFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //HTMLForJ2ME
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



