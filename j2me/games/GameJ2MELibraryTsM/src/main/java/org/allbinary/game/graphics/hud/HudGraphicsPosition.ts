
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
        



import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HudGraphicsPosition
            extends Object
         {
        

    public static readonly NULL_HUD_GRAPHICS_POSITION: HudGraphicsPosition = new HudGraphicsPosition(PointFactory.getInstance()!.ZERO_ZERO, 9);
        
        

    private anchor: number= 0

    private point: GPoint = PointFactory.getInstance()!.ZERO_ZERO;
        
        
public constructor (point: GPoint, anchor: number){

            super();
        var point = point
var anchor = anchor
this.setAnchor(anchor);
    
this.setPoint(point);
    
}


    public getAnchor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anchor;
    
}


    setAnchor(anchor: number){
var anchor = anchor
this.anchor= anchor;
    
}


    public getPoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return point;
    
}


    public setPoint(point: GPoint){
var point = point
this.point= point;
    
}


}
                
            

