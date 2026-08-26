
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { PlayerGameInput } from '../../../../../org/allbinary/game/input/PlayerGameInput.js';
      const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { EventListenerInterface } from '../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { BasicEventHandler } from '../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UpKeyEventListenerInterface } from './UpKeyEventListenerInterface.js';

export class UpKeyEventHandlerBase extends BasicEventHandler {
        

    private static readonly TOTAL_LISTENERS: string = " Total PlayerGameInput Listeners: ";

    private static readonly LISTENER_LABEL: string = " PlayerGameInput Listener: ";

    private readonly list: BasicArrayList = new BasicArrayListD();

 constructor (){

            super();
        }


    public addListener(playerGameInput: PlayerGameInput){

                        if(!this.list.contains(playerGameInput))
                        
                                    {
                                    this.list.add(playerGameInput);
    

                                    }
                                
}


    public removeAllListeners(){
this.list.clear();
    
super.removeAllListeners();
    
}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
this.list.remove(eventListenerInterface);
    
super.removeListenerSingleThreaded(eventListenerInterface);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeListener(eventListenerInterface: EventListenerInterface){
this.list.remove(eventListenerInterface);
    
super.removeListener(eventListenerInterface);
    
}


                //@Throws(Exception.constructor)
            
    public fireEventForInteger(eventObject: Integer){




                        for (
    var index: number = this.list.size()!;--index >= 0; )
        {

        try {
            
    var playerGameInput: PlayerGameInput = this.list.objectArray[index]! as PlayerGameInput;;
    
playerGameInput!.onUpKeyEvent(eventObject);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}


    var index: number = 0;;
    

    var eventListenerInterface: EventListenerInterface;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.get(index) as EventListenerInterface;
    
this.processForInteger(eventObject, eventListenerInterface);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

index++;
    
}

}


                //@Throws(Exception.constructor)
            
    processForInteger(eventObject: Integer, eventListenerInterface: EventListenerInterface){

    var upKeyEventListenerInterface: UpKeyEventListenerInterface = eventListenerInterface as UpKeyEventListenerInterface;;
    
upKeyEventListenerInterface!.onUpKeyEvent(eventObject);
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(UpKeyEventHandlerBase.TOTAL_LISTENERS);
    
stringBuffer!.appendint(this.list.size());
    




                        for (
    var index: number = 0;index < this.list.size(); index++)
        {

        try {
            
    var eventListenerInterface: EventListenerInterface = this.list.get(index) as EventListenerInterface;;
    
stringBuffer!.append(UpKeyEventHandlerBase.LISTENER_LABEL);
    
stringBuffer!.append(eventListenerInterface!.toString());
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.TOSTRING, e);
    
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

