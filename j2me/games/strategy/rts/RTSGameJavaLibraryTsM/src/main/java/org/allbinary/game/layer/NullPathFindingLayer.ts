
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
        
import { CaptionAnimationHelperBase } from '../../../../org/allbinary/animation/caption/CaptionAnimationHelperBase.js';
//not GWT import const CaptionAnimationHelperBase = globalThis.org.allbinary.animation.caption.CaptionAnimationHelperBase;

      
import { Group } from '../../../../org/allbinary/game/identification/Group.js';
//not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { Waypoint2LogHelper } from '../../../../org/allbinary/game/layer/waypoint/Waypoint2LogHelper.js';
//not GWT import const Waypoint2LogHelper = globalThis.org.allbinary.game.layer.waypoint.Waypoint2LogHelper;

      
import { WaypointLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointLogHelper.js';
//not GWT import const WaypointLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointLogHelper;

      
import { WaypointRunnableLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointRunnableLogHelper.js';
//not GWT import const WaypointRunnableLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointRunnableLogHelper;

      
import { TrackingEvent } from '../../../../org/allbinary/game/tracking/TrackingEvent.js';
//not GWT import const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
//not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
//not GWT import - same folder const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

                import { GeographicMapCellPositionAreaBase } from './GeographicMapCellPositionAreaBase.js';
//not GWT import - same folder const GeographicMapCellPositionAreaBase = globalThis.org.allbinary.game.layer.GeographicMapCellPositionAreaBase;

                import { SelectionHudPaintable } from './SelectionHudPaintable.js';
//not GWT import - same folder const SelectionHudPaintable = globalThis.org.allbinary.game.layer.SelectionHudPaintable;

                import { RTSLayer2LogHelper } from './RTSLayer2LogHelper.js';
//not GWT import - same folder const RTSLayer2LogHelper = globalThis.org.allbinary.game.layer.RTSLayer2LogHelper;

                import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
//not GWT import - same folder const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;

                
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



