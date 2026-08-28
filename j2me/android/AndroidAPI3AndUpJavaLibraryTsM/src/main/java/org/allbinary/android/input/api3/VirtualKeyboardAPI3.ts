
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
        



            import { Integer } from '../../../../../java/lang/Integer.js';
        
            import { Runnable } from '../../../../../java/lang/Runnable.js';
        
//not game specific package import { Activity } from '../../../../../android/app/Activity.js';
      const Activity = globalThis.android.app.Activity;

      
//not game specific package import { VirtualKeyboard } from '../../../../../org/allbinary/android/input/VirtualKeyboard.js';
      const VirtualKeyboard = globalThis.org.allbinary.android.input.VirtualKeyboard;

      
//not game specific package import { VirtualKeyboardEvent } from '../../../../../org/allbinary/input/event/VirtualKeyboardEvent.js';
      const VirtualKeyboardEvent = globalThis.org.allbinary.input.event.VirtualKeyboardEvent;

      
//not game specific package import { VirtualKeyboardEventHandler } from '../../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
      const VirtualKeyboardEventHandler = globalThis.org.allbinary.input.event.VirtualKeyboardEventHandler;

      
//not game specific package import { VirtualKeyboardEventListenerInterface } from '../../../../../org/allbinary/input/event/VirtualKeyboardEventListenerInterface.js';
      const VirtualKeyboardEventListenerInterface = globalThis.org.allbinary.input.event.VirtualKeyboardEventListenerInterface;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShowVirtualKeyboardRunnable } from './ShowVirtualKeyboardRunnable.js';
import { HideVirtualKeyboardRunnable } from './HideVirtualKeyboardRunnable.js';

export class VirtualKeyboardAPI3 extends VirtualKeyboard implements VirtualKeyboardEventListenerInterface {
        

    public static MAX_API: number = Integer.MAX_VALUE;

    public static MIN_API: number = 3;

    private virtualKeyboard: boolean= false;

    private activity: Activity;

    private readonly showVirtualKeyboardRunnable: Runnable;

    private readonly hideVirtualKeyboardRunnable: Runnable;

public constructor (activity: Activity){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.activity= activity;
    
this.showVirtualKeyboardRunnable= new ShowVirtualKeyboardRunnable(this.activity);
    
this.hideVirtualKeyboardRunnable= new HideVirtualKeyboardRunnable(this.activity);
    

    var virtualKeyboardEventHandler: VirtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance()!;;
    
virtualKeyboardEventHandler!.removeAllListeners();
    
virtualKeyboardEventHandler!.addListenerInterface(this);
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onVirtualKeyboardEvent(virtualKeyboardEvent: VirtualKeyboardEvent){

    var isShow: Boolean = virtualKeyboardEvent!.getSource() as Boolean;;
    

                        if(isShow.valueOf())
                        
                                    {
                                    this.showVirtualKeyboard();
    

                                    }
                                
                        else {
                            this.hideVirtualKeyboard();
    

                        }
                            
}


    public forceHide(){
this.hideVirtualKeyboard();
    
}


    public hide(){

                        if(this.virtualKeyboard)
                        
                                    {
                                    this.forceHide();
    

                                    }
                                
}


    showVirtualKeyboard(){
this.activity.runOnUiThread(this.showVirtualKeyboardRunnable);
    
this.virtualKeyboard= true;
    
}


    hideVirtualKeyboard(){
this.activity.runOnUiThread(this.hideVirtualKeyboardRunnable);
    
this.virtualKeyboard= false;
    
}


}



