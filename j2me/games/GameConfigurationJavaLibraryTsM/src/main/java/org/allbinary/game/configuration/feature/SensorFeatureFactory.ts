
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
        




export class SensorFeatureFactory
            extends Object
         {
        

    private static readonly instance: SensorFeatureFactory = new SensorFeatureFactory();
        
        

    public static getInstance(): SensorFeatureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
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
                
            

