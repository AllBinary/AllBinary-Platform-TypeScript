
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
//not GWT import const GL

import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior

import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation

import { NullRotationAnimationFactory } from '../../../../org/allbinary/animation/NullRotationAnimationFactory.js';
//not GWT import const NullRotationAnimationFactory

import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
//not GWT import const RotationAnimation

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
//not GWT import const ImageCache

import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
//not GWT import const ImageCacheFactory

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory

import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
//not GWT import const AngleInfo

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties

//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
type CircularIndexUtil<T = any, U = any> = typeof CircularIndexUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CircularIndexUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
//sameFolderImports - not GWT import - same folder const BaseImageAnimationFactory

export class LazyImageRotationAnimation extends RotationAnimation {
        

    private static readonly SET_REAL_ANIMATION: string = "setRealAnimation";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly layoutIndex: number;

    public readonly instanceId: number;

    public readonly animationInterfaceFactoryInterface: BaseImageAnimationFactory;

    private readonly NULL_INDEX_ANIMATION: IndexedAnimation;

    private animation: IndexedAnimation;

    public scaleProperties: ScaleProperties = ScaleProperties.instance;

public constructor (layoutIndex: number, instanceId: number, scaleProperties: ScaleProperties, animationInterfaceFactoryInterface: BaseImageAnimationFactory, animationBehavior: AnimationBehavior){
            super(AngleInfo.getInstance(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.layoutIndex= layoutIndex;
    
this.instanceId= instanceId;
    
this.animationInterfaceFactoryInterface= animationInterfaceFactoryInterface;
    

    let imageCache: ImageCache = ImageCacheFactory.getInstance()!;;
    
imageCache!.add(this);
    
this.scaleProperties= scaleProperties;
    
this.NULL_INDEX_ANIMATION= NullRotationAnimationFactory.getFactoryInstance()!.getInstance(0) as IndexedAnimation;
    

//inner=true member= isStatic=
class ActualRotationAnimation extends RotationAnimation {
        

    private readonly lazyImageRotationAnimation: LazyImageRotationAnimation;

    private index: number= 0;

public constructor (lazyImageRotationAnimation: LazyImageRotationAnimation){
            super(AngleInfo.getInstance(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.lazyImageRotationAnimation= lazyImageRotationAnimation;
    
}


    public setFrame(index: number){
this.index= index;
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.index;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){

 try { ImageCacheFactory.getInstance()!.insertFirst(outer$LazyImageRotationAnimation);
    
this.lazyImageRotationAnimation!.animation= this.lazyImageRotationAnimation!.NULL_INDEX_ANIMATION;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    

 }
   }
 
}


    public paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number){

 try { ImageCacheFactory.getInstance()!.insertFirst(outer$LazyImageRotationAnimation);
    
this.lazyImageRotationAnimation!.animation= this.lazyImageRotationAnimation!.NULL_INDEX_ANIMATION;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    

 }
   }
 
}


}

                    //Otherwise - statement - EmptyStmt

this.animation= new ActualRotationAnimation(this);
    
}


    public setRealAnimation(){

 try { 
    let animation: IndexedAnimation = this.animation;;
    
this.animationInterfaceFactoryInterface!.setInitialScale(this.scaleProperties);
    
this.animation= this.animationInterfaceFactoryInterface!.getInstance(this.instanceId) as IndexedAnimation;
    
this.animation.setState(animation);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, LazyImageRotationAnimation.SET_REAL_ANIMATION, e);
    

 }
   }
 
}


    public setScale(scaleX: number, scaleY: number){
this.animation.setScale(scaleX, scaleY);
    
}


    public getAnimationBehavior(): AnimationBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getAnimationBehavior();;
    
}


                //@Throws(Exception.constructor)
            
    public set(gl: GL){
this.animation.set(gl);
    
}


    public setAlpha(alpha: number){
this.animation.setAlpha(alpha);
    
}


    public setDx(dx: number){
this.animation.setDx(dx);
    
}


    public setDy(dy: number){
this.animation.setDy(dy);
    
}


    public setMaxScale(maxScaleX: number, maxScaleY: number){
this.animation.setMaxScale(maxScaleX, maxScaleY);
    
}


    public nextRotation(){

    let rotationAnimation: RotationAnimation = (this.animation as RotationAnimation);;
    
rotationAnimation!.nextRotation();
    
}


    public previousRotation(){

    let rotationAnimation: RotationAnimation = (this.animation as RotationAnimation);;
    
rotationAnimation!.previousRotation();
    
}


    public nextRotationX(){

    let rotationAnimation: RotationAnimation = (this.animation as RotationAnimation);;
    
rotationAnimation!.nextRotationX();
    
}


    public previousRotationX(){

    let rotationAnimation: RotationAnimation = (this.animation as RotationAnimation);;
    
rotationAnimation!.previousRotationX();
    
}


    public nextRotationZ(){

    let rotationAnimation: RotationAnimation = (this.animation as RotationAnimation);;
    
rotationAnimation!.nextRotationZ();
    
}


    public previousRotationZ(){

    let rotationAnimation: RotationAnimation = (this.animation as RotationAnimation);;
    
rotationAnimation!.previousRotationZ();
    
}


    public changeBasicColor(basicColor: BasicColor){
this.animation.changeBasicColor(basicColor);
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getBasicColorP();;
    
}


    public getChangeBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getChangeBasicColor();;
    
}


    public getChangeColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getChangeColor();;
    
}


    public getColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getColor();;
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getDx();;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getDy();;
    
}


    public isThreed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.isThreed();;
    
}


                //@Throws(Exception.constructor)
            
    public nextFrame(){
this.animation.nextFrame();
    
}


    public reset(){
this.animation.reset();
    
}


    public setFrame(index: number){
this.animation.setFrame(index);
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getFrame();;
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getAnimationSize();;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getSize();;
    
}


    public previousFrame(){
this.animation.previousFrame();
    
}


    public isLastFrame(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.isLastFrame();;
    
}


    public setSequence(sequence: number[]){
this.animation.setSequence(sequence);
    
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getSequence();;
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animation.getWidth();;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){

 try { this.animation.paintXY(graphics, x, y);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    

 }
   }
 
}


    public paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number){

 try { this.animation.paintThreedXYZ(graphics, x, y, z);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    

 }
   }
 
}


    public toString(): string{

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let image: Image = this.animationInterfaceFactoryInterface!.getImage()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append(super.toString())!.append(commonSeps!.SPACE)!.append(image.getName())!.append(commonSeps!.SPACE)!.appendint(image.getWidth())!.append(commonSeps!.SPACE)!.appendint(image.getHeight())!.toString();;
    
}


}

