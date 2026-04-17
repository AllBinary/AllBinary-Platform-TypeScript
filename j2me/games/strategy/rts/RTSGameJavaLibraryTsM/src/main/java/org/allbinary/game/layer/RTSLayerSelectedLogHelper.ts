
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { NamedAngle } from "../../../../org/allbinary/math/NamedAngle.js";

    
import { PositionStrings } from "../../../../org/allbinary/math/PositionStrings.js";

    
import { GeographicMapCellHistory } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RTSLayerLogHelper } from "./RTSLayerLogHelper.js";

import { PathFindingLayerInterface } from "./PathFindingLayerInterface.js";

export class RTSLayerSelectedLogHelper extends RTSLayerLogHelper {
        

    private static readonly instance: RTSLayerSelectedLogHelper = new RTSLayerSelectedLogHelper();
        
        

    public static getInstance(): RTSLayerSelectedLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly positionStrings: PositionStrings = PositionStrings.getInstance()!;
        
        

    private readonly TRACKTO_TURNTO: string = "trackTo:turnTo";
        
        

    public setClosestGeographicMapCellHistory(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, pathsList: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var pathsList = pathsList

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(CommonLabels.getInstance()!.START);
    
stringBuffer!.appendint(pathsList!.size());
    
stringBuffer!.append(" -> ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(pathsList));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "selected: setClosestGeographicMapCellHistory");
    
}


    public trackTo(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition, dx: number, dy: number, reason: string){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var nextUnvisitedPathGeographicMapCellPosition = nextUnvisitedPathGeographicMapCellPosition
    //var dx = dx
    //var dy = dy
    //var reason = reason

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(nextUnvisitedPathGeographicMapCellPosition));
    
stringBuffer!.append(positionStrings!.DX_LABEL);
    
stringBuffer!.appendint(dx);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.DY_LABEL);
    
stringBuffer!.appendint(dy);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(reason);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "selected: trackTo");
    
}


    public turnTo(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, dx: number, dy: number, angleInfo: AngleInfo, angle: number, movementAngle: NamedAngle, evading: boolean, targetAngle: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var dx = dx
    //var dy = dy
    //var angleInfo = angleInfo
    //var angle = angle
    //var movementAngle = movementAngle
    //var evading = evading
var targetAngle = targetAngle

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(" steering - ");
    
stringBuffer!.append(positionStrings!.DX_LABEL);
    
stringBuffer!.appendint(dx);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.DY_LABEL);
    
stringBuffer!.appendint(dy);
    
stringBuffer!.append(" angle: ");
    
stringBuffer!.appendint(angle);
    
stringBuffer!.append(" movementAngle: ");
    
stringBuffer!.append(movementAngle!.name);
    
stringBuffer!.append(commonSeps!.FORWARD_SLASH);
    
stringBuffer!.appendshort(movementAngle!.getValue());
    

                        if(angleInfo != 
                                    null
                                )
                        
                                    {
                                    
    var angleIncrement: number = angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()!;
        
        
;
    
stringBuffer!.append(" angleIncrement: ");
    
stringBuffer!.appendshort(angleIncrement);
    

                                    }
                                
stringBuffer!.append(" Evading: ");
    
stringBuffer!.appendboolean(evading);
    
this.logUtil!.putF(stringBuffer!.toString(), this, TRACKTO_TURNTO);
    
}


    public doneMoving(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - done moving 0,0")!.toString(), this, TRACKTO_TURNTO);
    
}


    public closeEnough(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - close enough")!.toString(), this, TRACKTO_TURNTO);
    
}


    public movingLeft(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - allow movingLeft")!.toString(), this, TRACKTO_TURNTO);
    
}


    public movingRight(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - allow movingRight")!.toString(), this, TRACKTO_TURNTO);
    
}


    public movingUp(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - allow movingUp")!.toString(), this, TRACKTO_TURNTO);
    
}


    public movingDown(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - allow movingDown")!.toString(), this, TRACKTO_TURNTO);
    
}


    public currentMoveEnded(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - correct angle, but movement not needed for current deltas so reseting movement angle")!.toString(), this, TRACKTO_TURNTO);
    
}


    public evade(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - evade")!.toString(), this, TRACKTO_TURNTO);
    
}


    public rotateLeft(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - rotating left")!.toString(), this, TRACKTO_TURNTO);
    
}


    public rotateRight(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - rotating right")!.toString(), this, TRACKTO_TURNTO);
    
}


    public handle(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, movementAngle: NamedAngle){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var movementAngle = movementAngle
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - movementAngle: ")!.append(movementAngle!.name)!.append(commonSeps!.FORWARD_SLASH)!.appendshort(movementAngle!.getValue())!.toString(), this, TRACKTO_TURNTO);
    
}


    public noRotation(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" steering - Do not rotate")!.toString(), this, TRACKTO_TURNTO);
    
}


    public notOnPath(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, geographicMapCellHistory: GeographicMapCellHistory, currentGeographicMapCellPosition: GeographicMapCellPosition, pathList: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var geographicMapCellHistory = geographicMapCellHistory
    //var currentGeographicMapCellPosition = currentGeographicMapCellPosition
    //var pathList = pathList

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(CommonSeps.getInstance()!.SPACE)!.appendint(geographicMapCellHistory!.getTotalVisited())!.append(CommonSeps.getInstance()!.SPACE)!.append(stringUtil!.toString(currentGeographicMapCellPosition))!.append(" - trying to move but not on path: ")!.append(stringUtil!.toString(pathList))!.toString(), this, "turnTo");
    
}


}
                
            

