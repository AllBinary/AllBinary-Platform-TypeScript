
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { DisplayChangeEventHandler } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
//not GWT import const DisplayChangeEventHandler

import { DisplayChangeEventListener } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js';
//not GWT import const DisplayChangeEventListener

import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameLevelDisplayChangeEventListenersFactory
            extends Object
         {
        

    private static readonly instance: GameLevelDisplayChangeEventListenersFactory = new GameLevelDisplayChangeEventListenersFactory();

    public static getInstance(): GameLevelDisplayChangeEventListenersFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameLevelDisplayChangeEventListenersFactory.instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();

    public add(displayChangeEventListener: DisplayChangeEventListener){
this.list.add(displayChangeEventListener);
    
DisplayChangeEventHandler.getInstance()!.addListenerInterface(displayChangeEventListener);
    
}


    public clear(){

    let displayChangeEventHandler: BasicEventHandler = DisplayChangeEventHandler.getInstance()!;;
    

    let displayChangeEventListener: DisplayChangeEventListener;;
    




                        for (
    let index: number = this.list.size()!;--index >= 0; )
        {
displayChangeEventListener= this.list.objectArray[index]! as DisplayChangeEventListener;
    
displayChangeEventHandler!.removeListener(displayChangeEventListener);
    
}

this.list.clear();
    
}


}

