
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProceduralAnimationInterfaceFactoryInterface } from './ProceduralAnimationInterfaceFactoryInterface.js';
//not GWT import const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

                import { VectorExplosionGenerator } from './VectorExplosionGenerator.js';
//not GWT import const VectorExplosionGenerator = globalThis.org.allbinary.animation.VectorExplosionGenerator;

                import { AnimationBehaviorFactory } from './AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

                import { VectorAnimationInterface } from './VectorAnimationInterface.js';
//not GWT import const VectorAnimationInterface = globalThis.org.allbinary.animation.VectorAnimationInterface;

                import { VectorRotationAnimation } from './VectorRotationAnimation.js';
//not GWT import const VectorRotationAnimation = globalThis.org.allbinary.animation.VectorRotationAnimation;

                import { Animation } from './Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

                
export class VectorExplosionAnimationFactory
            extends Object
         implements ProceduralAnimationInterfaceFactoryInterface {
        

    private readonly vectorExplosionGenerator: VectorExplosionGenerator = VectorExplosionGenerator.getInstance()!;

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;

    readonly animationBehaviorFactory: AnimationBehaviorFactory;

public constructor (basicColor: BasicColor, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
        this.animationBehaviorFactory= animationBehaviorFactory;
    
this.setBasicColorP(basicColor);
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{

    var vectorRotationAnimationInterface: VectorAnimationInterface = animationInterface as unknown as VectorAnimationInterface;;
    

    var frame: number = vectorRotationAnimationInterface!.getFrame()!;;
    

    var framePoints: number[][] = vectorRotationAnimationInterface!.getPoints(frame)!;;
    

    var points: number[][][] = this.vectorExplosionGenerator!.getInstance(framePoints, 6, this.vectorExplosionGenerator!.ROTATION)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new VectorRotationAnimation(points, this.getBasicColorP(), this.animationBehaviorFactory!.getOrCreateInstance());
    
}


    setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
}


    getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


}



