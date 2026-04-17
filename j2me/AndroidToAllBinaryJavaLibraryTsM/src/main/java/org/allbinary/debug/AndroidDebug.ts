
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
        



import { Debug } from "../../../android/os/Debug.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AndroidDebug
            extends Object
         implements DebugInterface {
        

    private startTime: number = Long.MAX_VALUE;
        
        

    private running: boolean = false;
        
        

    private bufferSize: number = 32 *1024 *1024;
        
        

    public start(){
this.setStartTime(System.currentTimeMillis());
    
Debug.startMethodTracing("trace", bufferSize);
    
setRunning(true);
    
}


    public stop(){
startTime= Long.MAX_VALUE;
    
Debug.stopMethodTracing();
    
setRunning(false);
    
}


    public getMaxTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 120000;
    
}


    setStartTime(startTime: number){
var startTime = startTime
this.startTime= startTime;
    
}


    public getStartTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return startTime;
    
}


    setRunning(running: boolean){
var running = running
this.running= running;
    
}


    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return running;
    
}


}
                
            

