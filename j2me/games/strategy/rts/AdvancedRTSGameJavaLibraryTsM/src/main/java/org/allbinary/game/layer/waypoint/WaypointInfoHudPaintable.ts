
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { NullPathFindingLayer } from "../../../../../org/allbinary/game/layer/NullPathFindingLayer.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { SelectionHudPaintable } from "../../../../../org/allbinary/game/layer/SelectionHudPaintable.js";

    
import { KeyValueDrawString } from "../../../../../org/allbinary/graphics/draw/KeyValueDrawString.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class WaypointInfoHudPaintable extends SelectionHudPaintable {
        

    private readonly keyvalueDrawString: KeyValueDrawString

    rtsLayerP: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        
        
public constructor (){

            super();
            keyvalueDrawString= new KeyValueDrawString("Owner: ", this.textX);
    
}


    public updateSelectionInfo(){

    var rtsLayer: RTSLayer = this.rtsLayerP as RTSLayer;
        
        
;
    
this.setName(rtsLayer!.getName());
    
this.setAnimationInterface(rtsLayer!.getVerticleBuildAnimationInterface());
    
this.keyvalueDrawString!.update(rtsLayer!.getParentLayer()!.getName());
    
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics);
    

    var textLine2Y: number = (y +myFont!.DEFAULT_CHAR_HEIGHT);
        
        
;
    
this.keyvalueDrawString!.paint(graphics, textLine2Y);
    
this.getAnimationInterface()!.paint(graphics, this.imageX, y);
    
}


    public setRtsLayer(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
this.rtsLayerP= rtsLayer;
    
}


    public getRtsLayer(): PathFindingLayerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayerP;
    
}


}
                
            

