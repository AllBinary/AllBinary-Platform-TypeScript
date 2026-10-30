
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory

import { InputToGameKeyMapping } from '../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
//not GWT import const InputToGameKeyMapping

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonInput } from './TouchButtonInput.js';
//not GWT import - same folder const TouchButtonInput

export class BasicTouchInputFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): BasicTouchInputFactory{

                        if(BasicTouchInputFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    BasicTouchInputFactory.instance= new BasicTouchInputFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicTouchInputFactory.instance as BasicTouchInputFactory;
    
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

    private readonly list: BasicArrayList = new BasicArrayListD();
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public init(inputToGameKeyMapping: InputToGameKeyMapping){

                        if(!this.initialized)
                        
                                    {
                                    this.initialized= true;
    
this.list.add(this.UP);
    
this.list.add(this.LEFT);
    
this.list.add(this.RIGHT);
    
this.list.add(this.DOWN);
    
this.list.add(SPECIAL_BUTTON_TWO);
    
this.list.add(SPECIAL_BUTTON_FOUR);
    
this.list.add(SPECIAL_BUTTON_THREE);
    
this.list.add(SPECIAL_BUTTON_ONE);
    
this.list.add(SPECIAL_BUTTON_FIVE);
    
this.list.add(SPECIAL_BUTTON_SIX);
    
this.updateAllList(this.list, inputToGameKeyMapping);
    

                                    }
                                
}


    public updateAll(inputToGameKeyMapping: InputToGameKeyMapping){
this.updateAllList(this.getList(), inputToGameKeyMapping);
    
}


    public updateAllList(list: BasicArrayList, inputToGameKeyMapping: InputToGameKeyMapping){
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START)!.appendint(list.size())!.toString(), this, "updateAll");
    




                        for (
    let index: number = list.size() -1;index >= 0; index--)
        {

    let touchButtonInput: TouchButtonInput = list.get(index) as TouchButtonInput;;
    
touchButtonInput!.update(inputToGameKeyMapping);
    
}

}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list;
    
}


}

