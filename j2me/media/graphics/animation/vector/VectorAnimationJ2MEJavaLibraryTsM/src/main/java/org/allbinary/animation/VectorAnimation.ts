
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage

import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

import { PrimitiveIntUtil } from '../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil

//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
type CircularIndexUtil<T = any, U = any> = typeof CircularIndexUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CircularIndexUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IndexedAnimation } from './IndexedAnimation.js';
//sameFolderImports - not GWT import - same folder const IndexedAnimation
import { VectorAnimationInterface } from './VectorAnimationInterface.js';
//sameFolderImports - not GWT import - same folder const VectorAnimationInterface
import { AnimationBehavior } from './AnimationBehavior.js';
//sameFolderImports - not GWT import - same folder const AnimationBehavior

export class VectorAnimation extends IndexedAnimation implements VectorAnimationInterface {
        

    public static createVectorAnimation(currentPoints2: number[][], basicColor: BasicColor, animationBehavior: AnimationBehavior): VectorAnimation{

    let currentPoints: number[][][] = Array.from({ length: 1 }, () => Array.from({ length: currentPoints2!.length }, () => new Array(0).fill(2)));;
    

    let size: number = currentPoints2!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
currentPoints[0]![index]![0]= currentPoints2[index]![0]!;
    
currentPoints[0]![index]![1]= currentPoints2[index]![1]!;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new VectorAnimation(currentPoints, basicColor, animationBehavior);
    
}


    private currentPoints: number[][][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;

    private circularIndexUtil: CircularIndexUtil = CircularIndexUtil.createInstance(0)!;

public constructor (currentPoints: number[][][], basicColor: BasicColor, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setPoints(currentPoints);
    
this.setBasicColorP(basicColor);
    
}


    public setBasicColorP(basicColor: BasicColor){

    let changed: boolean = false;;
    

                        if(this.getBasicColorP() == 
                                    null
                                 || this.getBasicColorP()!.intValue() != basicColor!.intValue())
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.setBasicColorP(basicColor);
    

                        if(changed)
                        
                                    {
                                    this.updateModifiers();
    

                                    }
                                
}


    public changeBasicColor(basicColor: BasicColor){

    let changed: boolean = false;;
    

                        if(this.getChangeBasicColor() == 
                                    null
                                 || this.getChangeBasicColor()!.intValue() != basicColor!.intValue())
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.changeBasicColor(basicColor);
    

                        if(changed)
                        
                                    {
                                    this.updateModifiers();
    

                                    }
                                
}


    public setAlpha(alpha: number){

    let changed: boolean = false;;
    

                        if(this.alphaP != alpha)
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.setAlpha(alpha);
    

                        if(changed)
                        
                                    {
                                    this.updateModifiers();
    

                                    }
                                
}


    public setScale(scaleX: number, scaleY: number){
}


    public setMaxScale(maxScaleX: number, maxScaleY: number){
}


    updateModifiers(){
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentPoints!.length;
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    public nextFrame(){
this.circularIndexUtil!.next();
    
}


    public previousFrame(){
this.circularIndexUtil!.previous();
    
}


    paintVectors(graphics: Graphics, x: number, y: number){

 try { 
    let nextPointX: number = 0;;
    

    let nextPointY: number = 0;;
    

    let nextPoint: number[];;
    

    let point: number[];;
    

    let currentPointsFrame: number[][] = this.currentPoints[this.circularIndexUtil!.getIndex()]!;;
    

    let size: number = currentPointsFrame!.length
                ;;
    

    let index: number = size -2;;
    

        while(--index >= 0)
        {
nextPoint= currentPointsFrame[index]!;
    
point= currentPointsFrame[index +1]!;
    
nextPointX= nextPoint[0]!;
    
nextPointY= nextPoint[1]!;
    

                        if(nextPointX != 1000)
                        
                                    {
                                    graphics.drawLine(point[0] +x, point[1] +y, nextPointX +x, nextPointY +y);
    

                                    }
                                
                        else {
                            index--;
    

                        }
                            
}

 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "paintVectors", e);
    

 }
   }
 
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.basicSetColorUtil!.setBasicColorP(graphics, this.basicColor);
    
this.paintVectors(graphics, x, y);
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getIndex();;
    
}


    public setFrame(index: number){
this.circularIndexUtil!.setIndex(index);
    
}


    public getPoints(frame: number): number[][]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentPoints[frame]!;
    
}


    public setPoints(currentPoints: number[][][]){
this.currentPoints= currentPoints;
    
this.circularIndexUtil= CircularIndexUtil.createInstance(currentPoints!.length);
    
}


}

