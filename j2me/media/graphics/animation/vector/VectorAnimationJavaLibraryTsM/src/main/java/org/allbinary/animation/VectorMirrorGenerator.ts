
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
        
import { PointFactory } from '../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { BasicGraphicsPipeline } from '../../../org/allbinary/graphics/pipeline/BasicGraphicsPipeline.js';
//not GWT import const BasicGraphicsPipeline

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
type BasicArrayListS<T = any, U = any> = typeof BasicArrayListS extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListS;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VectorAnimationUtil } from './VectorAnimationUtil.js';
//not GWT import - same folder const VectorAnimationUtil

export class VectorMirrorGenerator
            extends Object
         {
        

    private static readonly instance: VectorMirrorGenerator = new VectorMirrorGenerator();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 2 && typeof args[1] === 'number') return this.getInstance$overload2(args[0], args[1]);
   
    if (args.length === 2 && typeof args[1] === 'number') return this.getInstance$overload3(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): VectorMirrorGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VectorMirrorGenerator.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly vectorAnimationUtil: VectorAnimationUtil = VectorAnimationUtil.getInstance()!;

private constructor (){

            super();
        }


    public getInstance$overload2(points: number[][][], width: number): number[][][]{

 try { 
    let pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    let pointBasicArrayList: BasicArrayList;;
    

    let nextPoints: number[][];;
    

    let size2: number= 0;;
    

    let size: number = points.length
                ;;
    

    let pointsBasicArrayList: BasicArrayList = new BasicArrayListS(size);;
    




                        for (
    let frame: number = 0;frame < size; frame++)
        {
nextPoints= points[frame]!;
    
size2= nextPoints!.length;
    
pointBasicArrayList= new BasicArrayListS(size2);
    




                        for (
    let index: number = 0;index < size2; index++)
        {
pointBasicArrayList!.add(pointFactory!.createXY(nextPoints[index]![0]!, nextPoints[index]![1]!));
    
}

pointsBasicArrayList!.add(pointBasicArrayList);
    
}





                        for (
    let index: number = 0;index < points.length; index++)
        {
pointsBasicArrayList!.add(this.getInstance(pointsBasicArrayList!.objectArray[index]! as BasicArrayList, width));
    
}


    let newPoints: number[][][] = this.vectorAnimationUtil!.toAnimationArrayFromListOfPointList(pointsBasicArrayList)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPoints;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload3(pointBasicArrayList: BasicArrayList, width: number): BasicArrayList{

    let graphicsPipe: BasicGraphicsPipeline = new BasicGraphicsPipeline(pointBasicArrayList);;
    
graphicsPipe!.createMatrix();
    
graphicsPipe!.mirror(width);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsPipe!.getMatrix();;
    
}


}

