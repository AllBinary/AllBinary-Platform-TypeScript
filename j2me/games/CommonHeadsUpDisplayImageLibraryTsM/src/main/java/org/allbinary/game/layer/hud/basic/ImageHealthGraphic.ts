
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

      
//not game specific package import { AnimationInterface } from '../../../../../../org/allbinary/animation/AnimationInterface.js';
      const AnimationInterface = globalThis.org.allbinary.animation.AnimationInterface;

      
//not game specific package import { HealthInterface } from '../../../../../../org/allbinary/game/health/HealthInterface.js';
      const HealthInterface = globalThis.org.allbinary.game.health.HealthInterface;

      
//not game specific package import { Anchor } from '../../../../../../org/allbinary/graphics/Anchor.js';
      const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not game specific package import { ImageCacheFactory } from '../../../../../../org/allbinary/image/ImageCacheFactory.js';
      const ImageCacheFactory = globalThis.org.allbinary.image.ImageCacheFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HealthGraphic } from './HealthGraphic.js';

export class ImageHealthGraphic extends HealthGraphic {
        

    private image: Image[];

public constructor (animationInterface: AnimationInterface, healthInterface: HealthInterface, location: number, direction: number){
            super(animationInterface, healthInterface, location, direction);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.image= new Array(this.healthInterface!.getMaxHealth());
    

    var imageCacheFactory: ImageCacheFactory = ImageCacheFactory.getInstance()!;;
    




                        for (
    var numOfHealth: number = 0;numOfHealth <= max; numOfHealth++)
        {
this.image[numOfHealth]= imageCacheFactory!.get(this, numOfHealth +1 *10, 10);
    
}





                        for (
    var numOfHealth: number = 0;numOfHealth <= max; numOfHealth++)
        {




                        for (
    var index: number = 0;index < numOfHealth; index++)
        {
this.animationInterface!.paint(this.image[numOfHealth]!.getGraphics(), numOfHealth *10, 0);
    
}

}

}


    public paint(graphics: Graphics){
graphics.drawImage(this.image[max]!, x, y, Anchor.TOP_LEFT);
    
}


}
                
            

