
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
        



import { ArtificialIntelligenceInterface } from "../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js";

    
import { ArtificialIntelligenceTransitionInterface } from "../../../../../org/allbinary/ai/ArtificialIntelligenceTransitionInterface.js";

    
import { ArrayAI } from "../../../../../org/allbinary/game/ai/ArrayAI.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SequenceAI extends ArrayAI {
        

    private static readonly SEQUENCE_AI: string = "Sequence AI";
        
        

    private index: number= 0
public constructor (artificialIntelligenceInterfaceArray: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(artificialIntelligenceInterfaceArray, ownerLayerInterface, gameInput);
                    var artificialIntelligenceInterfaceArray = artificialIntelligenceInterfaceArray
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager
this.getArtificialIntelligenceInterface()[this.index]!.processAI(allBinaryLayerManager);
    
}


    public next(){
this.index++;
    

    var artificialIntelligenceInterface: ArtificialIntelligenceInterface = this.getSelectedArtificialIntelligenceInterface()!;
        
        
;
    

                        if(artificialIntelligenceInterface!.getId() == ArtificialIntelligenceTransitionInterface.ID)
                        
                                    {
                                    
    var artificialIntelligenceTransitionInterface: ArtificialIntelligenceTransitionInterface = (artificialIntelligenceInterface as ArtificialIntelligenceTransitionInterface);
        
        
;
    
artificialIntelligenceTransitionInterface!.transition();
    

                                    }
                                
}


    public getIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    
}


    public setIndex(index: number){
var index = index
this.index= index;
    
}


    public getSelectedArtificialIntelligenceInterface(): ArtificialIntelligenceInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getArtificialIntelligenceInterface()[this.index]!;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SEQUENCE_AI;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(" Selected AI: ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getSelectedArtificialIntelligenceInterface()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

