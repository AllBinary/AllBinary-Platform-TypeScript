
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { System } from '../../../java/lang/System.js';
        
            import { Long } from '../../../java/lang/Long.js';
        
import { Debug } from '../../../android/os/Debug.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DebugInterface } from './DebugInterface.js';

export class AndroidDebug
            extends Object
         implements DebugInterface {
        

    private startTime: number = Long.MAX_VALUE;

    private running: boolean = false;

    private bufferSize: number = 32 *1024 *1024;

    public start(){
this.setStartTime(Date.now());
    
Debug.startMethodTracing("trace", this.bufferSize);
    
this.setRunning(true);
    
}


    public stop(){
this.startTime= Long.MAX_VALUE;
    
Debug.stopMethodTracing();
    
this.setRunning(false);
    
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
                        return this.startTime;
    
}


    setRunning(running: boolean){
var running = running
this.running= running;
    
}


    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.running;
    
}


}
                
            

