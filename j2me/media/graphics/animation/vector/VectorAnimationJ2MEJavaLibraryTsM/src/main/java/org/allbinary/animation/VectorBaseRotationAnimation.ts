
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
        



import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicColor } from "../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorSetUtil } from "../../../org/allbinary/graphics/color/BasicColorSetUtil.js";

    
import { NullUtil } from "../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PrimitiveIntUtil } from "../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { AngleInfo } from "../../../org/allbinary/math/AngleInfo.js";

    
import { CircularIndexUtil } from "../../../org/allbinary/util/CircularIndexUtil.js";

    

export class VectorBaseRotationAnimation extends RotationAnimation
                , VectorAnimationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private currentPoints: number[][][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
        
        
public constructor (angleInfo: AngleInfo, currentPoints: number[][][], basicColor: BasicColor, animationBehavior: AnimationBehavior)                        

                            : super(angleInfo, animationBehavior){

            super();
                //var angleInfo = angleInfo
    //var currentPoints = currentPoints
    //var basicColor = basicColor
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.setPoints(currentPoints);
    
this.setBasicColorP(basicColor);
    
}

public constructor (angleInfo: AngleInfo, currentPoints: number[][], basicColor: BasicColor, animationBehavior: AnimationBehavior)                        

                            : super(angleInfo, animationBehavior){

            super();
                //var angleInfo = angleInfo
    //var currentPoints = currentPoints
    //var basicColor = basicColor
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.setPoints(Array.from({ length: 1 }, () => Array.from({ length: currentPoints!.length }, () => new Array(0).fill(2))));
    

    var size: number = currentPoints!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.currentPoints[0]![index]![0]= currentPoints[index]![0]!;
    
this.currentPoints[0]![index]![1]= currentPoints[index]![1]!;
    
}

this.setBasicColorP(basicColor);
    
}


                //@Throws(Error::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();

                        ;
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getIndex();

                        ;
    
}


    public setFrame(index: number){
var index = index
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
    //var sequence = sequence
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();

                        ;
    
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
this.basicSetColorUtil!.setBasicColorP(graphics, basicColor);
    

        try {
            
    var nextPointX: number = 0;
        
        
;
    

    var nextPointY: number = 0;
        
        
;
    

    var nextPoint: number[]
;
    

    var point: number[]
;
    

    var currentPointsFrame: number[][] = this.currentPoints[this.circularIndexUtil!.getIndex()]!;
        
        
;
    

    var size: number = currentPointsFrame!.length
                ;
        
        
;
    

    var index: number = size -2;
        
        
;
    

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
this.logUtil!.put(commonStrings!.EXCEPTION, this, "paintVectors", e);
    
}

}


    public getPoints(frame: number): number[][]{
    //var frame = frame



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentPoints[frame]!;
    
}


    public setPoints(currentPoints: number[][][]){
    //var currentPoints = currentPoints
this.currentPoints= currentPoints;
    
this.circularIndexUtil= CircularIndexUtil.getInstance(this.currentPoints!.length);
    
}


}
                
            

