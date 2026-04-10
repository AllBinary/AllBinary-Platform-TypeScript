
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
        



import { AnalogControllerConfigurationEvent } from "../../../../../org/allbinary/android/input/motion/event/AnalogControllerConfigurationEvent.js";

    
import { AnalogControllerConfigurationEventHandler } from "../../../../../org/allbinary/android/input/motion/event/AnalogControllerConfigurationEventHandler.js";

    
import { ScaleFactorFactory } from "../../../../../org/allbinary/logic/math/ScaleFactorFactory.js";

    

export class AnalogControllerConfigurationFactory
            extends Object
         {
        

    private static readonly instance: AnalogControllerConfigurationFactory = new AnalogControllerConfigurationFactory();
        
        

    public static getInstance(): AnalogControllerConfigurationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly SCALE_FACTOR: number = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_FACTOR;
        
        

    public readonly SCALE_VALUE: number = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_VALUE;
        
        

    private available: boolean= false

    private readonly analogControllerConfigurationEvent: AnalogControllerConfigurationEvent = new AnalogControllerConfigurationEvent(this);
        
        
private constructor (){

            super();
            }


    public isAvailable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return available;
    
}


                //@Throws(Error::class)
            
    public setAvailable(available: boolean){
var available = available
this.available= available
AnalogControllerConfigurationEventHandler.getInstance()!.fireEvent(analogControllerConfigurationEvent)
}


}
                
            

