
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
        



import { Graphics } from "../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { RTSLayer } from "../../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { WaypointInfoHudPaintable } from "../../../../../../org/allbinary/game/layer/waypoint/WaypointInfoHudPaintable.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { KeyValueDrawCharArray } from "../../../../../../org/allbinary/graphics/draw/KeyValueDrawCharArray.js";

    
import { MyFont } from "../../../../../../org/allbinary/graphics/font/MyFont.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GeologicalResourceInfoHudPaintable extends WaypointInfoHudPaintable {
        

    private static readonly RESOURCES: string = "Resources: ";
        
        

    private readonly keyvalueDrawString: KeyValueDrawCharArray
public constructor (){

            super();
        this.keyvalueDrawString= new KeyValueDrawCharArray(RESOURCES, this.textX);
    
}


    public updateSelectionInfo(){
super.updateSelectionInfo();
    

    var rtsLayer: RTSLayer = this.rtsLayerP as RTSLayer;
        
        
;
    

    var list: BasicArrayList = rtsLayer!.geographicMapCellPositionAreaBase!.getOccupyingGeographicMapCellPositionList()!;
        
        
;
    

    var total: number = 0;
        
        
;
    




                        for (
    var index: number = list.size()!;
        
        
--index >= 0; )
        {

    var geographicMapCellPosition: GeologicalGeographicMapCellPosition = list.get(index);

                         as GeologicalGeographicMapCellPosition;
        
        
;
    
total += geographicMapCellPosition!.getGeologicalResource()!.getTotal();
    
}

this.keyvalueDrawString!.update(this.getPrimitiveLongUtil()!.getCharArray(total), this.getPrimitiveLongUtil()!.getCurrentTotalDigits());
    
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics);
    
this.keyvalueDrawString!.paint(graphics, (y +(2 *MyFont.getInstance()!.DEFAULT_CHAR_HEIGHT)));
    
}


}
                
            

