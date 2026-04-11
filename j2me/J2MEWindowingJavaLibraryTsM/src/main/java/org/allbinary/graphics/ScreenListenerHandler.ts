
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
        




export class ScreenListenerHandler
            extends Object
         {
        

    private static readonly instance: ScreenListenerHandler = new ScreenListenerHandler();
        
        

    public static getInstance(): ScreenListenerHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private screenListenerInterface: ScreenListenerInterface = new ScreenEmptyListener();
        
        

    public setListener(screenListenerInterface: ScreenListenerInterface){
var screenListenerInterface = screenListenerInterface
this.screenListenerInterface= screenListenerInterface;
    
}


    public fire(isFullScreen: boolean){
var isFullScreen = isFullScreen
this.screenListenerInterface!.onFullScreen(isFullScreen);
    
}


    public fire(){
this.screenListenerInterface!.onFullScreenDisplay();
    
}


}
                
            

