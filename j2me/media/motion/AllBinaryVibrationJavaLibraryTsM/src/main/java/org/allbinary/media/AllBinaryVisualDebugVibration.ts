
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


        
            import { Integer } from '../../../java/lang/Integer.js';
        
import { Font } from '../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      
import { Anchor } from '../../../org/allbinary/graphics/Anchor.js';
      
import { DisplayInfoSingleton } from '../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { MyFontProcessor } from '../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { TimeDelayHelper } from '../../../org/allbinary/time/TimeDelayHelper.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryVibrationME } from './AllBinaryVibrationME.js';

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
                
            

