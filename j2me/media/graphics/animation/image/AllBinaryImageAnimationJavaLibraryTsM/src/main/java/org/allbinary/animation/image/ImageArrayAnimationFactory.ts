
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { AnimationBehaviorFactory } from "../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    

export class ImageArrayAnimationFactory
            extends Object
        
                , AnimationInterfaceFactoryInterface {
        

    private dx: number = 0;
        
        

    private dy: number = 0;
        
        

    private readonly imageArray: Image[]

    private readonly animationBehaviorFactory: AnimationBehaviorFactory
public constructor (imageArray: Image[], dx: number, dy: number)                        

                            : this(imageArray, dx, dy, AnimationBehaviorFactory.getInstance()){

            super();
                //var imageArray = imageArray
    //var dx = dx
    //var dy = dy


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (imageArray: Image[], dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(imageArray, animationBehaviorFactory){

            super();
                //var imageArray = imageArray
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.dx= dx;
    
this.dy= dy;
    
}

public constructor (imageArray: Image[])                        

                            : this(imageArray, AnimationBehaviorFactory.getInstance()){

            super();
                //var imageArray = imageArray


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (imageArray: Image[], animationBehaviorFactory: AnimationBehaviorFactory){

            super();
                //var imageArray = imageArray
    //var animationBehaviorFactory = animationBehaviorFactory
this.imageArray= imageArray;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

                        if(dx != 0 || dy != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedImageArrayAnimation(this.imageArray, dx, dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageArrayAnimation(this.imageArray, AnimationBehavior.getInstance());
    

                        }
                            
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

