
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
        



import { swing } from "../../../../../javax/swing.js";

    
import { Bundle } from "../../../../../org/osgi/framework/Bundle.js";

    
import { BundleContext } from "../../../../../org/osgi/framework/BundleContext.js";

    
import { InputAutomationBundleActivator } from "../../../../../bundle/input/automation/InputAutomationBundleActivator.js";

    
import { BasicTextJDialog } from "../../../../../org/allbinary/gui/dialog/BasicTextJDialog.js";

    

export class DesktopBundle
            extends Object
         {
        

    private static readonly DESKTOP_SYMBOLIC_NAME: string = "org.knopflerfish.bundle.desktop";
        
        

    private bundle: Bundle
public constructor (){

            super();
            
    var bundleContext: BundleContext = InputAutomationBundleActivator.getBundleContext()!;
        
        
;
    

                        if(bundleContext != 
                                    null
                                )
                        
                                    {
                                    
    var bundleArray: Bundle[] = bundleContext!.getBundles()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < bundleArray!.length; index++)
        {

    var bundle: Bundle = bundleArray[index]!;
        
        
;
    

    var symbolicName: string = bundle.getSymbolicName()!;
        
        
;
    

                        if(symbolicName!.compareTo(DESKTOP_SYMBOLIC_NAME) == 0)
                        
                                    {
                                    this.bundle= bundle;
    

                                    }
                                
}


                                    }
                                
                        else {
                            
    var textJDialog: JDialog = new BasicTextJDialog("BundlContext is Null");
        
        
;
    
textJDialog!.setVisible(true);
    

                        }
                            
}


                //@Throws(Error::class)
            
    public start(){
this.bundle.start();
    
}


}
                
            

