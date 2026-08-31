
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

        


//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSLayer2LogHelper } from './RTSLayer2LogHelper.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.RTSLayer2LogHelper;

                import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

                
export class RTSLayer2SelectedLogHelper extends RTSLayer2LogHelper {
        

    private static readonly instanceC: RTSLayer2SelectedLogHelper = new RTSLayer2SelectedLogHelper();

    public static getInstance(): RTSLayer2SelectedLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RTSLayer2SelectedLogHelper.instanceC;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly TRACK_TO_FIRE_OR_MOVE: string = "trackTo:fireOrMove";

    private readonly BUILDING_CHASE: string = "buildingChase";

    public steeringUp(pathFindingLayerInterface: PathFindingLayerInterface){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(" steering - Up")!.toString(), this, this.TRACK_TO_FIRE_OR_MOVE);
    
}


    public steeringFireOrStop(pathFindingLayerInterface: PathFindingLayerInterface){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(" steering - Fire/All Stop")!.toString(), this, this.TRACK_TO_FIRE_OR_MOVE);
    
}


    public buildingAbove(pathFindingLayerInterface: PathFindingLayerInterface){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(" Building Above")!.toString(), this, this.BUILDING_CHASE);
    
}


    public buildingChaseLeft(pathFindingLayerInterface: PathFindingLayerInterface, angle: number){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(" steering - Going Left: ")!.appendint(angle)!.toString(), this, this.BUILDING_CHASE);
    
}


    public buildingChaseRight(pathFindingLayerInterface: PathFindingLayerInterface, angle: number){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(" steering - Going Right: ")!.appendint(angle)!.toString(), this, this.BUILDING_CHASE);
    
}


    public buildingDown(pathFindingLayerInterface: PathFindingLayerInterface){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(" Building Below")!.toString(), this, this.BUILDING_CHASE);
    
}


    public buildingChaseDown(pathFindingLayerInterface: PathFindingLayerInterface, angle: number){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(" steering - Going Down: ")!.appendint(angle)!.toString(), this, this.BUILDING_CHASE);
    
}


    public buildingChaseUp(pathFindingLayerInterface: PathFindingLayerInterface, angle: number){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(" steering - Going Up: ")!.appendint(angle)!.toString(), this, this.BUILDING_CHASE);
    
}


    public buildingLeft(pathFindingLayerInterface: PathFindingLayerInterface){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(" Building Left")!.toString(), this, this.BUILDING_CHASE);
    
}


    public buildingRight(pathFindingLayerInterface: PathFindingLayerInterface){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(" Building Right")!.toString(), this, this.BUILDING_CHASE);
    
}


}



