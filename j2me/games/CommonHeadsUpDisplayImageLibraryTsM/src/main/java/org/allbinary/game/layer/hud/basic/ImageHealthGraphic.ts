
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

    
import { AnimationInterface } from "../../../../../../org/allbinary/animation/AnimationInterface.js";

    
import { HealthInterface } from "../../../../../../org/allbinary/game/health/HealthInterface.js";

    
import { Anchor } from "../../../../../../org/allbinary/graphics/Anchor.js";

    
import { ImageCacheFactory } from "../../../../../../org/allbinary/image/ImageCacheFactory.js";

    

export class ImageHealthGraphic extends HealthGraphic {
        

    private image: Image[]
public constructor (animationInterface: AnimationInterface, healthInterface: HealthInterface, location: number, direction: number)                        

                            : super(animationInterface, healthInterface, location, direction){

            super();
            var animationInterface = animationInterface
var healthInterface = healthInterface
var location = location
var direction = direction


                            //For kotlin this is before the body of the constructor.
                    
image= new Array(this.healthInterface!.getMaxHealth());
    

    var imageCacheFactory: ImageCacheFactory = ImageCacheFactory.getInstance()!;
        
        
;
    




                        for (
    var numOfHealth: number = 0;
        
        
numOfHealth <= max; numOfHealth++)
        {
image[numOfHealth]= imageCacheFactory!.get(this, numOfHealth +1 *10, 10);
    
}





                        for (
    var numOfHealth: number = 0;
        
        
numOfHealth <= max; numOfHealth++)
        {




                        for (
    var index: number = 0;
        
        
index < numOfHealth; index++)
        {
this.animationInterface!.paint(image[numOfHealth]!.getGraphics(), numOfHealth *10, 0);
    
}

}

}


    public paint(graphics: Graphics){
var graphics = graphics
graphics.drawImage(this.image[max]!, x, y, Anchor.TOP_LEFT);
    
}


}
                
            

