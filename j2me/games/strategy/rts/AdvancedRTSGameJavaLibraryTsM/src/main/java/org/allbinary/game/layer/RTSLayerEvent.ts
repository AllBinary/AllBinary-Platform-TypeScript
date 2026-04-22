
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *    Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { NullPathFindingLayer } from "./NullPathFindingLayer.js";

import { PathFindingLayerInterface } from "./PathFindingLayerInterface.js";

export class RTSLayerEvent extends AllBinaryEventObject {
        

    private rtsLayer: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        
        
public constructor (rtsLayer: PathFindingLayerInterface){
            super(rtsLayer);
                    var rtsLayer = rtsLayer


                            //For kotlin this is before the body of the constructor.
                    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("RTSLayerEvent: \n");
    
stringBuffer!.append("RTSLayer: ");
    
stringBuffer!.append(this.getRtsLayer()!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public getRtsLayer(): PathFindingLayerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayer;
    
}


    public setRtsLayer(rtsLayer: PathFindingLayerInterface){
var rtsLayer = rtsLayer
this.rtsLayer= rtsLayer;
    
}


}
                
            

