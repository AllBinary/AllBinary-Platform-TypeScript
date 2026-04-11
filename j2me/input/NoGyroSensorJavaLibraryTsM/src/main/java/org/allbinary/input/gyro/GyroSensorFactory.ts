
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
        




export class GyroSensorFactory
            extends Object
         {
        

    private allBinaryGyroSensor: AllBinaryOrientationSensor = AllBinaryOrientationSensor.NULL_ALLBINARY_ORIENTATION_SENSOR;
        
        

                //@Throws(Error::class)
            
    public static init(){
GyroSensorFactory.allBinaryGyroSensor= NoGyroSensor();
    
}


    public static getInstance(): AllBinaryOrientationSensor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GyroSensorFactory.allBinaryGyroSensor;
    
}


}
                
            

