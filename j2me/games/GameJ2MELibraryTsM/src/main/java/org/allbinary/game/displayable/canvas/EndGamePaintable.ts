
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    

export class EndGamePaintable extends Paintable {
        

    private gameCanvas: AllBinaryGameCanvas
public constructor (gameCanvas: AllBinaryGameCanvas){

            super();
            var gameCanvas = gameCanvas
this.gameCanvas= gameCanvas
}


    public paint(graphics: Graphics){
var graphics = graphics
gameCanvas!.paintGameOver(graphics)
}


}
                
            

