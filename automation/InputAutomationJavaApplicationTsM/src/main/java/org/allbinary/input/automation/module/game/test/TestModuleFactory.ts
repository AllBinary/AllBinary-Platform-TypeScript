
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
        



import { swing } from "../../../../../../../javax/swing.js";

    
import { AbstractInputAutomationFactory } from "../../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationFactory.js";

    
import { InputAutomationModuleData } from "../../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js";

    
import { BlankModuleConfigurationJPanel } from "../../../../../../../org/allbinary/input/automation/module/configuration/BlankModuleConfigurationJPanel.js";

    
import { RunnableInterface } from "../../../../../../../org/allbinary/thread/RunnableInterface.js";

    

export class TestModuleFactory extends AbstractInputAutomationFactory {
        

    private NAME: string = "Test New Game" +InputAutomationModuleData.MODULE_NAME_END;
        
        

    private blankModuleConfigurationJPanel: BlankModuleConfigurationJPanel
public constructor ()                        

                            : super(NAME, new BlankModuleConfigurationJPanel()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NAME;
    
}


    public getConfigurationJPanel(): JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.blankModuleConfigurationJPanel;
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(): RunnableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

