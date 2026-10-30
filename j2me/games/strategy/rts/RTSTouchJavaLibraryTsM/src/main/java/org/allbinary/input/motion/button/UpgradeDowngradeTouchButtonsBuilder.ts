
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
        
import { TouchButtonDowngradeResource } from '../../../../../org/allbinary/game/input/resource/TouchButtonDowngradeResource.js';
//not GWT import const TouchButtonDowngradeResource

import { TouchButtonUpgradeResource } from '../../../../../org/allbinary/game/input/resource/TouchButtonUpgradeResource.js';
//not GWT import const TouchButtonUpgradeResource

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

import { CellPositionFactory } from '../../../../../org/allbinary/graphics/CellPositionFactory.js';
//not GWT import const CellPositionFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseTouchInput } from './BaseTouchInput.js';
//sameFolderImports - not GWT import - same folder const BaseTouchInput
import { TouchButtonLocationHelper } from './TouchButtonLocationHelper.js';
//sameFolderImports - not GWT import - same folder const TouchButtonLocationHelper
import { BasicTouchButtonCellPositionFactory } from './BasicTouchButtonCellPositionFactory.js';
//sameFolderImports - not GWT import - same folder const BasicTouchButtonCellPositionFactory
import { CommonButtons } from './CommonButtons.js';
//sameFolderImports - not GWT import - same folder const CommonButtons
import { TouchButton } from './TouchButton.js';
//sameFolderImports - not GWT import - same folder const TouchButton
import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';
//sameFolderImports - not GWT import - same folder const BasicTouchInputFactory

export class UpgradeDowngradeTouchButtonsBuilder extends BaseTouchInput {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public getList(): BasicArrayList{

 try { this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

    let list: BasicArrayList = new BasicArrayListD();;
    

    let touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();;
    

    let cellPositionFactory: CellPositionFactory = CellPositionFactory.getInstance()!;;
    

    let basicTouchButtonCellPositionFactory: BasicTouchButtonCellPositionFactory = new BasicTouchButtonCellPositionFactory();;
    

                        if(basicTouchButtonCellPositionFactory!.SECOND_FROM_TOP_LEFT != cellPositionFactory!.NONE && basicTouchButtonCellPositionFactory!.SECOND_FROM_TOP_RIGHT != cellPositionFactory!.NONE)
                        
                                    {
                                    
    let commonButtons: CommonButtons = CommonButtons.getInstance()!;;
    

    let UP: TouchButton = TouchButton.createButton(BasicTouchInputFactory.getInstance()!.SPECIAL_BUTTON_TWO, TouchButtonUpgradeResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.SECOND_FROM_TOP_LEFT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf())!;;
    

    let DOWN: TouchButton = TouchButton.createButton(BasicTouchInputFactory.getInstance()!.SPECIAL_BUTTON_ONE, TouchButtonDowngradeResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.SECOND_FROM_TOP_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf())!;;
    
list.add(UP);
    
list.add(DOWN);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();;
    

 }
   }
 
}


}

