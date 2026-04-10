
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../../javax/microedition/lcdui/Image.js";

    
import { Sprite } from "../../../../../javax/microedition/lcdui/game/Sprite.js";

    
import { AnimationBehavior } from "../../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { IndexedAnimation } from "../../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BasicColorUtil } from "../../../../../org/allbinary/graphics/color/BasicColorUtil.js";

    
import { ColorCompositeInterface } from "../../../../../org/allbinary/graphics/color/ColorCompositeInterface.js";

    
import { PrimitiveIntUtil } from "../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    

export class SpriteIndexedAnimation extends IndexedAnimation
                , ColorCompositeInterface {
        

    readonly sprite: Sprite

    readonly image: Image

    private readonly basicColorArray: BasicColor[]
public constructor (sprite: Sprite, image: Image, animationBehavior: AnimationBehavior)                        

                            : this(sprite, image, BasicColorUtil.getInstance()!.ZERO_ARRAY, animationBehavior){

            super();
                //var sprite = sprite
    //var image = image
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (sprite: Sprite, image: Image, basicColorArray: BasicColor[], animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var sprite = sprite
    //var image = image
    //var basicColorArray = basicColorArray
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.sprite= sprite
this.image= image
this.basicColorArray= basicColorArray

                        if(this.basicColorArray!.length != 0 && this.getSize() != this.basicColorArray!.length)
                        
                                    {
                                    


                            throw Error(StringMaker().
                            append(CommonLabels.getInstance()!.TOTAL_LABEL)!.appendint(this.getSize())!.append("!=")!.appendint(this.basicColorArray!.length)!.toString())

                                    }
                                
}


                //@Throws(Error::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();
    
}


    public setBasicColorP(basicColor: BasicColor){
    //var basicColor = basicColor




                        for (
    var index: number = 0;
        
        
index < this.basicColorArray!.length; index++)
        {

                        if(basicColor == this.basicColorArray[index])
                        
                                    {
                                    this.this.setFrame(index)
break;

                    

                                    }
                                
}

}


    public getBasicColorP(): BasicColor{

                        if(this.basicColorArray!.length < this.getFrame())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColorArray[this.getFrame()]!;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicColorFactory.getInstance()!.WHITE;
    

                        }
                            
}


    public paint(graphics: Graphics, frame: number, x: number, y: number){
    //var graphics = graphics
    //var frame = frame
    //var x = x
    //var y = y
this.this.setFrame(frame)
this.sprite.setPosition(x, y)
sprite.paint(graphics)
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
this.sprite.setPosition(x, y)
sprite.paint(graphics)
}


    paint(graphics: Graphics){
    //var graphics = graphics
sprite.paint(graphics)
}


    public nextFrame(){
this.sprite.nextFrame()
}


    public previousFrame(){
this.sprite.prevFrame()
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sprite.getRawFrameCount();
    
}


    public setFrame(frame: number){
    //var frame = frame
this.sprite.setFrame(frame)
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sprite.getFrame();
    
}


    public isLastFrame(): boolean{

                        if(this.sprite.getFrame() == this.getSize() -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public getLastFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();
    
}


    public setSequence(sequence: IntArray){
    //var sequence = sequence
}


    public getSequence(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();
    
}


    public close(){
}


                //@Throws(Error::class)
            
    finalize(){
}


}
                
            

