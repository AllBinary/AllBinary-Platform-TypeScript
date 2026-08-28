
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
        
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { DamageFloaters } from '../../../../../org/allbinary/game/combat/damage/DamageFloaters.js';
      const DamageFloaters = globalThis.org.allbinary.game.combat.damage.DamageFloaters;

      
//not game specific package import { TrackingEvent } from '../../../../../org/allbinary/game/tracking/TrackingEvent.js';
      const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
//not game specific package import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
      const TrackingEventHandler = globalThis.org.allbinary.game.tracking.TrackingEventHandler;

      
//not game specific package import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
//not game specific package import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BuildingPropertiesFactory } from './BuildingPropertiesFactory.js';
import { BuildingLayer } from './BuildingLayer.js';

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
                        return NullUtil.getInstance()!.NULL_TABLE;
    
}


    public getTrackingEvent(buildingLayer: BuildingLayer): TrackingEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TrackingEvent(TrackingEventHandler.getInstance());
    
}


}



