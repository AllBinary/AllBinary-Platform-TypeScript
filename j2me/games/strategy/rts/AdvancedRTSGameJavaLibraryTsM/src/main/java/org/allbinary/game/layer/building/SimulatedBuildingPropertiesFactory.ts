
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      
import { DamageFloaters } from '../../../../../org/allbinary/game/combat/damage/DamageFloaters.js';
      
import { TrackingEvent } from '../../../../../org/allbinary/game/tracking/TrackingEvent.js';
      
import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
      
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      
















                                        
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
                
            

