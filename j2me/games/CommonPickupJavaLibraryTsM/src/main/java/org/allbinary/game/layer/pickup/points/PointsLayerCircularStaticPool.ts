
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
        



import { ScoreableInterface } from "../../../../../../org/allbinary/game/score/ScoreableInterface.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerCircularPool } from "../../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js";

    
import { AllBinaryLayerFactoryInterface } from "../../../../../../org/allbinary/layer/AllBinaryLayerFactoryInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PointsLayerCircularStaticPool extends AllBinaryLayerCircularPool {
        
public constructor (allbinaryLayerFactoryInterface: AllBinaryLayerFactoryInterface, total: number){

            super();
        var allbinaryLayerFactoryInterface = allbinaryLayerFactoryInterface
var total = total
super.init(allbinaryLayerFactoryInterface, total);
    
}


                //@Throws(Error::class)
            
    public visit(sourceLayerInterface: AllBinaryLayer){
var sourceLayerInterface = sourceLayerInterface

    var pointsLayer: PointsLayer = this.getNextInstance();

                         as PointsLayer;
        
        
;
    

    var scoreableInterface: ScoreableInterface = sourceLayerInterface as ScoreableInterface;
        
        
;
    
pointsLayer!.visit(scoreableInterface);
    
}


}
                
            

