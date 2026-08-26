
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
        



//not game specific package import { URL } from '../../../../../java/net/URL.js';
      const URL = globalThis.java.net.URL;

      
//not game specific package import { HelpSet } from '../../../../../javax/help/HelpSet.js';
      const HelpSet = globalThis.javax.help.HelpSet;

      
//not game specific package import { swing } from '../../../../../javax/swing.js';
      const swing = globalThis.javax.swing;

      
//not game specific package import { JavaHelpUtil } from '../../../../../org/allbinary/logic/java/help/JavaHelpUtil.js';
      const JavaHelpUtil = globalThis.org.allbinary.logic.java.help.JavaHelpUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationModuleFactoryInterface } from './InputAutomationModuleFactoryInterface.js';
import { JPanel } from './JPanel.js';

export class AbstractInputAutomationFactory extends InputAutomationModuleFactoryInterface {
        

    private name: string;

    private jPanel: JPanel;

    private helpSet: HelpSet;

public constructor (name: string, jPanel: JPanel, helpSet: HelpSet){

            super();
        this.name= name;
    
this.jPanel= jPanel;
    
this.helpSet= helpSet;
    
}


public constructor (name: string, jPanel: JPanel){

            super();
        this.name= name;
    
this.jPanel= jPanel;
    

    var url: URL = this.constructor.name.getResource("/help/Help.hs")!;;
    
this.helpSet= JavaHelpUtil.getInstance()!.getHelpSet(url);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getConfigurationJPanel(): JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.jPanel;
    
}


    public getHelpSet(): HelpSet{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.helpSet;
    
}


}
                
            

