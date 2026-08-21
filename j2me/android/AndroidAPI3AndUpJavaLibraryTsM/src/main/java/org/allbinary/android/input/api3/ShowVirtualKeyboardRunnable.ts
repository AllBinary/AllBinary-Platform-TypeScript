
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
      
import { Context } from '../../../../../android/content/Context.js';
      
import { View } from '../../../../../android/view/View.js';
      
import { InputMethodManager } from '../../../../../android/view/inputmethod/InputMethodManager.js';
      
import { ViewCompositeInterface } from '../../../../../org/allbinary/android/activity/ViewCompositeInterface.js';
      
import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
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
                
            

