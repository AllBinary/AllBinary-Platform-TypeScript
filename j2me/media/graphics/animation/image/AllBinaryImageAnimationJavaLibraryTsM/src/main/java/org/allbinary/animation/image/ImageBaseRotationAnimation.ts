
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


        
            import { Throwable } from '../../../../java/lang/Throwable.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { DisposalUtil } from '../../../../org/allbinary/DisposalUtil.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      
import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageBaseRotationAnimation extends RotationAnimation {
        

    private readonly image: Image
public constructor (image: Image, angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior){
            super(angleInfo, CircularIndexUtil.createInstance(totalAngle /angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.image= image;
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();;
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    anchor: number = Anchor.TOP_LEFT;

    public paintXY(graphics: Graphics, x: number, y: number){
graphics.drawImage(this.image, x, y, this.anchor);
    
}


    getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.image;
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.image.getWidth();;
    
}


    public close(){
DisposalUtil.getInstance()!.disposeImage(this.image);
    
}


                //@Throws(Throwable.constructor)
            
    finalize(){
DisposalUtil.getInstance()!.disposeImage(this.image);
    
}


}
                
            

