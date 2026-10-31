
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

        


//not plain js import { URL } 
const URL = (globalThis.java?.net?.URL ?? class {}) as typeof globalThis.java.net.URL;
type URL<T = any, U = any> = typeof URL extends abstract new (...args: any[]) => infer Instance ? Instance : typeof URL;

import { HelpSet } from '../../../../../javax/help/HelpSet.js';
//not GWT import const HelpSet

import { swing } from '../../../../../javax/swing.js';
//not GWT import const swing

import { JavaHelpUtil } from '../../../../../org/allbinary/logic/java/help/JavaHelpUtil.js';
//not GWT import const JavaHelpUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationModuleFactoryInterface } from './InputAutomationModuleFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const InputAutomationModuleFactoryInterface
import { JPanel } from './JPanel.js';
//sameFolderImports - not GWT import - same folder const JPanel

export class AbstractInputAutomationFactory extends InputAutomationModuleFactoryInterface {
        

    private name: string;

    private jPanel: JPanel;

    private helpSet: HelpSet;

    public constructor(...args: any[]) {
        super();
        if(args.length === 3) {
            this.constructor$0(args[0], args[1], args[2]);
        }
        else if(args.length === 2) {
            this.constructor$1(args[0], args[1]);
        }
        
    }
    
    private constructor$0(name: string, jPanel: JPanel, helpSet: HelpSet): void {
        this.name= name;
    
this.jPanel= jPanel;
    
this.helpSet= helpSet;
    

    }
    
    private constructor$1(name: string, jPanel: JPanel): void {
        this.name= name;
    
this.jPanel= jPanel;
    

    let url: URL = this.constructor.name.getResource("/help/Help.hs")!;;
    
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

