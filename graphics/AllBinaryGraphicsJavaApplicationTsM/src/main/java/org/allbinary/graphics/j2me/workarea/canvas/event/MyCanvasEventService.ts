
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
        




export class MyCanvasEventService
            extends Object
         {
        

    private listenerList: javax.swing.event.EventListenerList = new javax.swing.event.EventListenerList();
        
        

    public DELETE: string = "delete";
        
        

    public DUPLICATE: string = "duplicate";
        
        

    public SELECT: string = "select";
        
        

    public ROTATE: string = "rotate";
        
        

    public EXPLODE: string = "explode";
        
        

    public AUTOEXPLODE: string = "autoExplode";
        
        

    public CENTER: string = "center";
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static addListener(listener: MyCanvasEventListener){
var listener = listener
add(listener::class as Class<*>, listener as java.util.EventListener)
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static removeListener(listener: MyCanvasEventListener){
var listener = listener
remove(listener::class as Class<*>, listener as java.util.EventListener)
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static fire(evt: MyCanvasEvent){
var evt = evt

    var listeners: any = {}[] = listenerList!.getListenerList()!;
        
        





                        for (
    var i: number = 0;
        
        
i < listeners.length; )
        {

    
                        if(listeners[i] == listeners[i +1]!.::class)
                        
                                    {
                                    
    
                        if(evt.getCommand()!.compareTo(DELETE) == 0)
                        
                                    {
                                    delete(evt)

                                    }
                                
                             else 
    
                        if(evt.getCommand()!.compareTo(DUPLICATE) == 0)
                        
                                    {
                                    duplicate(evt)

                                    }
                                
                             else 
    
                        if(evt.getCommand()!.compareTo(SELECT) == 0)
                        
                                    {
                                    select(evt)

                                    }
                                
                             else 
    
                        if(evt.getCommand()!.compareTo(ROTATE) == 0)
                        
                                    {
                                    rotate(evt)

                                    }
                                
                             else 
    
                        if(evt.getCommand()!.compareTo(EXPLODE) == 0)
                        
                                    {
                                    explode(evt)

                                    }
                                
                             else 
    
                        if(evt.getCommand()!.compareTo(AUTOEXPLODE) == 0)
                        
                                    {
                                    autoExplode(evt)

                                    }
                                
                             else 
    
                        if(evt.getCommand()!.compareTo(CENTER) == 0)
                        
                                    {
                                    center(evt)

                                    }
                                

                                    }
                                
}

}

private constructor (){

            super();
            }


}
                
            

