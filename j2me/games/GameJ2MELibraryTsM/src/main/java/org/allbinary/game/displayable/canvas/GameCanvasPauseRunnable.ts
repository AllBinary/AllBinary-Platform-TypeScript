
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
        



import { AndroidUtil } from "../../../../../org/allbinary/AndroidUtil.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { OpenGLFeatureFactory } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class GameCanvasPauseRunnable extends GameRunnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly allBinaryGameCanvas: AllBinaryGameCanvas
public constructor (allBinaryGameCanvas: AllBinaryGameCanvas){

            super();
            var allBinaryGameCanvas = allBinaryGameCanvas
this.allBinaryGameCanvas= allBinaryGameCanvas
}


    public run(){
}


                //@Throws(Error::class)
            
    public processLoopSleep(){

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    
        try {
            
    var features: Features = Features.getInstance()!;
        
        


    var isOpenGL: boolean = features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL)!;
        
        


                        if(isOpenGL)
                        
                                    {
                                    allBinaryGameCanvas!.processSleep()

                                    }
                                
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}


                                    }
                                
}


}
                
            

