
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
        
            import { Runnable } from '../../../../../java/lang/Runnable.js';
        
import { Activity } from '../../../../../android/app/Activity.js';
//not GWT import const Activity = globalThis.android.app.Activity;

      
import { Context } from '../../../../../android/content/Context.js';
//not GWT import const Context = globalThis.android.content.Context;

      
import { View } from '../../../../../android/view/View.js';
//not GWT import const View = globalThis.android.view.View;

      
import { InputMethodManager } from '../../../../../android/view/inputmethod/InputMethodManager.js';
//not GWT import const InputMethodManager = globalThis.android.view.inputmethod.InputMethodManager;

      
import { ViewCompositeInterface } from '../../../../../org/allbinary/android/activity/ViewCompositeInterface.js';
//not GWT import const ViewCompositeInterface = globalThis.org.allbinary.android.activity.ViewCompositeInterface;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ShowVirtualKeyboardRunnable
            extends Object
         implements Runnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly activity: Activity;

public constructor (activity: Activity){

            super();
        this.activity= activity;
    
}


    public run(){

        try {
            
    var inputMethodManager: InputMethodManager = this.activity.getSystemService(Context.INPUT_METHOD_SERVICE) as unknown as InputMethodManager;;
    

    var viewCompositeInterface: ViewCompositeInterface = this.activity as unknown as ViewCompositeInterface;;
    

                        if(viewCompositeInterface == 
                                    null
                                )
                        
                                    {
                                    ForcedLogUtil.log("Activity Null", this);
    

                                    }
                                

    var view: View = viewCompositeInterface!.getView()!;;
    
inputMethodManager!.toggleSoftInputFromWindow(view.getWindowToken(), InputMethodManager.SHOW_FORCED, 0);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}



