
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
        
import { AbstractInputAutomationFactory } from '../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationFactory.js';
      //not GWT import const AbstractInputAutomationFactory = globalThis.org.allbinary.input.automation.module.AbstractInputAutomationFactory;

      
import { InputAutomationActionInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationActionInterface.js';
      //not GWT import const InputAutomationActionInterface = globalThis.org.allbinary.input.automation.module.InputAutomationActionInterface;

      
import { InputAutomationModuleData } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js';
      //not GWT import const InputAutomationModuleData = globalThis.org.allbinary.input.automation.module.InputAutomationModuleData;

      
import { GenericModuleConfigurationJPanel } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/GenericModuleConfigurationJPanel.js';
      //not GWT import const GenericModuleConfigurationJPanel = globalThis.org.allbinary.input.automation.module.generic.configuration.GenericModuleConfigurationJPanel;

      
import { GenericProfile } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfile.js';
      //not GWT import const GenericProfile = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.GenericProfile;

      
import { NoImageComparatorConstraints } from '../../../../../../org/allbinary/input/automation/module/generic/constraints/NoImageComparatorConstraints.js';
      //not GWT import const NoImageComparatorConstraints = globalThis.org.allbinary.input.automation.module.generic.constraints.NoImageComparatorConstraints;

      
import { NoMotionRectangleConstraints } from '../../../../../../org/allbinary/input/automation/module/generic/constraints/NoMotionRectangleConstraints.js';
      //not GWT import const NoMotionRectangleConstraints = globalThis.org.allbinary.input.automation.module.generic.constraints.NoMotionRectangleConstraints;

      
import { RunnableInterface } from '../../../../../../org/allbinary/thread/RunnableInterface.js';
      //not GWT import const RunnableInterface = globalThis.org.allbinary.thread.RunnableInterface;

      
















                                        
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



