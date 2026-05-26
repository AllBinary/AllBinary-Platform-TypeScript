
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
        import { UpGameKeyEventHandlerBase } from './UpGameKeyEventHandlerBase.js';

export class UpGameKeyEventHandler extends UpGameKeyEventHandlerBase {
        

    private static readonly instance: UpGameKeyEventHandler = new UpGameKeyEventHandler();

    private static readonly instanceArray: UpGameKeyEventHandlerBase[] = 
                                                        [
                                                            new UpGameKeyEventHandlerBase(),new UpGameKeyEventHandlerBase(),new UpGameKeyEventHandlerBase(),new UpGameKeyEventHandlerBase(),new UpGameKeyEventHandlerBase(),new UpGameKeyEventHandlerBase()
                                                        ];

    public static getInstance(): UpGameKeyEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UpGameKeyEventHandler.instance;
    
}


    private readonly playerInputIdFactory: LocalPlayerInputIdFactory = LocalPlayerInputIdFactory.getInstance()!;

    public getInstanceForDevice(deviceId: number): UpGameKeyEventHandlerBase{

    var playerInputId: number = this.playerInputIdFactory!.getPlayerForDevice(deviceId)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UpGameKeyEventHandler.instanceArray[playerInputId]!;
    
}


    public getInstanceForPlayer(playerInputId: number): UpGameKeyEventHandlerBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UpGameKeyEventHandler.instanceArray[playerInputId]!;
    
}


private constructor (){

            super();
        }


    public removeAllListeners(){
super.removeAllListeners();
    




                        for (
    var index: number = UpGameKeyEventHandler.instanceArray!.length -1;index >= 0; index--)
        {
UpGameKeyEventHandler.instanceArray[index]!.removeAllListeners();
    
}

}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
super.removeListenerSingleThreaded(eventListenerInterface);
    




                        for (
    var index: number = UpGameKeyEventHandler.instanceArray!.length -1;index >= 0; index--)
        {
UpGameKeyEventHandler.instanceArray[index]!.removeListenerSingleThreaded(eventListenerInterface);
    
}

}


    public removeListener(eventListenerInterface: EventListenerInterface){
super.removeListener(eventListenerInterface);
    




                        for (
    var index: number = UpGameKeyEventHandler.instanceArray!.length -1;index >= 0; index--)
        {
UpGameKeyEventHandler.instanceArray[index]!.removeListener(eventListenerInterface);
    
}

}


}
                
            

