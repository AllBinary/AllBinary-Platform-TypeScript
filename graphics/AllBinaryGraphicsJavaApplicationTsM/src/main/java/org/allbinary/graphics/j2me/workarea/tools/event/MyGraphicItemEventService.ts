
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MyGraphicItemEventListener } from "./MyGraphicItemEventListener.js";

import { MyGraphicItemEvent } from "./MyGraphicItemEvent.js";

export class MyGraphicItemEventService
            extends Object
         {
        

    private listenerList: javax.swing.event.EventListenerList = new javax.swing.event.EventListenerList();
        
        

    public DELETE: string = "delete";
        
        

    public DESELECT: string = "deselect";
        
        

    public SELECT: string = "select";
        
        

    public DUPLICATE: string = "duplicate";
        
        

    public ROTATE: string = "rotate";
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static addListener(listener: MyGraphicItemEventListener){
var listener = listener
listenerList!.add(listenerconstructor;

                         as Class<*>, listener as java.util.EventListener);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static removeListener(listener: MyGraphicItemEventListener){
var listener = listener
listenerList!.remove(listenerconstructor;

                         as Class<*>, listener as java.util.EventListener);
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static fire(evt: MyGraphicItemEvent){
var evt = evt

    var listeners: any[] = listenerList!.getListenerList()!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < listeners.length; )
        {

                        if(listeners[i] == listeners[i +1]!.constructor)
                        
                                    {
                                    
                        if(evt.getCommand()!.compareTo(SELECT) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyGraphicItemEventListener
.
                    highlight(evt);
    

                                    }
                                
                             else 
                        if(evt.getCommand()!.compareTo(DESELECT) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyGraphicItemEventListener
.
                    deselect(evt);
    

                                    }
                                
                             else 
                        if(evt.getCommand()!.compareTo(DELETE) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyGraphicItemEventListener
.
                    delete(evt);
    

                                    }
                                
                             else 
                        if(evt.getCommand()!.compareTo(DUPLICATE) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyGraphicItemEventListener
.
                    duplicate(evt);
    

                                    }
                                
                             else 
                        if(evt.getCommand()!.compareTo(ROTATE) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyGraphicItemEventListener
.
                    rotate(evt);
    

                                    }
                                

                                    }
                                
}

}

private constructor (){

            super();
            }


}
                
            

