
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        



import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      //not GWT import const Font = globalThis.javax.microedition.lcdui.Font;

      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      //not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
import { CharArrayFactory } from '../../../../org/allbinary/logic/java/character/CharArrayFactory.js';
      //not GWT import const CharArrayFactory = globalThis.org.allbinary.logic.java.character.CharArrayFactory;

      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      //not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      //not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { CommonButtons } from '../../../../org/allbinary/input/motion/button/CommonButtons.js';
      //not GWT import const CommonButtons = globalThis.org.allbinary.input.motion.button.CommonButtons;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SelectionHudPaintable } from './SelectionHudPaintable.js';
import { RTSLayerCompositePaintable } from './RTSLayerCompositePaintable.js';
import { UpgradableWideRTSLayerPaintable } from './UpgradableWideRTSLayerPaintable.js';
import { RTSLayer } from './RTSLayer.js';

export class UpgradableRTSLayerHudPaintable extends SelectionHudPaintable {
        

    private static readonly instance: UpgradableRTSLayerHudPaintable = new UpgradableRTSLayerHudPaintable();

    public static getInstance(): UpgradableRTSLayerHudPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UpgradableRTSLayerHudPaintable.instance;
    
}


    private readonly PERCENT: string = "%";

    private rtsLayer: CollidableDestroyableDamageableLayer = CollidableDestroyableDamageableLayer.getNullInstance()!;

    costY: number= 0;

    costY1: number= 0;

    private percentCompleteX2: number= 0;

    private lateinit rtsLayerCompositePaintableLateInit: RTSLayerCompositePaintable;

    private charHeight: number= 0;

    private charWidth: number= 0;

private constructor (){

            super();
        }


    public updateMeasurement(graphics: Graphics){
super.updateMeasurement(graphics);
    

    var font: Font = graphics.getFont()!;;
    
this.charHeight= font.getHeight();
    
this.charWidth= MyFontProcessor.defaultCharWidth(font);
    
}


    public update(){
super.update();
    

    var commonButtons: CommonButtons = CommonButtons.getInstance()!;;
    
this.costY= (this.y +commonButtons!.STANDARD_BUTTON_SIZE);
    
this.costY1= (this.y +commonButtons!.STANDARD_BUTTON_SIZE -this.charHeight);
    
this.percentCompleteX2= this.imageX +commonButtons!.STANDARD_BUTTON_SIZE -this.charWidth;
    

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

                        if(displayInfoSingleton!.getLastWidth() > 320)
                        
                                    {
                                    this.rtsLayerCompositePaintableLateInit= new UpgradableWideRTSLayerPaintable(this);
    

                                    }
                                
                        else {
                            this.rtsLayerCompositePaintableLateInit= new RTSLayerCompositePaintable(this);
    

                        }
                            
}


    public updateSelectionInfo(){

    var rtsLayer: RTSLayer = this.getRtsLayer() as RTSLayer;;
    
this.rtsLayerCompositePaintableLateInit!.update(rtsLayer);
    
this.setAnimationInterface(rtsLayer!.getVerticleBuildAnimationInterface());
    
this.setName(rtsLayer!.getName());
    
}


    private percentComplete: number= 0;

    private percentCompleteX: number= 0;

    private percentCompleteArray: string[] = CharArrayFactory.getInstance()!.getZeroCharArray()!;

    private currentTotalDigits: number= 0;

    public updateInfo(){

    var rtsLayer: RTSLayer = this.getRtsLayer() as RTSLayer;;
    
this.percentComplete= rtsLayer!.getPercentComplete();
    

                        if(this.percentComplete < 10)
                        
                                    {
                                    this.percentCompleteX= 32;
    

                                    }
                                
                             else 
                        if(this.percentComplete < 100)
                        
                                    {
                                    this.percentCompleteX= 24;
    

                                    }
                                
                        else {
                            this.percentCompleteX= 16;
    

                        }
                            
this.percentCompleteArray= this.getPrimitiveLongUtil()!.getCharArray(this.percentComplete);
    
this.currentTotalDigits= this.getPrimitiveLongUtil()!.getCurrentTotalDigits();
    
}


    public paint(graphics: Graphics){
super.paint(graphics);
    
this.rtsLayerCompositePaintableLateInit!.paint(graphics);
    
graphics.drawChars(this.percentCompleteArray, 0, this.currentTotalDigits, this.imageX +this.percentCompleteX, this.costY, 0);
    
graphics.drawString(this.PERCENT, this.percentCompleteX2, this.costY, 0);
    
this.getAnimationInterface()!.paintXY(graphics, this.imageX, this.y);
    
}


    public setRtsLayer(rtsLayer: RTSLayer){
this.rtsLayer= rtsLayer;
    
}


    getRtsLayer(): CollidableDestroyableDamageableLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsLayer;
    
}


}



