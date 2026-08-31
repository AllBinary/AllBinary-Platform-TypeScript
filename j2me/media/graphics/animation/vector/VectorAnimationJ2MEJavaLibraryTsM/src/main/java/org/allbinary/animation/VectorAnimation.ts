
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
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
      //not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not plain js import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PrimitiveIntUtil } from '../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not plain js import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IndexedAnimation } from './IndexedAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.IndexedAnimation;

                import { VectorAnimationInterface } from './VectorAnimationInterface.js';
//not GWT import const  = globalThis.org.allbinary.animation.VectorAnimationInterface;

                import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import const  = globalThis.org.allbinary.animation.AnimationBehavior;

                
export class VectorAnimation extends IndexedAnimation implements VectorAnimationInterface {
        

    public static createVectorAnimation(currentPoints2: number[][], basicColor: BasicColor, animationBehavior: AnimationBehavior): VectorAnimation{

    var currentPoints: number[][][] = Array.from({ length: 1 }, () => Array.from({ length: currentPoints2!.length }, () => new Array(0).fill(2)));;
    

    var size: number = currentPoints2!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
currentPoints[0]![index]![0]= currentPoints2[index]![0]!;
    
currentPoints[0]![index]![1]= currentPoints2[index]![1]!;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new VectorAnimation(currentPoints, basicColor, animationBehavior);
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private currentPoints: number[][][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;

    private circularIndexUtil: CircularIndexUtil = CircularIndexUtil.createInstance(0)!;

public constructor (currentPoints: number[][][], basicColor: BasicColor, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setPoints(currentPoints);
    
this.setBasicColorP(basicColor);
    
}


    public setBasicColorP(basicColor: BasicColor){

    var changed: boolean = false;;
    

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

    var changed: boolean = false;;
    

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

    var changed: boolean = false;;
    

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
            
    var nextPointX: number = 0;;
    

    var nextPointY: number = 0;;
    

    var nextPoint: number[];;
    

    var point: number[];;
    

    var currentPointsFrame: number[][] = this.currentPoints[this.circularIndexUtil!.getIndex()]!;;
    

    var size: number = currentPointsFrame!.length
                ;;
    

    var index: number = size -2;;
    

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


                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "paintVectors", e);
    
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



