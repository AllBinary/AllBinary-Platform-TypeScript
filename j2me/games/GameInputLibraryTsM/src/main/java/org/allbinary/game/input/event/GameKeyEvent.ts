
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
        



import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameKeyEvent extends AllBinaryEventObject {
        

    public static createEvent(anyType: any = {}, sourceId: number, key: number): GameKeyEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GameKeyEvent(anyType, sourceId, 0, 0, key, false);
    
}


    public static readonly NONE: GameKeyEvent = new GameKeyEvent(NullUtil.getInstance()!.NULL_OBJECT,  -1,  -1,  -1,  -1, false);

    private readonly sourceId: number;

    private repeated: boolean= false;

    private key: number;

    private gameActionKey: number= 0;

    private originalKey: number= 0;

public constructor (anyType: any = {}, sourceId: number, originalKey: number, gameActionKey: number, key: number, repeated: boolean){
            super(anyType);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.sourceId= sourceId;
    
this.setOriginalKey(originalKey);
    
this.key= key;
    
this.setGameActionKey(gameActionKey);
    
this.setRepeatEvents(repeated);
    
}


    public init(anyType: any = {}){
this.setSource(anyType);
    
}


    setRepeatEvents(repeated: boolean){
this.repeated= repeated;
    
}


    public hasRepeatEvents(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.repeated;
    
}


    public getKey(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.key;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("\nKey: ");
    
stringBuffer!.appendint(this.getKey());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public getOriginalKey(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.originalKey;
    
}


    public setOriginalKey(originalKey: number){
this.originalKey= originalKey;
    
}


    public getGameActionKey(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameActionKey;
    
}


    public setGameActionKey(gameActionKey: number){
this.gameActionKey= gameActionKey;
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sourceId;
    
}


}



