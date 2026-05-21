
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


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { AnalogControllerConfigurationEvent } from '../../../../../org/allbinary/android/input/motion/event/AnalogControllerConfigurationEvent.js';
      
import { AnalogControllerConfigurationEventHandler } from '../../../../../org/allbinary/android/input/motion/event/AnalogControllerConfigurationEventHandler.js';
      
import { ScaleFactorFactory } from '../../../../../org/allbinary/logic/math/ScaleFactorFactory.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AnalogControllerConfigurationFactory
            extends Object
         {
        

    private static readonly instance: AnalogControllerConfigurationFactory = new AnalogControllerConfigurationFactory();

    public static getInstance(): AnalogControllerConfigurationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AnalogControllerConfigurationFactory.instance;
    
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
                        return this.available;
    
}


                //@Throws(Exception.constructor)
            
    public setAvailable(available: boolean){
this.available= available;
    
AnalogControllerConfigurationEventHandler.getInstance()!.fireEvent(this.analogControllerConfigurationEvent);
    
}


}
                
            

