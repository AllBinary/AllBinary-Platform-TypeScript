
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
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
        import { RawKeyEventListener } from './RawKeyEventListener.js';
//not GWT import - same folder const RawKeyEventListener

export class RawKeyEventHandler
            extends Object
         {
        

    private static readonly instance: RawKeyEventHandler = new RawKeyEventHandler();

    public static getInstance(): RawKeyEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RawKeyEventHandler.instance;
    
}


    private static readonly TOTAL_LISTENERS: string = "Total Listeners: ";

    private static readonly LISTENER_LABEL: string = " Listener: ";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    eventListenerInterfaceList: BasicArrayList;

public constructor (){

            super();
        this.eventListenerInterfaceList= new BasicArrayListD();
    
}


    public removeAllListeners(){
this.eventListenerInterfaceList= new BasicArrayListD();
    
}


    public addListeners(vector: BasicArrayList){

    let eventListenerInterface: RawKeyEventListener;;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
eventListenerInterface= vector.get(index) as RawKeyEventListener;
    
this.addListener(eventListenerInterface);
    
}

}


    public addListenerSingleThreaded(eventListenerInterface: RawKeyEventListener){

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface))
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}


    public addListener(eventListenerInterface: RawKeyEventListener){

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface))
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}


    public removeListenerSingleThreaded(eventListenerInterface: RawKeyEventListener){
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}


    public removeListener(eventListenerInterface: RawKeyEventListener){
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}


                //@Throws(Exception.constructor)
            
    public fireEvent(keyCode: number, deviceId: number, repeated: boolean){

    let eventListenerInterface: RawKeyEventListener;;
    

    let index: number = 0;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

 try { eventListenerInterface= this.eventListenerInterfaceList!.get(index) as RawKeyEventListener;
    
this.process(keyCode, deviceId, repeated, eventListenerInterface);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    

 }
   }
 
index++;
    
}

}


                //@Throws(Exception.constructor)
            
    process(keyCode: number, deviceId: number, repeated: boolean, eventListenerInterface: RawKeyEventListener){
eventListenerInterface!.onEventRaw(keyCode, deviceId, repeated);
    
}


    public getEventListenerInterfaceListP(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.eventListenerInterfaceList;
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(RawKeyEventHandler.TOTAL_LISTENERS);
    
stringBuffer!.appendint(this.eventListenerInterfaceList!.size());
    

    let eventListenerInterface: RawKeyEventListener;;
    

    let index: number = 0;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

 try { eventListenerInterface= this.eventListenerInterfaceList!.get(index) as RawKeyEventListener;
    
stringBuffer!.append(RawKeyEventHandler.LISTENER_LABEL);
    
stringBuffer!.append(eventListenerInterface!.toString());
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.TOSTRING, e);
    

 }
   }
 
index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

