
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


        
            import { Throwable } from '../../../../../java/lang/Throwable.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      
import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
      
import { AnimationBehavior } from '../../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { IndexedAnimation } from '../../../../../org/allbinary/animation/IndexedAnimation.js';
      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { ColorCompositeInterface } from '../../../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
      
import { PrimitiveIntUtil } from '../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SpriteIndexedAnimation extends IndexedAnimation implements ColorCompositeInterface {
        

    readonly sprite: Sprite

    readonly image: Image

    private readonly basicColorArray: BasicColor[]
public constructor (sprite: Sprite, image: Image, basicColorArray: BasicColor[], animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.sprite= sprite;
    
this.image= image;
    
this.basicColorArray= basicColorArray;
    

                        if(this.basicColorArray!.length != 0 && this.getSize() != this.basicColorArray!.length)
                        
                                    {
                                    


                            throw new Exception(new StringMaker().
                            append(CommonLabels.getInstance()!.TOTAL_LABEL)!.appendint(this.getSize())!.append("!=")!.appendint(this.basicColorArray!.length)!.toString());
                    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();;
    
}


    public setBasicColorP(basicColor: BasicColor){




                        for (
    var index: number = 0;
index < this.basicColorArray!.length; index++)
        {

                        if(basicColor == this.basicColorArray[index])
                        
                                    {
                                    this.setFrame(index);
    
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


    public paintFrame(graphics: Graphics, frame: number, x: number, y: number){
this.setFrame(frame);
    
this.sprite.setPosition(x, y);
    
this.sprite.paint(graphics);
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.sprite.setPosition(x, y);
    
this.sprite.paint(graphics);
    
}


    paint(graphics: Graphics){
this.sprite.paint(graphics);
    
}


    public nextFrame(){
this.sprite.nextFrame();
    
}


    public previousFrame(){
this.sprite.prevFrame();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sprite.getRawFrameCount();;
    
}


    public setFrame(frame: number){
this.sprite.setFrame(frame);
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sprite.getFrame();;
    
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
                        return this.getSize();;
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    public close(){
}


                //@Throws(Throwable.constructor)
            
    finalize(){
}


}
                
            

