
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SensorFeature } from './SensorFeature.js';
//not GWT import const  = globalThis.org.allbinary.game.configuration.feature.SensorFeature;

                
export class SensorFeatureFactory
            extends Object
         {
        

    private static readonly instance: SensorFeatureFactory = new SensorFeatureFactory();

    public static getInstance(): SensorFeatureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SensorFeatureFactory.instance;
    
}


private constructor (){

            super();
        }


    public readonly NO_ORIENTATION: SensorFeature = new SensorFeature("No Orientation");

    public readonly ORIENTATION_SENSORS: SensorFeature = new SensorFeature("Orientation Sensors");

    public readonly SIMULATED_ORIENTATION_SENSORS: SensorFeature = new SensorFeature("Simulated Orientation Sensors");

    public readonly YAW: SensorFeature = new SensorFeature("Yaw");

    public readonly YAW_MINUS_RIGHT_PLUS_LEFT: SensorFeature = new SensorFeature("Yaw -Right +Left");

    public readonly YAW_MINUS_LEFT_PLUS_RIGHT: SensorFeature = new SensorFeature("Yaw -Left +Right ");

    public readonly PITCH: SensorFeature = new SensorFeature("Pitch");

    public readonly ROLL: SensorFeature = new SensorFeature("Roll");

}



