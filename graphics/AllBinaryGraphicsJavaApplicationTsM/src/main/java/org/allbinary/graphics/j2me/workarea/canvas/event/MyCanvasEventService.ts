
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
        



            import { Object } from "../../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../../java/lang/Exception.js";
        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EventListenerList } from "./EventListenerList.js";
import { EventListener } from "./EventListener.js";
import { MyCanvasEventListener } from "./MyCanvasEventListener.js";
import { MyCanvasEvent } from "./MyCanvasEvent.js";

export class MyCanvasEventService
            extends Object
         {
        

    private static listenerList: javax.swing.event.EventListenerList = new javax.swing.event.EventListenerList();

    public static DELETE: string = "delete";

    public static DUPLICATE: string = "duplicate";

    public static SELECT: string = "select";

    public static ROTATE: string = "rotate";

    public static EXPLODE: string = "explode";

    public static AUTOEXPLODE: string = "autoExplode";

    public static CENTER: string = "center";
//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static addListener(listener: MyCanvasEventListener){
var listener = listener
MyCanvasEventService.listenerList!.add(listener.constructor as Class<*>, listener as java.util.EventListener);
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static removeListener(listener: MyCanvasEventListener){
var listener = listener
MyCanvasEventService.listenerList!.remove(listener.constructor as Class<*>, listener as java.util.EventListener);
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static fire(evt: MyCanvasEvent){
var evt = evt

    var listeners: any[] = listenerList!.getListenerList()!;
;
    




                        for (
    var i: number = 0;
i < listeners.length; )
        {

                        if(listeners[i] == listeners[i +1]!.constructor)
                        
                                    {
                                    
                        if(evt.getCommand()!.localeCompare(MyCanvasEventService.DELETE) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyCanvasEventListener
.
                    delete(evt);
    

                                    }
                                
                             else 
                        if(evt.getCommand()!.localeCompare(MyCanvasEventService.DUPLICATE) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyCanvasEventListener
.
                    duplicate(evt);
    

                                    }
                                
                             else 
                        if(evt.getCommand()!.localeCompare(MyCanvasEventService.SELECT) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyCanvasEventListener
.
                    select(evt);
    

                                    }
                                
                             else 
                        if(evt.getCommand()!.localeCompare(MyCanvasEventService.ROTATE) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyCanvasEventListener
.
                    rotate(evt);
    

                                    }
                                
                             else 
                        if(evt.getCommand()!.localeCompare(MyCanvasEventService.EXPLODE) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyCanvasEventListener
.
                    explode(evt);
    

                                    }
                                
                             else 
                        if(evt.getCommand()!.localeCompare(MyCanvasEventService.AUTOEXPLODE) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyCanvasEventListener
.
                    autoExplode(evt);
    

                                    }
                                
                             else 
                        if(evt.getCommand()!.localeCompare(MyCanvasEventService.CENTER) == 0)
                        
                                    {
                                     = listeners[i +1]! as MyCanvasEventListener
.
                    center(evt);
    

                                    }
                                

                                    }
                                
}

}

private constructor (){

            super();
        }


}
                
            

