
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
        




import { Long } from "./Long.js";

export class GameTickTimeDelayHelper
            extends Object
         {
        

    public timeDelta: number= 0

    public startTime: number

    public lastStartTime: number
public constructor (){

            super();
            this.startTime= System.currentTimeMillis();
    
this.lastStartTime= startTime;
    
}

public constructor (startTime: number){

            super();
                //var startTime = startTime
this.startTime= startTime;
    
this.lastStartTime= 0;
    
}


    public setStartTime(): number{
this.startTime= System.currentTimeMillis();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startTime;
    
}


    public loop(){

                        if(this.lastStartTime == Long.MIN_VALUE)
                        
                                    {
                                    this.timeDelta= 0;
    

                                    }
                                
                        else {
                            this.timeDelta= System.currentTimeMillis() -this.lastStartTime;
    

                        }
                            
}


    public getTimeFromStart(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startTime -this.lastStartTime;
    
}


}
                
            

