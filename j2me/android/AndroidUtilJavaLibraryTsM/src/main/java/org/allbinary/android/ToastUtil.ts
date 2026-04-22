
        /* Generated Code Do Not Modify */
        



            import hilog from '@ohos.hilog';
        
import { Context } from "../../../android/content/Context.js";

    
import { View } from "../../../android/view/View.js";

    
import { Toast } from "../../../android/widget/Toast.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ToastUtil
            extends Object
         {
        

            static readonly PUBLIC: string = '%{public}s';
            

    private static readonly instance: ToastUtil = new ToastUtil();
        
        

    public static getInstance(): ToastUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public makeToast(view: View, context: Context, message: string, time: number){
    //var view = view
    //var context = context
var message = message
    //var time = time

class MakeToast
            extends Object
         implements Runnable {
        

            static readonly PUBLIC: string = '%{public}s';
            

    readonly string: string
public constructor (string: string){

            super();
        var string = string
this.string= string;
    
}


    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            Toast.makeText(context, string, time)!.show();
    

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
                
            

