
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { DirectionFactory } from "../../../../org/allbinary/direction/DirectionFactory.js";

    
import { GameInfo } from "../../../../org/allbinary/game/GameInfo.js";

    
import { WeaponProperties } from "../../../../org/allbinary/game/combat/weapon/WeaponProperties.js";

    
import { BasicGroupFactory } from "../../../../org/allbinary/game/identification/BasicGroupFactory.js";

    
import { Group } from "../../../../org/allbinary/game/identification/Group.js";

    
import { PartInterface } from "../../../../org/allbinary/game/part/PartInterface.js";

    
import { BasicWeaponPart } from "../../../../org/allbinary/game/part/weapon/BasicWeaponPart.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BaseRaceTrackGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js";

    

export class RTSLayerUtil
            extends Object
         {
        

    private static readonly instance: RTSLayerUtil = new RTSLayerUtil();
        
        

    public static getInstance(): RTSLayerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    createWeaponProperties(weaponProperties: WeaponProperties, currentLevel: number, lastLevel: number): WeaponProperties{
    //var weaponProperties = weaponProperties
    //var currentLevel = currentLevel
    //var lastLevel = lastLevel

    var reloadTime: number = weaponProperties!.getReloadTime()!;
        
        


    
                        if(lastLevel > currentLevel)
                        
                                    {
                                    reloadTime= reloadTime +50

                                    }
                                
                             else 
    
                        if(lastLevel < currentLevel)
                        
                                    {
                                    reloadTime= reloadTime -50

                                    }
                                

    var newWeaponProperties: WeaponProperties = new WeaponProperties(reloadTime, weaponProperties!.getTargetingTime(), weaponProperties!.getSpeed()!.getUnscaled(), weaponProperties!.getDamage() /lastLevel *currentLevel, weaponProperties!.getDissipation());
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newWeaponProperties;
    
}


    public downgrade(rtsLayer: RTSLayer){
    //var rtsLayer = rtsLayer
setLevel(rtsLayer!.getLevel() -1)

    var partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;
        
        


    var size: number = partInterfaceArray!.length
                ;
        
        


    var partInterface: BasicWeaponPart





                        for (
    var index: number = size;
        
        
--index >= 0; )
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart
setWeaponProperties(this.createWeaponProperties(partInterface!.getWeaponProperties(), rtsLayer!.getLevel(), rtsLayer!.getLevel() +1))
}

select()
}


    public upgrade(rtsLayer: RTSLayer){
    //var rtsLayer = rtsLayer
setLevel(rtsLayer!.getLevel() +1)

    var partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;
        
        


    var size: number = partInterfaceArray!.length
                ;
        
        


    var partInterface: BasicWeaponPart





                        for (
    var index: number = size;
        
        
--index >= 0; )
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart
setWeaponProperties(this.createWeaponProperties(partInterface!.getWeaponProperties(), rtsLayer!.getLevel(), rtsLayer!.getLevel() -1))
}

select()
}


    private readonly MAX_RELOAD_TIME: number = Integer.MAX_VALUE.toLong() /100000;
        
        

    public getCostExponential(cost: number): number{
    //var cost = cost



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ((cost *cost *cost) /(cost *1000));
    
}


    getWeaponPropertiesCost(weaponProperties: WeaponProperties): number{
    //var weaponProperties = weaponProperties

    var cost: number = (weaponProperties!.getDamage() +weaponProperties!.getRange() +((MAX_RELOAD_TIME /weaponProperties!.getReloadTime()) shr 1));
        
        

cost= this.getCostExponential(cost)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cost.toInt();
    
}


    public getCost(rtsLayer: RTSLayer): number{
var rtsLayer = rtsLayer

    var total: number = 0;
        
        


    var partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;
        
        


    var size: number = partInterfaceArray!.length
                ;
        
        


    var partInterface: BasicWeaponPart


    var weaponProperties: WeaponProperties





                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart
weaponProperties= partInterface!.getWeaponProperties()
total += this.getWeaponPropertiesCost(weaponProperties)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total;
    
}


    public getDowngradeCost(rtsLayer: RTSLayer): number{
    //var rtsLayer = rtsLayer

    var partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;
        
        


    var size: number = partInterfaceArray!.length
                ;
        
        


    var downgradeCost: number = 0;
        
        


    var partInterface: BasicWeaponPart


    var weaponProperties: WeaponProperties


    var downgradeWeaponCost: number= 0


    var currentWeaponCost: number= 0





                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart
weaponProperties= partInterface!.getWeaponProperties()
downgradeWeaponCost= this.getWeaponPropertiesCost(this.createWeaponProperties(weaponProperties, rtsLayer!.getLevel() -1, rtsLayer!.getLevel()))
currentWeaponCost= this.getWeaponPropertiesCost(weaponProperties)
downgradeCost += (currentWeaponCost -downgradeWeaponCost)
}

downgradeCost= downgradeCost *9 /10
put(StringMaker().
                            append("Total Cost: ")!.appendint(downgradeCost)!.toString(), this, "getDowngradeCost")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return downgradeCost;
    
}


    public getUpgradeCost(rtsLayer: RTSLayer): number{
    //var rtsLayer = rtsLayer

    var upgradeCost: number = 0;
        
        


    var partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;
        
        


    var size: number = partInterfaceArray!.length
                ;
        
        


    var partInterface: BasicWeaponPart


    var weaponProperties: WeaponProperties


    var upgradedWeaponCost: number= 0


    var currentWeaponCost: number= 0





                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart
weaponProperties= partInterface!.getWeaponProperties()
upgradedWeaponCost= this.getWeaponPropertiesCost(this.createWeaponProperties(weaponProperties, rtsLayer!.getLevel() +1, rtsLayer!.getLevel()))
currentWeaponCost= this.getWeaponPropertiesCost(weaponProperties)
upgradeCost += (upgradedWeaponCost -currentWeaponCost)
}

put(StringMaker().
                            append("Total Cost: ")!.appendint(upgradeCost)!.toString(), this, "getUpgradeCost")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return upgradeCost;
    
}


                @Throws(Exception::class)
            
    public destroyAndClear(list: BasicArrayList){
var list = list

    var rtsLayer: RTSLayer





                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {
rtsLayer= list.get(index) as RTSLayer
setDestroyed(true)
}

clear()
}


    public createFakeRTSLayerHashtable(baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap): Hashtable<Any, Any>{
    //var baseRaceTrackGeographicMap = baseRaceTrackGeographicMap

    var hashtable: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        


    var layerManager: FakeLayerManager = new FakeLayerManager(GameInfo.NONE);
        
        

setGeographicMapInterface(
                                                [
                                                    baseRaceTrackGeographicMap;
        
        
                                                ])
put(AllBinaryGameLayerManager.ID, layerManager)
put(DirectionFactory.getInstance()!.NAME, DirectionFactory.getInstance()!.LEFT)
put(Group.ID, BasicGroupFactory.getInstance()!.NONE_ARRAY)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}
                
            

