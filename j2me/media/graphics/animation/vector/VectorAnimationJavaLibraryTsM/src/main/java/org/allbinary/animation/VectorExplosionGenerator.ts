
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
//not GWT import const GPoint

import { PointFactory } from '../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { RandomRotationFactory } from '../../../org/allbinary/graphics/pipeline/RandomRotationFactory.js';
//not GWT import const RandomRotationFactory

import { RandomTranslation } from '../../../org/allbinary/graphics/pipeline/RandomTranslation.js';
//not GWT import const RandomTranslation

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
type BasicArrayListS<T = any, U = any> = typeof BasicArrayListS extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListS;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VectorExplosionType } from './VectorExplosionType.js';
//not GWT import - same folder const VectorExplosionType
import { VectorAnimationUtil } from './VectorAnimationUtil.js';
//not GWT import - same folder const VectorAnimationUtil

export class VectorExplosionGenerator
            extends Object
         {
        

    private static readonly instance: VectorExplosionGenerator = new VectorExplosionGenerator();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 3 && typeof args[1] === 'number') return this.getInstance$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): VectorExplosionGenerator{



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

    let point: GPoint;;
    

    let size: number = list.size()!;;
    

    let points: number[][] = new Array(size).fill(null).map(() => new Array(2).fill(null));;
    




                        for (
    let index: number = 0;index < size; index++)
        {
point= list.objectArray[index]! as GPoint;
    
points[index]![0]= point.getX();
    
points[index]![1]= point.getY();
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createListFromPoints(list, points, howMuch, type);;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(points: number[][], howMuch: number, type: VectorExplosionType): number[][][]{

    let pointsBasicArrayList: BasicArrayList = this.getInstanceStartFrame(points, howMuch, type, true)!;;
    

    let tempBasicArrayList: BasicArrayList = pointsBasicArrayList!.objectArray[0]! as BasicArrayList;;
    

    let newPoints: number[][][] = this.vectorAnimationUtil!.toAnimationArrayFromListOfPointListWithPointsPerFrame(pointsBasicArrayList, tempBasicArrayList!.size())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPoints;
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceStartFrame(points: number[][], howMuch: number, type: VectorExplosionType, startFrame: boolean): BasicArrayList{

 try { 
    let pointsBasicArrayList: BasicArrayList = new BasicArrayListS(howMuch);;
    
pointsBasicArrayList!.add(this.createPointsBasicArrayList(points));
    

    let frameIndex: number = 0;;
    

    let tempBasicArrayList: BasicArrayList;;
    

    let pointBasicArrayList: BasicArrayList;;
    

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
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


    private readonly randomRotationFactory: RandomRotationFactory = RandomRotationFactory.getInstance()!;

                //@Throws(Exception.constructor)
            
    createListFromPoints(tempBasicArrayList: BasicArrayList, points: number[][], howMuch: number, type: VectorExplosionType): BasicArrayList{

    let index: number = 0;;
    

    let pointBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    let sectionBasicArrayList: BasicArrayList;;
    

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
                                

    let size: number = sectionBasicArrayList!.size()!;;
    




                        for (
    let index2: number = 0;index2 < size; index2++)
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
                                

    let firstPointBasicArrayList: BasicArrayList = new BasicArrayListS(points.length);;
    

    let pointFactory: PointFactory = PointFactory.getInstance()!;;
    




                        for (
    let index: number = 0;index < points.length; index++)
        {
firstPointBasicArrayList!.add(pointFactory!.createXY(points[index]![0]!, points[index]![1]!));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return firstPointBasicArrayList;
    
}


}

