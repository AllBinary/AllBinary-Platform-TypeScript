
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
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      
import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageArrayAnimation extends IndexedAnimation {
        

    private imageArray: Image[] = NullImage.NULL_IMAGE_ARRAY;

    private totalFrames: number= 0

    circularIndexUtil: CircularIndexUtil = CircularIndexUtil.NULL_CIRCULAR_INDEX_UTIL;
public constructor (imageArray: Image[], animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setImageArray(imageArray);
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();;
    
}


    public nextFrame(){
this.circularIndexUtil!.next();
    
}


    public previousFrame(){
this.circularIndexUtil!.previous();
    
}


    public setFrame(index: number){
this.circularIndexUtil!.setIndex(index);
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getIndex();;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalFrames;
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    public getImage(index: number): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageArray[index]!;
    
}


    public getImageArray(): Image[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageArray;
    
}


    setImageArray(imageArray: Image[]){
this.imageArray= imageArray;
    
this.totalFrames= imageArray!.length;
    
this.circularIndexUtil= CircularIndexUtil.createInstance(this.totalFrames);
    
}


    private anchor: number = Anchor.TOP_LEFT;

    public paintXY(graphics: Graphics, x: number, y: number){
graphics.drawImage(this.imageArray[this.circularIndexUtil!.getIndex()]!, x, y, this.anchor);
    
}


}
                
            

