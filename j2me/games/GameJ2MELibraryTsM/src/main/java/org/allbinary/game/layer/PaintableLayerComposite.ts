
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { PaintableInterface } from "../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { Layer } from "../../../../org/allbinary/layer/Layer.js";

    

export class PaintableLayerComposite extends Paintable {
        

    private readonly paintableArray: Layer[]
public constructor (paintableArray: Layer[]){

            super();
                //var paintableArray = paintableArray
this.paintableArray= paintableArray
}


    public paint(graphics: Graphics){
    //var graphics = graphics




                        for (
    var index: number = paintableArray!.length
                ;
        
        
--index >= 0; )
        {
paint(graphics)
}

}


    public paintThreed(graphics: Graphics){
    //var graphics = graphics

    var paintableInterface: PaintableInterface





                        for (
    var index: number = paintableArray!.length
                ;
        
        
--index >= 0; )
        {
paintableInterface= this.paintableArray[index]! as PaintableInterface
paintThreed(graphics)
}

}


}
                
            

