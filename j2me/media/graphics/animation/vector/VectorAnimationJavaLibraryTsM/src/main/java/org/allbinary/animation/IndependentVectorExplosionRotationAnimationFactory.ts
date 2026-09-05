
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

      
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
import { VectorInfo } from '../../../org/allbinary/vector/VectorInfo.js';
//not GWT import const VectorInfo = globalThis.org.allbinary.vector.VectorInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProceduralAnimationInterfaceFactoryInterface } from './ProceduralAnimationInterfaceFactoryInterface.js';
//not GWT import - same folder const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

                import { VectorAnimationFactoryInterface } from './VectorAnimationFactoryInterface.js';
//not GWT import - same folder const VectorAnimationFactoryInterface = globalThis.org.allbinary.animation.VectorAnimationFactoryInterface;

                import { VectorRotationGenerator } from './VectorRotationGenerator.js';
//not GWT import - same folder const VectorRotationGenerator = globalThis.org.allbinary.animation.VectorRotationGenerator;

                import { VectorExplosionGenerator } from './VectorExplosionGenerator.js';
//not GWT import - same folder const VectorExplosionGenerator = globalThis.org.allbinary.animation.VectorExplosionGenerator;

                import { IndexedAnimation } from './IndexedAnimation.js';
//not GWT import - same folder const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

                import { Animation } from './Animation.js';
//not GWT import - same folder const Animation = globalThis.org.allbinary.animation.Animation;

                
export class IndependentVectorExplosionRotationAnimationFactory
            extends Object
         implements ProceduralAnimationInterfaceFactoryInterface {
        

    private framePoints: number[][][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;

    private vectorInfo: VectorInfo;

    private basicColor: BasicColor;

    private vectorAnimationFactoryInterface: VectorAnimationFactoryInterface;

public constructor (vectorInfo: VectorInfo, basicColor: BasicColor, vectorAnimationFactoryInterface: VectorAnimationFactoryInterface){

            super();
        this.vectorInfo= vectorInfo;
    
this.basicColor= basicColor;
    
this.vectorAnimationFactoryInterface= vectorAnimationFactoryInterface;
    
this.init();
    
}


                //@Throws(Exception.constructor)
            
    init(){
this.framePoints= VectorRotationGenerator.getInstance()!.getInstance(this.vectorInfo);
    
}


    private readonly vectorExplosionGenerator: VectorExplosionGenerator = VectorExplosionGenerator.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{

    var frame: number = 0;;
    

                        if(animationInterface != 
                                    null
                                )
                        
                                    {
                                    
    var rotationAnimationInterface: IndexedAnimation = animationInterface as IndexedAnimation;;
    
frame= rotationAnimationInterface!.getFrame();
    

                                    }
                                

    var points: number[][][] = this.vectorExplosionGenerator!.getInstance(this.framePoints[frame]!, 6, this.vectorExplosionGenerator!.ROTATION)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.vectorAnimationFactoryInterface!.getInstance(points, this.basicColor);;
    
}


}



