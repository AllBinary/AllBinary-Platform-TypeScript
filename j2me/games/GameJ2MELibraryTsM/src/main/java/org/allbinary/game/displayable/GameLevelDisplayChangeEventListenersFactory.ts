
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
        



import { DisplayChangeEventHandler } from "../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js";

    
import { DisplayChangeEventListener } from "../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js";

    
import { BasicEventHandler } from "../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class GameLevelDisplayChangeEventListenersFactory
            extends Object
         {
        

    private static readonly instance: GameLevelDisplayChangeEventListenersFactory = new GameLevelDisplayChangeEventListenersFactory();
        
        

    public static getInstance(): GameLevelDisplayChangeEventListenersFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    public add(displayChangeEventListener: DisplayChangeEventListener){
var displayChangeEventListener = displayChangeEventListener
this.list.add(displayChangeEventListener);
    
DisplayChangeEventHandler.getInstance()!.addListener(displayChangeEventListener);
    
}


    public clear(){

    var displayChangeEventHandler: BasicEventHandler = DisplayChangeEventHandler.getInstance()!;
        
        
;
    

    var displayChangeEventListener: DisplayChangeEventListener
;
    




                        for (
    var index: number = this.list.size()!;
        
        
--index >= 0; )
        {
displayChangeEventListener= this.list.objectArray[index]! as DisplayChangeEventListener;
    
displayChangeEventHandler!.removeListener(displayChangeEventListener);
    
}

this.list.clear();
    
}


}
                
            

