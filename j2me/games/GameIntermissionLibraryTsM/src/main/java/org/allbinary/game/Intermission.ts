
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
        



import { TimeDelayHelper } from "../../../org/allbinary/time/TimeDelayHelper.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { NullIntermissionEnableListener } from "./NullIntermissionEnableListener.js";

import { IntermissionEnableListenerInterface } from "./IntermissionEnableListenerInterface.js";

export class Intermission
            extends Object
         implements IntermissionInterface {
        

    private enabled: boolean= false

    private readonly timeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

    private intermissionEnableListener: IntermissionEnableListenerInterface = NullIntermissionEnableListener.getInstance()!;
        
        
public constructor (){

            super();
            }


    public setListener(enableListener: IntermissionEnableListenerInterface){
var enableListener = enableListener
this.intermissionEnableListener= enableListener;
    
}


    public getTimeDelayHelper(): TimeDelayHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return timeElapsedHelper;
    
}


    public setEnabled(enabled: boolean){
var enabled = enabled
this.enabled= enabled;
    

                        if(this.isEnabled())
                        
                                    {
                                    this.getTimeDelayHelper()!.setStartTime();
    

                                    }
                                
this.intermissionEnableListener!.notifyIntermission(enabled);
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return enabled;
    
}


}
                
            

