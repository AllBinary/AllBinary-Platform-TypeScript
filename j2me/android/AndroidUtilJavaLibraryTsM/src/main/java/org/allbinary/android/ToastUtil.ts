
        /* Generated Code Do Not Modify */
        



import { Context } from "../../../android/content/Context.js";

    
import { View } from "../../../android/view/View.js";

    
import { Toast } from "../../../android/widget/Toast.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class ToastUtil
            extends Object
         {
        

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
        
                , Runnable {
        

    readonly string: string
public constructor (string: string){

            super();
            var string = string
this.string= string
}


    public run(){

        try {
            Toast.makeText(context, string, time)!.show()
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}


}
                
            
view.post(MakeToast(message))
}


}
                
            

