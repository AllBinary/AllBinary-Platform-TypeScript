
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

    
import { PtsDamageFloaters } from "../../../../../org/allbinary/game/combat/damage/PtsDamageFloaters.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { BasicHudFactory } from "../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js";

    
import { HealthBar } from "../../../../../org/allbinary/game/health/HealthBar.js";

    
import { HealthBarTwodAnimation } from "../../../../../org/allbinary/game/health/HealthBarTwodAnimation.js";

    
import { TrackingEvent } from "../../../../../org/allbinary/game/tracking/TrackingEvent.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BuildingLayer } from "./BuildingLayer.js";

export class BuildingPropertiesFactory
            extends Object
         {
        

    private static readonly instance: BuildingPropertiesFactory = new BuildingPropertiesFactory();
        
        

    public static getInstance(): BuildingPropertiesFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getEfficiencyPerLevel(buildingLayer: BuildingLayer): number{
    //var buildingLayer = buildingLayer



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 10000 /buildingLayer!.getMaxLevel() +10000 % buildingLayer!.getMaxLevel();
    
}


    public damageFloatersPaintableInterface: Paintable = NullPaintable.getInstance()!;
        
        

    public getDamageFloaters(buildingLayer: BuildingLayer): DamageFloaters{
    //var buildingLayer = buildingLayer

    var damageFloaters: DamageFloaters = DamageFloaters.getInstance()!;
        
        
;
    

                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.DAMAGE_FLOATERS))
                        
                                    {
                                    damageFloaters= new PtsDamageFloaters(buildingLayer);
    
damageFloatersPaintableInterface= damageFloaters;
    

                                    }
                                
                        else {
                            damageFloaters= new DamageFloaters();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return damageFloaters;
    
}


                //@Throws(Error::class)
            
    public getHealthBar(buildingLayer: BuildingLayer): Paintable{
    //var buildingLayer = buildingLayer

    var healthBar: Paintable = NullPaintable.getInstance()!;
        
        
;
    

                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.HEALTH_BARS))
                        
                                    {
                                    healthBar= new HealthBar(buildingLayer, buildingLayer!.getHealthInterface(), new HealthBarTwodAnimation(buildingLayer as AllBinaryLayer, BasicHudFactory.getInstance()!.BOTTOMLEFT),  -1);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return healthBar;
    
}


    public getHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Hashtable<any, any>();
    
}


    public getTrackingEvent(buildingLayer: BuildingLayer): TrackingEvent{
    //var buildingLayer = buildingLayer



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TrackingEvent(buildingLayer);
    
}


}
                
            

