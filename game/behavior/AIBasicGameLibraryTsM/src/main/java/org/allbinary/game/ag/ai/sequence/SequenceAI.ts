
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { ArtificialIntelligence } from '../../../../../../org/allbinary/ai/ArtificialIntelligence.js';
      //not GWT import const ArtificialIntelligence = globalThis.org.allbinary.ai.ArtificialIntelligence;

      
import { ArtificialIntelligenceInterface } from '../../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      //not GWT import const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
import { ArtificialIntelligenceTransitionInterface } from '../../../../../../org/allbinary/ai/ArtificialIntelligenceTransitionInterface.js';
      //not GWT import const ArtificialIntelligenceTransitionInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceTransitionInterface;

      
import { ArrayAI } from '../../../../../../org/allbinary/game/ag/ai/ArrayAI.js';
      //not GWT import const ArrayAI = globalThis.org.allbinary.game.ag.ai.ArrayAI;

      
import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      //not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SequenceAI extends ArrayAI {
        

    private static readonly SEQUENCE_AI: string = "Sequence AI";

    private index: number= 0;

public constructor (artificialIntelligenceInterfaceArray: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(artificialIntelligenceInterfaceArray, ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
this.getArtificialIntelligenceInterface()[this.index]!.processAI(allBinaryLayerManager);
    
}


    public next(){
this.index++;
    

    var artificialIntelligenceInterface: ArtificialIntelligenceInterface = this.getSelectedArtificialIntelligenceInterface()!;;
    

                        if(artificialIntelligenceInterface!.getId() == ArtificialIntelligence.AI_ID)
                        
                                    {
                                    
    var artificialIntelligenceTransitionInterface: ArtificialIntelligenceTransitionInterface = artificialIntelligenceInterface as unknown as ArtificialIntelligenceTransitionInterface;;
    
artificialIntelligenceTransitionInterface!.transition();
    

                                    }
                                
}


    public getIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.index;
    
}


    public setIndex(index: number){
this.index= index;
    
}


    public getSelectedArtificialIntelligenceInterface(): ArtificialIntelligenceInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getArtificialIntelligenceInterface()[this.index]!;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SequenceAI.SEQUENCE_AI;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(" Selected AI: ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getSelectedArtificialIntelligenceInterface()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



