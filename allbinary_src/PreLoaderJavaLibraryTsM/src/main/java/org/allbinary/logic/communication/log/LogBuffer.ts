
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
        
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js import { LogUtil } from './LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

                //not plain js import { Log } from './Log.js';
const Log = globalThis.org.allbinary.logic.communication.log.Log;

                
export class LogBuffer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    logEntryVector: BasicArrayList;

public constructor (){

            super();
        this.logEntryVector= new BasicArrayListD();
    
}


    public add(log: Log){
this.logEntryVector!.add(log);
    
}


    public logAll(){

    var size: number = this.logEntryVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var log: Log = this.logEntryVector!.get(index) as Log;;
    
this.logUtil!.putL(log);
    
}

}


}



