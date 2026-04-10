
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
        




export class CommonStateStrings
            extends Object
         {
        

    private static readonly instance: CommonStateStrings = new CommonStateStrings();
        
        

    public static getInstance(): CommonStateStrings{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommonStateStrings.instance;
    
}


    public readonly CONTEXT: string = "Context: ";
        
        

    public readonly FINISH: string = "finish";
        
        

    public readonly CREATE: string = "onCreate";
        
        

    public readonly START: string = "onStart";
        
        

    public readonly RESTART: string = "onRestart";
        
        

    public readonly RESUME: string = "onResume";
        
        

    public readonly PAUSE: string = "onPause";
        
        

    public readonly STOP: string = "onStop";
        
        

    public readonly DESTROY: string = "onDestroy";
        
        

    public readonly BIND: string = "onBind";
        
        

    public readonly ON_SAVE_INSTANCE_STATE: string = "onSaveInstanceState";
        
        

    public readonly ON_START_COMMAND: string = "onStartCommand";
        
        

}
                
            

