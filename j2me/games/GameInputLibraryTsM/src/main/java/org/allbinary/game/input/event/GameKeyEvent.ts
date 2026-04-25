
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
        



import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameKeyEvent extends AllBinaryEventObject {
        

    public static create(anyType: any = {}, sourceId: number, key: number): GameKeyEvent{
var anyType = anyType
var sourceId = sourceId
var key = key



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GameKeyEvent(anyType, sourceId, 0, 0, key, false);
    
}


    public static readonly NONE: GameKeyEvent = new GameKeyEvent(NullUtil.getInstance()!.NULL_OBJECT,  -1,  -1,  -1,  -1, false);
        
        

    private readonly sourceId: number

    private repeated: boolean= false

    private key: number

    private gameActionKey: number= 0

    private originalKey: number= 0
public constructor (anyType: any = {}, sourceId: number, originalKey: number, gameActionKey: number, key: number, repeated: boolean){
            super(anyType);
                    var anyType = anyType
var sourceId = sourceId
var originalKey = originalKey
var gameActionKey = gameActionKey
var key = key
var repeated = repeated


                            //For kotlin this is before the body of the constructor.
                    
this.sourceId= sourceId;
    
this.setOriginalKey(originalKey);
    
this.key= key;
    
this.setGameActionKey(gameActionKey);
    
this.setRepeatEvents(repeated);
    
}


    public init(anyType: any = {}){
var anyType = anyType
this.setSource(anyType);
    
}


    setRepeatEvents(repeated: boolean){
var repeated = repeated
this.repeated= repeated;
    
}


    public hasRepeatEvents(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.repeated;
    
}


    public getKey(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return key;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("\nKey: ");
    
stringBuffer!.appendint(this.getKey());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public getOriginalKey(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalKey;
    
}


    public setOriginalKey(originalKey: number){
var originalKey = originalKey
this.originalKey= originalKey;
    
}


    public getGameActionKey(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameActionKey;
    
}


    public setGameActionKey(gameActionKey: number){
var gameActionKey = gameActionKey
this.gameActionKey= gameActionKey;
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return sourceId;
    
}


}
                
            

