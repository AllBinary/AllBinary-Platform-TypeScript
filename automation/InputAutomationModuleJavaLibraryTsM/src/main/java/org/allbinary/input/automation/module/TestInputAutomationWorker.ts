
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
        



import { ScreenCaptureImagesWorker } from "../../../../../org/allbinary/input/media/image/capture/ScreenCaptureImagesWorker.js";

    
import { ImageComparisonWorker } from "../../../../../org/allbinary/media/image/comparison/ImageComparisonWorker.js";

    
import { SaveImageComparisonWorker } from "../../../../../org/allbinary/media/image/comparison/SaveImageComparisonWorker.js";

    
import { MotionRectanglesWorker } from "../../../../../org/allbinary/media/image/comparison/motion/MotionRectanglesWorker.js";

    
import { SaveMotionRectanglesResultsWorker } from "../../../../../org/allbinary/media/image/comparison/motion/SaveMotionRectanglesResultsWorker.js";

    
import { TestInputForMotionRectanglesResultsWorker } from "../../../../../org/allbinary/media/image/comparison/motion/TestInputForMotionRectanglesResultsWorker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TestInputAutomationWorker
            extends Object
         {
        

    private captureWorker: ScreenCaptureImagesWorker

    private imageComparisonWorker: ImageComparisonWorker

    private motionRectanglesWorker: MotionRectanglesWorker

    private changedPixelsImageComparisonResultsWorker: SaveImageComparisonWorker

    private saveMotionRectanglesAsImagesWorker: SaveMotionRectanglesResultsWorker

    private moveMouseToFirstMotionRectanglesResultsWorker: TestInputForMotionRectanglesResultsWorker
public constructor (){

            super();
        this.captureWorker= new ScreenCaptureImagesWorker();
    
this.changedPixelsImageComparisonResultsWorker= new SaveImageComparisonWorker();
    
this.saveMotionRectanglesAsImagesWorker= new SaveMotionRectanglesResultsWorker();
    
this.moveMouseToFirstMotionRectanglesResultsWorker= new TestInputForMotionRectanglesResultsWorker();
    
this.motionRectanglesWorker!.addListener(this.saveMotionRectanglesAsImagesWorker);
    
this.motionRectanglesWorker!.addListener(this.moveMouseToFirstMotionRectanglesResultsWorker);
    
this.imageComparisonWorker!.addListener(this.changedPixelsImageComparisonResultsWorker);
    
this.imageComparisonWorker!.addListener(this.motionRectanglesWorker);
    
this.captureWorker!.addListener(this.imageComparisonWorker);
    
}


}
                
            

