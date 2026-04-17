
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { CharArrayFactory } from "../../../../org/allbinary/logic/java/character/CharArrayFactory.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { NullPaintable } from "../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { CommonButtons } from "../../../../org/allbinary/input/motion/button/CommonButtons.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { SelectionHudPaintable } from "./SelectionHudPaintable.js";

import { RTSLayer } from "./RTSLayer.js";

export class UpgradableRTSLayerHudPaintable extends SelectionHudPaintable {
        

    private static readonly instance: UpgradableRTSLayerHudPaintable = new UpgradableRTSLayerHudPaintable();
        
        

    public static getInstance(): UpgradableRTSLayerHudPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly PERCENT: string = "%";
        
        

    private rtsLayer: CollidableDestroyableDamageableLayer = CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
        
        

    costY: number= 0

    costY1: number= 0

    private percentCompleteX2: number= 0

    private lateinit rtsLayerCompositePaintableLateInit: RTSLayerCompositePaintable
private constructor (){

            super();
            }


    public update(){
super.update();
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var charHeight: number = myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    
this.costY= (y +CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE);
    
this.costY1= (y +CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE -(charHeight));
    
this.percentCompleteX2= this.imageX +CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE -myFont!.charWidth();
    

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

                        if(displayInfoSingleton!.getLastWidth() > 320)
                        
                                    {
                                    this.rtsLayerCompositePaintableLateInit= new UpgradableWideRTSLayerPaintable(this);
    

                                    }
                                
                        else {
                            this.rtsLayerCompositePaintableLateInit= new RTSLayerCompositePaintable(this);
    

                        }
                            
}


    public updateSelectionInfo(){

    var rtsLayer: RTSLayer = this.getRtsLayer();

                         as RTSLayer;
        
        
;
    
this.rtsLayerCompositePaintableLateInit!.update(rtsLayer);
    
this.setAnimationInterface(rtsLayer!.getVerticleBuildAnimationInterface());
    
this.setName(rtsLayer!.getName());
    
}


    private percentComplete: number= 0

    private percentCompleteX: number= 0

    private percentCompleteArray: string[] = CharArrayFactory.getInstance()!.getZeroCharArray()!;
        
        

    private currentTotalDigits: number= 0

    public updateInfo(){

    var rtsLayer: RTSLayer = this.getRtsLayer();

                         as RTSLayer;
        
        
;
    
this.percentComplete= rtsLayer!.getPercentComplete();
    

                        if(percentComplete < 10)
                        
                                    {
                                    this.percentCompleteX= 32;
    

                                    }
                                
                             else 
                        if(percentComplete < 100)
                        
                                    {
                                    this.percentCompleteX= 24;
    

                                    }
                                
                        else {
                            this.percentCompleteX= 16;
    

                        }
                            
this.percentCompleteArray= this.getPrimitiveLongUtil()!.getCharArray(percentComplete);
    
this.currentTotalDigits= this.getPrimitiveLongUtil()!.getCurrentTotalDigits();
    
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics);
    
this.rtsLayerCompositePaintableLateInit!.paint(graphics);
    
graphics.drawChars(percentCompleteArray, 0, this.currentTotalDigits, this.imageX +this.percentCompleteX, costY, 0);
    
graphics.drawString(this.PERCENT, this.percentCompleteX2, costY, 0);
    
this.getAnimationInterface()!.paint(graphics, this.imageX, y);
    
}


    public setRtsLayer(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
this.rtsLayer= rtsLayer;
    
}


    getRtsLayer(): CollidableDestroyableDamageableLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayer;
    
}


}
                
            

