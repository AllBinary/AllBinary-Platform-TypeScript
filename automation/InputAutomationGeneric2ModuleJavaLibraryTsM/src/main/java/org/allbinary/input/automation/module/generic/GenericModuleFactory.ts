
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { AbstractInputAutomationFactory } from '../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationFactory.js';
      const AbstractInputAutomationFactory = globalThis.org.allbinary.input.automation.module.AbstractInputAutomationFactory;

      
//not game specific package import { InputAutomationActionInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationActionInterface.js';
      const InputAutomationActionInterface = globalThis.org.allbinary.input.automation.module.InputAutomationActionInterface;

      
//not game specific package import { InputAutomationModuleData } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js';
      const InputAutomationModuleData = globalThis.org.allbinary.input.automation.module.InputAutomationModuleData;

      
//not game specific package import { GenericModuleConfigurationJPanel } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/GenericModuleConfigurationJPanel.js';
      const GenericModuleConfigurationJPanel = globalThis.org.allbinary.input.automation.module.generic.configuration.GenericModuleConfigurationJPanel;

      
//not game specific package import { GenericProfile } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfile.js';
      const GenericProfile = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.GenericProfile;

      
//not game specific package import { NoImageComparatorConstraints } from '../../../../../../org/allbinary/input/automation/module/generic/constraints/NoImageComparatorConstraints.js';
      const NoImageComparatorConstraints = globalThis.org.allbinary.input.automation.module.generic.constraints.NoImageComparatorConstraints;

      
//not game specific package import { NoMotionRectangleConstraints } from '../../../../../../org/allbinary/input/automation/module/generic/constraints/NoMotionRectangleConstraints.js';
      const NoMotionRectangleConstraints = globalThis.org.allbinary.input.automation.module.generic.constraints.NoMotionRectangleConstraints;

      
//not game specific package import { RunnableInterface } from '../../../../../../org/allbinary/thread/RunnableInterface.js';
      const RunnableInterface = globalThis.org.allbinary.thread.RunnableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericInputAutomationAction } from './GenericInputAutomationAction.js';
import { GenericInputAutomationWorker } from './GenericInputAutomationWorker.js';

export class GenericModuleFactory extends AbstractInputAutomationFactory {
        

    private static NAME: string = "Generic" +InputAutomationModuleData.MODULE_NAME_END;

public constructor (){
            super(NAME, new GenericModuleConfigurationJPanel());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getInstance(): RunnableInterface{

    var genericProfile: GenericProfile = (getConfigurationJPanel as GenericModuleConfigurationJPanel).getSelectedGenericProfile()!;;
    

    var inputAutomationActionInterface: InputAutomationActionInterface = new GenericInputAutomationAction() as InputAutomationActionInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GenericInputAutomationWorker(inputAutomationActionInterface, genericProfile, new NoMotionRectangleConstraints(), new NoImageComparatorConstraints()) as RunnableInterface;
    
}


}



