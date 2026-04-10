
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
        



import { GPoint } from "../../../org/allbinary/graphics/GPoint.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

export class VectorAnimationUtil
            extends Object
         {
        

    private static readonly instance: VectorAnimationUtil = new VectorAnimationUtil();
        
        

    public static getInstance(): VectorAnimationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public toAnimationArrayFromBasicArrayListOfPointBasicArrayList(vector: BasicArrayList, pointsPerFrame: number): IntArray[][]{
var vector = vector
var pointsPerFrame = pointsPerFrame

    var size: number = vector.size()!;
        
        


    var points: IntArray[][] = Array(size) { Array(pointsPerFrame) { IntArray(2) } };
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextBasicArrayList: BasicArrayList = vector.objectArray[index]! as BasicArrayList;
        
        


    var frame: IntArray[] = toFrameArrayFromPointBasicArrayList(nextBasicArrayList)!;
        
        





                        for (
    var pointIndex: number = 0;
        
        
pointIndex < frame.length; pointIndex++)
        {
points[index]![pointIndex]![0]= frame[pointIndex]![0]!
points[index]![pointIndex]![1]= frame[pointIndex]![1]!
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return points;
    
}


    public toAnimationArrayFromBasicArrayListOfPointBasicArrayList(vector: BasicArrayList): IntArray[][]{
var vector = vector

    var size: number = vector.size()!;
        
        


    var points: IntArray[][] = Array(size) { Array(0) { IntArray(0) } };
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextBasicArrayList: BasicArrayList = vector.objectArray[index]! as BasicArrayList;
        
        


    var framePoints: IntArray[] = toFrameArrayFromPointBasicArrayList(nextBasicArrayList)!;
        
        

points[index]= Array(framePoints!.length) { IntArray(2) }




                        for (
    var pointIndex: number = 0;
        
        
pointIndex < framePoints!.length; pointIndex++)
        {
points[index]![pointIndex]![0]= framePoints[pointIndex]![0]!
points[index]![pointIndex]![1]= framePoints[pointIndex]![1]!
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return points;
    
}


    public toFrameArrayFromPointBasicArrayList(list: BasicArrayList): IntArray[]{
var list = list

    var points: IntArray[] = Array(list.size()) { IntArray(2) };
        
        


    var size: number = list.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextPoint: GPoint = list.objectArray[index]! as GPoint;
        
        

points[index]![0]= nextPoint!.getX()
points[index]![1]= nextPoint!.getY()
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return points;
    
}


}
                
            

