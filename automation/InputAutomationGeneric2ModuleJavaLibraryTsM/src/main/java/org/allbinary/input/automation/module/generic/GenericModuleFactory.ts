
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
//not GWT import const AbstractInputAutomationFactory

import { InputAutomationActionInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationActionInterface.js';
//not GWT import const InputAutomationActionInterface

import { InputAutomationModuleData } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js';
//not GWT import const InputAutomationModuleData

import { GenericModuleConfigurationJPanel } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/GenericModuleConfigurationJPanel.js';
//not GWT import const GenericModuleConfigurationJPanel

import { GenericProfile } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfile.js';
//not GWT import const GenericProfile

import { NoImageComparatorConstraints } from '../../../../../../org/allbinary/input/automation/module/generic/constraints/NoImageComparatorConstraints.js';
//not GWT import const NoImageComparatorConstraints

import { NoMotionRectangleConstraints } from '../../../../../../org/allbinary/input/automation/module/generic/constraints/NoMotionRectangleConstraints.js';
//not GWT import const NoMotionRectangleConstraints

import { RunnableInterface } from '../../../../../../org/allbinary/thread/RunnableInterface.js';
//not GWT import const RunnableInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericInputAutomationAction } from './GenericInputAutomationAction.js';
//not GWT import - same folder const GenericInputAutomationAction
import { GenericInputAutomationWorker } from './GenericInputAutomationWorker.js';
//not GWT import - same folder const GenericInputAutomationWorker

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



