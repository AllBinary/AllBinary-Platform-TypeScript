
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
        



import { AccelerometerSensorFactory } from "../../../org/allbinary/input/accelerometer/AccelerometerSensorFactory.js";

    
import { GyroSensorFactory } from "../../../org/allbinary/input/gyro/GyroSensorFactory.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

export class AllBinarySensorManager
            extends Object
         {
        

    private static readonly SINGLETON: AllBinarySensorManager = new AllBinarySensorManager();
        
        

    public static getInstance(): AllBinarySensorManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public readonly ORIENTATION_SENSOR_INPUT: string = "Orientation Sensor Input";
        
        

    public readonly ORIENTATION_TYPE: string = "Orientation Type";
        
        
private constructor (){

            super();
            
        try {
            GyroSensorFactory.init();
    
AccelerometerSensorFactory.init();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    
}

}


    public init(){
}


    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    public getSensorNamesList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public shutdown(){
}


}
                
            

