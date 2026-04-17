
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

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
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


    public toAnimationArrayFromBasicArrayListOfPointBasicArrayList(vector: BasicArrayList, pointsPerFrame: number): number[][][]{
var vector = vector
var pointsPerFrame = pointsPerFrame

    var size: number = vector.size()!;
        
        
;
    

    var points: number[][][] = Array.from({ length: size }, () => Array.from({ length: pointsPerFrame }, () => new Array(0).fill(2)));
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextBasicArrayList: BasicArrayList = vector.objectArray[index]! as BasicArrayList;
        
        
;
    

    var frame: number[][] = toFrameArrayFromPointBasicArrayList(nextBasicArrayList)!;
        
        
;
    




                        for (
    var pointIndex: number = 0;
        
        
pointIndex < frame.length; pointIndex++)
        {
points[index]![pointIndex]![0]= frame[pointIndex]![0]!;
    
points[index]![pointIndex]![1]= frame[pointIndex]![1]!;
    
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return points;
    
}


    public toAnimationArrayFromBasicArrayListOfPointBasicArrayList(vector: BasicArrayList): number[][][]{
var vector = vector

    var size: number = vector.size()!;
        
        
;
    

    var points: number[][][] = Array.from({ length: size }, () => Array.from({ length: 0 }, () => new Array(0).fill(0)));
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextBasicArrayList: BasicArrayList = vector.objectArray[index]! as BasicArrayList;
        
        
;
    

    var framePoints: number[][] = toFrameArrayFromPointBasicArrayList(nextBasicArrayList)!;
        
        
;
    
points[index]= new Array(framePoints!.length) [2];
    




                        for (
    var pointIndex: number = 0;
        
        
pointIndex < framePoints!.length; pointIndex++)
        {
points[index]![pointIndex]![0]= framePoints[pointIndex]![0]!;
    
points[index]![pointIndex]![1]= framePoints[pointIndex]![1]!;
    
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return points;
    
}


    public toFrameArrayFromPointBasicArrayList(list: BasicArrayList): number[][]{
var list = list

    var points: number[][] = new Array(list.size()) [2];
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextPoint: GPoint = list.objectArray[index]! as GPoint;
        
        
;
    
points[index]![0]= nextPoint!.getX();
    
points[index]![1]= nextPoint!.getY();
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return points;
    
}


}
                
            

