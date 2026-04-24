
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
        



import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TrackingEventHandler } from "./TrackingEventHandler.js";

export class TrackingEvent extends AllBinaryEventObject {
        

    private layerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        
        
public constructor (){
            super(TrackingEventHandler.getInstance());
                    

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (allBinaryLayerInterface: AllBinaryLayer){
            super(allBinaryLayerInterface);
                    var allBinaryLayerInterface = allBinaryLayerInterface


                            //For kotlin this is before the body of the constructor.
                    
this.setLayerInterface(allBinaryLayerInterface);
    
}


    public init(anyType: any = {}){
var anyType = anyType
this.setSource(anyType);
    
}


    public getLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerInterface;
    
}


    setLayerInterface(layerInterface: AllBinaryLayer){
var layerInterface = layerInterface
this.layerInterface= layerInterface;
    
}


    public setLayerInterfaceForCircularStaticPool(layerInterface: AllBinaryLayer){
var layerInterface = layerInterface
this.layerInterface= layerInterface;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("TrackingEvent: \n");
    
stringBuffer!.append("LayerInterface: ");
    
stringBuffer!.append(this.layerInterface!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

