
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
        
//not game specific package import { Hashtable } from '../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { GroupCommonFactory } from '../../../../org/allbinary/game/identification/GroupCommonFactory.js';
      const GroupCommonFactory = globalThis.org.allbinary.game.identification.GroupCommonFactory;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { DirectionFactory } from '../../../../org/allbinary/direction/DirectionFactory.js';
      const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
//not game specific package import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
      const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not game specific package import { WeaponProperties } from '../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
//not game specific package import { BasicGroupFactory } from '../../../../org/allbinary/game/identification/BasicGroupFactory.js';
      const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;

      
//not game specific package import { PartInterface } from '../../../../org/allbinary/game/part/PartInterface.js';
      const PartInterface = globalThis.org?.allbinary?.game?.part?.PartInterface;

      
//not game specific package import { BasicWeaponPart } from '../../../../org/allbinary/game/part/weapon/BasicWeaponPart.js';
      const BasicWeaponPart = globalThis.org.allbinary.game.part.weapon.BasicWeaponPart;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { BaseRaceTrackGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js';
      const BaseRaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BaseRaceTrackGeographicMap;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSLayer } from './RTSLayer.js';
import { FakeLayerManager } from './FakeLayerManager.js';
import { AllBinaryGameLayerManager } from './AllBinaryGameLayerManager.js';

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

    var reloadTime: number = weaponProperties!.getReloadTime()!;;
    

                        if(lastLevel > currentLevel)
                        
                                    {
                                    reloadTime= reloadTime +50;
    

                                    }
                                
                             else 
                        if(lastLevel < currentLevel)
                        
                                    {
                                    reloadTime= reloadTime -50;
    

                                    }
                                

    var newWeaponProperties: WeaponProperties = new WeaponProperties(reloadTime, weaponProperties!.getTargetingTime(), weaponProperties!.getSpeed()!.getUnscaled(), weaponProperties!.getDamage() /lastLevel *currentLevel, weaponProperties!.getDissipation());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newWeaponProperties;
    
}


    public downgrade(rtsLayer: RTSLayer){
rtsLayer!.setLevel(rtsLayer!.getLevel() -1);
    

    var partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;;
    

    var size: number = partInterfaceArray!.length
                ;;
    

    var partInterface: BasicWeaponPart;;
    




                        for (
    var index: number = size;--index >= 0; )
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart;
    
partInterface!.setWeaponProperties(this.createWeaponProperties(partInterface!.getWeaponProperties(), rtsLayer!.getLevel(), rtsLayer!.getLevel() +1));
    
}

rtsLayer!.select();
    
}


    public upgrade(rtsLayer: RTSLayer){
rtsLayer!.setLevel(rtsLayer!.getLevel() +1);
    

    var partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;;
    

    var size: number = partInterfaceArray!.length
                ;;
    

    var partInterface: BasicWeaponPart;;
    




                        for (
    var index: number = size;--index >= 0; )
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart;
    
partInterface!.setWeaponProperties(this.createWeaponProperties(partInterface!.getWeaponProperties(), rtsLayer!.getLevel(), rtsLayer!.getLevel() -1));
    
}

rtsLayer!.select();
    
}


    private readonly MAX_RELOAD_TIME: number = Integer.MAX_VALUE /100000;

    public getCostExponential(cost: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ((cost *cost *cost) /(cost *1000));
    
}


    getWeaponPropertiesCost(weaponProperties: WeaponProperties): number{

    var cost: number = (weaponProperties!.getDamage() +weaponProperties!.getRange() +((this.MAX_RELOAD_TIME /weaponProperties!.getReloadTime())>>1));;
    
cost= this.getCostExponential(cost);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(cost);
    
}


    public getCost(rtsLayer: RTSLayer): number{

    var total: number = 0;;
    

    var partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;;
    

    var size: number = partInterfaceArray!.length
                ;;
    

    var partInterface: BasicWeaponPart;;
    

    var weaponProperties: WeaponProperties;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart;
    
weaponProperties= partInterface!.getWeaponProperties();
    
total += this.getWeaponPropertiesCost(weaponProperties);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total;
    
}


    public getDowngradeCost(rtsLayer: RTSLayer): number{

    var partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;;
    

    var size: number = partInterfaceArray!.length
                ;;
    

    var downgradeCost: number = 0;;
    

    var partInterface: BasicWeaponPart;;
    

    var weaponProperties: WeaponProperties;;
    

    var downgradeWeaponCost: number= 0;;
    

    var currentWeaponCost: number= 0;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {
partInterface= partInterfaceArray[index]! as BasicWeaponPart;
    
weaponProperties= partInterface!.getWeaponProperties();
    
downgradeWeaponCost= this.getWeaponPropertiesCost(this.createWeaponProperties(weaponProperties, rtsLayer!.getLevel() -1, rtsLayer!.getLevel()));
    
currentWeaponCost= this.getWeaponPropertiesCost(weaponProperties);
    
downgradeCost += (currentWeaponCost -downgradeWeaponCost);
    
}

downgradeCost= downgradeCost *9 /10;
    
this.logUtil!.putF(new StringMaker().append("Total Cost: ")!.appendint(downgradeCost)!.toString(), this, "getDowngradeCost");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return downgradeCost;
    
}


    public getUpgradeCost(rtsLayer: RTSLayer): number{

    var upgradeCost: number = 0;;
    

    var partInterfaceArray: PartInterface[] = rtsLayer!.getPartInterfaceArray()!;;
    

    var size: number = partInterfaceArray!.length
                ;;
    

    var partInterface: BasicWeaponPart;;
    

    var weaponProperties: WeaponProperties;;
    

    var upgradedWeaponCost: number= 0;;
    

    var currentWeaponCost: number= 0;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
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

    var rtsLayer: RTSLayer;;
    




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {
rtsLayer= list.get(index) as RTSLayer;
    
rtsLayer!.setDestroyed(true);
    
}

list.clear();
    
}


    public createFakeRTSLayerHashtable(baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap): Hashtable<any, any>{

    var hashtable: Hashtable<any, any> = new Hashtable<any, any>();;
    

    var layerManager: FakeLayerManager = new FakeLayerManager(GameInfo.NONE);;
    
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



