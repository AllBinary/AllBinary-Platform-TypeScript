
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
        




export class PointsUtil
            extends Object
         {
        

    private static readonly instance: PointsUtil = new PointsUtil();
        
        

    public static getInstance(): PointsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public adjust(points: IntArray[][], x: number, y: number): IntArray[][]{
    //var points = points
    //var x = x
    //var y = y

    var size: number = points.length
                ;
        
        


    var newPoints: IntArray[][] = Array(size) { Array(0) { IntArray(0) } };
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var size2: number = points[index]!.length
                ;
        
        

newPoints[index]= Array(size2) { IntArray(2) }




                        for (
    var index2: number = 0;
        
        
index2 < size2; index2++)
        {

    
                        if(points[index]![index2]![0] != 1000)
                        
                                    {
                                    newPoints[index]![index2]![0]= points[index]![index2]![0] +x
newPoints[index]![index2]![1]= points[index]![index2]![1] +y

                                    }
                                
                        else {
                            newPoints[index]![index2]![0]= 1000
newPoints[index]![index2]![1]= 1000

                        }
                            
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPoints;
    
}


    public adjust(points: IntArray[], both: number): IntArray[]{
var points = points
var both = both



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adjust(points, both, both);
    
}


    public adjust(points: IntArray[], x: number, y: number): IntArray[]{
var points = points
var x = x
var y = y

    var newPoints: IntArray[] = Array(points.length) { IntArray(2) };
        
        





                        for (
    var index2: number = 0;
        
        
index2 < points.length; index2++)
        {

    
                        if(points[index2]![0] != 1000)
                        
                                    {
                                    newPoints[index2]![0]= points[index2]![0] +x
newPoints[index2]![1]= points[index2]![1] +y

                                    }
                                
                        else {
                            newPoints[index2]![0]= 1000
newPoints[index2]![1]= 1000

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPoints;
    
}


}
                
            

