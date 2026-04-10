
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
        



import { VectorRotationGenerator } from "../../../../../../org/allbinary/animation/VectorRotationGenerator.js";

    
import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { AngleFactory } from "../../../../../../org/allbinary/math/AngleFactory.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class PointsUtil
            extends Object
         {
        

    private static readonly instance: PointsUtil = new PointsUtil();
        
        

    public static getInstance(): PointsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public doTransforms(pointVector: BasicArrayList, angle: Double, fulcrumPoint: GPoint): BasicArrayList{
var pointVector = pointVector
var angle = angle
var fulcrumPoint = fulcrumPoint



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VectorRotationGenerator.getInstance()!.getInstance(fulcrumPoint!.getX(), fulcrumPoint!.getY(), pointVector, AngleFactory.getInstance()!.getInstance(angle.toInt()));
    
}


}
                
            

