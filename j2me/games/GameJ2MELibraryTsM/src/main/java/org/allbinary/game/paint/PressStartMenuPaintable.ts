
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

        


//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { AppletUtil } from '../../../../org/allbinary/AppletUtil.js';
//not GWT import const AppletUtil = globalThis.org.allbinary.AppletUtil;

      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { TouchScreenFactory } from '../../../../org/allbinary/input/motion/button/TouchScreenFactory.js';
//not GWT import const TouchScreenFactory = globalThis.org.allbinary.input.motion.button.TouchScreenFactory;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PressStartMenuPaintable extends Paintable implements UpdateMyFontInterface {
        

    private readonly displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private readonly PRESS_START: string = "Press Screen To Start";

    private readonly KEY_START: string = "Press or Click F2 To Begin";

    private readonly MENU_START: string = "Press Start From The Menu To Begin";

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private startString: string = StringUtil.getInstance()!.EMPTY_STRING;

    private timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(1100);

    private flash: boolean= false;

public constructor (){

            super();
        
                        if(TouchScreenFactory.getInstance()!.isTouch())
                        
                                    {
                                    this.startString= this.PRESS_START;
    

                                    }
                                
                             else 
                        if(AppletUtil.isAppletLoader(this))
                        
                                    {
                                    this.startString= this.KEY_START;
    

                                    }
                                
                        else {
                            this.startString= this.MENU_START;
    

                        }
                            
}


    private anchor: number = Anchor.TOP_LEFT;

    private beginWidth: number= 0;

    private line: number= 0;

    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.beginWidth= (graphics.getFont()!.stringWidth(this.startString)>>1);
    
this.line= (4 *MyFontProcessor.defaultCharWidth(font)) +(font.getHeight()>>1);
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public paint(graphics: Graphics){

                        if(this.timeDelayHelper!.isTimeTNT())
                        
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
                                    this.myFontProcessor!.process(graphics);
    
graphics.drawString(this.startString, displayInfo!.getLastHalfWidth() -beginWidth, displayInfo!.getLastHeight() -line, this.anchor);
    

                                    }
                                
}


    setFlash(flash: boolean){
this.flash= flash;
    
}


    isFlash(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.flash;
    
}


}



