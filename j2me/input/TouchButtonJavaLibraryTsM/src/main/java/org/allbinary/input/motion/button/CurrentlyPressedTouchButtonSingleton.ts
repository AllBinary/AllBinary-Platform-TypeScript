
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
        



import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TouchButtonInput } from "./TouchButtonInput.js";

export class CurrentlyPressedTouchButtonSingleton
            extends Object
         {
        

    private static readonly instance: CurrentlyPressedTouchButtonSingleton = new CurrentlyPressedTouchButtonSingleton();
        
        

    public static getInstance(): CurrentlyPressedTouchButtonSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly list: BasicArrayList = new BasicArrayList();
        
        
protected constructor (){

            super();
        }


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.size();

                        ;
    
}


    public remove(index: number): TouchButtonInput{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.remove(index);

                         as TouchButtonInput;
    
}


    public remove(touchButtonInput: TouchButtonInput): boolean{
var touchButtonInput = touchButtonInput



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.remove(touchButtonInput);

                        ;
    
}


    public get(index: number): TouchButtonInput{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.objectArray[index]! as TouchButtonInput;
    
}


    public contains(touchButtonInput: TouchButtonInput): boolean{
var touchButtonInput = touchButtonInput



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.contains(touchButtonInput);

                        ;
    
}


    public add(touchButtonInput: TouchButtonInput){
var touchButtonInput = touchButtonInput
this.list.add(touchButtonInput);
    
}


}
                
            

