
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

    
import { AndroidUtil } from "../../../../org/allbinary/AndroidUtil.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { BasicWeaponPart } from "../../../../org/allbinary/game/part/weapon/BasicWeaponPart.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { SelectionHudPaintable } from "./SelectionHudPaintable.js";

import { RTSLayer } from "./RTSLayer.js";

export class RTSLayerHudPaintable extends SelectionHudPaintable {
        

    private static readonly instance: RTSLayerHudPaintable = new RTSLayerHudPaintable();
        
        

    public static getInstance(): RTSLayerHudPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private weaponProperties: string[] = StringUtil.getInstance()!.getArrayInstance()!;
        
        

    private rtsLayer: CollidableDestroyableDamageableLayer = CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
        
        

    costY: number= 0

    costY1: number= 0
private constructor (){

            super();
            }


    public updateSelectionInfo(){

    var charHeight: number = this.myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    
this.setName(this.getRtsLayer()!.getName());
    

    var partInterface: BasicWeaponPart = this.getRtsLayer()!.getPartInterfaceArray()[0]! as BasicWeaponPart;
        
        
;
    
this.weaponProperties= partInterface!.getWeaponProperties()!.toStringArray();
    
this.costY1= (y +((weaponProperties!.length +1) *charHeight));
    

                        if(!AndroidUtil.isAndroid();

                        )
                        
                                    {
                                    this.costY= this.costY1;
    

                                    }
                                
                        else {
                            this.costY= (y +((weaponProperties!.length +2) *charHeight));
    

                        }
                            
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics);
    

    var charHeight: number = this.myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    

    var size: number = weaponProperties!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
graphics.drawString(weaponProperties[index]!, this.textX, y +((index +1) *charHeight), 0);
    
}

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
                
            

