
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
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { InputToGameKeyMapping } from '../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
//not GWT import const InputToGameKeyMapping

import { BasicTouchInputFactory } from '../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js';
//not GWT import const BasicTouchInputFactory

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PCKeyFactory } from './PCKeyFactory.js';
//sameFolderImports - not GWT import - same folder const PCKeyFactory
import { GameKeyFactory } from './GameKeyFactory.js';
//sameFolderImports - not GWT import - same folder const GameKeyFactory

export class PlatformFormInputMappingFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): PlatformFormInputMappingFactory{

                        if(PlatformFormInputMappingFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    PlatformFormInputMappingFactory.instance= new PlatformFormInputMappingFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PlatformFormInputMappingFactory.instance as PlatformFormInputMappingFactory;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private inputToGameKeyMapping: InputToGameKeyMapping = InputToGameKeyMapping.getNullInstance()!;

    public getOrCreate(): InputToGameKeyMapping{

 try { 
                        if(this.inputToGameKeyMapping == InputToGameKeyMapping.getNullInstance())
                        
                                    {
                                    
    let pcKeyFactory: PCKeyFactory = PCKeyFactory.getInstance()!;;
    

    let inputToGameKeyMapping: InputToGameKeyMapping = new InputToGameKeyMapping();;
    

    let gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;;
    

    let basicTouchInputFactory: BasicTouchInputFactory = BasicTouchInputFactory.getInstance()!;;
    
inputToGameKeyMapping!.add(gameKeyFactory!.UP, pcKeyFactory!.DPAD_UP);
    
inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, pcKeyFactory!.DPAD_DOWN);
    
inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, pcKeyFactory!.DPAD_LEFT);
    
inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, pcKeyFactory!.DPAD_RIGHT);
    
inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM1, pcKeyFactory!.ENTER);
    
inputToGameKeyMapping!.add(gameKeyFactory!.UP, basicTouchInputFactory!.UP);
    
inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, basicTouchInputFactory!.LEFT);
    
inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, basicTouchInputFactory!.RIGHT);
    
inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, basicTouchInputFactory!.DOWN);
    
this.inputToGameKeyMapping= inputToGameKeyMapping;
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputToGameKeyMapping;
    
}


}

