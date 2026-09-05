
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

      
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { RelativeRelationship } from '../../../../org/allbinary/graphics/RelativeRelationship.js';
//not GWT import const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RelativeLayerRelationship extends RelativeRelationship {
        

    private layer: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;

public constructor (layer: AllBinaryLayer, point: GPoint, typesAllowedList: BasicArrayList){
            super(point, typesAllowedList);
                    

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



