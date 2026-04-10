
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { WaypointBehaviorBase } from "../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class WaypointSelectedLogHelper extends WaypointLogHelper {
        

    private static readonly instance: WaypointSelectedLogHelper = new WaypointSelectedLogHelper();
        
        

    public static getInstance(): WaypointSelectedLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    public onWaypointEvent(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var advancedRTSGameLayer = advancedRTSGameLayer

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName())
stringBuffer!.append(" onWaypointEvent: ")
stringBuffer!.append(advancedRTSGameLayer!.getName())

                        if(advancedRTSGameLayer!.getParentLayer() != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(" With Parent: ")
stringBuffer!.append(advancedRTSGameLayer!.getParentLayer()!.getName())

                                    }
                                
logUtil!.put(stringBuffer!.toString(), this, "onWaypointEvent")
}


    public addWaypointFromBuilding(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var advancedRTSGameLayer = advancedRTSGameLayer

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName())
stringBuffer!.append(" Adding Waypoint: ")
stringBuffer!.append(advancedRTSGameLayer!.getName())

                        if(advancedRTSGameLayer!.getParentLayer() != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(" With Parent: ")
stringBuffer!.append(advancedRTSGameLayer!.getParentLayer()!.getName())

                                    }
                                
logUtil!.put(stringBuffer!.toString(), this, "selected: onWaypointEvent")
}


    public addWaypointFromBuilding(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface, list: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var advancedRTSGameLayer = advancedRTSGameLayer
    //var list = list

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName())
stringBuffer!.append(" Waypoints: ")
stringBuffer!.append(stringUtil!.toString(list))
logUtil!.put(stringBuffer!.toString(), this, "selected: onWaypointEvent")
}


    public insertWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, index: number, rtsLayer: CollidableDestroyableDamageableLayer, waypointName: string){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var index = index
var rtsLayer = rtsLayer
    //var waypointName = waypointName

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName())
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.append(waypointName)
stringBuffer!.append(" Insert: ")
stringBuffer!.append(rtsLayer!.getName())
stringBuffer!.append(" for Waypoint: ")
logUtil!.put(stringBuffer!.toString(), this, "selected: insertWaypoint")
}


    public insertWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, index: number, rtsLayer: CollidableDestroyableDamageableLayer, waypointName: string, list: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var index = index
    //var rtsLayer = rtsLayer
    //var waypointName = waypointName
    //var list = list

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName())
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.append(waypointName)
stringBuffer!.append(" Insert: ")
stringBuffer!.append(rtsLayer!.getName())
stringBuffer!.append(" Waypoints: ")
stringBuffer!.append(stringUtil!.toString(list))
logUtil!.put(stringBuffer!.toString(), this, "selected: insertWaypoint")
}


    public setRandomGeographicMapCellHistory(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, pathsList: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var pathsList = pathsList

    var size: number = pathsList!.size()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName())
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.append(CommonLabels.getInstance()!.START)
stringBuffer!.appendint(size)
stringBuffer!.append(" -> ")
stringBuffer!.append(stringUtil!.toString(pathsList))
logUtil!.put(stringBuffer!.toString(), this, "selected: setRandomGeographicMapCellHistory")
}


    public moveAwayFromBuilding(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
logUtil!.put(StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" Trying to move away from building")!.toString(), this, "selected: moveAwayFromBuilding")
}


    public needToMove(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior: WaypointBehaviorBase){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior = unitWaypointBehavior
logUtil!.put(StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(unitWaypointBehavior!.getMovementLogicAsString())!.toString(), this, "needToMove")
}


    public setRandomGeographicMapCellHistory(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
logUtil!.put(StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" pathsList is null")!.toString(), this, "setRandomGeographicMapCellHistory")
}


    public setCurrentPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, existingCurrentPathGeographicMapCellPosition: GeographicMapCellPosition, currentPathGeographicMapCellPosition: GeographicMapCellPosition){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var existingCurrentPathGeographicMapCellPosition = existingCurrentPathGeographicMapCellPosition
    //var currentPathGeographicMapCellPosition = currentPathGeographicMapCellPosition

                        if(existingCurrentPathGeographicMapCellPosition == 
                                    null
                                )
                        logUtil!.put(StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" currentPathGeographicMapCellPosition: ")!.append(stringUtil!.toString(currentPathGeographicMapCellPosition))!.toString(), this, "setCurrentPathGeographicMapCellPosition")
}


    public setNextUnvisitedPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, existingNextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition, nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var existingNextUnvisitedPathGeographicMapCellPosition = existingNextUnvisitedPathGeographicMapCellPosition
    //var nextUnvisitedPathGeographicMapCellPosition = nextUnvisitedPathGeographicMapCellPosition

                        if(existingNextUnvisitedPathGeographicMapCellPosition != nextUnvisitedPathGeographicMapCellPosition)
                        logUtil!.put(StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" nextUnvisitedPathGeographicMapCellPosition: ")!.append(stringUtil!.toString(nextUnvisitedPathGeographicMapCellPosition))!.toString(), this, "setNextUnvisitedPathGeographicMapCellPosition")
}


}
                
            

