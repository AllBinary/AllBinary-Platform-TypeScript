
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
        



import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    

export class GameRunnable
            extends Object
        
                , Runnable {
        

    public readonly WAIT: number = 240;
        
        

    public readonly FAST: number = 60;
        
        

    public wait: number = WAIT.toLong();
        
        
public constructor (){

            super();
            }


    public run(){
DisplayInfoSingleton.getInstance()!.process()
}


                //@Throws(Error::class)
            
    public processLoopSleep(){
Thread.sleep(wait)
}


}
                
            

