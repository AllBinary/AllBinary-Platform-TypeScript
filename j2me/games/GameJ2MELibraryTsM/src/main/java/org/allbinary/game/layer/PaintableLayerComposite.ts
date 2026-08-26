
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
        



//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { PaintableInterface } from '../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
//not game specific package import { Layer } from '../../../../org/allbinary/layer/Layer.js';
      const Layer = globalThis.org.allbinary.layer.Layer;

      
















                                        
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
                
            

