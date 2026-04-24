
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { DamageFloaters } from "../../../../../org/allbinary/game/combat/damage/DamageFloaters.js";

    
import { TrackingEvent } from "../../../../../org/allbinary/game/tracking/TrackingEvent.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BuildingPropertiesFactory } from "./BuildingPropertiesFactory.js";

import { BuildingLayer } from "./BuildingLayer.js";

export class SimulatedBuildingPropertiesFactory extends BuildingPropertiesFactory {
        

    private static readonly instance: SimulatedBuildingPropertiesFactory = new SimulatedBuildingPropertiesFactory();
        
        

    public static getInstance(): SimulatedBuildingPropertiesFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getEfficiencyPerLevel(buildingLayer: BuildingLayer): number{
    //var buildingLayer = buildingLayer



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getDamageFloaters(buildingLayer: BuildingLayer): DamageFloaters{
    //var buildingLayer = buildingLayer

    var damageFloaters: DamageFloaters = DamageFloaters.getInstance()!;
        
        
;
    
this.damageFloatersPaintableInterface= damageFloaters;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return damageFloaters;
    
}


                //@Throws(Error::class)
            
    public getHealthBar(buildingLayer: BuildingLayer): Paintable{
    //var buildingLayer = buildingLayer



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullPaintable.getInstance();;
    
}


    public getHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_TABLE;
    
}


    public getTrackingEvent(buildingLayer: BuildingLayer): TrackingEvent{
    //var buildingLayer = buildingLayer



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TrackingEvent();
    
}


}
                
            

