
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

        


import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      //not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
import { WaypointBehaviorBase } from '../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js';
      //not GWT import const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;

      
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      //not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointLogHelper } from './WaypointLogHelper.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.waypoint.WaypointLogHelper;

                
export class WaypointSelectedLogHelper extends WaypointLogHelper {
        

    private static readonly instanceC: WaypointSelectedLogHelper = new WaypointSelectedLogHelper();

    public static getInstance(): WaypointSelectedLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WaypointSelectedLogHelper.instanceC;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    public onWaypointEvent(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(" onWaypointEvent: ");
    
stringBuffer!.append(advancedRTSGameLayer!.getName());
    

                        if(advancedRTSGameLayer!.getParentLayer() != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(" With Parent: ");
    
stringBuffer!.append(advancedRTSGameLayer!.getParentLayer()!.getName());
    

                                    }
                                
this.logUtil!.putF(stringBuffer!.toString(), this, "onWaypointEvent");
    
}


    public addWaypointFromBuilding(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(" Adding Waypoint: ");
    
stringBuffer!.append(advancedRTSGameLayer!.getName());
    

                        if(advancedRTSGameLayer!.getParentLayer() != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(" With Parent: ");
    
stringBuffer!.append(advancedRTSGameLayer!.getParentLayer()!.getName());
    

                                    }
                                
this.logUtil!.putF(stringBuffer!.toString(), this, "selected: onWaypointEvent");
    
}


    public addWaypointFromBuildingList(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface, list: BasicArrayList){

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(" Waypoints: ");
    
stringBuffer!.append(this.stringUtil!.toString(list));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "selected: onWaypointEvent");
    
}


    public insertWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, index: number, rtsLayer: CollidableDestroyableDamageableLayer, waypointName: string){

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(waypointName);
    
stringBuffer!.append(" Insert: ");
    
stringBuffer!.append(rtsLayer!.getName());
    
stringBuffer!.append(" for Waypoint: ");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "selected: insertWaypoint");
    
}


    public insertWaypointList(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, index: number, rtsLayer: CollidableDestroyableDamageableLayer, waypointName: string, list: BasicArrayList){

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(waypointName);
    
stringBuffer!.append(" Insert: ");
    
stringBuffer!.append(rtsLayer!.getName());
    
stringBuffer!.append(" Waypoints: ");
    
stringBuffer!.append(this.stringUtil!.toString(list));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "selected: insertWaypoint");
    
}


    public setRandomGeographicMapCellHistoryList(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, pathsList: BasicArrayList){

    var size: number = pathsList!.size()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(CommonLabels.getInstance()!.START);
    
stringBuffer!.appendint(size);
    
stringBuffer!.append(" -> ");
    
stringBuffer!.append(this.stringUtil!.toString(pathsList));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "selected: setRandomGeographicMapCellHistory");
    
}


    public moveAwayFromBuilding(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
this.logUtil!.putF(new StringMaker().append(associatedAdvancedRTSGameLayer!.getName())!.append(" Trying to move away from building")!.toString(), this, "selected: moveAwayFromBuilding");
    
}


    public needToMove(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior: WaypointBehaviorBase){
this.logUtil!.putF(new StringMaker().append(associatedAdvancedRTSGameLayer!.getName())!.append(unitWaypointBehavior!.getMovementLogicAsString())!.toString(), this, "needToMove");
    
}


    public setRandomGeographicMapCellHistory(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
this.logUtil!.putF(new StringMaker().append(associatedAdvancedRTSGameLayer!.getName())!.append(" pathsList is null")!.toString(), this, "setRandomGeographicMapCellHistory");
    
}


    public setCurrentPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, existingCurrentPathGeographicMapCellPosition: GeographicMapCellPosition, currentPathGeographicMapCellPosition: GeographicMapCellPosition){

                        if(existingCurrentPathGeographicMapCellPosition == 
                                    null
                                )
                        this.logUtil!.putF(new StringMaker().append(associatedAdvancedRTSGameLayer!.getName())!.append(" currentPathGeographicMapCellPosition: ")!.append(this.stringUtil!.toString(currentPathGeographicMapCellPosition))!.toString(), this, "setCurrentPathGeographicMapCellPosition")
}


    public setNextUnvisitedPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, existingNextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition, nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition){

                        if(existingNextUnvisitedPathGeographicMapCellPosition != nextUnvisitedPathGeographicMapCellPosition)
                        this.logUtil!.putF(new StringMaker().append(associatedAdvancedRTSGameLayer!.getName())!.append(" nextUnvisitedPathGeographicMapCellPosition: ")!.append(this.stringUtil!.toString(nextUnvisitedPathGeographicMapCellPosition))!.toString(), this, "setNextUnvisitedPathGeographicMapCellPosition")
}


}



