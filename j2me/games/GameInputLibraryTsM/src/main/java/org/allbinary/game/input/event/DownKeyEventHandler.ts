
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
        import { DownKeyEventHandlerBase } from './DownKeyEventHandlerBase.js';

export class DownKeyEventHandler extends DownKeyEventHandlerBase {
        

    private static readonly instance: DownKeyEventHandler = new DownKeyEventHandler();

    private static readonly instanceArray: DownKeyEventHandlerBase[] = 
                                                        [
                                                            new DownKeyEventHandlerBase(),new DownKeyEventHandlerBase(),new DownKeyEventHandlerBase(),new DownKeyEventHandlerBase(),new DownKeyEventHandlerBase(),new DownKeyEventHandlerBase()
                                                        ];

    public static getInstance(): DownKeyEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DownKeyEventHandler.instance;
    
}


    private readonly playerInputIdFactory: LocalPlayerInputIdFactory = LocalPlayerInputIdFactory.getInstance()!;

    public getInstanceForDevice(deviceId: number): DownKeyEventHandlerBase{

    var playerInputId: number = this.playerInputIdFactory!.getPlayerForDevice(deviceId)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DownKeyEventHandler.instanceArray[playerInputId]!;
    
}


    public getInstanceForPlayer(playerInputId: number): DownKeyEventHandlerBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DownKeyEventHandler.instanceArray[playerInputId]!;
    
}


private constructor (){

            super();
        }


    public removeAllListeners(){
super.removeAllListeners();
    




                        for (
    var index: number = DownKeyEventHandler.instanceArray!.length -1;index >= 0; index--)
        {
DownKeyEventHandler.instanceArray[index]!.removeAllListeners();
    
}

}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
super.removeListenerSingleThreaded(eventListenerInterface);
    




                        for (
    var index: number = DownKeyEventHandler.instanceArray!.length -1;index >= 0; index--)
        {
DownKeyEventHandler.instanceArray[index]!.removeListenerSingleThreaded(eventListenerInterface);
    
}

}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeListener(eventListenerInterface: EventListenerInterface){
super.removeListener(eventListenerInterface);
    




                        for (
    var index: number = DownKeyEventHandler.instanceArray!.length -1;index >= 0; index--)
        {
DownKeyEventHandler.instanceArray[index]!.removeListener(eventListenerInterface);
    
}

}


}
                
            

