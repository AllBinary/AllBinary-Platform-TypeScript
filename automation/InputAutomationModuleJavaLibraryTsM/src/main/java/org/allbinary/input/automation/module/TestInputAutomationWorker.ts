
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { ScreenCaptureImagesWorker } from '../../../../../org/allbinary/input/media/image/capture/ScreenCaptureImagesWorker.js';
      //not GWT import const ScreenCaptureImagesWorker = globalThis.org.allbinary.input.media.image.capture.ScreenCaptureImagesWorker;

      
import { ImageComparisonWorker } from '../../../../../org/allbinary/media/image/comparison/ImageComparisonWorker.js';
      //not GWT import const ImageComparisonWorker = globalThis.org.allbinary.media.image.comparison.ImageComparisonWorker;

      
import { SaveImageComparisonWorker } from '../../../../../org/allbinary/media/image/comparison/SaveImageComparisonWorker.js';
      //not GWT import const SaveImageComparisonWorker = globalThis.org.allbinary.media.image.comparison.SaveImageComparisonWorker;

      
import { MotionRectanglesWorker } from '../../../../../org/allbinary/media/image/comparison/motion/MotionRectanglesWorker.js';
      //not GWT import const MotionRectanglesWorker = globalThis.org.allbinary.media.image.comparison.motion.MotionRectanglesWorker;

      
import { SaveMotionRectanglesResultsWorker } from '../../../../../org/allbinary/media/image/comparison/motion/SaveMotionRectanglesResultsWorker.js';
      //not GWT import const SaveMotionRectanglesResultsWorker = globalThis.org.allbinary.media.image.comparison.motion.SaveMotionRectanglesResultsWorker;

      
import { TestInputForMotionRectanglesResultsWorker } from '../../../../../org/allbinary/media/image/comparison/motion/TestInputForMotionRectanglesResultsWorker.js';
      //not GWT import const TestInputForMotionRectanglesResultsWorker = globalThis.org.allbinary.media.image.comparison.motion.TestInputForMotionRectanglesResultsWorker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TestInputAutomationWorker
            extends Object
         {
        

    private captureWorker: ScreenCaptureImagesWorker;

    private imageComparisonWorker: ImageComparisonWorker;

    private motionRectanglesWorker: MotionRectanglesWorker;

    private changedPixelsImageComparisonResultsWorker: SaveImageComparisonWorker;

    private saveMotionRectanglesAsImagesWorker: SaveMotionRectanglesResultsWorker;

    private moveMouseToFirstMotionRectanglesResultsWorker: TestInputForMotionRectanglesResultsWorker;

public constructor (){

            super();
        this.captureWorker= new ScreenCaptureImagesWorker();
    
this.changedPixelsImageComparisonResultsWorker= new SaveImageComparisonWorker();
    
this.saveMotionRectanglesAsImagesWorker= new SaveMotionRectanglesResultsWorker();
    
this.moveMouseToFirstMotionRectanglesResultsWorker= new TestInputForMotionRectanglesResultsWorker();
    
this.motionRectanglesWorker!.addListenerInterface(this.saveMotionRectanglesAsImagesWorker);
    
this.motionRectanglesWorker!.addListenerInterface(this.moveMouseToFirstMotionRectanglesResultsWorker);
    
this.imageComparisonWorker!.addListenerInterface(this.changedPixelsImageComparisonResultsWorker);
    
this.imageComparisonWorker!.addListenerInterface(this.motionRectanglesWorker);
    
this.captureWorker!.addListenerInterface(this.imageComparisonWorker);
    
}


}



