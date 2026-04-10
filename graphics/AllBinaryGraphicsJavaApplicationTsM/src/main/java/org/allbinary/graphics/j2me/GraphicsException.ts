
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
        



import { GuiLog } from "../../../../org/allbinary/logic/communication/log/GuiLog.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class GraphicsException extends java.lang.Error {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly guiLog: GuiLog = GuiLog.getInstance()!;
        
        
public constructor (msg: string, obj: any = {}, method: string)                        

                            : super(msg){

            super();
            var msg = msg
var obj = obj
var method = method


                            //For kotlin this is before the body of the constructor.
                    

        try {
            guiLog!.showDialog(msg)
logUtil!.put(msg, obj, method, this)
} catch(e: Exception)
            {
}

}

public constructor (msg: string, className: string, method: string)                        

                            : super(msg){

            super();
            var msg = msg
var className = className
var method = method


                            //For kotlin this is before the body of the constructor.
                    

        try {
            guiLog!.showDialog(msg)
logUtil!.put(msg, className, method, this)
} catch(e: Exception)
            {
}

}


}
                
            

