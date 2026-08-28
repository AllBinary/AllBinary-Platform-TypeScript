
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
        



//not game specific package import { Font } from '../../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { RTSLayer } from '../../../../../../org/allbinary/game/layer/RTSLayer.js';
      const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
//not game specific package import { WaypointInfoHudPaintable } from '../../../../../../org/allbinary/game/layer/waypoint/WaypointInfoHudPaintable.js';
      const WaypointInfoHudPaintable = globalThis.org.allbinary.game.layer.waypoint.WaypointInfoHudPaintable;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { KeyValueDrawCharArray } from '../../../../../../org/allbinary/graphics/draw/KeyValueDrawCharArray.js';
      const KeyValueDrawCharArray = globalThis.org.allbinary.graphics.draw.KeyValueDrawCharArray;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeologicalGeographicMapCellPosition } from './GeologicalGeographicMapCellPosition.js';

export class GeologicalResourceInfoHudPaintable extends WaypointInfoHudPaintable {
        

    private static readonly RESOURCES: string = "Resources: ";

    private readonly keyvalueDrawString: KeyValueDrawCharArray;

    private fontHeight: number = 0;

public constructor (){

            super();
        this.keyvalueDrawString= new KeyValueDrawCharArray(GeologicalResourceInfoHudPaintable.RESOURCES, this.textX);
    
}


    public updateMeasurement(graphics: Graphics){
super.updateMeasurement(graphics);
    

    var font: Font = graphics.getFont()!;;
    
this.fontHeight= (2 *font.getHeight());
    
}


    public updateSelectionInfo(){
super.updateSelectionInfo();
    

    var rtsLayer: RTSLayer = this.rtsLayerP as RTSLayer;;
    

    var list: BasicArrayList = rtsLayer!.geographicMapCellPositionAreaBase!.getOccupyingGeographicMapCellPositionList()!;;
    

    var total: number = 0;;
    




                        for (
    var index: number = list.size()!;--index >= 0; )
        {

    var geographicMapCellPosition: GeologicalGeographicMapCellPosition = list.get(index) as GeologicalGeographicMapCellPosition;;
    
total += geographicMapCellPosition!.getGeologicalResource()!.getTotal();
    
}

this.keyvalueDrawString!.update(this.getPrimitiveLongUtil()!.getCharArray(total), this.getPrimitiveLongUtil()!.getCurrentTotalDigits());
    
}


    public paint(graphics: Graphics){
super.paint(graphics);
    
this.keyvalueDrawString!.paint(graphics, (this.y +this.fontHeight));
    
}


}



