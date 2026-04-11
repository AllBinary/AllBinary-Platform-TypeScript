
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { EventListenerInterface } from "../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class GameKeyEventHandler
            extends Object
         {
        

    private static readonly instance: GameKeyEventHandler = new GameKeyEventHandler();
        
        

    public static getInstance(): GameKeyEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly pressGameKeyEventHandler: PressGameKeyEventHandler = PressGameKeyEventHandler.getInstance()!;
        
        

    private readonly upGameKeyEventHandler: UpGameKeyEventHandler = UpGameKeyEventHandler.getInstance()!;
        
        

    private readonly downGameKeyEventHandler: DownGameKeyEventHandler = DownGameKeyEventHandler.getInstance()!;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeAllListeners(){
this.pressGameKeyEventHandler!.removeAllListeners();
    
this.upGameKeyEventHandler!.removeAllListeners();
    
this.downGameKeyEventHandler!.removeAllListeners();
    
}


    public addListener(eventListenerInterface: EventListenerInterface, playerInputId: number){
var eventListenerInterface = eventListenerInterface
var playerInputId = playerInputId
logUtil!.put(eventListenerInterface!.toString(), this, commonStrings!.ADD_LISTENER);
    
this.pressGameKeyEventHandler!.addListenerSingleThreaded(eventListenerInterface);
    
this.upGameKeyEventHandler!.getInstanceForPlayer(playerInputId)!.addListenerSingleThreaded(eventListenerInterface);
    
this.downGameKeyEventHandler!.getInstanceForPlayer(playerInputId)!.addListenerSingleThreaded(eventListenerInterface);
    
}


    public addListener(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
logUtil!.put(eventListenerInterface!.toString(), this, commonStrings!.ADD_LISTENER);
    
this.pressGameKeyEventHandler!.addListenerSingleThreaded(eventListenerInterface);
    
this.upGameKeyEventHandler!.addListenerSingleThreaded(eventListenerInterface);
    
this.downGameKeyEventHandler!.addListenerSingleThreaded(eventListenerInterface);
    
}


    public removeListener(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
logUtil!.put(eventListenerInterface!.toString(), this, commonStrings!.REMOVE_LISTENER);
    
this.pressGameKeyEventHandler!.removeListenerSingleThreaded(eventListenerInterface);
    
this.upGameKeyEventHandler!.removeListenerSingleThreaded(eventListenerInterface);
    
this.downGameKeyEventHandler!.removeListenerSingleThreaded(eventListenerInterface);
    
}


}
                
            

