
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { LocalPlayerInputIdFactory } from '../../../../../org/allbinary/game/input/LocalPlayerInputIdFactory.js';
      
import { EventListenerInterface } from '../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UpKeyEventHandlerBase } from './UpKeyEventHandlerBase.js';

export class UpKeyEventHandler extends UpKeyEventHandlerBase {
        

    private static readonly instance: UpKeyEventHandler = new UpKeyEventHandler();

    private static readonly instanceArray: UpKeyEventHandlerBase[] = 
                                                        [
                                                            new UpKeyEventHandlerBase(),new UpKeyEventHandlerBase(),new UpKeyEventHandlerBase(),new UpKeyEventHandlerBase(),new UpKeyEventHandlerBase(),new UpKeyEventHandlerBase()
                                                        ];

    public static getInstance(): UpKeyEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UpKeyEventHandler.instance;
    
}


    private readonly playerInputIdFactory: LocalPlayerInputIdFactory = LocalPlayerInputIdFactory.getInstance()!;

    public getInstanceForDevice(deviceId: number): UpKeyEventHandlerBase{
var deviceId = deviceId

    var playerInputId: number = this.playerInputIdFactory!.getPlayerForDevice(deviceId)!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UpKeyEventHandler.instanceArray[playerInputId]!;
    
}


    public getInstanceForPlayer(playerInputId: number): UpKeyEventHandlerBase{
var playerInputId = playerInputId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UpKeyEventHandler.instanceArray[playerInputId]!;
    
}

private constructor (){

            super();
        }


    public removeAllListeners(){
super.removeAllListeners();
    




                        for (
    var index: number = UpKeyEventHandler.instanceArray!.length -1;
index >= 0; index--)
        {
UpKeyEventHandler.instanceArray[index]!.removeAllListeners();
    
}

}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
super.removeListenerSingleThreaded(eventListenerInterface);
    




                        for (
    var index: number = UpKeyEventHandler.instanceArray!.length -1;
index >= 0; index--)
        {
UpKeyEventHandler.instanceArray[index]!.removeListenerSingleThreaded(eventListenerInterface);
    
}

}


    public removeListener(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
super.removeListener(eventListenerInterface);
    




                        for (
    var index: number = UpKeyEventHandler.instanceArray!.length -1;
index >= 0; index--)
        {
UpKeyEventHandler.instanceArray[index]!.removeListener(eventListenerInterface);
    
}

}


}
                
            

