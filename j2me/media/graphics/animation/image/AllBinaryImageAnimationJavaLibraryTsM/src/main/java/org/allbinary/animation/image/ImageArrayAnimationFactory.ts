
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      
import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageArrayAnimation } from './ImageArrayAnimation.js';
import { AdjustedImageArrayAnimation } from './AdjustedImageArrayAnimation.js';

export class ImageArrayAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    private dx: number = 0;

    private dy: number = 0;

    private readonly imageArray: Image[]

    private readonly animationBehaviorFactory: AnimationBehaviorFactory
public constructor (imageArray: Image[], dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
        this.imageArray= imageArray;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
this.dx= dx;
    
this.dy= dy;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

                        if(this.dx != 0 || this.dy != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedImageArrayAnimation(this.imageArray, this.dx, this.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageArrayAnimation(this.imageArray, AnimationBehavior.getInstance());
    

                        }
                            
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}
                
            

