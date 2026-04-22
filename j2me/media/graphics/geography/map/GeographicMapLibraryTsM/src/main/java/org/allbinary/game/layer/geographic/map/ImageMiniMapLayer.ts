
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
        



import { Graphics } from "../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { Anchor } from "../../../../../../org/allbinary/graphics/Anchor.js";

    
import { PaintableToImageUtil } from "../../../../../../org/allbinary/image/PaintableToImageUtil.js";

    
import { BasicGeographicMap } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { ViewPosition } from "../../../../../../org/allbinary/view/ViewPosition.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MiniMapLayer } from "./MiniMapLayer.js";

export class ImageMiniMapLayer extends MiniMapLayer {
        

    private image: Image = NullCanvas.NULL_IMAGE;
        
        
public constructor (geographicMapInterface: BasicGeographicMap, viewPosition: ViewPosition){
            super(geographicMapInterface, viewPosition);
                    var geographicMapInterface = geographicMapInterface
var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    init(){

    var aWidth: number = allBinaryTiledLayer!.getWidth()!;
        
        
;
    

    var aHeight: number = allBinaryTiledLayer!.getHeight()!;
        
        
;
    
this.image= PaintableToImageUtil.getImage(allBinaryTiledLayer, aWidth, aHeight);
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
var graphics = graphics
graphics.drawImage(this.image, x, y, anchor);
    
this.paintDots(graphics);
    
}


}
                
            

