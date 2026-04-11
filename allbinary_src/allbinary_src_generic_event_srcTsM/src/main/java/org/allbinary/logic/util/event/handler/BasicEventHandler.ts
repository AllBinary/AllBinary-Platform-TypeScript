
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { EventStrings } from "../../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicEventHandler
            extends Object
        
                , BasicEventHandlerInterface {
        

    public static readonly PERFORMANCE_MESSAGE: string = "Use Custom onEvent Methods for needed optimization";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private eventListenerInterfaceList: BasicArrayList
public constructor (){

            super();
            this.eventListenerInterfaceList= new BasicArrayList();
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var LISTENER: string = " Listener: ";
        
        
;
    
stringBuffer!.append("Total Listeners: ");
    
stringBuffer!.appendint(this.eventListenerInterfaceList!.size());
    

    var eventListenerInterface: EventListenerInterface
;
    

    var index: number = 0;
        
        
;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.objectArray[index]! as EventListenerInterface;
    
stringBuffer!.append(LISTENER);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(eventListenerInterface));
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.TOSTRING, e);
    
}

index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeAllListeners(){
this.eventListenerInterfaceList= new BasicArrayList();
    
}


    public addListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface);

                        )
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addListener(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface);

                        )
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeListener(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public fireEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject

    var index: number = 0;
        
        
;
    

    var eventListenerInterface: EventListenerInterface
;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.objectArray[index]! as EventListenerInterface;
    
this.process(eventObject, eventListenerInterface);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

index++;
    
}

}


                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
var eventObject = eventObject
var eventListenerInterface = eventListenerInterface
eventListenerInterface!.onEvent(eventObject);
    
}


    public getEventListenerInterfaceListP(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return eventListenerInterfaceList;
    
}


}
                
            

