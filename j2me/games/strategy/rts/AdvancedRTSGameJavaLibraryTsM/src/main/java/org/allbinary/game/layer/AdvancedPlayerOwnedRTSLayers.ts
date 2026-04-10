
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
add(rtsLayer)
add(rtsLayer)
}


    public addWaypoint(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
add(rtsLayer)
add(rtsLayer)
}


    public addBase(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
add(rtsLayer)
add(rtsLayer)
add(rtsLayer)
}


    public addGarrison(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
add(rtsLayer)
add(rtsLayer)
add(rtsLayer)
}


    public addHouse(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
add(rtsLayer)
add(rtsLayer)
add(rtsLayer)
}


    public addLab(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
add(rtsLayer)
add(rtsLayer)
add(rtsLayer)
}


    public addFactory(rtsLayer: RTSLayer){
var rtsLayer = rtsLayer
add(rtsLayer)
add(rtsLayer)
add(rtsLayer)
}


    public removeUnit(gameLayer: AllBinaryGameLayer){
var gameLayer = gameLayer
remove(gameLayer)
remove(gameLayer)
}


    public removeWaypoint(gameLayer: AllBinaryGameLayer){
var gameLayer = gameLayer
remove(gameLayer)
remove(gameLayer)
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
add(layerInterface)

    
                        if(this.getBaseList()!.remove(layerInterface))
                        
                                    {
                                    remove(layerInterface)

                                    }
                                
                             else 
    
                        if(this.getFactoryList()!.remove(layerInterface))
                        
                                    {
                                    remove(layerInterface)

                                    }
                                
                             else 
    
                        if(this.getGarrisonList()!.remove(layerInterface))
                        
                                    {
                                    remove(layerInterface)

                                    }
                                
                             else 
    
                        if(this.getLabList()!.remove(layerInterface))
                        
                                    {
                                    remove(layerInterface)

                                    }
                                
                             else 
    
                        if(this.getHouseList()!.remove(layerInterface))
                        
                                    {
                                    remove(layerInterface)

                                    }
                                
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(super.toString())
append(" Bases: ")
appendint(this.getBaseList()!.size())
append(" Factory: ")
appendint(this.getFactoryList()!.size())
append(" Garrison: ")
appendint(this.getGarrisonList()!.size())
append(" Labs: ")
appendint(this.getLabList()!.size())
append(" Houses: ")
appendint(this.getHouseList()!.size())
append(" Waypoints: ")
appendint(this.getWaypointsList()!.size())
append(" Units: ")
appendint(this.getUnitsList()!.size())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public getBuildingList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buildingList;
    
}


}
                
            

