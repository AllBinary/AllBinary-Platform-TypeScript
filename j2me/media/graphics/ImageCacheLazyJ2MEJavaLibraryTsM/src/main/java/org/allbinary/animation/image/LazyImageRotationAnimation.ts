
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { GL } from "../../../../javax/microedition/khronos/opengles/GL.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { NullRotationAnimationFactory } from "../../../../org/allbinary/animation/NullRotationAnimationFactory.js";

    
import { RotationAnimation } from "../../../../org/allbinary/animation/RotationAnimation.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { ImageCache } from "../../../../org/allbinary/image/ImageCache.js";

    
import { ImageCacheFactory } from "../../../../org/allbinary/image/ImageCacheFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    

export class LazyImageRotationAnimation extends RotationAnimation {
        

    private static readonly SET_REAL_ANIMATION: string = "setRealAnimation";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public readonly layoutIndex: number

    public readonly instanceId: number

    public readonly animationInterfaceFactoryInterface: BaseImageAnimationFactory

    private readonly NULL_INDEX_ANIMATION: IndexedAnimation

    private animation: IndexedAnimation

    public scaleProperties: ScaleProperties = ScaleProperties.instance;
        
        
public constructor (layoutIndex: number, instanceId: number, scaleProperties: ScaleProperties, animationInterfaceFactoryInterface: BaseImageAnimationFactory, animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var layoutIndex = layoutIndex
    //var instanceId = instanceId
    //var scaleProperties = scaleProperties
    //var animationInterfaceFactoryInterface = animationInterfaceFactoryInterface
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.layoutIndex= layoutIndex
this.instanceId= instanceId
this.animationInterfaceFactoryInterface= animationInterfaceFactoryInterface

    var imageCache: ImageCache = ImageCacheFactory.getInstance()!;
        
        

imageCache!.add(this)
this.scaleProperties= scaleProperties
this.NULL_INDEX_ANIMATION= NullRotationAnimationFactory.getFactoryInstance()!.getInstance(0) as IndexedAnimation
this.animation= object: RotationAnimation(animationBehavior)
                                {
                                
    var private index: number= 0

    public setFrame(index: number){
    //var index = index
this.index= index
}

    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.index;
    
}

    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y

        try {
            ImageCacheFactory.getInstance()!.insertFirst(this@LazyImageRotationAnimation)
animation= NULL_INDEX_ANIMATION
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e)
}

}

    public paintThreed(graphics: Graphics, x: number, y: number, z: number){
    //var graphics = graphics
    //var x = x
    //var y = y
    //var z = z

        try {
            ImageCacheFactory.getInstance()!.insertFirst(this@LazyImageRotationAnimation)
animation= NULL_INDEX_ANIMATION
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e)
}

}

                                }
                            
}


    public setRealAnimation(){

        try {
            
    var animation: IndexedAnimation = this.animation;
        
        

this.animationInterfaceFactoryInterface!.setInitialScale(scaleProperties)
this.animation= this.animationInterfaceFactoryInterface!.getInstance(this.instanceId) as IndexedAnimation
this.animation.setState(animation)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, SET_REAL_ANIMATION, e)
}

}


    public setScale(scaleX: number, scaleY: number){
    //var scaleX = scaleX
    //var scaleY = scaleY
this.animation.setScale(scaleX, scaleY)
}


    public getAnimationBehavior(): AnimationBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getAnimationBehavior();
    
}


                //@Throws(Error::class)
            
    public set(gl: GL){
    //var gl = gl
this.animation.set(gl)
}


    public setAlpha(alpha: number){
    //var alpha = alpha
this.animation.setAlpha(alpha)
}


    public setDx(dx: number){
    //var dx = dx
this.animation.setDx(dx)
}


    public setDy(dy: number){
    //var dy = dy
this.animation.setDy(dy)
}


    public setMaxScale(maxScaleX: number, maxScaleY: number){
    //var maxScaleX = maxScaleX
    //var maxScaleY = maxScaleY
this.animation.setMaxScale(maxScaleX, maxScaleY)
}


    public nextRotation(){
animation = this.animationanimation as RotationAnimation
animation.
                    nextRotation()
}


    public previousRotation(){
animation = this.animationanimation as RotationAnimation
animation.
                    previousRotation()
}


    public nextRotationX(){
animation = this.animationanimation as RotationAnimation
animation.
                    nextRotationX()
}


    public previousRotationX(){
animation = this.animationanimation as RotationAnimation
animation.
                    previousRotationX()
}


    public nextRotationZ(){
animation = this.animationanimation as RotationAnimation
animation.
                    nextRotationZ()
}


    public previousRotationZ(){
animation = this.animationanimation as RotationAnimation
animation.
                    previousRotationZ()
}


    public changeBasicColor(basicColor: BasicColor){
    //var basicColor = basicColor
this.animation.changeBasicColor(basicColor)
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getBasicColorP();
    
}


    public getChangeBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getChangeBasicColor();
    
}


    public getChangeColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getChangeColor();
    
}


    public getColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getColor();
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getDx();
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getDy();
    
}


    public isThreed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.isThreed();
    
}


                //@Throws(Error::class)
            
    public nextFrame(){
this.animation.nextFrame()
}


    public reset(){
this.animation.reset()
}


    public setFrame(index: number){
    //var index = index
this.animation.setFrame(index)
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getFrame();
    
}


                //@Throws(Error::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getAnimationSize();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getSize();
    
}


    public previousFrame(){
this.animation.previousFrame()
}


    public isLastFrame(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.isLastFrame();
    
}


    public setSequence(sequence: IntArray){
    //var sequence = sequence
this.animation.setSequence(sequence)
}


    public getSequence(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getSequence();
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getWidth();
    
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y

        try {
            this.animation.paint(graphics, x, y)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e)
}

}


    public paintThreed(graphics: Graphics, x: number, y: number, z: number){
    //var graphics = graphics
    //var x = x
    //var y = y
    //var z = z

        try {
            this.animation.paintThreed(graphics, x, y, z)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e)
}

}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        


    var image: Image = this.animationInterfaceFactoryInterface!.getImage()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringMaker().
                            append(super.toString())!.append(commonSeps!.SPACE)!.append(image.getName())!.append(commonSeps!.SPACE)!.appendint(image.getWidth())!.append(commonSeps!.SPACE)!.appendint(image.getHeight())!.toString();
    
}


}
                
            

