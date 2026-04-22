
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
        



import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../org/allbinary/graphics/PointFactory.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicGraphicsPipeline } from "./BasicGraphicsPipeline.js";

import { Math } from "./Math.js";

export class GraphicsPipeline extends BasicGraphicsPipeline {
        
public constructor (points: BasicArrayList){
            super(points);
                    var points = points


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public rotateTheta(aTheta: number){
var aTheta = aTheta

    var newVector: BasicArrayList = new BasicArrayList();
        
        
;
    

    var size: number = this.pointBasicArrayList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var secondPoint: GPoint = pointBasicArrayList!.get(index);

                         as GPoint;
        
        
;
    

    var secondX: number = (secondPoint!.getX() *Math.cos(aTheta)) -(secondPoint!.getY() *Math.sin(aTheta));
        
        
;
    

    var secondY: number = (secondPoint!.getX() *Math.sin(aTheta)) +(secondPoint!.getY() *Math.cos(aTheta));
        
        
;
    

    var point: GPoint = PointFactory.getInstance()!.getInstance((secondX), (secondY))!;
        
        
;
    
newVector!.add(point);
    
}

this.pointBasicArrayList= newVector;
    
}


}
                
            

