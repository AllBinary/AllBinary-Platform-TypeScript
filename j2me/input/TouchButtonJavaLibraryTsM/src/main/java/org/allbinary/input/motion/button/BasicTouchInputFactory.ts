
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

    
import { InputToGameKeyMapping } from "../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicTouchInputFactory
            extends Object
         {
        

    private static readonly SINGLETON: BasicTouchInputFactory = new BasicTouchInputFactory();
        
        

    public static getInstance(): BasicTouchInputFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly SPECIAL_BUTTON_SEVEN_TESTING_ONLY: TouchButtonInput

    public readonly SPECIAL_BUTTON_EIGHT_TESTING_ONLY: TouchButtonInput

    public readonly SPECIAL_BUTTON_SIX: TouchButtonInput

    public readonly SPECIAL_BUTTON_FIVE: TouchButtonInput

    public readonly SPECIAL_BUTTON_FOUR: TouchButtonInput

    public readonly SPECIAL_BUTTON_THREE: TouchButtonInput

    public readonly SPECIAL_BUTTON_TWO: TouchButtonInput

    public readonly SPECIAL_BUTTON_ONE: TouchButtonInput

    public readonly UP: TouchButtonInput

    public readonly LEFT: TouchButtonInput

    public readonly RIGHT: TouchButtonInput

    public readonly DOWN: TouchButtonInput

    public readonly NONE: TouchButtonInput

    private initialized: boolean = false;
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        
private constructor (){

            super();
            
    var MAX: number = InputFactory.getInstance()!.MAX;
        
        

SPECIAL_BUTTON_SEVEN_TESTING_ONLY= TouchButtonInput(MAX -41, "Button 7 - Testing Only May Cross Over Key Values")
SPECIAL_BUTTON_EIGHT_TESTING_ONLY= TouchButtonInput(MAX -42, "Button 8 - Testing Only May Cross Over Key Values")
SPECIAL_BUTTON_SIX= TouchButtonInput(MAX -30, "Button 6")
SPECIAL_BUTTON_FIVE= TouchButtonInput(MAX -31, "Button 5")
SPECIAL_BUTTON_FOUR= TouchButtonInput(MAX -32, "Button 4")
SPECIAL_BUTTON_THREE= TouchButtonInput(MAX -33, "Button 3")
SPECIAL_BUTTON_TWO= TouchButtonInput(MAX -34, "Button 2")
SPECIAL_BUTTON_ONE= TouchButtonInput(MAX -35, "Button 1")
UP= TouchButtonInput(MAX -36, "Up Button")
LEFT= TouchButtonInput(MAX -37, "Left Button")
RIGHT= TouchButtonInput(MAX -38, "Right Button")
DOWN= TouchButtonInput(MAX -39, "Down Button")
NONE= TouchButtonInput(MAX -40, "No Button")
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public init(inputToGameKeyMapping: InputToGameKeyMapping){
var inputToGameKeyMapping = inputToGameKeyMapping

                        if(!initialized)
                        
                                    {
                                    initialized= true
list.add(UP)
list.add(LEFT)
list.add(RIGHT)
list.add(DOWN)
list.add(SPECIAL_BUTTON_TWO)
list.add(SPECIAL_BUTTON_FOUR)
list.add(SPECIAL_BUTTON_THREE)
list.add(SPECIAL_BUTTON_ONE)
list.add(SPECIAL_BUTTON_FIVE)
list.add(SPECIAL_BUTTON_SIX)
list.add(SPECIAL_BUTTON_SIX)
list.add(SPECIAL_BUTTON_SEVEN_TESTING_ONLY)
list.add(SPECIAL_BUTTON_EIGHT_TESTING_ONLY)
this.this.updateAll(list, inputToGameKeyMapping)
CancelTouchButtonInputFactory.getInstance()

                                    }
                                
}


    public updateAll(inputToGameKeyMapping: InputToGameKeyMapping){
var inputToGameKeyMapping = inputToGameKeyMapping
this.this.updateAll(this.list, inputToGameKeyMapping)
}


    public updateAll(list: BasicArrayList, inputToGameKeyMapping: InputToGameKeyMapping){
var list = list
var inputToGameKeyMapping = inputToGameKeyMapping
logUtil!.put(StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.appendint(list.size())!.toString(), this, "updateAll")

    var touchButtonInput: TouchButtonInput





                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {
touchButtonInput= list.objectArray[index]! as TouchButtonInput
touchButtonInput!.update(inputToGameKeyMapping)
}

}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

