
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
        
//not game specific package import { ArtificialIntelligence } from '../../../../../../org/allbinary/ai/ArtificialIntelligence.js';
      const ArtificialIntelligence = globalThis.org.allbinary.ai.ArtificialIntelligence;

      
//not game specific package import { ArtificialIntelligenceInterface } from '../../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
//not game specific package import { ArtificialIntelligenceTransitionInterface } from '../../../../../../org/allbinary/ai/ArtificialIntelligenceTransitionInterface.js';
      const ArtificialIntelligenceTransitionInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceTransitionInterface;

      
import { ArrayAI } from '../../../../../../org/allbinary/game/ag/ai/ArrayAI.js';
      //not GWT import and is game specific code const ArrayAI = globalThis.org.allbinary.game.ag.ai.ArrayAI;

      
//not game specific package import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
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



