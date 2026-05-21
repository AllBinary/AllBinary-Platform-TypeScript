
        /* Generated Code Do Not Modify */
        



            import hilog from '@ohos.hilog';
        
            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { Runnable } from '../../../java/lang/Runnable.js';
        
import { Context } from '../../../android/content/Context.js';
      
import { View } from '../../../android/view/View.js';
      
import { Toast } from '../../../android/widget/Toast.js';
      
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      
















                                        
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
        

    readonly string: string
public constructor (string: string){

            super();
        this.string= string;
    
}


    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

        try {
            Toast.makeText(context, this.string, time)!.show();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            
view.post(new MakeToast(message));
    
}


}
                
            

