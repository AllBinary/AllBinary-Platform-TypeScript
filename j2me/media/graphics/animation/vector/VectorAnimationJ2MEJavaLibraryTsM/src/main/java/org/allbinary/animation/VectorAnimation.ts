
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

    
import { CircularIndexUtil } from "../../../org/allbinary/util/CircularIndexUtil.js";

    

export class VectorAnimation extends IndexedAnimation
                , VectorAnimationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private currentPoints: IntArray[][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
        
        

    private circularIndexUtil: CircularIndexUtil = CircularIndexUtil.getInstance(0)!;
        
        
public constructor (currentPoints: IntArray[][], basicColor: BasicColor, animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var currentPoints = currentPoints
    //var basicColor = basicColor
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.this.setPoints(currentPoints)
this.this.setBasicColorP(basicColor)
}

public constructor (currentPoints: IntArray[], basicColor: BasicColor, animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var currentPoints = currentPoints
    //var basicColor = basicColor
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.this.setPoints(Array(1) { Array(currentPoints!.length) { IntArray(2) } })

    var size: number = currentPoints!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.currentPoints[0]![index]![0]= currentPoints[index]![0]!
this.currentPoints[0]![index]![1]= currentPoints[index]![1]!
}

this.this.setBasicColorP(basicColor)
}


                //@Throws(Error::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentPoints!.length;
    
}


    public setSequence(sequence: IntArray){
    //var sequence = sequence
}


    public getSequence(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();
    
}


    public nextFrame(){
this.circularIndexUtil!.next()
}


    public previousFrame(){
this.circularIndexUtil!.previous()
}


    paintVectors(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y

        try {
            
    var nextPointX: number = 0;
        
        


    var nextPointY: number = 0;
        
        


    var nextPoint: IntArray


    var point: IntArray


    var currentPointsFrame: IntArray[] = this.currentPoints[this.circularIndexUtil!.getIndex()]!;
        
        


    var size: number = currentPointsFrame!.length
                ;
        
        


    var index: number = size -2;
        
        


        while(--index >= 0)
        {
nextPoint= currentPointsFrame[index]!
point= currentPointsFrame[index +1]!
nextPointX= nextPoint[0]!
nextPointY= nextPoint[1]!

                        if(nextPointX != 1000)
                        
                                    {
                                    graphics.drawLine(point[0] +x, point[1] +y, nextPointX +x, nextPointY +y)

                                    }
                                
                        else {
                            index--

                        }
                            
}

} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "paintVectors", e)
}

}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
this.basicSetColorUtil!.setBasicColorP(graphics, basicColor)
this.this.paintVectors(graphics, x, y)
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getIndex();
    
}


    public setFrame(index: number){
var index = index
this.circularIndexUtil!.setIndex(index)
}


    public getPoints(frame: number): IntArray[]{
var frame = frame



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentPoints[frame]!;
    
}


    public setPoints(currentPoints: IntArray[][]){
var currentPoints = currentPoints
this.currentPoints= currentPoints
this.circularIndexUtil= CircularIndexUtil.getInstance(currentPoints!.length)
}


}
                
            

