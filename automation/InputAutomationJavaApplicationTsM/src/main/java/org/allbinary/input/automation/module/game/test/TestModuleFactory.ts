
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { swing } from '../../../../../../../javax/swing.js';
      const swing = globalThis.javax.swing;

      
//not game specific package import { AbstractInputAutomationFactory } from '../../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationFactory.js';
      const AbstractInputAutomationFactory = globalThis.org.allbinary.input.automation.module.AbstractInputAutomationFactory;

      
//not game specific package import { InputAutomationModuleData } from '../../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js';
      const InputAutomationModuleData = globalThis.org.allbinary.input.automation.module.InputAutomationModuleData;

      
//not game specific package import { BlankModuleConfigurationJPanel } from '../../../../../../../org/allbinary/input/automation/module/configuration/BlankModuleConfigurationJPanel.js';
      const BlankModuleConfigurationJPanel = globalThis.org.allbinary.input.automation.module.configuration.BlankModuleConfigurationJPanel;

      
//not game specific package import { RunnableInterface } from '../../../../../../../org/allbinary/thread/RunnableInterface.js';
      const RunnableInterface = globalThis.org.allbinary.thread.RunnableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';

export class TestModuleFactory extends AbstractInputAutomationFactory {
        

    private static NAME: string = "Test New Game" +InputAutomationModuleData.MODULE_NAME_END;

    private blankModuleConfigurationJPanel: BlankModuleConfigurationJPanel;

public constructor (){
            super(NAME, new BlankModuleConfigurationJPanel());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TestModuleFactory.NAME;
    
}


    public getConfigurationJPanel(): JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.blankModuleConfigurationJPanel;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getInstance(): RunnableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}



