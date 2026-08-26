
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
      const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;

      
//not game specific package import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameInput
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly gameKeyEventList: BasicArrayList;

    private readonly removalGameKeyEventList: BasicArrayList;

    readonly isRemoveDuplicateKeyPresses: boolean;

public constructor (gameKeyEventList: BasicArrayList, removalGameKeyEventList: BasicArrayList){

            super();
        this.gameKeyEventList= gameKeyEventList;
    
this.removalGameKeyEventList= removalGameKeyEventList;
    
this.isRemoveDuplicateKeyPresses= Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.REMOVE_DUPLICATE_KEY_PRESSES);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public add(gameKeyEvent: GameKeyEvent){

                        if(this.isRemoveDuplicateKeyPresses && this.gameKeyEventList!.contains(gameKeyEvent))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(gameKeyEvent != 
                                    null
                                )
                        
                                    {
                                    this.gameKeyEventList!.add(gameKeyEvent);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Danger Passed Null GameKeyEvent", this, this.commonStrings!.ADD);
    

                        }
                            
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addForRemoval(gameKeyEvent: GameKeyEvent){
this.removalGameKeyEventList!.add(gameKeyEvent);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public isForRemoval(gameKeyEvent: GameKeyEvent): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.removalGameKeyEventList!.contains(gameKeyEvent);;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public clear(){
this.gameKeyEventList!.clear();
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeNonAIInputGameKeyEvents(){

    var list: BasicArrayList = this.gameKeyEventList;;
    

    var gameKeyEvent: GameKeyEvent;;
    




                        for (
    var index: number = list.size()!;--index >= 0; )
        {
gameKeyEvent= list.objectArray[index]! as GameKeyEvent;
    

                        if(gameKeyEvent!.getSourceId() != 1)
                        
                                    {
                                    list.removeAt(index);
    

                                    }
                                
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public update(){

    var removeList: BasicArrayList = this.removalGameKeyEventList;;
    

    var list: BasicArrayList = this.gameKeyEventList;;
    

    var size: number = removeList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var anyType: any = removeList!.objectArray[index]!;;
    




                        for (
    var index2: number = list.size()!;--index2 >= 0; )
        {

                        if(list.objectArray[index2] == anyType)
                        
                                    {
                                    list.removeAt(index2);
    

                                    }
                                
}

}

removeList!.clear();
    
}


    getRemovalGameKeyEventList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.removalGameKeyEventList;
    
}


    getGameKeyEventList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameKeyEventList;
    
}


}
                
            

