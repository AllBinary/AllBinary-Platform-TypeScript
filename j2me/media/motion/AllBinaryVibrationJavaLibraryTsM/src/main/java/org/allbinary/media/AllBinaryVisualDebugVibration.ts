
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
        



            import { Integer } from "../../../java/lang/Integer.js";
        
import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { Anchor } from "../../../org/allbinary/graphics/Anchor.js";

    
import { DisplayInfoSingleton } from "../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../org/allbinary/graphics/font/MyFont.js";

    
import { TimeDelayHelper } from "../../../org/allbinary/time/TimeDelayHelper.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AllBinaryVibrationME } from "./AllBinaryVibrationME.js";

export class AllBinaryVisualDebugVibration extends AllBinaryVibrationME {
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(Integer.MAX_VALUE);
        
        

    public vibrate(duration: number, type: number, volume: number){
    //var duration = duration
    //var type = type
    //var volume = volume
this.timeDelayHelper!.delay= duration;
    
}


    private readonly VIBRATING: string = "Vibrating";
        
        

    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
var graphics = graphics

                        if(this.timeDelayHelper!.isTime())
                        
                                    {
                                    this.timeDelayHelper!.delay= Integer.MAX_VALUE;
    

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var width: number = myFont!.stringWidth(this.VIBRATING)!;
        
        
;
    
graphics.drawString(VIBRATING, displayInfoSingleton!.getLastHalfWidth() -(width>>1), 0, anchor);
    

                                    }
                                
}


}
                
            

