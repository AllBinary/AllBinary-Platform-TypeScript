
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { ColorFillBasePaintable } from '../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js';
//not GWT import const ColorFillBasePaintable = globalThis.org.allbinary.game.paint.ColorFillBasePaintable;

      
import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
//not GWT import const ColorFillPaintableFactory = globalThis.org.allbinary.game.paint.ColorFillPaintableFactory;

      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameCommandCanvas } from './GameCommandCanvas.js';
//not GWT import - same folder const GameCommandCanvas = globalThis.org.allbinary.game.displayable.canvas.GameCommandCanvas;

                
export class BasicPaintablesCanvas extends GameCommandCanvas {
        

    private readonly paintableArray: Paintable[];

    private readonly colorFillPaintable: ColorFillBasePaintable;

public constructor (cmdListener: CommandListener, name: string, allBinaryGameLayerManager: AllBinaryGameLayerManager, paintableArray: Paintable[]){
            super(cmdListener, name, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.paintableArray= paintableArray;
    
this.colorFillPaintable= ColorFillPaintableFactory.getInstance()!.getInstance(allBinaryGameLayerManager!.getBackgroundBasicColor(), false);
    
}


    public paint(graphics: Graphics){
this.colorFillPaintable!.paint(graphics);
    
graphics.setColor(this.foregroundColor);
    




                        for (
    var index: number = this.paintableArray!.length -1;index >= 0; index--)
        {
this.paintableArray[index]!.paint(graphics);
    
}

super.paint(graphics);
    
}


}



