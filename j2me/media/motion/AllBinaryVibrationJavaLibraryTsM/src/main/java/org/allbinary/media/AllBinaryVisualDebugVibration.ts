
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

        


            import { Integer } from '../../../java/lang/Integer.js';
        
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Anchor } from '../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
import { DisplayInfoSingleton } from '../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { MyFontProcessor } from '../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
import { TimeDelayHelper } from '../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryVibrationME } from './AllBinaryVibrationME.js';
//not GWT import - same folder const AllBinaryVibrationME = globalThis.org.allbinary.media.AllBinaryVibrationME;

                
export class AllBinaryVisualDebugVibration extends AllBinaryVibrationME implements UpdateMyFontInterface {
        

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(Integer.MAX_VALUE);

    private readonly VIBRATING: string = "Vibrating";

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private anchor: number = Anchor.TOP_LEFT;

    private width: number= 0;

    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.width= font.stringWidth(this.VIBRATING);
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public vibrate(duration: number, type: number, volume: number){
this.timeDelayHelper!.delay= duration;
    
}


    public paint(graphics: Graphics){

                        if(this.timeDelayHelper!.isTimeTNT())
                        
                                    {
                                    this.timeDelayHelper!.delay= Integer.MAX_VALUE;
    
this.myFontProcessor!.process(graphics);
    
graphics.drawString(this.VIBRATING, this.displayInfoSingleton!.getLastHalfWidth() -(width>>1), 0, this.anchor);
    

                                    }
                                
}


}



