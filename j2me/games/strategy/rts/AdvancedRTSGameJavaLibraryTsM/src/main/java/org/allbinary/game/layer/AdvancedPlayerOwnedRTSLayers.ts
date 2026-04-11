
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class AdvancedPlayerOwnedRTSLayers extends PlayerOwnedRTSLayers {
        

    private readonly unitsList: BasicArrayList = new BasicArrayList();
        
        

    private readonly waypointsList: BasicArrayList = new BasicArrayList();
        
        

    private readonly buildingList: BasicArrayList = new BasicArrayList();
        
        

    private readonly baseList: BasicArrayList = new BasicArrayList();
        
        

    private readonly garrisonList: BasicArrayList = new BasicArrayList();
        
        

    private readonly houseList: BasicArrayList = new BasicArrayList();
        
        

    private readonly labList: BasicArrayList = new BasicArrayList();
        
        

    private readonly factoryList: BasicArrayList = new BasicArrayList();
        
        

    public addUnit(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
this.unitsList!.add(rtsLayer);
    
this.rtsLayerList!.add(rtsLayer);
    
}


    public addWaypoint(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
this.waypointsList!.add(rtsLayer);
    
this.rtsLayerList!.add(rtsLayer);
    
}


    public addBase(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
this.baseList!.add(rtsLayer);
    
this.buildingList!.add(rtsLayer);
    
this.rtsLayerList!.add(rtsLayer);
    
}


    public addGarrison(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
this.garrisonList!.add(rtsLayer);
    
this.buildingList!.add(rtsLayer);
    
this.rtsLayerList!.add(rtsLayer);
    
}


    public addHouse(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
this.houseList!.add(rtsLayer);
    
this.buildingList!.add(rtsLayer);
    
this.rtsLayerList!.add(rtsLayer);
    
}


    public addLab(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
this.labList!.add(rtsLayer);
    
this.buildingList!.add(rtsLayer);
    
this.rtsLayerList!.add(rtsLayer);
    
}


    public addFactory(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
this.factoryList!.add(rtsLayer);
    
this.buildingList!.add(rtsLayer);
    
this.rtsLayerList!.add(rtsLayer);
    
}


    public removeUnit(gameLayer: AllBinaryGameLayer){
var gameLayer = gameLayer
this.unitsList!.remove(gameLayer);
    
this.rtsLayerList!.remove(gameLayer);
    
}


    public removeWaypoint(gameLayer: AllBinaryGameLayer){
var gameLayer = gameLayer
this.waypointsList!.remove(gameLayer);
    
this.rtsLayerList!.remove(gameLayer);
    
}


    public getUnitsList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return unitsList;
    
}


    public getWaypointsList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return waypointsList;
    
}


    public getBaseList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return baseList;
    
}


    public getGarrisonList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return garrisonList;
    
}


    public getHouseList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return houseList;
    
}


    public getLabList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return labList;
    
}


    public getFactoryList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return factoryList;
    
}


    public getTotalBuildings(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return baseList!.size() +garrisonList!.size() +houseList!.size() +labList!.size() +factoryList!.size();
    
}


    public removeBuilding(layerInterface: AllBinaryGameLayer){
var layerInterface = layerInterface
this.buildingList!.add(layerInterface);
    

                        if(this.getBaseList()!.remove(layerInterface))
                        
                                    {
                                    this.rtsLayerList!.remove(layerInterface);
    

                                    }
                                
                             else 
                        if(this.getFactoryList()!.remove(layerInterface))
                        
                                    {
                                    this.rtsLayerList!.remove(layerInterface);
    

                                    }
                                
                             else 
                        if(this.getGarrisonList()!.remove(layerInterface))
                        
                                    {
                                    this.rtsLayerList!.remove(layerInterface);
    

                                    }
                                
                             else 
                        if(this.getLabList()!.remove(layerInterface))
                        
                                    {
                                    this.rtsLayerList!.remove(layerInterface);
    

                                    }
                                
                             else 
                        if(this.getHouseList()!.remove(layerInterface))
                        
                                    {
                                    this.rtsLayerList!.remove(layerInterface);
    

                                    }
                                
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(" Bases: ");
    
stringBuffer!.appendint(this.getBaseList()!.size());
    
stringBuffer!.append(" Factory: ");
    
stringBuffer!.appendint(this.getFactoryList()!.size());
    
stringBuffer!.append(" Garrison: ");
    
stringBuffer!.appendint(this.getGarrisonList()!.size());
    
stringBuffer!.append(" Labs: ");
    
stringBuffer!.appendint(this.getLabList()!.size());
    
stringBuffer!.append(" Houses: ");
    
stringBuffer!.appendint(this.getHouseList()!.size());
    
stringBuffer!.append(" Waypoints: ");
    
stringBuffer!.appendint(this.getWaypointsList()!.size());
    
stringBuffer!.append(" Units: ");
    
stringBuffer!.appendint(this.getUnitsList()!.size());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public getBuildingList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buildingList;
    
}


}
                
            

