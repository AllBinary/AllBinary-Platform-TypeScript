
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
        
import { Activity } from '../../../../../android/app/Activity.js';
      //not GWT import const Activity = globalThis.android.app.Activity;

      
import { VirtualKeyboard } from '../../../../../org/allbinary/android/input/VirtualKeyboard.js';
      //not GWT import const VirtualKeyboard = globalThis.org.allbinary.android.input.VirtualKeyboard;

      
import { VirtualKeyboardEvent } from '../../../../../org/allbinary/input/event/VirtualKeyboardEvent.js';
      //not GWT import const VirtualKeyboardEvent = globalThis.org.allbinary.input.event.VirtualKeyboardEvent;

      
import { VirtualKeyboardEventHandler } from '../../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
      //not GWT import const VirtualKeyboardEventHandler = globalThis.org.allbinary.input.event.VirtualKeyboardEventHandler;

      
import { VirtualKeyboardEventListenerInterface } from '../../../../../org/allbinary/input/event/VirtualKeyboardEventListenerInterface.js';
      //not GWT import const VirtualKeyboardEventListenerInterface = globalThis.org.allbinary.input.event.VirtualKeyboardEventListenerInterface;

      
//not plain js import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
















                                        
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



