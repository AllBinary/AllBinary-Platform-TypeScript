
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      
import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
      
import { AndroidUtil } from '../../../../../org/allbinary/AndroidUtil.js';
      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      
import { AnimationBehaviorFactory } from '../../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      
import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
      
import { BaseImageAnimationFactory } from '../../../../../org/allbinary/animation/image/BaseImageAnimationFactory.js';
      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { BasicColorUtil } from '../../../../../org/allbinary/graphics/color/BasicColorUtil.js';
      
import { AnimationFactorySpriteScaleUtil } from '../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js';
      
import { PrimitiveIntUtil } from '../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpriteIndexedAnimation } from './SpriteIndexedAnimation.js';
import { AdjustedSpriteIndexedAnimation } from './AdjustedSpriteIndexedAnimation.js';

export class SpriteIndexedAnimationFactory extends BaseImageAnimationFactory implements ProceduralAnimationInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public static createCWHDXY(image: Image, basicColorArray: BasicColor[], width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): SpriteIndexedAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SpriteIndexedAnimationFactory(image, basicColorArray, PrimitiveIntUtil.getArrayInstance(), width, height, dx, dy, animationBehaviorFactory);
    
}


                //@Throws(Exception.constructor)
            
    public static createCWH(image: Image, basicColorArray: BasicColor[], width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory): SpriteIndexedAnimationFactory{

    var spriteIndexedAnimationFactory: SpriteIndexedAnimationFactory = new SpriteIndexedAnimationFactory(image, basicColorArray, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
;
    
spriteIndexedAnimationFactory!.initHWH();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return spriteIndexedAnimationFactory;
    
}


                //@Throws(Exception.constructor)
            
    public static createWH(image: Image, width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory): SpriteIndexedAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SpriteIndexedAnimationFactory(image, BasicColorUtil.getInstance()!.ZERO_ARRAY, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
    
}


    private readonly animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance()!;

    private basicColorArray: BasicColor[] = BasicColorUtil.getInstance()!.ZERO_ARRAY;
private constructor (image: Image, basicColorArray: BasicColor[], sequenceArray: number[], width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){
            super(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.basicColorArray= basicColorArray;
    
}


    initHWH(){
this.animationFactoryInitializationVisitor!.dx=  -(this.animationFactoryInitializationVisitor!.width>>2);
    
this.animationFactoryInitializationVisitor!.dy=  -(this.animationFactoryInitializationVisitor!.height>>2);
    

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    this.animationFactoryInitializationVisitor!.dx += 3;
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var sprite: Sprite = this.animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight)!;
;
    

                        if(this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdjustedSpriteIndexedAnimation(sprite, this.getImage(), this.basicColorArray, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SpriteIndexedAnimation(sprite, this.getImage(), this.basicColorArray, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(0);;
    
}


}
                
            

