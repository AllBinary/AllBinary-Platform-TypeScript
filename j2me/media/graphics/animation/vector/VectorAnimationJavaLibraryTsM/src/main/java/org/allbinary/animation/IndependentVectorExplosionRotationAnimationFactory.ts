
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

    
import { NullUtil } from "../../../org/allbinary/logic/NullUtil.js";

    
import { VectorInfo } from "../../../org/allbinary/vector/VectorInfo.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ProceduralAnimationInterfaceFactoryInterface } from "./ProceduralAnimationInterfaceFactoryInterface.js";

import { VectorAnimationFactoryInterface } from "./VectorAnimationFactoryInterface.js";

import { VectorRotationGenerator } from "./VectorRotationGenerator.js";

import { VectorExplosionGenerator } from "./VectorExplosionGenerator.js";

import { Animation } from "./Animation.js";

export class IndependentVectorExplosionRotationAnimationFactory
            extends Object
         implements ProceduralAnimationInterfaceFactoryInterface {
        

    private framePoints: number[][][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
        
        

    private vectorInfo: VectorInfo

    private basicColor: BasicColor

    private vectorAnimationFactoryInterface: VectorAnimationFactoryInterface
public constructor (vectorInfo: VectorInfo, basicColor: BasicColor, vectorAnimationFactoryInterface: VectorAnimationFactoryInterface){

            super();
        var vectorInfo = vectorInfo
var basicColor = basicColor
var vectorAnimationFactoryInterface = vectorAnimationFactoryInterface
this.vectorInfo= vectorInfo;
    
this.basicColor= basicColor;
    
this.vectorAnimationFactoryInterface= vectorAnimationFactoryInterface;
    
this.init();
    
}


                //@Throws(Error::class)
            
    init(){
this.framePoints= VectorRotationGenerator.getInstance()!.getInstance(this.vectorInfo);
    
}


    private readonly vectorExplosionGenerator: VectorExplosionGenerator = VectorExplosionGenerator.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getInstance(animationInterface: Animation): Animation{
var animationInterface = animationInterface

    var frame: number = 0;
        
        
;
    

                        if(animationInterface != 
                                    null
                                )
                        
                                    {
                                    
    var rotationAnimationInterface: IndexedAnimation = animationInterface as IndexedAnimation;
        
        
;
    
frame= rotationAnimationInterface!.getFrame();
    

                                    }
                                

    var points: number[][][] = this.vectorExplosionGenerator!.getInstance(this.framePoints[frame]!, 6, vectorExplosionGenerator!.ROTATION)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.vectorAnimationFactoryInterface!.getInstance(points, this.basicColor);

                        ;
    
}


}
                
            

