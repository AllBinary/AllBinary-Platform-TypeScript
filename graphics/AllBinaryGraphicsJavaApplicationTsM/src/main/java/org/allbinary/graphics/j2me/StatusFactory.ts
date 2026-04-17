
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MyFrame } from "./MyFrame.js";

export class StatusFactory
            extends Object
         {
        

    private static readonly instance: StatusFactory = new StatusFactory();
        
        

    public static getInstance(): StatusFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly SETSTATUS: string = "setStatus";
        
        

    private readonly STATUS_LABEL: string = "Status: ";
        
        

    public setStatusNoLog(status: string){
var status = status
MyFrame.statusJLabel!.setText(status);
    
}


    public setStatus(status: string){
var status = status
setStatusNoLog(status);
    
this.logUtil!.putF(STATUS_LABEL +status, this, SETSTATUS);
    
}


}
                
            

