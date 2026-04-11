
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../java/util/Vector.js";

    

export class LogBuffer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    logEntryVector: Vector
public constructor (){

            super();
            this.logEntryVector= Vector();
    
}


    public add(log: Log){
var log = log
this.logEntryVector!.add(log);
    
}


    public logAll(){

    var size: number = this.logEntryVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var log: Log = this.logEntryVector!.get(index);

                         as Log;
        
        
;
    
logUtil!.put(log);
    
}

}


}
                
            

