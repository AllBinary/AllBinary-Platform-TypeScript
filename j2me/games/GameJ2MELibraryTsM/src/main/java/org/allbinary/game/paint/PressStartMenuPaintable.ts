
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { AppletUtil } from "../../../../org/allbinary/AppletUtil.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { TouchScreenFactory } from "../../../../org/allbinary/input/motion/button/TouchScreenFactory.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class PressStartMenuPaintable extends Paintable {
        

    private startString: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(1100);
        
        

    private flash: boolean= false

    private readonly PRESS_START: string = "Press Screen To Start";
        
        

    private readonly KEY_START: string = "Press or Click F2 To Begin";
        
        

    private readonly MENU_START: string = "Press Start From The Menu To Begin";
        
        
public constructor (){

            super();
            
                        if(TouchScreenFactory.getInstance()!.isTouch())
                        
                                    {
                                    startString= PRESS_START;
    

                                    }
                                
                             else 
                        if(AppletUtil.isAppletLoader(this))
                        
                                    {
                                    startString= KEY_START;
    

                                    }
                                
                        else {
                            startString= MENU_START;
    

                        }
                            
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
var graphics = graphics

                        if(timeDelayHelper!.isTime())
                        
                                    {
                                    
                        if(this.isFlash())
                        
                                    {
                                    this.setFlash(false);
    

                                    }
                                
                        else {
                            this.setFlash(true);
    

                        }
                            

                                    }
                                

                        if(this.isFlash())
                        
                                    {
                                    
    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var beginWidth: number = (graphics.getFont()!.stringWidth(startString) shr 1);
        
        
;
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var line: number = (4 *myFont!.DEFAULT_CHAR_HEIGHT) +(myFont!.DEFAULT_CHAR_HEIGHT shr 1);
        
        
;
    
graphics.drawString(startString, displayInfo!.getLastHalfWidth() -beginWidth, displayInfo!.getLastHeight() -line, anchor);
    

                                    }
                                
}


    setFlash(flash: boolean){
var flash = flash
this.flash= flash;
    
}


    isFlash(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return flash;
    
}


}
                
            

