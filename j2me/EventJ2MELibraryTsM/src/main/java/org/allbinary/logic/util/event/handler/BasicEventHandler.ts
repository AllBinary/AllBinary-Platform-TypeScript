
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

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { EventStrings } from "../../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicEventHandlerInterface } from "./BasicEventHandlerInterface.js";

export class BasicEventHandler
            extends Object
         implements BasicEventHandlerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly eventStrings: EventStrings = EventStrings.getInstance()!;
        
        

    eventListenerInterfaceList: BasicArrayList
public constructor (){

            super();
        this.eventListenerInterfaceList= new BasicArrayList();
    
}


    public removeAllListeners(){
this.eventListenerInterfaceList= new BasicArrayList();
    
}


    public addListeners(vector: BasicArrayList){
    //var vector = vector

    var eventListenerInterface: EventListenerInterface
;
    

    var size: number = vector.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
eventListenerInterface= vector.get(index);

                         as EventListenerInterface;
    
this.addListener(eventListenerInterface);
    
}

}


    public removeListeners(vector: BasicArrayList){
    //var vector = vector

    var eventListenerInterface: EventListenerInterface
;
    

    var size: number = vector.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
eventListenerInterface= vector.get(index);

                         as EventListenerInterface;
    
this.removeListener(eventListenerInterface);
    
}

}


    public addListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
    //var eventListenerInterface = eventListenerInterface

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface);

                        )
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}


    public addListener(eventListenerInterface: EventListenerInterface){
    //var eventListenerInterface = eventListenerInterface

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface);

                        )
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}


    public removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface){
    //var eventListenerInterface = eventListenerInterface
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}


    public removeListener(eventListenerInterface: EventListenerInterface){
    //var eventListenerInterface = eventListenerInterface
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}


                //@Throws(Error::class)
            
    public fireEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject

    var eventListenerInterface: EventListenerInterface
;
    

    var index: number = 0;
        
        
;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.get(index);

                         as EventListenerInterface;
    
this.process(eventObject, eventListenerInterface);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, eventStrings!.FIRE_EVENT, e);
    
}

index++;
    
}

}


                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
    //var eventObject = eventObject
    //var eventListenerInterface = eventListenerInterface
eventListenerInterface!.onEvent(eventObject);
    
}


    public getEventListenerInterfaceListP(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return eventListenerInterfaceList;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.eventStrings!.TOTAL_LISTENERS);
    
stringBuffer!.appendint(this.eventListenerInterfaceList!.size());
    

    var eventListenerInterface: EventListenerInterface
;
    

    var index: number = 0;
        
        
;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.get(index);

                         as EventListenerInterface;
    
stringBuffer!.append(this.eventStrings!.LISTENER_LABEL);
    
stringBuffer!.append(eventListenerInterface!.toString());
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.TOSTRING, e);
    
}

index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

