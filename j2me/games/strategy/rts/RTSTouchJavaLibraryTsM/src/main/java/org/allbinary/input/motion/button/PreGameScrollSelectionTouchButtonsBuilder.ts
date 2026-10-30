
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2007 AllBinary 
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
type BasicArrayListUtil<T = any, U = any> = typeof BasicArrayListUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseTouchInput } from './BaseTouchInput.js';
//sameFolderImports - not GWT import - same folder const BaseTouchInput
import { TouchButtonLocationHelper } from './TouchButtonLocationHelper.js';
//sameFolderImports - not GWT import - same folder const TouchButtonLocationHelper
import { CommonButtons } from './CommonButtons.js';
//sameFolderImports - not GWT import - same folder const CommonButtons
import { BasicTouchButtonCellPositionFactory } from './BasicTouchButtonCellPositionFactory.js';
//sameFolderImports - not GWT import - same folder const BasicTouchButtonCellPositionFactory
import { TouchButton } from './TouchButton.js';
//sameFolderImports - not GWT import - same folder const TouchButton
import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';
//sameFolderImports - not GWT import - same folder const BasicTouchInputFactory
import { TouchButtonStrafeLeftResource } from './TouchButtonStrafeLeftResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonStrafeLeftResource
import { TouchButtonStrafeRightResource } from './TouchButtonStrafeRightResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonStrafeRightResource
import { TouchButtonStartResource } from './TouchButtonStartResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonStartResource

export class PreGameScrollSelectionTouchButtonsBuilder extends BaseTouchInput {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public getList(): BasicArrayList{

 try { this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.GET_LIST);
    

    let list: BasicArrayList = new BasicArrayListD();;
    

    let touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();;
    

    let commonButtons: CommonButtons = CommonButtons.getInstance()!;;
    

    let basicTouchButtonCellPositionFactory: BasicTouchButtonCellPositionFactory = new BasicTouchButtonCellPositionFactory();;
    

    let LEFT: TouchButton = TouchButton.createButton(BasicTouchInputFactory.getInstance()!.LEFT, TouchButtonStrafeLeftResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.TOP_LEFT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf())!;;
    

    let RIGHT: TouchButton = TouchButton.createButton(BasicTouchInputFactory.getInstance()!.RIGHT, TouchButtonStrafeRightResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.TOP_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf())!;;
    

    let START: TouchButton = TouchButton.createButton(BasicTouchInputFactory.getInstance()!.SPECIAL_BUTTON_FIVE, TouchButtonStartResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.BOTTOM_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf())!;;
    
list.add(LEFT);
    
list.add(RIGHT);
    
list.add(START);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_LIST, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();;
    

 }
   }
 
}


}

