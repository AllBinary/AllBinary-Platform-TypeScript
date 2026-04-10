
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

    
import { PointFactory } from "../../../org/allbinary/graphics/PointFactory.js";

    
import { RandomRotationFactory } from "../../../org/allbinary/graphics/pipeline/RandomRotationFactory.js";

    
import { RandomTranslation } from "../../../org/allbinary/graphics/pipeline/RandomTranslation.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

export class VectorExplosionGenerator
            extends Object
         {
        

    private static readonly instance: VectorExplosionGenerator = new VectorExplosionGenerator();
        
        

    public static getInstance(): VectorExplosionGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly RANDOM: VectorExplosionType = new VectorExplosionType();
        
        

    public readonly ROTATION: VectorExplosionType = new VectorExplosionType();
        
        

    private readonly vectorAnimationUtil: VectorAnimationUtil = VectorAnimationUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(list: BasicArrayList, howMuch: number, type: VectorExplosionType): BasicArrayList{
var list = list
var howMuch = howMuch
var type = type

    var size: number = list.size()!;
        
        


    var points: IntArray[] = Array(size) { IntArray(2) };
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var point: GPoint = list.objectArray[index]! as GPoint;
        
        

points[index]![0]= point.getX()
points[index]![1]= point.getY()
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getInstance(list, points, howMuch, type);
    
}


                //@Throws(Error::class)
            
    public getInstance(points: IntArray[], howMuch: number, type: VectorExplosionType): IntArray[][]{
var points = points
var howMuch = howMuch
var type = type

    var pointsBasicArrayList: BasicArrayList = getInstance(points, howMuch, type, true)!;
        
        


    var tempBasicArrayList: BasicArrayList = pointsBasicArrayList!.objectArray[0]! as BasicArrayList;
        
        


    var newPoints: IntArray[][] = vectorAnimationUtil!.toAnimationArrayFromBasicArrayListOfPointBasicArrayList(pointsBasicArrayList, tempBasicArrayList!.size())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPoints;
    
}


                //@Throws(Error::class)
            
    public getInstance(points: IntArray[], howMuch: number, type: VectorExplosionType, startFrame: boolean): BasicArrayList{
var points = points
var howMuch = howMuch
var type = type
var startFrame = startFrame

        try {
            
    var pointsBasicArrayList: BasicArrayList = new BasicArrayList(howMuch);
        
        

pointsBasicArrayList!.add(createPointsBasicArrayList(points))

    var frameIndex: number = 0;
        
        


        while(frameIndex < howMuch)
        {

    var tempBasicArrayList: BasicArrayList = pointsBasicArrayList!.objectArray[frameIndex]! as BasicArrayList;
        
        


    var pointBasicArrayList: BasicArrayList = getInstance(tempBasicArrayList, points, howMuch, type)!;
        
        

pointsBasicArrayList!.add(pointBasicArrayList)
frameIndex++
}


                        if(!startFrame)
                        
                                    {
                                    pointsBasicArrayList!.remove(0)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointsBasicArrayList;
    
} catch(e: Exception)
            {



                            throw e
}

}


    private readonly randomRotationFactory: RandomRotationFactory = RandomRotationFactory.getInstance()!;
        
        

                //@Throws(Error::class)
            
    getInstance(tempBasicArrayList: BasicArrayList, points: IntArray[], howMuch: number, type: VectorExplosionType): BasicArrayList{
var tempBasicArrayList = tempBasicArrayList
var points = points
var howMuch = howMuch
var type = type

    var index: number = 0;
        
        


    var pointBasicArrayList: BasicArrayList = new BasicArrayList();
        
        


        while(index < points.length)
        {

    var sectionBasicArrayList: BasicArrayList = new BasicArrayList();
        
        


        while(points[index]![0] != 1000)
        {
sectionBasicArrayList!.add(tempBasicArrayList!.objectArray[index]!)
index++

                        if(index >= points.length)
                        
                                    {
                                    break;

                    

                                    }
                                
}

sectionBasicArrayList= RandomTranslation.getInstance(sectionBasicArrayList, howMuch)

                        if(type == ROTATION)
                        
                                    {
                                    sectionBasicArrayList= randomRotationFactory!.getInstance(sectionBasicArrayList, howMuch)

                                    }
                                

    var size: number = sectionBasicArrayList!.size()!;
        
        





                        for (
    var index2: number = 0;
        
        
index2 < size; index2++)
        {
pointBasicArrayList!.add(sectionBasicArrayList!.objectArray[index2]!)
}


                        if(index >= points.length)
                        
                                    {
                                    break;

                    

                                    }
                                
                             else 
                        if(points[index]![0] == 1000)
                        
                                    {
                                    pointBasicArrayList!.add(tempBasicArrayList!.objectArray[index]!)
index++

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointBasicArrayList;
    
}


                //@Throws(Error::class)
            
    createPointsBasicArrayList(points: IntArray[]): BasicArrayList{
var points = points

                        if(points.length == 0)
                        
                                    {
                                    


                            throw Error("Not Points Provided")

                                    }
                                

    var firstPointBasicArrayList: BasicArrayList = new BasicArrayList(points.length);
        
        





                        for (
    var index: number = 0;
        
        
index < points.length; index++)
        {
firstPointBasicArrayList!.add(PointFactory.getInstance()!.getInstance(points[index]![0]!, points[index]![1]!))
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return firstPointBasicArrayList;
    
}


}
                
            

