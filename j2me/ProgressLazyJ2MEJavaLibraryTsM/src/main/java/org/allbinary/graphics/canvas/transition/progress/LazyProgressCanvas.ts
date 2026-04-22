
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
        



import { Processor } from "../../../../../../org/allbinary/canvas/Processor.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { NullPaintable } from "../../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { ImageCacheFactory } from "../../../../../../org/allbinary/image/ImageCacheFactory.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ProgressCanvas } from "./ProgressCanvas.js";

export class LazyProgressCanvas extends ProgressCanvas {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
protected constructor (title: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, backgroundBasicColor, foregroundBasicColor);
                        //var title = title
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public start(){
super.start();
    
this.hasPainted= false;
    
}


    public end(){

        try {
            this.logUtil!.putF(commonStrings!.START, this, commonStrings!.END_METHOD_NAME);
    
this.endActual();
    
this.paintable= GAUGE_PAINTABLE;
    
ImageCacheFactory.getInstance()!.runTask();
    
ImageCacheFactory.getInstance()!.progressEnded();
    

                //: 
} catch(e) 
            {
this.logUtil!.putF(commonStrings!.EXCEPTION, this, commonStrings!.END_METHOD_NAME);
    
}

}


    public inGame(){
inGameProcessor= Processor.getInstance();
    
}


    public endFromInitialLazyLoadingComplete(){
super.endFromInitialLazyLoadingComplete();
    
this.paintable= NullPaintable.getInstance();
    
}


    public endIfPaintedSinceStart(){

                        if(this.paintable == GAUGE_PAINTABLE && this.hasPainted)
                        
                                    {
                                    this.endFromInitialLazyLoadingComplete();
    

                                    }
                                
}


}
                
            

