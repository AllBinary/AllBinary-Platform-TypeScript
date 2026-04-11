
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class RawKeyEventHandler
            extends Object
         {
        

    private static readonly instance: RawKeyEventHandler = new RawKeyEventHandler();
        
        

    public static getInstance(): RawKeyEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private static readonly TOTAL_LISTENERS: string = "Total Listeners: ";
        
        

    private static readonly LISTENER_LABEL: string = " Listener: ";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

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

    var eventListenerInterface: RawKeyEventListener
;
    

    var size: number = vector.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
eventListenerInterface= vector.get(index);

                         as RawKeyEventListener;
    
this.addListener(eventListenerInterface);
    
}

}


    public addListenerSingleThreaded(eventListenerInterface: RawKeyEventListener){
    //var eventListenerInterface = eventListenerInterface

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface);

                        )
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}


    public addListener(eventListenerInterface: RawKeyEventListener){
    //var eventListenerInterface = eventListenerInterface

                        if(!this.eventListenerInterfaceList!.contains(eventListenerInterface);

                        )
                        
                                    {
                                    this.eventListenerInterfaceList!.add(eventListenerInterface);
    

                                    }
                                
}


    public removeListenerSingleThreaded(eventListenerInterface: RawKeyEventListener){
    //var eventListenerInterface = eventListenerInterface
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}


    public removeListener(eventListenerInterface: RawKeyEventListener){
    //var eventListenerInterface = eventListenerInterface
this.eventListenerInterfaceList!.remove(eventListenerInterface);
    
}


                //@Throws(Error::class)
            
    public fireEvent(keyCode: number, deviceId: number, repeated: boolean){
    //var keyCode = keyCode
    //var deviceId = deviceId
    //var repeated = repeated

    var eventListenerInterface: RawKeyEventListener
;
    

    var index: number = 0;
        
        
;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.get(index);

                         as RawKeyEventListener;
    
this.process(keyCode, deviceId, repeated, eventListenerInterface);
    

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
            
    process(keyCode: number, deviceId: number, repeated: boolean, eventListenerInterface: RawKeyEventListener){
    //var keyCode = keyCode
    //var deviceId = deviceId
    //var repeated = repeated
    //var eventListenerInterface = eventListenerInterface
eventListenerInterface!.onEvent(keyCode, deviceId, repeated);
    
}


    public getEventListenerInterfaceListP(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return eventListenerInterfaceList;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(TOTAL_LISTENERS);
    
stringBuffer!.appendint(this.eventListenerInterfaceList!.size());
    

    var eventListenerInterface: RawKeyEventListener
;
    

    var index: number = 0;
        
        
;
    

        while(index < this.eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= this.eventListenerInterfaceList!.get(index);

                         as RawKeyEventListener;
    
stringBuffer!.append(LISTENER_LABEL);
    
stringBuffer!.append(eventListenerInterface!.toString());
    

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


}
                
            

