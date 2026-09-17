
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject
import { EventListenerInterface } from '../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnalogControllerConfigurationEventListenerInterface } from './AnalogControllerConfigurationEventListenerInterface.js';
//not GWT import - same folder const AnalogControllerConfigurationEventListenerInterfaceimport { AnalogControllerConfigurationEvent } from './AnalogControllerConfigurationEvent.js';
//not GWT import - same folder const AnalogControllerConfigurationEvent
export class AnalogControllerConfigurationEventHandler extends BasicEventHandler {
        

    private static readonly instance: AnalogControllerConfigurationEventHandler = new AnalogControllerConfigurationEventHandler();

    public static getInstance(): AnalogControllerConfigurationEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AnalogControllerConfigurationEventHandler.instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();

private constructor (){

            super();
        }


    public addListener(analogControllerConfigurationEventListenerInterface: AnalogControllerConfigurationEventListenerInterface){

                        if(!this.list.contains(analogControllerConfigurationEventListenerInterface))
                        
                                    {
                                    this.list.add(analogControllerConfigurationEventListenerInterface);
    

                                    }
                                
}


    public removeAllListeners(){
this.list.clear();
    
super.removeAllListeners();
    
}


    public removeListener(eventListenerInterface: EventListenerInterface){
this.list.remove(eventListenerInterface);
    
super.removeListener(eventListenerInterface);
    
}


                //@Throws(Exception.constructor)
            
    public fireEvent(eventObject: AllBinaryEventObject){




                        for (
    var index: number = this.list.size()!;--index >= 0; )
        {

        try {
            
    var playerGameInput: AnalogControllerConfigurationEventListenerInterface = this.list.objectArray[index]! as AnalogControllerConfigurationEventListenerInterface;;
    
playerGameInput!.onAnalogControllerConfigurationEvent(eventObject as AnalogControllerConfigurationEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}

super.fireEvent(eventObject);
    
}


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    var analogControllerConfigurationEventListenerInterface: AnalogControllerConfigurationEventListenerInterface = (eventListenerInterface as AnalogControllerConfigurationEventListenerInterface);;
    
analogControllerConfigurationEventListenerInterface!.onAnalogControllerConfigurationEvent(eventObject as AnalogControllerConfigurationEvent);
    
}


}



