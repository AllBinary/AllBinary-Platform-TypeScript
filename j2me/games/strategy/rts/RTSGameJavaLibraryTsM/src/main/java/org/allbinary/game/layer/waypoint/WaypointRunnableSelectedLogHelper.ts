
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

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointRunnableLogHelper } from './WaypointRunnableLogHelper.js';

export class WaypointRunnableSelectedLogHelper extends WaypointRunnableLogHelper {
        

    private static readonly instanceC: WaypointRunnableSelectedLogHelper = new WaypointRunnableSelectedLogHelper();

    public static getInstance(): WaypointRunnableSelectedLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WaypointRunnableSelectedLogHelper.instanceC;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public start(pathFindingLayerInterface: PathFindingLayerInterface){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(this.commonStrings!.START_RUNNABLE)!.toString(), this, this.commonStrings!.RUN);
    
}


    public end(pathFindingLayerInterface: PathFindingLayerInterface){
this.logUtil!.putF(new StringMaker().append(pathFindingLayerInterface!.getName())!.append(this.commonStrings!.END_RUNNABLE)!.toString(), this, this.commonStrings!.RUN);
    
}


}



