
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CancelTouchButtonInputFactory } from "./CancelTouchButtonInputFactory.js";

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
        
        
;
    
this.SPECIAL_BUTTON_SEVEN_TESTING_ONLY= new TouchButtonInput(MAX -41, "Button 7 - Testing Only May Cross Over Key Values");
    
this.SPECIAL_BUTTON_EIGHT_TESTING_ONLY= new TouchButtonInput(MAX -42, "Button 8 - Testing Only May Cross Over Key Values");
    
this.SPECIAL_BUTTON_SIX= new TouchButtonInput(MAX -30, "Button 6");
    
this.SPECIAL_BUTTON_FIVE= new TouchButtonInput(MAX -31, "Button 5");
    
this.SPECIAL_BUTTON_FOUR= new TouchButtonInput(MAX -32, "Button 4");
    
this.SPECIAL_BUTTON_THREE= new TouchButtonInput(MAX -33, "Button 3");
    
this.SPECIAL_BUTTON_TWO= new TouchButtonInput(MAX -34, "Button 2");
    
this.SPECIAL_BUTTON_ONE= new TouchButtonInput(MAX -35, "Button 1");
    
this.UP= new TouchButtonInput(MAX -36, "Up Button");
    
this.LEFT= new TouchButtonInput(MAX -37, "Left Button");
    
this.RIGHT= new TouchButtonInput(MAX -38, "Right Button");
    
this.DOWN= new TouchButtonInput(MAX -39, "Down Button");
    
this.NONE= new TouchButtonInput(MAX -40, "No Button");
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public init(inputToGameKeyMapping: InputToGameKeyMapping){
var inputToGameKeyMapping = inputToGameKeyMapping

                        if(!this.initialized)
                        
                                    {
                                    this.initialized= true;
    
this.list.add(this.UP);
    
this.list.add(this.LEFT);
    
this.list.add(this.RIGHT);
    
this.list.add(this.DOWN);
    
this.list.add(this.SPECIAL_BUTTON_TWO);
    
this.list.add(this.SPECIAL_BUTTON_FOUR);
    
this.list.add(this.SPECIAL_BUTTON_THREE);
    
this.list.add(this.SPECIAL_BUTTON_ONE);
    
this.list.add(this.SPECIAL_BUTTON_FIVE);
    
this.list.add(this.SPECIAL_BUTTON_SIX);
    
this.list.add(this.SPECIAL_BUTTON_SIX);
    
this.list.add(this.SPECIAL_BUTTON_SEVEN_TESTING_ONLY);
    
this.list.add(this.SPECIAL_BUTTON_EIGHT_TESTING_ONLY);
    
this.updateAll(this.list, inputToGameKeyMapping);
    
CancelTouchButtonInputFactory.getInstance();
    

                                    }
                                
}


    public updateAll(inputToGameKeyMapping: InputToGameKeyMapping){
var inputToGameKeyMapping = inputToGameKeyMapping
this.updateAll(this.list, inputToGameKeyMapping);
    
}


    public updateAll(list: BasicArrayList, inputToGameKeyMapping: InputToGameKeyMapping){
var list = list
var inputToGameKeyMapping = inputToGameKeyMapping
this.logUtil!.putF(new StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.appendint(list.size())!.toString(), this, "updateAll");
    

    var touchButtonInput: TouchButtonInput
;
    




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {
touchButtonInput= list.objectArray[index]! as TouchButtonInput;
    
touchButtonInput!.update(inputToGameKeyMapping);
    
}

}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

