
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

    
import { InitUpdatePaintable } from "../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js";

    
import { NullInitUpdatePaintable } from "../../../../org/allbinary/graphics/paint/NullInitUpdatePaintable.js";

    

export class RTSLayerInfoPaintable extends InitUpdatePaintable {
        

    private initUpdatePaintable: InitUpdatePaintable = NullInitUpdatePaintable.getInstance()!;
        
        
public constructor (){

            super();
            }


    public update(){
update()
}


    public paint(graphics: Graphics){
var graphics = graphics
paint(graphics)
}


    public updateRTSLayerInfo(hudPaintable: InitUpdatePaintable){
var hudPaintable = hudPaintable
this.initUpdatePaintable= hudPaintable
}


    public updateRTSLayerInfo(hudPaintable: SelectionHudPaintable){
var hudPaintable = hudPaintable
updateSelectionInfo()
this.initUpdatePaintable= hudPaintable
}


}
                
            

