
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
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Canvas } from '../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { CommandListener } from '../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { MainFeatureFactory } from '../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
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

                        if(commandListener != 
                                    null
                                )
                        
                                    {
                                    this.init(fullScreenInterface);
    

                                    }
                                
}


    public init(fullScreenInterface: Canvas){
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
                        return this.isScreenChange(false);;
    
}


}



