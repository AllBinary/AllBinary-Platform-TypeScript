
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { GPoint } from '../../../org/allbinary/graphics/GPoint.js';
      
import { PointFactory } from '../../../org/allbinary/graphics/PointFactory.js';
      
import { RandomRotationFactory } from '../../../org/allbinary/graphics/pipeline/RandomRotationFactory.js';
      
import { RandomTranslation } from '../../../org/allbinary/graphics/pipeline/RandomTranslation.js';
      
import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
      
import { BasicArrayListS } from '../../../org/allbinary/util/BasicArrayListS.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VectorExplosionType } from './VectorExplosionType.js';
import { VectorAnimationUtil } from './VectorAnimationUtil.js';

export class VectorExplosionGenerator
            extends Object
         {
        

    private static readonly instance: VectorExplosionGenerator = new VectorExplosionGenerator();

    public static getInstance(): VectorExplosionGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VectorExplosionGenerator.instance;
    
}


    public readonly RANDOM: VectorExplosionType = new VectorExplosionType();

    public readonly ROTATION: VectorExplosionType = new VectorExplosionType();

    private readonly vectorAnimationUtil: VectorAnimationUtil = VectorAnimationUtil.getInstance()!;
private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public createList(list: BasicArrayList, howMuch: number, type: VectorExplosionType): BasicArrayList{

    var point: GPoint
;
    

    var size: number = list.size()!;
;
    

    var points: number[][] = new Array(size) [2];
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
point= list.objectArray[index]! as GPoint;
    
points[index]![0]= point.getX();
    
points[index]![1]= point.getY();
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createListFromPoints(list, points, howMuch, type);;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(points: number[][], howMuch: number, type: VectorExplosionType): number[][][]{

    var pointsBasicArrayList: BasicArrayList = this.getInstanceStartFrame(points, howMuch, type, true)!;
;
    

    var tempBasicArrayList: BasicArrayList = pointsBasicArrayList!.objectArray[0]! as BasicArrayList;
;
    

    var newPoints: number[][][] = this.vectorAnimationUtil!.toAnimationArrayFromListOfPointListWithPointsPerFrame(pointsBasicArrayList, tempBasicArrayList!.size())!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPoints;
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceStartFrame(points: number[][], howMuch: number, type: VectorExplosionType, startFrame: boolean): BasicArrayList{

        try {
            
    var pointsBasicArrayList: BasicArrayList = new BasicArrayListS(howMuch);
;
    
pointsBasicArrayList!.add(this.createPointsBasicArrayList(points));
    

    var frameIndex: number = 0;
;
    

    var tempBasicArrayList: BasicArrayList
;
    

    var pointBasicArrayList: BasicArrayList
;
    

        while(frameIndex < howMuch)
        {
tempBasicArrayList= pointsBasicArrayList!.objectArray[frameIndex]! as BasicArrayList;
    
pointBasicArrayList= this.createListFromPoints(tempBasicArrayList, points, howMuch, type);
    
pointsBasicArrayList!.add(pointBasicArrayList);
    
frameIndex++;
    
}


                        if(!startFrame)
                        
                                    {
                                    pointsBasicArrayList!.removeAt(0);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointsBasicArrayList;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


    private readonly randomRotationFactory: RandomRotationFactory = RandomRotationFactory.getInstance()!;

                //@Throws(Exception.constructor)
            
    createListFromPoints(tempBasicArrayList: BasicArrayList, points: number[][], howMuch: number, type: VectorExplosionType): BasicArrayList{

    var index: number = 0;
;
    

    var pointBasicArrayList: BasicArrayList = new BasicArrayListD();
;
    

    var sectionBasicArrayList: BasicArrayList
;
    

        while(index < points.length)
        {
sectionBasicArrayList= new BasicArrayListD();
    

        while(points[index]![0] != 1000)
        {
sectionBasicArrayList!.add(tempBasicArrayList!.objectArray[index]!);
    
index++;
    

                        if(index >= points.length)
                        
                                    {
                                    break;

                    

                                    }
                                
}

sectionBasicArrayList= RandomTranslation.getInstance(sectionBasicArrayList, howMuch);
    

                        if(type == this.ROTATION)
                        
                                    {
                                    sectionBasicArrayList= this.randomRotationFactory!.getInstanceList(sectionBasicArrayList, howMuch);
    

                                    }
                                

    var size: number = sectionBasicArrayList!.size()!;
;
    




                        for (
    var index2: number = 0;
index2 < size; index2++)
        {
pointBasicArrayList!.add(sectionBasicArrayList!.objectArray[index2]!);
    
}


                        if(index >= points.length)
                        
                                    {
                                    break;

                    

                                    }
                                
                             else 
                        if(points[index]![0] == 1000)
                        
                                    {
                                    pointBasicArrayList!.add(tempBasicArrayList!.objectArray[index]!);
    
index++;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointBasicArrayList;
    
}


                //@Throws(Exception.constructor)
            
    createPointsBasicArrayList(points: number[][]): BasicArrayList{

                        if(points.length == 0)
                        
                                    {
                                    


                            throw new Exception("Not Points Provided");
                    

                                    }
                                

    var firstPointBasicArrayList: BasicArrayList = new BasicArrayListS(points.length);
;
    

    var pointFactory: PointFactory = PointFactory.getInstance()!;
;
    




                        for (
    var index: number = 0;
index < points.length; index++)
        {
firstPointBasicArrayList!.add(pointFactory!.createXY(points[index]![0]!, points[index]![1]!));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return firstPointBasicArrayList;
    
}


}
                
            

