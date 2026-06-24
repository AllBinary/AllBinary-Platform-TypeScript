
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
      
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      
import { BasicWeaponPart } from '../../../../org/allbinary/game/part/weapon/BasicWeaponPart.js';
      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SelectionHudPaintable } from './SelectionHudPaintable.js';
import { RTSLayer } from './RTSLayer.js';

export class RTSLayerHudPaintable extends SelectionHudPaintable implements UpdateMyFontInterface {
        

    private static readonly instance: RTSLayerHudPaintable = new RTSLayerHudPaintable();

    public static getInstance(): RTSLayerHudPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RTSLayerHudPaintable.instance;
    
}


    private weaponProperties: string[] = StringUtil.getInstance()!.getArrayInstance()!;

    private rtsLayer: CollidableDestroyableDamageableLayer = CollidableDestroyableDamageableLayer.getNullInstance()!;

    costY: number= 0;

    costY1: number= 0;

    private fontHeight: number= 0;

private constructor (){

            super();
        }


    public updateMeasurement(graphics: Graphics){
super.updateMeasurement(graphics);
    

    var font: Font = graphics.getFont()!;;
    
this.fontHeight= font.getHeight();
    
this.costY1= (this.y +((this.weaponProperties!.length +1) *this.fontHeight));
    

                        if(!AndroidUtil.isAndroid())
                        
                                    {
                                    this.costY= this.costY1;
    

                                    }
                                
                        else {
                            this.costY= (this.y +((this.weaponProperties!.length +2) *this.fontHeight));
    

                        }
                            
}


    public updateSelectionInfo(){
this.setName(this.getRtsLayer()!.getName());
    

    var partInterface: BasicWeaponPart = this.getRtsLayer()!.getPartInterfaceArray()[0]! as BasicWeaponPart;;
    
this.weaponProperties= partInterface!.getWeaponProperties()!.toStringArray();
    
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    public paint(graphics: Graphics){
super.paint(graphics);
    

    var size: number = this.weaponProperties!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
graphics.drawString(this.weaponProperties[index]!, this.textX, this.y +((index +1) *this.fontHeight), 0);
    
}

}


    public setRtsLayer(rtsLayer: RTSLayer){
this.rtsLayer= rtsLayer;
    
}


    getRtsLayer(): CollidableDestroyableDamageableLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsLayer;
    
}


}
                
            

