
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
        



//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSLayerCompositePaintable } from './RTSLayerCompositePaintable.js';
import { UpgradableRTSLayerHudPaintable } from './UpgradableRTSLayerHudPaintable.js';
import { RTSLayer } from './RTSLayer.js';

export class UpgradableWideRTSLayerPaintable extends RTSLayerCompositePaintable {
        

    private cost: string = StringUtil.getInstance()!.EMPTY_STRING;

public constructor (upgradableRTSLayerHudPaintable: UpgradableRTSLayerHudPaintable){
            super(upgradableRTSLayerHudPaintable);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public update(rtsLayer: RTSLayer){
super.update(rtsLayer);
    
this.setCost(new StringMaker().append(this.getUpgradeCost())!.append(CommonSeps.getInstance()!.SPACE)!.append(this.getDownGradeCost())!.toString());
    
}


    public paint(graphics: Graphics){
graphics.drawString(this.getCost(), this.upgradableRTSLayerHudPaintable!.textX, this.upgradableRTSLayerHudPaintable!.costY, 0);
    
}


    setCost(cost: string){
this.cost= cost;
    
}


    getCost(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cost;
    
}


}



