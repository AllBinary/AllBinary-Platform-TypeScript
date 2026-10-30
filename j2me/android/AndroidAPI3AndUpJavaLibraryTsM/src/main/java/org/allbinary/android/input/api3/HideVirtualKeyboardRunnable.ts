
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
//not GWT import const Activity

import { Context } from '../../../../../android/content/Context.js';
//not GWT import const Context

import { IBinder } from '../../../../../android/os/IBinder.js';
//not GWT import const IBinder

import { View } from '../../../../../android/view/View.js';
//not GWT import const View

import { InputMethodManager } from '../../../../../android/view/inputmethod/InputMethodManager.js';
//not GWT import const InputMethodManager

import { ViewCompositeInterface } from '../../../../../org/allbinary/android/activity/ViewCompositeInterface.js';
//not GWT import const ViewCompositeInterface

//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
type ForcedLogUtil<T = any, U = any> = typeof ForcedLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ForcedLogUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
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

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { 
    let inputMethodManager: InputMethodManager = this.activity.getSystemService(Context.INPUT_METHOD_SERVICE) as unknown as InputMethodManager;;
    

    let viewCompositeInterface: ViewCompositeInterface = this.activity as unknown as ViewCompositeInterface;;
    

                        if(viewCompositeInterface == 
                                    null
                                )
                        
                                    {
                                    ForcedLogUtil.log("Activity Null", this);
    

                                    }
                                

    let view: View = viewCompositeInterface!.getView()!;;
    

                        if(view.getWindowToken() == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF("Unable to hide virtual keyboard as window token is null - This usually happens during loading when the view is not attached to a window", this, commonStrings!.RUN);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    let token: IBinder = view.getWindowToken()!;;
    
inputMethodManager!.hideSoftInputFromWindow(token, 0);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
   }
 
}


}

