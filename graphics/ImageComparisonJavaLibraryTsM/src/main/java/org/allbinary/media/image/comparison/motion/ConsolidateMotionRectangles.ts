
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { awt } from '../../../../../../java/awt.js';
//not GWT import const awt

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionRectangles } from './MotionRectangles.js';
//sameFolderImports - not GWT import - same folder const MotionRectangles
import { MotionRectangle } from './MotionRectangle.js';
//sameFolderImports - not GWT import - same folder const MotionRectangle
import { Rectangle } from './Rectangle.js';
//sameFolderImports - not GWT import - same folder const Rectangle

export class ConsolidateMotionRectangles extends MotionRectangles {
        

    private static readonly NAME: string = "consolidatedMotionRectangles_";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (motionRectangles: MotionRectangles){
            super(NAME, motionRectangles!.getImageComparisonResult());
                    

                            //For kotlin this is before the body of the constructor.
                    

    let vector: BasicArrayList = motionRectangles!.getVector()!;;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let motionRectangle: MotionRectangle = vector.get(index) as MotionRectangle;;
    
vector.add(motionRectangle!.clone());
    
}

this.consolidateMotionRectangles();
    
}


    consolidateMotionRectangles(){

    let vector: BasicArrayList = this.getVector()!;;
    
this.logUtil!.putF("Start - Size Before: " +vector.size(), this, "consolidateMotionRectangleConstraints");
    

    let removeVector: BasicArrayList = new BasicArrayListD();;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let motionRectangle: MotionRectangle = vector.get(index) as MotionRectangle;;
    




                        for (
    let i: number = index +1;i < vector.size(); i++)
        {

    let motionRectangle2: MotionRectangle = vector.get(i) as MotionRectangle;;
    

    let rectangle: Rectangle = motionRectangle!.getRectangle()!;;
    

    let rectangle2: Rectangle = motionRectangle2!.getRectangle()!;;
    

    let x2: number = rectangle.x +rectangle.width;;
    

    let y2: number = rectangle.y +rectangle.height;;
    

    let rightX: number = rectangle2.x +rectangle2.width;;
    

    let bottomY: number = rectangle2.y +rectangle2.height;;
    

                        if(rectangle.x <= rectangle2.x && rectangle.y <= rectangle2.y && x2 >= rightX && y2 >= bottomY)
                        
                                    {
                                    removeVector!.add(motionRectangle2);
    

                                    }
                                
}

}

this.remove(removeVector);
    
}


    remove(removeVector: BasicArrayList){

    let vector: BasicArrayList = this.getVector()!;;
    

    let size: number = removeVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
vector.remove(removeVector!.get(index));
    
}

}


}

