
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LayerPlacementType } from "./LayerPlacementType.js";

export class BasicLayerPlacement
            extends Object
         {
        

    private layerType: LayerPlacementType

    private width: number

    private height: number
public constructor (layerType: LayerPlacementType, width: number, height: number){

            super();
            var layerType = layerType
var width = width
var height = height
this.layerType= layerType;
    
this.width= width;
    
this.height= height;
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.width;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.height;
    
}


    public getLayerType(): LayerPlacementType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerType;
    
}


    setLayerType(layerType: LayerPlacementType){
var layerType = layerType
this.layerType= layerType;
    
}


}
                
            

