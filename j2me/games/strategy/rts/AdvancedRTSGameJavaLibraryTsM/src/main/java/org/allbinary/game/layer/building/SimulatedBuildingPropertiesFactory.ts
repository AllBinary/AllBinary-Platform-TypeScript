
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { DamageFloaters } from '../../../../../org/allbinary/game/combat/damage/DamageFloaters.js';
      //not GWT import const DamageFloaters = globalThis.org.allbinary.game.combat.damage.DamageFloaters;

      
import { TrackingEvent } from '../../../../../org/allbinary/game/tracking/TrackingEvent.js';
      //not GWT import const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
      //not GWT import const TrackingEventHandler = globalThis.org.allbinary.game.tracking.TrackingEventHandler;

      
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      //not GWT import const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BuildingPropertiesFactory } from './BuildingPropertiesFactory.js';
//not GWT import const BuildingPropertiesFactory = globalThis.org.allbinary.game.layer.building.BuildingPropertiesFactory;

                import { BuildingLayer } from './BuildingLayer.js';
//not GWT import const BuildingLayer = globalThis.org.allbinary.game.layer.building.BuildingLayer;

                
export class SimulatedBuildingPropertiesFactory extends BuildingPropertiesFactory {
        

    private static readonly instanceC: SimulatedBuildingPropertiesFactory = new SimulatedBuildingPropertiesFactory();

    public static getInstance(): SimulatedBuildingPropertiesFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimulatedBuildingPropertiesFactory.instanceC;
    
}


    public getEfficiencyPerLevel(buildingLayer: BuildingLayer): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getDamageFloaters(buildingLayer: BuildingLayer): DamageFloaters{

    var damageFloaters: DamageFloaters = DamageFloaters.getInstance()!;;
    
this.damageFloatersPaintableInterface= damageFloaters;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return damageFloaters;
    
}


                //@Throws(Exception.constructor)
            
    public getHealthBar(buildingLayer: BuildingLayer): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullPaintable.getInstance();;
    
}


    public getHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StdUtil.getInstance()!.NULL_TABLE;
    
}


    public getTrackingEvent(buildingLayer: BuildingLayer): TrackingEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TrackingEvent(TrackingEventHandler.getInstance());
    
}


}



