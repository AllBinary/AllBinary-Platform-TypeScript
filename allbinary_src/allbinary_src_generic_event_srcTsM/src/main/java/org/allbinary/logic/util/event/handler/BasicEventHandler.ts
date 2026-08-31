
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
        
import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      //not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicEventHandlerInterface } from './BasicEventHandlerInterface.js';
//not GWT import const  = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandlerInterface;

                
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

    var stringBuffer: StringMaker = new StringMaker();;
    

    var LISTENER: string = " Listener: ";;
    
stringBuffer!.append("Total Listeners: ");
    
stringBuffer!.appendint(this.eventListenerInterfaceList!.size());
    

    var eventListenerInterface: EventListenerInterface;;
    

    var index: number = 0;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.objectArray[index]! as EventListenerInterface;
    
stringBuffer!.append(LISTENER);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(eventListenerInterface));
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.TOSTRING, e);
    
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

    var index: number = 0;;
    

    var eventListenerInterface: EventListenerInterface;;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.objectArray[index]! as EventListenerInterface;
    
this.process(eventObject, eventListenerInterface);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
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



