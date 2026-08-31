
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
        



import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { PaintableInterface } from '../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      //not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
import { Layer } from '../../../../org/allbinary/layer/Layer.js';
      //not GWT import const Layer = globalThis.org.allbinary.layer.Layer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaintableLayerComposite extends Paintable {
        

    private readonly paintableArray: Layer[];

public constructor (paintableArray: Layer[]){

            super();
        this.paintableArray= paintableArray;
    
}


    public paint(graphics: Graphics){




                        for (
    var index: number = this.paintableArray!.length
                ;--index >= 0; )
        {
this.paintableArray[index]!.paint(graphics);
    
}

}


    public paintThreed(graphics: Graphics){

    var paintableInterface: PaintableInterface;;
    




                        for (
    var index: number = this.paintableArray!.length
                ;--index >= 0; )
        {
paintableInterface= this.paintableArray[index]! as PaintableInterface;
    
paintableInterface!.paintThreed(graphics);
    
}

}


}



