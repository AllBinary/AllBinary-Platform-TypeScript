
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
        



import { Canvas } from "../../../javax/microedition/lcdui/Canvas.js";

    
import { Features } from "../../../org/allbinary/game/configuration/feature/Features.js";

    
import { MainFeatureFactory } from "../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js";

    
import { CommandListener } from "../../../javax/microedition/lcdui/CommandListener.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FullScreenUtil
            extends Object
         {
        

    private static readonly instance: FullScreenUtil = new FullScreenUtil();
        
        

    public static getInstance(): FullScreenUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public init(fullScreenInterface: Canvas, commandListener: CommandListener){
    //var fullScreenInterface = fullScreenInterface
    //var commandListener = commandListener
fullScreenInterface = fullScreenInterfacefullScreenInterface as RunnableCanvas
fullScreenInterface.
                    waitOnNotify(0);
    

                        if(commandListener != 
                                    null
                                )
                        
                                    {
                                    this.init(fullScreenInterface);
    

                                    }
                                
}


    public init(fullScreenInterface: Canvas){
    //var fullScreenInterface = fullScreenInterface

    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;
        
        
;
    

    var features: Features = Features.getInstance()!;
        
        
;
    

                        if(features.isFeature(mainFeatureFactory!.FULL_SCREEN))
                        
                                    {
                                    fullScreenInterface!.setFullScreenMode(true);
    

                                    }
                                
                        else {
                            fullScreenInterface!.setFullScreenMode(false);
    

                        }
                            
}


    public isScreenChange(isFullScreen: boolean): boolean{
var isFullScreen = isFullScreen

    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;
        
        
;
    

    var features: Features = Features.getInstance()!;
        
        
;
    

                        if(features.isFeature(mainFeatureFactory!.FULL_SCREEN) != isFullScreen)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isScreenChange(fullScreenInterface: Canvas): boolean{
    //var fullScreenInterface = fullScreenInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isScreenChange(fullScreenInterface!.isFullScreenMode());

                        ;
    
}


}
                
            

