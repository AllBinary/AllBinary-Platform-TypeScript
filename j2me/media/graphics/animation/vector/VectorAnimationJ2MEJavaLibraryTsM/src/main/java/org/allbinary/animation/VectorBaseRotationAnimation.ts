
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

import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

import { PrimitiveIntUtil } from '../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil

import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
//not GWT import const AngleInfo

//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
type CircularIndexUtil<T = any, U = any> = typeof CircularIndexUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CircularIndexUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RotationAnimation } from './RotationAnimation.js';
//sameFolderImports - not GWT import - same folder const RotationAnimation
import { VectorAnimationInterface } from './VectorAnimationInterface.js';
//sameFolderImports - not GWT import - same folder const VectorAnimationInterface
import { AnimationBehavior } from './AnimationBehavior.js';
//sameFolderImports - not GWT import - same folder const AnimationBehavior

export class VectorBaseRotationAnimation extends RotationAnimation implements VectorAnimationInterface {
        

    private currentPoints: number[][][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;

public constructor (angleInfo: AngleInfo, currentPoints: number[][][], basicColor: BasicColor, animationBehavior: AnimationBehavior){
            super(angleInfo, CircularIndexUtil.createInstance(360 /angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setPoints(currentPoints);
    
this.setBasicColorP(basicColor);
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();;
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getIndex();;
    
}


    public setFrame(index: number){
this.circularIndexUtil!.setIndex(index);
    
}


    public nextFrame(){
this.circularIndexUtil!.next();
    
}


    public previousFrame(){
this.circularIndexUtil!.previous();
    
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


    public paintXY(graphics: Graphics, x: number, y: number){
this.basicSetColorUtil!.setBasicColorP(graphics, this.basicColor);
    

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


    public getPoints(frame: number): number[][]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentPoints[frame]!;
    
}


    public setPoints(currentPoints: number[][][]){
this.currentPoints= currentPoints;
    
this.circularIndexUtil= CircularIndexUtil.createInstance(this.currentPoints!.length);
    
}


}

