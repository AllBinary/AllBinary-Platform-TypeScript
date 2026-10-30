
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { ArtificialIntelligenceInterface } from '../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
//not GWT import const ArtificialIntelligenceInterface

import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput

import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NumberInSameGroupSequence } from './NumberInSameGroupSequence.js';
//not GWT import - same folder const NumberInSameGroupSequence
import { NumberOnOwnGroupSequenceAI } from './NumberOnOwnGroupSequenceAI.js';
//not GWT import - same folder const NumberOnOwnGroupSequenceAI

export class NumberOnOwnGroupSequenceAIFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getInstance(hashtable: ABHashtable<any, any>, artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{

    let integerArray: Integer[] = NumberInSameGroupSequence.getInstance()!.NUMBER_ON_SAME_TEAM_SEQUENCE;;
    

    let list: BasicArrayList = new BasicArrayListD();;
    




                        for (
    let index: number = 0;index < integerArray!.length; index++)
        {

    let integerCanBeNull: any = hashtable.get(integerArray[index]!);;
    

                        if(integerCanBeNull == 
                                    null
                                )
                        
                                    {
                                    break;

                    

                                    }
                                
list.add(integerCanBeNull);
    
}


    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Total AI Properties: ");
    
stringBuffer!.appendint(list.size());
    
stringBuffer!.append(" == Total AI: ");
    
stringBuffer!.appendint(artificialIntelligenceInterface!.length);
    
stringBuffer!.append(" + 1");
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE);
    

                        if(artificialIntelligenceInterface!.length -1 > list.size())
                        
                                    {
                                    


                            throw new Exception("Not enough AI properties.");
                    

                                    }
                                

                        if(artificialIntelligenceInterface!.length -1 < list.size())
                        
                                    {
                                    


                            throw new Exception("Too Many AI properties.");
                    

                                    }
                                

    let numberOnSameTeam: Integer[] = new Array(list.size());;
    




                        for (
    let index: number = 0;index < numberOnSameTeam!.length; index++)
        {
numberOnSameTeam[index]= list.objectArray[index]! as Integer;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NumberOnOwnGroupSequenceAI(numberOnSameTeam, artificialIntelligenceInterface, ownerLayerInterface, gameInput);
    
}


}

