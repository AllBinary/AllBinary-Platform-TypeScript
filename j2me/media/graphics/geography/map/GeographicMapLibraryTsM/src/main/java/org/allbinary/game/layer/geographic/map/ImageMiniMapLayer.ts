
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
        
//not game specific package import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { NullImage } from '../../../../../../javax/microedition/lcdui/NullImage.js';
      const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
//not game specific package import { Anchor } from '../../../../../../org/allbinary/graphics/Anchor.js';
      const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not game specific package import { PaintableToImageUtil } from '../../../../../../org/allbinary/image/PaintableToImageUtil.js';
      const PaintableToImageUtil = globalThis.org.allbinary.image.PaintableToImageUtil;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { ViewPositionBase } from '../../../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
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



