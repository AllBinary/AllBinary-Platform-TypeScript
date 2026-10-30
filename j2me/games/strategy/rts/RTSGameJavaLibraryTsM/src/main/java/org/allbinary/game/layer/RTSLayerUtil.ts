
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { GroupCommonFactory } from '../../../../org/allbinary/game/identification/GroupCommonFactory.js';
//not GWT import const GroupCommonFactory

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { DirectionFactory } from '../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory

import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo

import { WeaponProperties } from '../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
//not GWT import const WeaponProperties

import { BasicGroupFactory } from '../../../../org/allbinary/game/identification/BasicGroupFactory.js';
//not GWT import const BasicGroupFactory

import { PartInterface } from '../../../../org/allbinary/game/part/PartInterface.js';
//not GWT import const PartInterface

import { BasicWeaponPart } from '../../../../org/allbinary/game/part/weapon/BasicWeaponPart.js';
//not GWT import const BasicWeaponPart

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { BaseRaceTrackGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js';
//not GWT import const BaseRaceTrackGeographicMap

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSLayer } from './RTSLayer.js';
//not GWT import - same folder const RTSLayer
import { FakeLayerManager } from './FakeLayerManager.js';
//not GWT import - same folder const FakeLayerManager
import { AllBinaryGameLayerManager } from './AllBinaryGameLayerManager.js';
//not GWT import - same folder const AllBinaryGameLayerManager

export class RTSLayerUtil
            extends Object
         {
        

    private static readonly instance: RTSLayerUtil = new RTSLayerUtil();

    public static getInstance(): RTSLayerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RTSLayerUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly groupCommonFactory: GroupCommonFactory = GroupCommonFactory.getInstance()!;

    createWeaponProperties(weaponProperties: WeaponProperties, currentLevel: number, lastLevel: number): WeaponProperties{

    let reloadTime: number = weaponProperties!.getReloadTime()!;;
    

                        if(lastLevel > currentLevel)
                        
                                    {
                                    reloadTime= reloadTime +50;
    

                                    }
                                
                             else 
                        if(lastLevel < currentLevel)
                        
                                    {
                                    reloadTime= reloadTime -50;
    

                                    }
                                

    let newWeaponProperties: WeaponProperties = new WeaponProperties(reloadTime, weaponProperties!.getTargetingTime(), weaponProperties!.getSpeed()!.getUnscaled(), weaponProperties!.getDamage() /lastLevel *currentLevel, weaponProperties!.getDissipation());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newWeaponProperties;
    
}


    public downgrade(rtsLayer: RTSLayer){
rtsLayer!.setLevel(rtsLayer!.getLevel() -1);
    

    let partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;;
    

    let size: number = partInterfaceArray!.length
                ;;
    

    let partInterface: BasicWeaponPart;;
    




                        for (
    let index: number = size;--index >= 0; )
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart;
    
partInterface!.setWeaponProperties(this.createWeaponProperties(partInterface!.getWeaponProperties(), rtsLayer!.getLevel(), rtsLayer!.getLevel() +1));
    
}

rtsLayer!.select();
    
}


    public upgrade(rtsLayer: RTSLayer){
rtsLayer!.setLevel(rtsLayer!.getLevel() +1);
    

    let partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;;
    

    let size: number = partInterfaceArray!.length
                ;;
    

    let partInterface: BasicWeaponPart;;
    




                        for (
    let index: number = size;--index >= 0; )
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart;
    
partInterface!.setWeaponProperties(this.createWeaponProperties(partInterface!.getWeaponProperties(), rtsLayer!.getLevel(), rtsLayer!.getLevel() -1));
    
}

rtsLayer!.select();
    
}


    private readonly MAX_RELOAD_TIME: number = globalThis.Math.trunc(Integer.MAX_VALUE /100000);

    public getCostExponential(cost: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (globalThis.Math.trunc((cost *cost *cost) /(cost *1000)));
    
}


    getWeaponPropertiesCost(weaponProperties: WeaponProperties): number{

    let cost: number = (weaponProperties!.getDamage() +weaponProperties!.getRange() +((this.MAX_RELOAD_TIME /weaponProperties!.getReloadTime())>>1));;
    
cost= this.getCostExponential(cost);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc(cost);
    
}


    public getCost(rtsLayer: RTSLayer): number{

    let total: number = 0;;
    

    let partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;;
    

    let size: number = partInterfaceArray!.length
                ;;
    

    let partInterface: BasicWeaponPart;;
    

    let weaponProperties: WeaponProperties;;
    




                        for (
    let index: number = size -1;index >= 0; index--)
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart;
    
weaponProperties= partInterface!.getWeaponProperties();
    
total += this.getWeaponPropertiesCost(weaponProperties);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total;
    
}


    public getDowngradeCost(rtsLayer: RTSLayer): number{

    let partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;;
    

    let size: number = partInterfaceArray!.length
                ;;
    

    let downgradeCost: number = 0;;
    

    let partInterface: BasicWeaponPart;;
    

    let weaponProperties: WeaponProperties;;
    

    let downgradeWeaponCost: number= 0;;
    

    let currentWeaponCost: number= 0;;
    




                        for (
    let index: number = size -1;index >= 0; index--)
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart;
    
weaponProperties= partInterface!.getWeaponProperties();
    
downgradeWeaponCost= this.getWeaponPropertiesCost(this.createWeaponProperties(weaponProperties, rtsLayer!.getLevel() -1, rtsLayer!.getLevel()));
    
currentWeaponCost= this.getWeaponPropertiesCost(weaponProperties);
    
downgradeCost += (currentWeaponCost -downgradeWeaponCost);
    
}

downgradeCost= globalThis.Math.trunc(downgradeCost *9 /10);
    
this.logUtil!.putF(new StringMaker().append("Total Cost: ")!.appendint(downgradeCost)!.toString(), this, "getDowngradeCost");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return downgradeCost;
    
}


    public getUpgradeCost(rtsLayer: RTSLayer): number{

    let upgradeCost: number = 0;;
    

    let partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;;
    

    let size: number = partInterfaceArray!.length
                ;;
    

    let partInterface: BasicWeaponPart;;
    

    let weaponProperties: WeaponProperties;;
    

    let upgradedWeaponCost: number= 0;;
    

    let currentWeaponCost: number= 0;;
    




                        for (
    let index: number = size -1;index >= 0; index--)
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart;
    
weaponProperties= partInterface!.getWeaponProperties();
    
upgradedWeaponCost= this.getWeaponPropertiesCost(this.createWeaponProperties(weaponProperties, rtsLayer!.getLevel() +1, rtsLayer!.getLevel()));
    
currentWeaponCost= this.getWeaponPropertiesCost(weaponProperties);
    
upgradeCost += (upgradedWeaponCost -currentWeaponCost);
    
}

this.logUtil!.putF(new StringMaker().append("Total Cost: ")!.appendint(upgradeCost)!.toString(), this, "getUpgradeCost");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return upgradeCost;
    
}


                //@Throws(Exception.constructor)
            
    public destroyAndClear(list: BasicArrayList){

    let rtsLayer: RTSLayer;;
    




                        for (
    let index: number = list.size() -1;index >= 0; index--)
        {
rtsLayer= list.get(index) as RTSLayer;
    
rtsLayer!.setDestroyed(true);
    
}

list.clear();
    
}


    public createFakeRTSLayerHashtable(baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap): ABHashtable<any, any>{

    let hashtable: ABHashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;;
    

    let layerManager: FakeLayerManager = new FakeLayerManager(GameInfo.NONE);;
    
layerManager!.setGeographicMapInterface(
                                                [
                                                    baseRaceTrackGeographicMap
                                                ]);
    
hashtable.put(AllBinaryGameLayerManager.ID, layerManager);
    
hashtable.put(DirectionFactory.getInstance()!.NAME, DirectionFactory.getInstance()!.LEFT);
    
hashtable.put(this.groupCommonFactory!.ID, BasicGroupFactory.getInstance()!.NONE_ARRAY);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}

