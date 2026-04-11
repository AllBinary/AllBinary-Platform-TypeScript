
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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
        



import { LocalPlayerInputIdFactory } from "../../../../../org/allbinary/game/input/LocalPlayerInputIdFactory.js";

    
import { EventListenerInterface } from "../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    

export class DownGameKeyEventHandler extends DownGameKeyEventHandlerBase {
        

    private static readonly instance: DownGameKeyEventHandler = new DownGameKeyEventHandler();
        
        

    private static readonly instanceArray: DownGameKeyEventHandlerBase[] = 
                                                        [
                                                            DownGameKeyEventHandlerBase(),DownGameKeyEventHandlerBase(),DownGameKeyEventHandlerBase(),DownGameKeyEventHandlerBase(),DownGameKeyEventHandlerBase(),DownGameKeyEventHandlerBase()
                                                        ];
        
        

    public static getInstance(): DownGameKeyEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly playerInputIdFactory: LocalPlayerInputIdFactory = LocalPlayerInputIdFactory.getInstance()!;
        
        

    public getInstance(deviceId: number): DownGameKeyEventHandlerBase{
var deviceId = deviceId

    var playerInputId: number = this.playerInputIdFactory!.getPlayerForDevice(deviceId)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instanceArray[playerInputId]!;
    
}


    public getInstanceForPlayer(playerInputId: number): DownGameKeyEventHandlerBase{
var playerInputId = playerInputId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instanceArray[playerInputId]!;
    
}

private constructor (){

            super();
            }


    public removeAllListeners(){
super.removeAllListeners();
    




                        for (
    var index: number = instanceArray!.length -1;
        
        
index >= 0; index--)
        {
instanceArray[index]!.removeAllListeners();
    
}

}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
super.removeListenerSingleThreaded(eventListenerInterface);
    




                        for (
    var index: number = instanceArray!.length -1;
        
        
index >= 0; index--)
        {
instanceArray[index]!.removeListenerSingleThreaded(eventListenerInterface);
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeListener(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
super.removeListener(eventListenerInterface);
    




                        for (
    var index: number = instanceArray!.length -1;
        
        
index >= 0; index--)
        {
instanceArray[index]!.removeListener(eventListenerInterface);
    
}

}


}
                
            

