
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
        
import { PlayerGameInput } from '../../../../../org/allbinary/game/input/PlayerGameInput.js';
//not GWT import const PlayerGameInput

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { EventListenerInterface } from '../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface

import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings

import { BasicEventHandler } from '../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameKeyEvent } from './GameKeyEvent.js';
//sameFolderImports - not GWT import - same folder const GameKeyEvent
import { DownKeyEventListenerInterface } from './DownKeyEventListenerInterface.js';
//sameFolderImports - not GWT import - same folder const DownKeyEventListenerInterface

export class DownKeyEventHandlerBase extends BasicEventHandler {
        

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
            
    public fireEventI(eventObject: Integer){




                        for (
    let index: number = this.list.size()!;--index >= 0; )
        {

 try { 
    let playerGameInput: PlayerGameInput = this.list.objectArray[index]! as PlayerGameInput;;
    
playerGameInput!.onDownKey(eventObject);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    

 }
   }
 
}


    let index: number = 0;;
    

    let eventListenerInterface: EventListenerInterface;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

 try { eventListenerInterface= this.eventListenerInterfaceList!.get(index) as EventListenerInterface;
    
this.processI(eventObject, eventListenerInterface);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    

 }
   }
 
index++;
    
}

}


                //@Throws(Exception.constructor)
            
    public fireEventForGameKeyEvent(eventObject: GameKeyEvent){

    let size: number = this.list.size()!;;
    




                        for (
    let index: number = size;--index >= 0; )
        {

 try { 
    let playerGameInput: PlayerGameInput = this.list.objectArray[index]! as PlayerGameInput;;
    
playerGameInput!.onDownKeyEvent(eventObject);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    

 }
   }
 
}


    let index: number = 0;;
    

    let eventListenerInterface: EventListenerInterface;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

 try { eventListenerInterface= this.eventListenerInterfaceList!.get(index) as EventListenerInterface;
    
this.processEvent(eventObject, eventListenerInterface);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    

 }
   }
 
index++;
    
}

}


                //@Throws(Exception.constructor)
            
    processI(eventObject: Integer, eventListenerInterface: EventListenerInterface){

    let downKeyEventListenerInterface: DownKeyEventListenerInterface = eventListenerInterface as DownKeyEventListenerInterface;;
    
downKeyEventListenerInterface!.onDownKey(eventObject);
    
}


                //@Throws(Exception.constructor)
            
    processEvent(eventObject: GameKeyEvent, eventListenerInterface: EventListenerInterface){

    let downKeyEventListenerInterface: DownKeyEventListenerInterface = eventListenerInterface as DownKeyEventListenerInterface;;
    
downKeyEventListenerInterface!.onDownKeyEvent(eventObject);
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(DownKeyEventHandlerBase.TOTAL_LISTENERS);
    
stringBuffer!.appendint(this.list.size());
    

    let eventListenerInterface: EventListenerInterface;;
    




                        for (
    let index: number = 0;index < this.list.size(); index++)
        {

 try { eventListenerInterface= this.list.get(index) as EventListenerInterface;
    
stringBuffer!.append(DownKeyEventHandlerBase.LISTENER_LABEL);
    
stringBuffer!.append(eventListenerInterface!.toString());
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.TOSTRING, e);
    

 }
   }
 
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

