
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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

        


import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { AllBinaryLayer } from '../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ViewPositionBase } from './ViewPositionBase.js';
//not GWT import - same folder const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

                
export class ViewPosition extends ViewPositionBase {
        

    public static getInstanceD(): ViewPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ViewPosition(0, 0, 0);
    
}


    private allbinaryLayer: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;

protected constructor (x: number, y: number, z: number){
            super(x, y, z);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allbinaryLayer!.getXP();;
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allbinaryLayer!.getYP();;
    
}


    public getZ(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allbinaryLayer!.getZP();;
    
}


    public getX2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getX() +this.allbinaryLayer!.getWidth();
    
}


    public getY2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getY() +this.allbinaryLayer!.getHeight();
    
}


    public getZ2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round((this.getZ() +this.allbinaryLayer!.getDepth()));
    
}


    public setAllbinaryLayer(allbinaryLayer: any = {}){
this.allbinaryLayer= allbinaryLayer as unknown as AllBinaryLayer;
    
}


}



