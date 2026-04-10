
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
        
        

    public readonly SPECIAL_BUTTON_SIX: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -30, "Button 6");
        
        

    public readonly SPECIAL_BUTTON_FIVE: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -31, "Button 5");
        
        

    public readonly SPECIAL_BUTTON_FOUR: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -32, "Button 4");
        
        

    public readonly SPECIAL_BUTTON_THREE: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -33, "Button 3");
        
        

    public readonly SPECIAL_BUTTON_TWO: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -34, "Button 2");
        
        

    public readonly SPECIAL_BUTTON_ONE: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -35, "Button 1");
        
        

    public readonly UP: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -36, "Up Button");
        
        

    public readonly LEFT: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -37, "Left Button");
        
        

    public readonly RIGHT: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -38, "Right Button");
        
        

    public readonly DOWN: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -39, "Down Button");
        
        

    public readonly NONE: TouchButtonInput = new TouchButtonInput(InputFactory.getInstance()!.MAX -40, "No Button");
        
        

    private initialized: boolean = false;
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        
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
this.updateAll(list, inputToGameKeyMapping)
CancelTouchButtonInputFactory.getInstance()

                                    }
                                
}


    public updateAll(inputToGameKeyMapping: InputToGameKeyMapping){
var inputToGameKeyMapping = inputToGameKeyMapping
this.updateAll(this.getList(), inputToGameKeyMapping)
}


    public updateAll(list: BasicArrayList, inputToGameKeyMapping: InputToGameKeyMapping){
var list = list
var inputToGameKeyMapping = inputToGameKeyMapping
logUtil!.put(StringMaker().
                            append(CommonLabels.getInstance()!.START)!.appendint(list.size())!.toString(), this, "updateAll")




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var touchButtonInput: TouchButtonInput = list.get(index) as TouchButtonInput;
        
        

touchButtonInput!.update(inputToGameKeyMapping)
}

}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

