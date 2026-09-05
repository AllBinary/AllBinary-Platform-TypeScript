
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

        


            import { Object } from '../../../java/lang/Object.js';
        
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { AllBinaryLayer } from '../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LayerDistanceUtil
            extends Object
         {
        

    private static readonly instance: LayerDistanceUtil = new LayerDistanceUtil();

    public static getInstance(): LayerDistanceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LayerDistanceUtil.instance;
    
}


    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;

    public getDistance(layerInterface: AllBinaryLayer, layerInterface2: AllBinaryLayer): number{

    var dx: number = (layerInterface!.getXP() +layerInterface!.getHalfWidth()) -(layerInterface2!.getXP() +layerInterface2!.getHalfWidth());;
    

    var dy: number = (layerInterface!.getYP() +layerInterface!.getHalfHeight()) -(layerInterface2!.getYP() +layerInterface2!.getHalfHeight());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(this.mathUtil!.sqrt((dx *dx) +(dy *dy)));
    
}


    public getDistance3D(layerInterface: AllBinaryLayer, layerInterface2: AllBinaryLayer): number{

    var dx: number = (layerInterface!.getXP() +layerInterface!.getHalfWidth()) -(layerInterface2!.getXP() +layerInterface2!.getHalfWidth());;
    

    var dy: number = (layerInterface!.getYP() +layerInterface!.getHalfHeight()) -(layerInterface2!.getYP() +layerInterface2!.getHalfHeight());;
    

    var dz: number = (layerInterface!.getZP() +layerInterface!.getHalfDepth()) -(layerInterface2!.getZP() +layerInterface2!.getHalfDepth());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(this.mathUtil!.sqrt((dx *dx) +(dy *dy) +(dz *dz)));
    
}


    public getDistanceAt(layerInterface: AllBinaryLayer, point: GPoint): number{

    var dx: number = layerInterface!.getXP() -point.getX();;
    

    var dy: number = layerInterface!.getYP() -point.getY();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(this.mathUtil!.sqrt((dx *dx) +(dy *dy)));
    
}


}



