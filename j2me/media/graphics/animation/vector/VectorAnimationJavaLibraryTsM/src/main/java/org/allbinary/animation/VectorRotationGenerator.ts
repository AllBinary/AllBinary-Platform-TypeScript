
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

import { Angle } from '../../../org/allbinary/math/Angle.js';
//not GWT import const Angle

import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
type BasicArrayListS<T = any, U = any> = typeof BasicArrayListS extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListS;

import { VectorInfo } from '../../../org/allbinary/vector/VectorInfo.js';
//not GWT import const VectorInfo

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VectorAnimationUtil } from './VectorAnimationUtil.js';
//not GWT import - same folder const VectorAnimationUtil

export class VectorRotationGenerator
            extends Object
         {
        

    private static readonly instance: VectorRotationGenerator = new VectorRotationGenerator();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): VectorRotationGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VectorRotationGenerator.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly vectorAnimationUtil: VectorAnimationUtil = VectorAnimationUtil.getInstance()!;

private constructor (){

            super();
        }


    public getInstance$overload2(vectorRotationInfo: VectorInfo): number[][][]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstanceFrames(vectorRotationInfo!.getWidth(), vectorRotationInfo!.getHeight(), vectorRotationInfo!.getPoints(), vectorRotationInfo!.getTotalFrames());;
    
}


    private readonly angleFactory: AngleFactory = AngleFactory.getInstance()!;

    public getInstanceFrames(width: number, height: number, points: number[][], frames: number): number[][][]{

 try { 
    let totalAngle: number = this.angleFactory!.TOTAL_ANGLE;;
    

    let angleIncrement: number = globalThis.Math.trunc(totalAngle /frames);;
    

    let pointsBasicArrayList: BasicArrayList = new BasicArrayListS(globalThis.Math.trunc(totalAngle /angleIncrement));;
    

    let pointBasicArrayList: BasicArrayList = new BasicArrayListS(points.length);;
    

    let pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    let size: number = points.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
pointBasicArrayList!.add(pointFactory!.createXY(points[index]![0]!, points[index]![1]!));
    
}


    let index: number = 0;;
    

        while(index < totalAngle)
        {
pointsBasicArrayList!.add(this.getListAtAngle(width, height, pointBasicArrayList, this.angleFactory!.getAt(index)));
    
index += angleIncrement;
    
}


    let newPoints: number[][][] = this.vectorAnimationUtil!.toAnimationArrayFromListOfPointListWithPointsPerFrame(pointsBasicArrayList, pointBasicArrayList!.size())!;;
    



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
            
    public getListAtAngle(width: number, height: number, pointBasicArrayList: BasicArrayList, angle: Angle): BasicArrayList{

    let graphicsPipe: BasicGraphicsPipeline = new BasicGraphicsPipeline(pointBasicArrayList);;
    
graphicsPipe!.createMatrix();
    
graphicsPipe!.translate( -(width>>1),  -(height>>1));
    
graphicsPipe!.rotateToAngle(angle);
    
graphicsPipe!.translate((width>>1), (height>>1));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsPipe!.getMatrix();;
    
}


}

