
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject

import { EventListenerInterface } from '../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface

import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;




















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicEventHandlerInterface } from './BasicEventHandlerInterface.js';
//not GWT import - same folder const BasicEventHandlerInterface

export class BasicEventHandler
            extends Object
         implements BasicEventHandlerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly eventStrings: EventStrings = EventStrings.getInstance()!;

    eventListenerInterfaceList: BasicArrayList;

public constructor (){

            super();
        this.eventListenerInterfaceList= new BasicArrayListD();
    
}


    public removeAllListeners(){
this.eventListenerInterfaceList= new BasicArrayListD();
    
}


    public addListeners(vector: BasicArrayList){

    let eventListenerInterface: EventListenerInterface;;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
eventListenerInterface= vector.get(index) as EventListenerInterface;
    
this.addListenerInterface(eventListenerInterface);
    
}

}


    public removeListeners(vector: BasicArrayList){

    let eventListenerInterface: EventListenerInterface;;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
eventListenerInterface= vector.get(index) as EventListenerInterface;
    
this.removeListener(eventListenerInterface);
    
}

}


    public addListenerSingleThreaded(eventListenerInterface: EventListenerInterface){

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface))
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}


    public addListenerInterface(eventListenerInterface: EventListenerInterface){

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface))
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}


    public removeListener(eventListenerInterface: EventListenerInterface){
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}


                //@Throws(Exception.constructor)
            
    public fireEvent(eventObject: AllBinaryEventObject){

    let eventListenerInterface: EventListenerInterface;;
    

    let index: number = 0;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

 try { eventListenerInterface= this.eventListenerInterfaceList!.get(index) as EventListenerInterface;
    
this.process(eventObject, eventListenerInterface);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.eventStrings!.FIRE_EVENT, e);
    

 }
   }
 
index++;
    
}

}


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
eventListenerInterface!.onEvent(eventObject);
    
}


    public getEventListenerInterfaceListP(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.eventListenerInterfaceList;
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.eventStrings!.TOTAL_LISTENERS);
    
stringBuffer!.appendint(this.eventListenerInterfaceList!.size());
    

    let eventListenerInterface: EventListenerInterface;;
    

    let index: number = 0;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

 try { eventListenerInterface= this.eventListenerInterfaceList!.get(index) as EventListenerInterface;
    
stringBuffer!.append(this.eventStrings!.LISTENER_LABEL);
    
stringBuffer!.append(eventListenerInterface!.toString());
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.TOSTRING, e);
    

 }
   }
 
index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

