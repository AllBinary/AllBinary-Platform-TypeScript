
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

        


import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TrackingEventHandler } from './TrackingEventHandler.js';
//not GWT import - same folder const TrackingEventHandler = globalThis.org.allbinary.game.tracking.TrackingEventHandler;

                
export class TrackingEvent extends AllBinaryEventObject {
        

    private layerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;

public constructor (allBinaryLayerInterface: any = {}){
            super(allBinaryLayerInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(allBinaryLayerInterface != TrackingEventHandler.getInstance())
                        
                                    {
                                    this.setLayerInterface(allBinaryLayerInterface as AllBinaryLayer);
    

                                    }
                                
}


    public init(anyType: any = {}){
this.setSource(anyType);
    
}


    public getLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layerInterface;
    
}


    setLayerInterface(layerInterface: AllBinaryLayer){
this.layerInterface= layerInterface;
    
}


    public setLayerInterfaceForCircularStaticPool(layerInterface: AllBinaryLayer){
this.layerInterface= layerInterface;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("TrackingEvent: \n");
    
stringBuffer!.append("LayerInterface: ");
    
stringBuffer!.append(this.layerInterface!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



