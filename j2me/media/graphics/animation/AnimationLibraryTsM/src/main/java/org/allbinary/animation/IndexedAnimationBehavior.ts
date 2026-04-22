
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AnimationBehavior } from "./AnimationBehavior.js";

export class IndexedAnimationBehavior extends AnimationBehavior {
        

    public frameDelayTime: number

    public loopTotal: number

    public elapsedTime: number= 0

    public loopIndex: number= 0
public constructor (loopTotal: number, frameDelayTime: number){

            super();
            //var loopTotal = loopTotal
    //var frameDelayTime = frameDelayTime
this.loopTotal= loopTotal;
    
this.frameDelayTime= frameDelayTime;
    
}


    public reset(){
this.loopIndex= 0;
    
}


}
                
            

