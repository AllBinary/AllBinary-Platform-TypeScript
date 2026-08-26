
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
        
//not game specific package import { Activity } from '../../../../../android/app/Activity.js';
      const Activity = globalThis.android.app.Activity;

      
//not game specific package import { Context } from '../../../../../android/content/Context.js';
      const Context = globalThis.android.content.Context;

      
//not game specific package import { IBinder } from '../../../../../android/os/IBinder.js';
      const IBinder = globalThis.android.os.IBinder;

      
//not game specific package import { View } from '../../../../../android/view/View.js';
      const View = globalThis.android.view.View;

      
//not game specific package import { InputMethodManager } from '../../../../../android/view/inputmethod/InputMethodManager.js';
      const InputMethodManager = globalThis.android.view.inputmethod.InputMethodManager;

      
//not game specific package import { ViewCompositeInterface } from '../../../../../org/allbinary/android/activity/ViewCompositeInterface.js';
      const ViewCompositeInterface = globalThis.org.allbinary.android.activity.ViewCompositeInterface;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HideVirtualKeyboardRunnable
            extends Object
         implements Runnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly activity: Activity;

public constructor (activity: Activity){

            super();
        this.activity= activity;
    
}


    public run(){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

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
    

                        if(view.getWindowToken() == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF("Unable to hide virtual keyboard as window token is null - This usually happens during loading when the view is not attached to a window", this, commonStrings!.RUN);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var token: IBinder = view.getWindowToken()!;;
    
inputMethodManager!.hideSoftInputFromWindow(token, 0);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            

