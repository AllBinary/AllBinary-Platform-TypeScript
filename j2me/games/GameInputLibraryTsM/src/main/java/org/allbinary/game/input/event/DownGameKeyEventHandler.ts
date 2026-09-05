
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

        


import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { LocalPlayerInputIdFactory } from '../../../../../org/allbinary/game/input/LocalPlayerInputIdFactory.js';
//not GWT import const LocalPlayerInputIdFactory = globalThis.org.allbinary.game.input.LocalPlayerInputIdFactory;

      
import { EventListenerInterface } from '../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DownGameKeyEventHandlerBase } from './DownGameKeyEventHandlerBase.js';
//not GWT import - same folder const DownGameKeyEventHandlerBase = globalThis.org.allbinary.game.input.event.DownGameKeyEventHandlerBase;

                
export class DownGameKeyEventHandler extends DownGameKeyEventHandlerBase {
        

    private static readonly instance: DownGameKeyEventHandler = new DownGameKeyEventHandler();

    private static readonly instanceArray: DownGameKeyEventHandlerBase[] = 
                                                        [
                                                            new DownGameKeyEventHandlerBase(),new DownGameKeyEventHandlerBase(),new DownGameKeyEventHandlerBase(),new DownGameKeyEventHandlerBase(),new DownGameKeyEventHandlerBase(),new DownGameKeyEventHandlerBase()
                                                        ];

    public static getInstance(): DownGameKeyEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DownGameKeyEventHandler.instance;
    
}


    private readonly playerInputIdFactory: LocalPlayerInputIdFactory = LocalPlayerInputIdFactory.getInstance()!;

    public getInstanceForDevice(deviceId: number): DownGameKeyEventHandlerBase{

    var playerInputId: number = this.playerInputIdFactory!.getPlayerForDevice(deviceId)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DownGameKeyEventHandler.instanceArray[playerInputId]!;
    
}


    public getInstanceForPlayer(playerInputId: number): DownGameKeyEventHandlerBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DownGameKeyEventHandler.instanceArray[playerInputId]!;
    
}


private constructor (){

            super();
        }


    public removeAllListeners(){
super.removeAllListeners();
    




                        for (
    var index: number = DownGameKeyEventHandler.instanceArray!.length -1;index >= 0; index--)
        {
DownGameKeyEventHandler.instanceArray[index]!.removeAllListeners();
    
}

}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
super.removeListenerSingleThreaded(eventListenerInterface);
    




                        for (
    var index: number = DownGameKeyEventHandler.instanceArray!.length -1;index >= 0; index--)
        {
DownGameKeyEventHandler.instanceArray[index]!.removeListenerSingleThreaded(eventListenerInterface);
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeListener(eventListenerInterface: EventListenerInterface){
super.removeListener(eventListenerInterface);
    




                        for (
    var index: number = DownGameKeyEventHandler.instanceArray!.length -1;index >= 0; index--)
        {
DownGameKeyEventHandler.instanceArray[index]!.removeListener(eventListenerInterface);
    
}

}


}



