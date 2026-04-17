
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
        
export class ABRunnable
            extends Object
         implements RunnableInterface {
        

    private running: boolean = false;
        
        

    public setThread(thread: Thread){
var thread = thread
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return running;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setRunning(running: boolean){
var running = running
this.running= running;
    
}


    public run(){
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


}
                
            

