
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Image } from '../../../../../../javax/microedition/lcdui/Image.js';
      //not GWT import const Image = globalThis.javax.microedition.lcdui.Image;

      
import { NullImage } from '../../../../../../javax/microedition/lcdui/NullImage.js';
      //not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { Anchor } from '../../../../../../org/allbinary/graphics/Anchor.js';
      //not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
import { PaintableToImageUtil } from '../../../../../../org/allbinary/image/PaintableToImageUtil.js';
      //not GWT import const PaintableToImageUtil = globalThis.org.allbinary.image.PaintableToImageUtil;

      
import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { ViewPositionBase } from '../../../../../../org/allbinary/view/ViewPositionBase.js';
      //not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MiniMapLayer } from './MiniMapLayer.js';

export class ImageMiniMapLayer extends MiniMapLayer {
        

    private image: Image = NullImage.NULL_IMAGE;

public constructor (geographicMapInterface: BasicGeographicMap, viewPosition: ViewPositionBase){
            super(geographicMapInterface, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    init(){

    var aWidth: number = this.allBinaryTiledLayer!.getWidth()!;;
    

    var aHeight: number = this.allBinaryTiledLayer!.getHeight()!;;
    
this.image= PaintableToImageUtil.getImage(this.allBinaryTiledLayer, aWidth, aHeight);
    
}


    private anchor: number = Anchor.TOP_LEFT;

    public paint(graphics: Graphics){
graphics.drawImage(this.image, this.x, this.y, this.anchor);
    
this.paintDots(graphics);
    
}


}



