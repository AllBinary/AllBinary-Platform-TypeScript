
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
        



import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class ThreadUtil
            extends Object
         {
        

    private static readonly instance: ThreadUtil = new ThreadUtil();
        
        

    public static getInstance(): ThreadUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly JOIN: string = "join";
        
        

    public isRunning(thread: Thread): boolean{
var thread = thread

                        if(thread != 
                                    null
                                 && thread.isAlive())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public join(thread: Thread){
var thread = thread

                        if(ThreadUtil.getInstance()!.isRunning(thread))
                        
                                    {
                                    this.logUtil!.putF("Waiting for Thread To Join/End", this, JOIN);
    
thread.join();
    

                                    }
                                
}


}
                
            

