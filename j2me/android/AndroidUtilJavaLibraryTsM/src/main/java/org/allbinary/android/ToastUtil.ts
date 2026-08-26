
        /* Generated Code Do Not Modify */
        



            import hilog from '@ohos.hilog';
        
            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { Runnable } from '../../../java/lang/Runnable.js';
        
//not game specific package import { Context } from '../../../android/content/Context.js';
      const Context = globalThis.android.content.Context;

      
//not game specific package import { View } from '../../../android/view/View.js';
      const View = globalThis.android.view.View;

      
//not game specific package import { Toast } from '../../../android/widget/Toast.js';
      const Toast = globalThis.android.widget.Toast;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ToastUtil
            extends Object
         {
        

    private static readonly instance: ToastUtil = new ToastUtil();

    public static getInstance(): ToastUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ToastUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public makeToast(view: View, context: Context, message: string, time: number){

//inner=true member= isStatic=
class MakeToast
            extends Object
         implements Runnable {
        

    readonly string: string;

public constructor (string: string){

            super();
        this.string= string;
    
}


    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            Toast.makeText(context, this.string, time)!.show();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            
view.post(new MakeToast(message));
    
}


}
                
            

