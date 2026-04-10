
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

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

export class RTSLayerCompositePaintable extends Paintable {
        

    private upgradeCost: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private downGradeCost: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private readonly UPGRADE: string = "Up: $";
        
        

    private readonly DOWNGRADE: string = "Down: $-";
        
        

    readonly upgradableRTSLayerHudPaintable: UpgradableRTSLayerHudPaintable
public constructor (upgradableRTSLayerHudPaintable: UpgradableRTSLayerHudPaintable){

            super();
            var upgradableRTSLayerHudPaintable = upgradableRTSLayerHudPaintable
this.upgradableRTSLayerHudPaintable= upgradableRTSLayerHudPaintable
}


    public update(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer

                        if(rtsLayer!.isUpgradeable())
                        
                                    {
                                    this.setUpgradeCost(StringMaker().
                            append(UPGRADE)!.appendint(rtsLayer!.getUpgradeCost())!.toString())

                                    }
                                
                        else {
                            this.setUpgradeCost(StringUtil.getInstance()!.EMPTY_STRING)

                        }
                            

                        if(rtsLayer!.isDowngradeable())
                        
                                    {
                                    this.setDownGradeCost(StringMaker().
                            append(DOWNGRADE)!.appendint(rtsLayer!.getDowngradeCost())!.toString())

                                    }
                                
                        else {
                            this.setDownGradeCost(StringUtil.getInstance()!.EMPTY_STRING)

                        }
                            
}


    public paint(graphics: Graphics){
var graphics = graphics
graphics.drawString(this.getDownGradeCost(), this.upgradableRTSLayerHudPaintable!.textX, this.upgradableRTSLayerHudPaintable!.costY1, 0)
graphics.drawString(this.getUpgradeCost(), this.upgradableRTSLayerHudPaintable!.textX, this.upgradableRTSLayerHudPaintable!.costY, 0)
}


    setUpgradeCost(upgradeCost: string){
var upgradeCost = upgradeCost
this.upgradeCost= upgradeCost
}


    getUpgradeCost(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return upgradeCost;
    
}


    setDownGradeCost(downGradeCost: string){
var downGradeCost = downGradeCost
this.downGradeCost= downGradeCost
}


    getDownGradeCost(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return downGradeCost;
    
}


}
                
            

