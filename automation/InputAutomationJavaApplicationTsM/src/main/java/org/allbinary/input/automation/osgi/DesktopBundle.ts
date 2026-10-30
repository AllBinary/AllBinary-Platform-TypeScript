
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
        
import { swing } from '../../../../../javax/swing.js';
//not GWT import const swing

import { Bundle } from '../../../../../org/osgi/framework/Bundle.js';
//not GWT import const Bundle

import { BundleContext } from '../../../../../org/osgi/framework/BundleContext.js';
//not GWT import const BundleContext

import { InputAutomationBundleActivator } from '../../../../../bundle/input/automation/InputAutomationBundleActivator.js';
//not GWT import const InputAutomationBundleActivator

import { BasicTextJDialog } from '../../../../../org/allbinary/gui/dialog/BasicTextJDialog.js';
//not GWT import const BasicTextJDialog

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JDialog } from './JDialog.js';
//sameFolderImports - not GWT import - same folder const JDialog

export class DesktopBundle
            extends Object
         {
        

    private static readonly DESKTOP_SYMBOLIC_NAME: string = "org.knopflerfish.bundle.desktop";

    private bundle: Bundle;

public constructor (){

            super();
        
    let bundleContext: BundleContext = InputAutomationBundleActivator.getBundleContext()!;;
    

                        if(bundleContext != 
                                    null
                                )
                        
                                    {
                                    
    let bundleArray: Bundle[] = bundleContext!.getBundles()!;;
    




                        for (
    let index: number = 0;index < bundleArray!.length; index++)
        {

    let bundle: Bundle = bundleArray[index]!;;
    

    let symbolicName: string = bundle.getSymbolicName()!;;
    

                        if(symbolicName!.compareTo(DesktopBundle.DESKTOP_SYMBOLIC_NAME) == 0)
                        
                                    {
                                    this.bundle= bundle;
    

                                    }
                                
}


                                    }
                                
                        else {
                            
    let textJDialog: JDialog = new BasicTextJDialog("BundlContext is Null");;
    
textJDialog!.setVisible(true);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public start(){
this.bundle.start();
    
}


}

