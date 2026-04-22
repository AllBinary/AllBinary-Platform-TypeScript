
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
        



import { BasicColor } from "../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../org/allbinary/graphics/color/BasicColorFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ProceduralAnimationInterfaceFactoryInterface } from "./ProceduralAnimationInterfaceFactoryInterface.js";

import { AnimationBehaviorFactory } from "./AnimationBehaviorFactory.js";

import { VectorExplosionGenerator } from "./VectorExplosionGenerator.js";

import { Animation } from "./Animation.js";

export class VectorExplosionAnimationFactory
            extends Object
         implements ProceduralAnimationInterfaceFactoryInterface {
        

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;
        
        

    readonly animationBehaviorFactory: AnimationBehaviorFactory
public constructor (basicColor: BasicColor){
            this(basicColor, AnimationBehaviorFactory.getInstance());
                        //var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (basicColor: BasicColor, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
            //var basicColor = basicColor
    //var animationBehaviorFactory = animationBehaviorFactory
this.animationBehaviorFactory= animationBehaviorFactory;
    
this.setBasicColorP(basicColor);
    
}


    private readonly vectorExplosionGenerator: VectorExplosionGenerator = VectorExplosionGenerator.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getInstance(animationInterface: Animation): Animation{
    //var animationInterface = animationInterface

    var vectorRotationAnimationInterface: VectorAnimationInterface = animationInterface as VectorAnimationInterface;
        
        
;
    

    var frame: number = vectorRotationAnimationInterface!.getFrame()!;
        
        
;
    

    var framePoints: number[][] = vectorRotationAnimationInterface!.getPoints(frame)!;
        
        
;
    

    var points: number[][][] = this.vectorExplosionGenerator!.getInstance(framePoints, 6, vectorExplosionGenerator!.ROTATION)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new VectorRotationAnimation(points, this.getBasicColorP(), this.animationBehaviorFactory!.getOrCreateInstance());
    
}


    setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor;
    
}


    getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


}
                
            

