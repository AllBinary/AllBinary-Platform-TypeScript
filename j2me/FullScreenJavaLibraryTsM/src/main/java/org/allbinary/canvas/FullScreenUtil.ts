
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
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Canvas } from '../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { MainFeatureFactory } from '../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      //not GWT import const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
//not plain js import { CommandListener } from '../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RunnableCanvas } from './RunnableCanvas.js';

export class FullScreenUtil
            extends Object
         {
        

    private static readonly instance: FullScreenUtil = new FullScreenUtil();

    public static getInstance(): FullScreenUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FullScreenUtil.instance;
    
}


                //@Throws(Exception.constructor)
            
    public initOnRun(fullScreenInterface: Canvas, commandListener: CommandListener){
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

    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;;
    

    var features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(mainFeatureFactory!.FULL_SCREEN))
                        
                                    {
                                    fullScreenInterface!.setFullScreenMode(true);
    

                                    }
                                
                        else {
                            fullScreenInterface!.setFullScreenMode(false);
    

                        }
                            
}


    public isScreenChange(isFullScreen: boolean): boolean{

    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;;
    

    var features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(mainFeatureFactory!.FULL_SCREEN) != isFullScreen)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isScreenChangeCanvas(fullScreenInterface: Canvas): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isScreenChange(fullScreenInterface!.isFullScreenMode());;
    
}


}



