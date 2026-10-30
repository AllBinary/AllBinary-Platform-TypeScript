
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Math } from '../../../../java/lang/Math.js';
        
import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicGraphicsPipeline } from './BasicGraphicsPipeline.js';
//sameFolderImports - not GWT import - same folder const BasicGraphicsPipeline

export class GraphicsPipeline extends BasicGraphicsPipeline {
        

public constructor (points: BasicArrayList){
            super(points);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public rotateTheta(aTheta: number){

    let newVector: BasicArrayList = new BasicArrayListD();;
    

    let size: number = this.pointBasicArrayList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let secondPoint: GPoint = pointBasicArrayList!.get(index) as GPoint;;
    

    let secondX: number = (secondPoint!.getX() *Math.cos(aTheta)) -(secondPoint!.getY() *Math.sin(aTheta));;
    

    let secondY: number = (secondPoint!.getX() *Math.sin(aTheta)) +(secondPoint!.getY() *Math.cos(aTheta));;
    

    let point: GPoint = PointFactory.getInstance()!.createXY((globalThis.Math.trunc(secondX)), (globalThis.Math.trunc(secondY)))!;;
    
newVector!.add(point);
    
}

this.pointBasicArrayList= newVector;
    
}


}

