
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
        



import { AbstractInputAutomationFactory } from "../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationFactory.js";

    
import { InputAutomationActionInterface } from "../../../../../../org/allbinary/input/automation/module/InputAutomationActionInterface.js";

    
import { InputAutomationModuleData } from "../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js";

    
import { GenericModuleConfigurationJPanel } from "../../../../../../org/allbinary/input/automation/module/generic/configuration/GenericModuleConfigurationJPanel.js";

    
import { GenericProfile } from "../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfile.js";

    
import { NoImageComparatorConstraints } from "../../../../../../org/allbinary/input/automation/module/generic/constraints/NoImageComparatorConstraints.js";

    
import { NoMotionRectangleConstraints } from "../../../../../../org/allbinary/input/automation/module/generic/constraints/NoMotionRectangleConstraints.js";

    
import { RunnableInterface } from "../../../../../../org/allbinary/thread/RunnableInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GenericModuleFactory extends AbstractInputAutomationFactory {
        

    private NAME: string = "Generic" +InputAutomationModuleData.MODULE_NAME_END;
        
        
public constructor (){
            super(NAME, new GenericModuleConfigurationJPanel());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(): RunnableInterface{

    var genericProfile: GenericProfile = 
                                    (getConfigurationJPanel as GenericModuleConfigurationJPanel).getSelectedGenericProfile()!;
        
        
;
    

    var inputAutomationActionInterface: InputAutomationActionInterface = new GenericInputAutomationAction() as InputAutomationActionInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GenericInputAutomationWorker(inputAutomationActionInterface, genericProfile, new NoMotionRectangleConstraints(), new NoImageComparatorConstraints()) as RunnableInterface;
    
}


}
                
            

