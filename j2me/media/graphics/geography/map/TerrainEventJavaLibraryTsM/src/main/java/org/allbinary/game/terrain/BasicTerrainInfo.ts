
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
        



import { Angle } from "../../../../org/allbinary/math/Angle.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicTerrainInfo
            extends Object
         {
        

    public static readonly NULL_BASIC_TERRAIN_INFO: BasicTerrainInfo = new BasicTerrainInfo(AngleFactory.getInstance()!.NOT_ANGLE);
        
        

    private angle: Angle
public constructor (angle: Angle){

            super();
        var angle = angle
this.angle= angle;
    
}


    public getAngle(): Angle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angle;
    
}


    public setAngle(angle: Angle){
var angle = angle
this.angle= angle;
    
}


}
                
            

