
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

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

export class UpgradableWideRTSLayerPaintable extends RTSLayerCompositePaintable {
        

    private cost: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (upgradableRTSLayerHudPaintable: UpgradableRTSLayerHudPaintable)                        

                            : super(upgradableRTSLayerHudPaintable){

            super();
            var upgradableRTSLayerHudPaintable = upgradableRTSLayerHudPaintable


                            //For kotlin this is before the body of the constructor.
                    
}


    public update(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
super.update(rtsLayer);
    
this.setCost(StringMaker().
                            append(this.getUpgradeCost())!.append(CommonSeps.getInstance()!.SPACE)!.append(this.getDownGradeCost())!.toString());
    
}


    public paint(graphics: Graphics){
var graphics = graphics
graphics.drawString(this.getCost(), this.upgradableRTSLayerHudPaintable!.textX, this.upgradableRTSLayerHudPaintable!.costY, 0);
    
}


    setCost(cost: string){
var cost = cost
this.cost= cost;
    
}


    getCost(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cost;
    
}


}
                
            

