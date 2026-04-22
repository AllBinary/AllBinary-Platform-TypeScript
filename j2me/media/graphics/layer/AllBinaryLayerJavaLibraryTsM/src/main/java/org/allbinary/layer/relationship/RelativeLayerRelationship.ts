
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

    
import { RelativeRelationship } from "../../../../org/allbinary/graphics/RelativeRelationship.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../org/allbinary/util/BasicArrayListUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RelativeLayerRelationship extends RelativeRelationship {
        

    private layer: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        
        
public constructor (layer: AllBinaryLayer, x: number, y: number){
            this(layer, PointFactory.getInstance()!.getInstance(x, y), BasicArrayListUtil.getInstance()!.getImmutableInstance());
                    var layer = layer
var x = x
var y = y


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (layer: AllBinaryLayer, point: GPoint, typesAllowedList: BasicArrayList){
            super(point, typesAllowedList);
                    var layer = layer
var point = point
var typesAllowedList = typesAllowedList


                            //For kotlin this is before the body of the constructor.
                    
this.layer= layer;
    
}


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layer.getXP() +super.getX();
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layer.getYP() +super.getY();
    
}


    public getZ(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layer.getZP() +super.getZ();
    
}


}
                
            

