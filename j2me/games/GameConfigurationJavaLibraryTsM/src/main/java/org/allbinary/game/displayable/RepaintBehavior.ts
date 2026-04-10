
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
        



import { ARunnable } from "../../../../org/allbinary/thread/ARunnable.js";

    
import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { OpenGLFeatureFactory } from "../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { NullRunnable } from "../../../../org/allbinary/thread/NullRunnable.js";

    

export class RepaintBehavior
            extends Object
         {
        

    private static readonly instance: RepaintBehavior = new RepaintBehavior();
        
        

    public static getInstance(): RepaintBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public repaint(canvas: Canvas){
    //var canvas = canvas
}


    private readonly NAME: string = "RepaintBehavior";
        
        

    public onChangeRepaint(canvas: Canvas){
    //var canvas = canvas

    var features: Features = Features.getInstance()!;
        
        


    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        


    
                        if(features.isFeature(openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    process()

                                    }
                                
                        else {
                            
    var thread: Thread = new Thread(object: ARunnable()
                                {
                                
    public run(){

        try {
            repaint()
process()
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}

                                }
                            , NAME);
        
        

start()

                        }
                            
}


}
                
            

