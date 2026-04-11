
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
        



import { InputAutomationModuleFactoryInterface } from "../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js";

    
import { InputAutomationModuleConfiguration } from "../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfiguration.js";

    

export class InputAutomationConfigurationUtil
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getChangeEvent(inputAutomationModuleInterface: InputAutomationModuleFactoryInterface): InputAutomationConfigurationModuleChangeEvent{
var inputAutomationModuleInterface = inputAutomationModuleInterface

    var inputAutomationModuleConfiguration: InputAutomationModuleConfiguration = new InputAutomationModuleConfiguration(inputAutomationModuleInterface);
        
        
;
    

    var inputAutomationConfigurationModuleChangeEvent: InputAutomationConfigurationModuleChangeEvent = new InputAutomationConfigurationModuleChangeEvent(inputAutomationModuleConfiguration);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationConfigurationModuleChangeEvent;
    
}

private constructor (){

            super();
            }


}
                
            

