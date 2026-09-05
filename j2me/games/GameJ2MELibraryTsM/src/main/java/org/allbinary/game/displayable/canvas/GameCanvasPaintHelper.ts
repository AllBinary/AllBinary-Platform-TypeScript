
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

        


//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
//not GWT import const ProcessPaintable = globalThis.org.allbinary.graphics.paint.ProcessPaintable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';
//not GWT import - same folder const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

                
export class GameCanvasPaintHelper extends ProcessPaintable {
        

    private gameCanvas: AllBinaryGameCanvas;

public constructor (gameCanvas: AllBinaryGameCanvas){

            super();
        this.gameCanvas= gameCanvas;
    
}


    public process(){
}


    public paint(graphics: Graphics){
this.gameCanvas!.draw(graphics);
    
}


}



