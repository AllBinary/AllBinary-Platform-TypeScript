
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      //not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
import { RTSLayer } from '../../../../../org/allbinary/game/layer/RTSLayer.js';
      //not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
import { GeologicalGeographicMapCellPosition } from '../../../../../org/allbinary/game/layer/geological/resources/GeologicalGeographicMapCellPosition.js';
      //not GWT import const GeologicalGeographicMapCellPosition = globalThis.org.allbinary.game.layer.geological.resources.GeologicalGeographicMapCellPosition;

      
import { GeologicalResource } from '../../../../../org/allbinary/game/layer/geological/resources/GeologicalResource.js';
      //not GWT import const GeologicalResource = globalThis.org.allbinary.game.layer.geological.resources.GeologicalResource;

      
import { UnitLayer } from '../../../../../org/allbinary/game/layer/unit/UnitLayer.js';
      //not GWT import const UnitLayer = globalThis.org.allbinary.game.layer.unit.UnitLayer;

      
import { UnitWaypointBehavior } from '../../../../../org/allbinary/game/layer/unit/UnitWaypointBehavior.js';
      //not GWT import const UnitWaypointBehavior = globalThis.org.allbinary.game.layer.unit.UnitWaypointBehavior;

      
import { WorkSound } from '../../../../../org/allbinary/media/audio/WorkSound.js';
      //not GWT import const WorkSound = globalThis.org.allbinary.media.audio.WorkSound;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Waypoint } from './Waypoint.js';
//not GWT import const Waypoint = globalThis.org.allbinary.game.layer.waypoint.Waypoint;

                import { WaypointInfoHudPaintable } from './WaypointInfoHudPaintable.js';
//not GWT import const WaypointInfoHudPaintable = globalThis.org.allbinary.game.layer.waypoint.WaypointInfoHudPaintable;

                
export class WorkWaypoint extends Waypoint {
        

    public static readonly ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(25)!;

public constructor (ownerLayer: PathFindingLayerInterface){
            super(ownerLayer, WorkSound.getInstance());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public visit(unitLayer: UnitLayer){

                        if(unitLayer!.getGroupInterface()[0] != this.ownerLayer!.getGroupInterface()[0])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var size: number = this.getConnectedWaypointList()!.size()!;;
    

                        if(size > 0)
                        
                                    {
                                    
    var occupyList: BasicArrayList = this.ownerLayer!.getGeographicMapCellPositionArea()!.getOccupyingGeographicMapCellPositionList()!;;
    

    var outOfResources: boolean = true;;
    

    var geologicalGeographicMapCellPosition: GeologicalGeographicMapCellPosition;;
    

    var geologicalResource: GeologicalResource;;
    




                        for (
    var index: number = occupyList!.size()!;--index >= 0; )
        {
geologicalGeographicMapCellPosition= occupyList!.get(index) as GeologicalGeographicMapCellPosition;
    
geologicalResource= geologicalGeographicMapCellPosition!.getGeologicalResource();
    

                        if(geologicalResource!.getTotal() >= 1)
                        
                                    {
                                    outOfResources= false;
    

    var maxResourceLoad: number = Math.round(unitLayer!.getMaxResourceLoad());;
    
geologicalResource!.remove(maxResourceLoad);
    
unitLayer!.setLoad(maxResourceLoad);
    

                                    }
                                
}


    var waypointInfoHudPaintable: WaypointInfoHudPaintable = this.ownerLayer!.getHudPaintable() as WaypointInfoHudPaintable;;
    

                        if(this.ownerLayer == waypointInfoHudPaintable!.getRtsLayer())
                        
                                    {
                                    waypointInfoHudPaintable!.updateSelectionInfo();
    

                                    }
                                

                        if(!outOfResources)
                        
                                    {
                                    
    var unitWaypointBehavior: UnitWaypointBehavior = unitLayer!.getWaypointBehavior() as UnitWaypointBehavior;;
    

    var rtsLayer: RTSLayer;;
    

        while(this.getConnectedWaypointList()!.size() > 0)
        {
rtsLayer= this.getConnectedWaypointList()!.get(0) as RTSLayer;
    

                        if(rtsLayer!.isDestroyed())
                        
                                    {
                                    this.getConnectedWaypointList()!.remove(rtsLayer);
    

                                    }
                                
                        else {
                            unitWaypointBehavior!.insertWaypoint(0, rtsLayer);
    
break;

                    

                        }
                            
}


                                    }
                                

                                    }
                                
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 2;
    
}


}



