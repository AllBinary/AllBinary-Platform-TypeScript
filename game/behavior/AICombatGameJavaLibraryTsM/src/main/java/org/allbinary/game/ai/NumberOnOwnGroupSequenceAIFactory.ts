
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
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { Hashtable } from '../../../../java/util/Hashtable.js';
      
import { ArtificialIntelligenceInterface } from '../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      
import { GameInput } from '../../../../org/allbinary/game/input/GameInput.js';
      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NumberInSameGroupSequence } from './NumberInSameGroupSequence.js';
import { NumberOnOwnGroupSequenceAI } from './NumberOnOwnGroupSequenceAI.js';

export class NumberOnOwnGroupSequenceAIFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getInstance(hashtable: Hashtable<any, any>, artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{

    var integerArray: Integer[] = NumberInSameGroupSequence.getInstance()!.NUMBER_ON_SAME_TEAM_SEQUENCE;;
    

    var list: BasicArrayList = new BasicArrayListD();;
    




                        for (
    var index: number = 0;index < integerArray!.length; index++)
        {

    var integerCanBeNull: any = hashtable.get(integerArray[index]!);;
    

                        if(integerCanBeNull == 
                                    null
                                )
                        
                                    {
                                    break;

                    

                                    }
                                
list.add(integerCanBeNull);
    
}


    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Total AI Properties: ");
    
stringBuffer!.appendint(list.size());
    
stringBuffer!.append(" == Total AI: ");
    
stringBuffer!.appendint(artificialIntelligenceInterface!.length);
    
stringBuffer!.append(" + 1");
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE);
    

                        if(artificialIntelligenceInterface!.length -1 > list.size())
                        
                                    {
                                    


                            throw new Exception("Not enough AI properties.");
                    

                                    }
                                

                        if(artificialIntelligenceInterface!.length -1 < list.size())
                        
                                    {
                                    


                            throw new Exception("Too Many AI properties.");
                    

                                    }
                                

    var numberOnSameTeam: Integer[] = new Array(list.size());;
    




                        for (
    var index: number = 0;index < numberOnSameTeam!.length; index++)
        {
numberOnSameTeam[index]= list.objectArray[index]! as Integer;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NumberOnOwnGroupSequenceAI(numberOnSameTeam, artificialIntelligenceInterface, ownerLayerInterface, gameInput);
    
}


}
                
            

