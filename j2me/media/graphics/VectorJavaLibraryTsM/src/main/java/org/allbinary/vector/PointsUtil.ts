
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PointsUtil
            extends Object
         {
        

    private static readonly instance: PointsUtil = new PointsUtil();
        
        

    public static getInstance(): PointsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public adjust(points: number[][][], x: number, y: number): number[][][]{
    //var points = points
    //var x = x
    //var y = y

    var size: number = points.length
                ;
        
        
;
    

    var newPoints: number[][][] = Array.from({ length: size }, () => Array.from({ length: 0 }, () => new Array(0).fill(0)));
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var size2: number = points[index]!.length
                ;
        
        
;
    
newPoints[index]= new Array(size2) [2];
    




                        for (
    var index2: number = 0;
        
        
index2 < size2; index2++)
        {

                        if(points[index]![index2]![0] != 1000)
                        
                                    {
                                    newPoints[index]![index2]![0]= points[index]![index2]![0] +x;
    
newPoints[index]![index2]![1]= points[index]![index2]![1] +y;
    

                                    }
                                
                        else {
                            newPoints[index]![index2]![0]= 1000;
    
newPoints[index]![index2]![1]= 1000;
    

                        }
                            
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPoints;
    
}


    public adjust(points: number[][], both: number): number[][]{
var points = points
var both = both



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adjust(points, both, both);

                        ;
    
}


    public adjust(points: number[][], x: number, y: number): number[][]{
var points = points
var x = x
var y = y

    var newPoints: number[][] = new Array(points.length) [2];
        
        
;
    




                        for (
    var index2: number = 0;
        
        
index2 < points.length; index2++)
        {

                        if(points[index2]![0] != 1000)
                        
                                    {
                                    newPoints[index2]![0]= points[index2]![0] +x;
    
newPoints[index2]![1]= points[index2]![1] +y;
    

                                    }
                                
                        else {
                            newPoints[index2]![0]= 1000;
    
newPoints[index2]![1]= 1000;
    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPoints;
    
}


}
                
            

