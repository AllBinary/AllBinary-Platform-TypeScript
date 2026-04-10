
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
        



import { PlayerGameInput } from "../../../../../org/allbinary/game/input/PlayerGameInput.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { EventListenerInterface } from "../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { BasicEventHandler } from "../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class DownKeyEventHandlerBase extends BasicEventHandler {
        

    private static readonly TOTAL_LISTENERS: string = " Total PlayerGameInput Listeners: ";
        
        

    private static readonly LISTENER_LABEL: string = " PlayerGameInput Listener: ";
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        
 constructor (){

            super();
            }


    public addListener(playerGameInput: PlayerGameInput){
    //var playerGameInput = playerGameInput

    
                        if(!list.contains(playerGameInput))
                        
                                    {
                                    add(playerGameInput)

                                    }
                                
}


    public removeAllListeners(){
clear()
removeAllListeners()
}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
    //var eventListenerInterface = eventListenerInterface
remove(eventListenerInterface)
removeListenerSingleThreaded(eventListenerInterface)
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeListener(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
remove(eventListenerInterface)
removeListener(eventListenerInterface)
}


                @Throws(Exception::class)
            
    public fireEvent(eventObject: Integer){
    //var eventObject = eventObject




                        for (
    var index: number = this.list.size()!;
        
        
--index >= 0; )
        {

        try {
            
    var playerGameInput: PlayerGameInput = this.list.objectArray[index]! as PlayerGameInput;
        
        

onDownKeyEvent(eventObject)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e)
}

}


    var index: number = 0;
        
        


    var eventListenerInterface: EventListenerInterface


        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.get(index) as EventListenerInterface
this.process(eventObject, eventListenerInterface)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e)
}

index++
}

}


                @Throws(Exception::class)
            
    public fireEvent(eventObject: GameKeyEvent){
    //var eventObject = eventObject

    var size: number = this.list.size()!;
        
        





                        for (
    var index: number = size;
        
        
--index >= 0; )
        {

        try {
            
    var playerGameInput: PlayerGameInput = this.list.objectArray[index]! as PlayerGameInput;
        
        

onDownKeyEvent(eventObject)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e)
}

}


    var index: number = 0;
        
        


    var eventListenerInterface: EventListenerInterface


        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.get(index) as EventListenerInterface
this.process(eventObject, eventListenerInterface)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e)
}

index++
}

}


                @Throws(Exception::class)
            
    process(eventObject: Integer, eventListenerInterface: EventListenerInterface){
    //var eventObject = eventObject
    //var eventListenerInterface = eventListenerInterface

    var downKeyEventListenerInterface: DownKeyEventListenerInterface = eventListenerInterface as DownKeyEventListenerInterface;
        
        

onDownKeyEvent(eventObject)
}


                @Throws(Exception::class)
            
    process(eventObject: GameKeyEvent, eventListenerInterface: EventListenerInterface){
    //var eventObject = eventObject
    //var eventListenerInterface = eventListenerInterface

    var downKeyEventListenerInterface: DownKeyEventListenerInterface = eventListenerInterface as DownKeyEventListenerInterface;
        
        

onDownKeyEvent(eventObject)
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(super.toString())
append(TOTAL_LISTENERS)
appendint(this.list.size())

    var eventListenerInterface: EventListenerInterface





                        for (
    var index: number = 0;
        
        
index < this.list.size(); index++)
        {

        try {
            eventListenerInterface= this.list.get(index) as EventListenerInterface
append(LISTENER_LABEL)
append(eventListenerInterface!.toString())
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.TOSTRING, e)
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

