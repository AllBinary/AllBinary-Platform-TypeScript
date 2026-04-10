
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

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

export class VectorMirrorGenerator
            extends Object
         {
        

    private static readonly instance: VectorMirrorGenerator = new VectorMirrorGenerator();
        
        

    public static getInstance(): VectorMirrorGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly vectorAnimationUtil: VectorAnimationUtil = VectorAnimationUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    public getInstance(points: IntArray[][], width: number): IntArray[][]{
var points = points
var width = width

        try {
            
    var pointFactory: PointFactory = PointFactory.getInstance()!;
        
        


    var pointBasicArrayList: BasicArrayList


    var nextPoints: IntArray[]


    var size2: number= 0


    var size: number = points.length
                ;
        
        


    var pointsBasicArrayList: BasicArrayList = new BasicArrayList(size);
        
        





                        for (
    var frame: number = 0;
        
        
frame < size; frame++)
        {
nextPoints= points[frame]!
size2= nextPoints!.length
pointBasicArrayList= BasicArrayList(size2)




                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {
pointBasicArrayList!.add(pointFactory!.getInstance(nextPoints[index]![0]!, nextPoints[index]![1]!))
}

pointsBasicArrayList!.add(pointBasicArrayList)
}





                        for (
    var index: number = 0;
        
        
index < points.length; index++)
        {
pointsBasicArrayList!.add(getInstance(pointsBasicArrayList!.objectArray[index]! as BasicArrayList, width))
}


    var newPoints: IntArray[][] = vectorAnimationUtil!.toAnimationArrayFromBasicArrayListOfPointBasicArrayList(pointsBasicArrayList)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPoints;
    
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
    
}

}


                //@Throws(Error::class)
            
    public getInstance(pointBasicArrayList: BasicArrayList, width: number): BasicArrayList{
var pointBasicArrayList = pointBasicArrayList
var width = width

    var graphicsPipe: BasicGraphicsPipeline = new BasicGraphicsPipeline(pointBasicArrayList);
        
        

graphicsPipe!.createMatrix()
graphicsPipe!.mirror(width)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsPipe!.getMatrix();
    
}


}
                
            

