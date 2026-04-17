
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
        



import { Context } from "../../../android/content/Context.js";

    
import { Vibrator } from "../../../android/os/Vibrator.js";

    
import { ResourceUtil } from "../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { GameConfigurationCentral } from "../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    

import { AllBinaryNoVibration } from "./AllBinaryNoVibration.js";

import { AllBinaryNoVibration } from "./AllBinaryNoVibration.js";

export class AllBinaryVibration extends AllBinaryVibrationME {
        

    private VIBRATION: AllBinaryVibrationME = AllBinaryNoVibration.NO_VIBRATION;
        
        

    public static getInstance(): AllBinaryVibrationME{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VIBRATION;
    
}


    public static init(){

                        if(GameConfigurationCentral.getInstance()!.VIBRATION.getValue()!.toInt() == 0)
                        
                                    {
                                    VIBRATION= AllBinaryNoVibration.NO_VIBRATION;
    

                                    }
                                
                        else {
                            VIBRATION= new AllBinaryVibration();
    

                        }
                            
}


    private readonly vibrator: Vibrator = ResourceUtil.getInstance()!.getContext()!.getSystemService(Context.VIBRATOR_SERVICE);

                         as Vibrator;
        
        
protected constructor (){

            super();
            }


    public vibrate(duration: number, type: number, volume: number){
var duration = duration
var type = type
var volume = volume
vibrator.vibrate(duration.toLong());
    
}


}
                
            

