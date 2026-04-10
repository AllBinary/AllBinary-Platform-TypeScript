
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
        



import { PointFactory } from "../../../org/allbinary/graphics/PointFactory.js";

    
import { BasicGraphicsPipeline } from "../../../org/allbinary/graphics/pipeline/BasicGraphicsPipeline.js";

    
import { NullUtil } from "../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Angle } from "../../../org/allbinary/math/Angle.js";

    
import { AngleFactory } from "../../../org/allbinary/math/AngleFactory.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    
import { VectorInfo } from "../../../org/allbinary/vector/VectorInfo.js";

    

export class VectorRotationGenerator
            extends Object
         {
        

    private static readonly instance: VectorRotationGenerator = new VectorRotationGenerator();
        
        

    public static getInstance(): VectorRotationGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly vectorAnimationUtil: VectorAnimationUtil = VectorAnimationUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    public getInstance(vectorRotationInfo: VectorInfo): IntArray[][]{
var vectorRotationInfo = vectorRotationInfo



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getInstance(vectorRotationInfo!.getWidth(), vectorRotationInfo!.getHeight(), vectorRotationInfo!.getPoints(), vectorRotationInfo!.getTotalFrames());
    
}


    private readonly angleFactory: AngleFactory = AngleFactory.getInstance()!;
        
        

    public getInstance(width: number, height: number, points: IntArray[], frames: number): IntArray[][]{
var width = width
var height = height
var points = points
var frames = frames

        try {
            
    var totalAngle: number = this.angleFactory!.TOTAL_ANGLE;
        
        


    var angleIncrement: number = totalAngle /frames;
        
        


    var pointsBasicArrayList: BasicArrayList = new BasicArrayList(totalAngle /angleIncrement);
        
        


    var pointBasicArrayList: BasicArrayList = new BasicArrayList(points.length);
        
        


    var pointFactory: PointFactory = PointFactory.getInstance()!;
        
        


    var size: number = points.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
add(pointFactory!.getInstance(points[index]![0]!, points[index]![1]!))
}


    var index: number = 0;
        
        


        while(index < totalAngle)
        {
add(getInstance(width, height, pointBasicArrayList, this.angleFactory!.getInstance(index)))
index += angleIncrement
}


    var newPoints: IntArray[][] = vectorAnimationUtil!.toAnimationArrayFromBasicArrayListOfPointBasicArrayList(pointsBasicArrayList, pointBasicArrayList!.size())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPoints;
    
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
    
}

}


                @Throws(Exception::class)
            
    public getInstance(width: number, height: number, pointBasicArrayList: BasicArrayList, angle: Angle): BasicArrayList{
var width = width
var height = height
var pointBasicArrayList = pointBasicArrayList
var angle = angle

    var graphicsPipe: BasicGraphicsPipeline = new BasicGraphicsPipeline(pointBasicArrayList);
        
        

createMatrix()
translate( -(width shr 1),  -(height shr 1))
rotate(angle)
translate((width shr 1), (height shr 1))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsPipe!.getMatrix();
    
}


}
                
            

