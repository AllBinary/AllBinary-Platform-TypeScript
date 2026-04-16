
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
        



import { InputFactory } from "../../../../../org/allbinary/game/input/InputFactory.js";

    

import { BasicTouchInputFactory } from "./BasicTouchInputFactory.js";

import { UP } from "./UP.js";

import { DOWN } from "./DOWN.js";

import { LEFT } from "./LEFT.js";

import { RIGHT } from "./RIGHT.js";

export class CancelTouchButtonInputFactory
            extends Object
         {
        

    private static readonly instance: CancelTouchButtonInputFactory = new CancelTouchButtonInputFactory();
        
        

    public static getInstance(): CancelTouchButtonInputFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly cancelInputArray: TouchButtonInput[] = new Array(InputFactory.getInstance()!.MAX);
        
        
private constructor (){

            super();
            
    var basicTouchInputFactory: BasicTouchInputFactory = BasicTouchInputFactory.getInstance()!;
        
        
;
    




                        for (
    var index: number = cancelInputArray!.length -1;
        
        
index >= 0; index--)
        {
cancelInputArray[index]= basicTouchInputFactory!.NONE;
    
}

cancelInputArray[basicTouchInputFactory!.UP.getSourceId()]= basicTouchInputFactory!.DOWN;
    
cancelInputArray[basicTouchInputFactory!.DOWN.getSourceId()]= basicTouchInputFactory!.UP;
    
cancelInputArray[basicTouchInputFactory!.LEFT.getSourceId()]= basicTouchInputFactory!.RIGHT;
    
cancelInputArray[basicTouchInputFactory!.RIGHT.getSourceId()]= basicTouchInputFactory!.LEFT;
    
}


    public getCancel(touchButtonInput: TouchButtonInput): TouchButtonInput{
var touchButtonInput = touchButtonInput



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cancelInputArray[touchButtonInput!.getSourceId()]!;
    
}


}
                
            

