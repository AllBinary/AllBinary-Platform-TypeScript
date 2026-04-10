
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

    

export class VectorExplosionAnimationFactory
            extends Object
        
                , ProceduralAnimationInterfaceFactoryInterface {
        

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;
        
        

    readonly animationBehaviorFactory: AnimationBehaviorFactory
public constructor (basicColor: BasicColor)                        

                            : this(basicColor, AnimationBehaviorFactory.getInstance()){

            super();
                //var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (basicColor: BasicColor, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
                //var basicColor = basicColor
    //var animationBehaviorFactory = animationBehaviorFactory
this.animationBehaviorFactory= animationBehaviorFactory
this.setBasicColorP(basicColor)
}


    private readonly vectorExplosionGenerator: VectorExplosionGenerator = VectorExplosionGenerator.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getInstance(animationInterface: Animation): Animation{
    //var animationInterface = animationInterface

    var vectorRotationAnimationInterface: VectorAnimationInterface = animationInterface as VectorAnimationInterface;
        
        


    var frame: number = vectorRotationAnimationInterface!.getFrame()!;
        
        


    var framePoints: IntArray[] = vectorRotationAnimationInterface!.getPoints(frame)!;
        
        


    var points: IntArray[][] = vectorExplosionGenerator!.getInstance(framePoints, 6, vectorExplosionGenerator!.ROTATION)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VectorRotationAnimation(points, this.getBasicColorP(), this.animationBehaviorFactory!.getOrCreateInstance());
    
}


    setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor
}


    getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


}
                
            

