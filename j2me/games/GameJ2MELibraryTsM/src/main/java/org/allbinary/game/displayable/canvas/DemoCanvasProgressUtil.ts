
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { ProgressCanvas } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      //not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      //not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
import { PaintableComposite } from '../../../../../org/allbinary/graphics/paint/PaintableComposite.js';
      //not GWT import const PaintableComposite = globalThis.org.allbinary.graphics.paint.PaintableComposite;

      
import { PaintableInterface } from '../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      //not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DemoCanvas } from './DemoCanvas.js';
//not GWT import const  = globalThis.org.allbinary.game.displayable.canvas.DemoCanvas;

                
export class DemoCanvasProgressUtil
            extends Object
         {
        

    public static showProgress(demoCanvas: DemoCanvas){
DemoCanvasProgressUtil.showProgressOptionallyInTheBackground(demoCanvas, false);
    
}


    public static showProgressOptionallyInTheBackground(demoCanvas: DemoCanvas, background: boolean){

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.startBackground(background);
    

    var paintableArray: PaintableInterface[] = new Array(2);;
    
paintableArray[0]= progressCanvas;
    
paintableArray[1]= demoCanvas!.getDefaultPaintableInterface();
    
demoCanvas!.setDefaultPaintableInterface(new PaintableComposite(paintableArray));
    
demoCanvas!.setPaintableInterface(demoCanvas!.getDefaultPaintableInterface());
    
}


}



