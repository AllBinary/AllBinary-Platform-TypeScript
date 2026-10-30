
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

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

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
//sameFolderImports - not GWT import - same folder const BasicEventHandlerInterface

export class BasicEventHandler
            extends Object
         implements BasicEventHandlerInterface {
        

    public static readonly PERFORMANCE_MESSAGE: string = "Use Custom onEvent Methods for needed optimization";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private eventListenerInterfaceList: BasicArrayList;

public constructor (){

            super();
        this.eventListenerInterfaceList= new BasicArrayListD();
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let LISTENER: string = " Listener: ";;
    
stringBuffer!.append("Total Listeners: ");
    
stringBuffer!.appendint(this.eventListenerInterfaceList!.size());
    

    let eventListenerInterface: EventListenerInterface;;
    

    let index: number = 0;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

 try { eventListenerInterface= this.eventListenerInterfaceList!.objectArray[index]! as EventListenerInterface;
    
stringBuffer!.append(LISTENER);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(eventListenerInterface));
    
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

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeAllListeners(){
this.eventListenerInterfaceList= new BasicArrayListD();
    
}


    public addListenerSingleThreaded(eventListenerInterface: EventListenerInterface){

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface))
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addListenerInterface(eventListenerInterface: EventListenerInterface){

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface))
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeListener(eventListenerInterface: EventListenerInterface){
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public fireEvent(eventObject: AllBinaryEventObject){

    let index: number = 0;;
    

    let eventListenerInterface: EventListenerInterface;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

 try { eventListenerInterface= this.eventListenerInterfaceList!.objectArray[index]! as EventListenerInterface;
    
this.process(eventObject, eventListenerInterface);
    
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
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
eventListenerInterface!.onEvent(eventObject);
    
}


    public getEventListenerInterfaceListP(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.eventListenerInterfaceList;
    
}


}

