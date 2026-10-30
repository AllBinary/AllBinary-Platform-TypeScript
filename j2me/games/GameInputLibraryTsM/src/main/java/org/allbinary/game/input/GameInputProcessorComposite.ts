
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PlayerGameInput } from './PlayerGameInput.js';
//not GWT import - same folder const PlayerGameInput
import { GameInputProcessorInterface } from './GameInputProcessorInterface.js';
//not GWT import - same folder const GameInputProcessorInterface

export class GameInputProcessorComposite extends PlayerGameInput {
        

    private readonly name: string;

    private readonly gameInputProcessorInterface: GameInputProcessorInterface;

public constructor (name: string, gameInputProcessorInterface: GameInputProcessorInterface){
            super(new BasicArrayListD(), new BasicArrayListD(),  -1);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.name= name;
    
this.gameInputProcessorInterface= gameInputProcessorInterface;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public update(){

 try { 
    let list: BasicArrayList = this.getGameKeyEventList()!;;
    
this.gameInputProcessorInterface!.onInput(list);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e);
    

 }
   }
 
}


    private readonly NAME_LABEL: string = " GameInputProcessorInterface: ";

    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append(super.toString())!.append(this.NAME_LABEL)!.append(this.name)!.toString();;
    
}


}

