
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
        



import { AllBinarySensorListener } from "../../../../org/allbinary/input/AllBinarySensorListener.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Orientation } from "../../../../org/allbinary/logic/math/Orientation.js";

    

export class NoGyroSensor extends AllBinaryOrientationSensor
                , AllBinarySensorListener {
        
public constructor (){

            super();
            this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    
}


                //@Throws(Error::class)
            
    public getOrientation(): Orientation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Orientation.NONE;
    
}


    public onSensorChange(){
}


}
                
            

