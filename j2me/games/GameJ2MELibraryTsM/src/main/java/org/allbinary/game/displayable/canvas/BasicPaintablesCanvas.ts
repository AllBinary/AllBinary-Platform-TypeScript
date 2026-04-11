
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
        



import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { ColorFillBasePaintable } from "../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js";

    
import { ColorFillPaintableFactory } from "../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    

export class BasicPaintablesCanvas extends GameCommandCanvas {
        

    private readonly paintableArray: Paintable[]

    private readonly colorFillPaintable: ColorFillBasePaintable
public constructor (cmdListener: CommandListener, name: string, allBinaryGameLayerManager: AllBinaryGameLayerManager, paintableArray: Paintable[])                        

                            : super(cmdListener, name, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor()){

            super();
                //var cmdListener = cmdListener
    //var name = name
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
    //var paintableArray = paintableArray


                            //For kotlin this is before the body of the constructor.
                    
this.paintableArray= paintableArray;
    
this.colorFillPaintable= ColorFillPaintableFactory.getInstance()!.getInstance(allBinaryGameLayerManager!.getBackgroundBasicColor(), false);
    
}


    public paint(graphics: Graphics){
    //var graphics = graphics
this.colorFillPaintable!.paint(graphics);
    
graphics.setColor(this.foregroundColor);
    




                        for (
    var index: number = this.paintableArray!.length -1;
        
        
index >= 0; index--)
        {
this.paintableArray[index]!.paint(graphics);
    
}

super.paint(graphics);
    
}


}
                
            

