
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
//not game specific package import { CaptionAnimationHelperBase } from '../../../../org/allbinary/animation/caption/CaptionAnimationHelperBase.js';
      const CaptionAnimationHelperBase = globalThis.org.allbinary.animation.caption.CaptionAnimationHelperBase;

      
//not game specific package import { Group } from '../../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { Waypoint2LogHelper } from '../../../../org/allbinary/game/layer/waypoint/Waypoint2LogHelper.js';
      const Waypoint2LogHelper = globalThis.org.allbinary.game.layer.waypoint.Waypoint2LogHelper;

      
//not game specific package import { WaypointLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointLogHelper.js';
      const WaypointLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointLogHelper;

      
//not game specific package import { WaypointRunnableLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointRunnableLogHelper.js';
      const WaypointRunnableLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointRunnableLogHelper;

      
//not game specific package import { TrackingEvent } from '../../../../org/allbinary/game/tracking/TrackingEvent.js';
      const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
//not game specific package import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
import { GeographicMapCellPositionAreaBase } from './GeographicMapCellPositionAreaBase.js';
import { SelectionHudPaintable } from './SelectionHudPaintable.js';
import { RTSLayer2LogHelper } from './RTSLayer2LogHelper.js';
import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';

export class NullPathFindingLayer
            extends Object
         implements PathFindingLayerInterface {
        

    public static readonly NULL_PATH_FINDING_LAYER: NullPathFindingLayer = new NullPathFindingLayer();

    public getName(): string{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getEndGeographicMapCellPositionList(): BasicArrayList{



                            throw new RuntimeException();
                    
}


    public shouldHandleStartSameAsEnd(): boolean{



                            throw new RuntimeException();
                    
}


    public getGeographicMapCellPositionArea(): GeographicMapCellPositionAreaBase{



                            throw new RuntimeException();
                    
}


    public getHudPaintable(): SelectionHudPaintable{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public handleCost(ownerLayer: PathFindingLayerInterface){



                            throw new RuntimeException();
                    
}


    public getParentLayer(): PathFindingLayerInterface{



                            throw new RuntimeException();
                    
}


    public getRTSLayer2LogHelper(): RTSLayer2LogHelper{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public setTarget(targetGameLayer: PathFindingLayerInterface){



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public init(geographicMapCellHistory: GeographicMapCellHistory, geographicMapCellPositionBasicArrayList: BasicArrayList){



                            throw new RuntimeException();
                    
}


    public getMoveOutOfBuildAreaPath(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public setClosestGeographicMapCellHistory(pathsList: BasicArrayList){



                            throw new RuntimeException();
                    
}


    public teleportTo(geographicMapCellPosition: GeographicMapCellPosition){



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public setLoad(resource: number){



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getSurroundingGeographicMapCellPositionList(): BasicArrayList{



                            throw new RuntimeException();
                    
}


    public isSelected(): boolean{



                            throw new RuntimeException();
                    
}


    public shouldAddWaypointFromBuilding(): boolean{



                            throw new RuntimeException();
                    
}


    public isShowMoreCaptionStates(): boolean{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public trackTo(reason: string){



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public trackToDXY(dx: number, dy: number){



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public buildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition): boolean{



                            throw new RuntimeException();
                    
}


    public getTrackingEvent(): TrackingEvent{



                            throw new RuntimeException();
                    
}


    public allStop(){



                            throw new RuntimeException();
                    
}


    public isWaypointListEmptyOrOnlyTargets(): boolean{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getCurrentGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getTopLeftGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw new RuntimeException();
                    
}


    public getCaptionAnimationHelper(): CaptionAnimationHelperBase{



                            throw new RuntimeException();
                    
}


    public getWaypointBehavior(): WaypointBehaviorBase{



                            throw new RuntimeException();
                    
}


    public getWaypointLogHelper(): WaypointLogHelper{



                            throw new RuntimeException();
                    
}


    public getWaypoint2LogHelper(): Waypoint2LogHelper{



                            throw new RuntimeException();
                    
}


    public getWaypointRunnableLogHelper(): WaypointRunnableLogHelper{



                            throw new RuntimeException();
                    
}


    public getGroupInterface(): Group[]{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public isDestroyed(): boolean{



                            throw new RuntimeException();
                    
}


    public getSourceId(): number{



                            throw new RuntimeException();
                    
}


}
                
            

