
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

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

export class RTSLayer2SelectedLogHelper extends RTSLayer2LogHelper {
        

    private static readonly instance: RTSLayer2SelectedLogHelper = new RTSLayer2SelectedLogHelper();
        
        

    public static getInstance(): RTSLayer2SelectedLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly TRACK_TO_FIRE_OR_MOVE: string = "trackTo:fireOrMove";
        
        

    private readonly BUILDING_CHASE: string = "buildingChase";
        
        

    public steeringUp(pathFindingLayerInterface: PathFindingLayerInterface){
    //var pathFindingLayerInterface = pathFindingLayerInterface
logUtil!.put(StringMaker().
                            append(pathFindingLayerInterface!.getName())!.append(" steering - Up")!.toString(), this, TRACK_TO_FIRE_OR_MOVE)
}


    public steeringFireOrStop(pathFindingLayerInterface: PathFindingLayerInterface){
    //var pathFindingLayerInterface = pathFindingLayerInterface
logUtil!.put(StringMaker().
                            append(pathFindingLayerInterface!.getName())!.append(" steering - Fire/All Stop")!.toString(), this, TRACK_TO_FIRE_OR_MOVE)
}


    public buildingAbove(pathFindingLayerInterface: PathFindingLayerInterface){
    //var pathFindingLayerInterface = pathFindingLayerInterface
logUtil!.put(StringMaker().
                            append(pathFindingLayerInterface!.getName())!.append(" Building Above")!.toString(), this, BUILDING_CHASE)
}


    public buildingChaseLeft(pathFindingLayerInterface: PathFindingLayerInterface, angle: number){
    //var pathFindingLayerInterface = pathFindingLayerInterface
    //var angle = angle
logUtil!.put(StringMaker().
                            append(pathFindingLayerInterface!.getName())!.append(" steering - Going Left: ")!.appendint(angle)!.toString(), this, BUILDING_CHASE)
}


    public buildingChaseRight(pathFindingLayerInterface: PathFindingLayerInterface, angle: number){
    //var pathFindingLayerInterface = pathFindingLayerInterface
    //var angle = angle
logUtil!.put(StringMaker().
                            append(pathFindingLayerInterface!.getName())!.append(" steering - Going Right: ")!.appendint(angle)!.toString(), this, BUILDING_CHASE)
}


    public buildingDown(pathFindingLayerInterface: PathFindingLayerInterface){
    //var pathFindingLayerInterface = pathFindingLayerInterface
logUtil!.put(StringMaker().
                            append(pathFindingLayerInterface!.getName())!.append(" Building Below")!.toString(), this, BUILDING_CHASE)
}


    public buildingChaseDown(pathFindingLayerInterface: PathFindingLayerInterface, angle: number){
    //var pathFindingLayerInterface = pathFindingLayerInterface
    //var angle = angle
logUtil!.put(StringMaker().
                            append(pathFindingLayerInterface!.getName())!.append(" steering - Going Down: ")!.appendint(angle)!.toString(), this, BUILDING_CHASE)
}


    public buildingChaseUp(pathFindingLayerInterface: PathFindingLayerInterface, angle: number){
    //var pathFindingLayerInterface = pathFindingLayerInterface
    //var angle = angle
logUtil!.put(StringMaker().
                            append(pathFindingLayerInterface!.getName())!.append(" steering - Going Up: ")!.appendint(angle)!.toString(), this, BUILDING_CHASE)
}


    public buildingLeft(pathFindingLayerInterface: PathFindingLayerInterface){
    //var pathFindingLayerInterface = pathFindingLayerInterface
logUtil!.put(StringMaker().
                            append(pathFindingLayerInterface!.getName())!.append(" Building Left")!.toString(), this, BUILDING_CHASE)
}


    public buildingRight(pathFindingLayerInterface: PathFindingLayerInterface){
    //var pathFindingLayerInterface = pathFindingLayerInterface
logUtil!.put(StringMaker().
                            append(pathFindingLayerInterface!.getName())!.append(" Building Right")!.toString(), this, BUILDING_CHASE)
}


}
                
            

