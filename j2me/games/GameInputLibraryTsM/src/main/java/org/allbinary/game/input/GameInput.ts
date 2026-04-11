
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
        



import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { InputFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js";

    
import { GameKeyEvent } from "../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class GameInput
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly gameKeyEventList: BasicArrayList

    private readonly removalGameKeyEventList: BasicArrayList

    readonly isRemoveDuplicateKeyPresses: boolean
public constructor (gameKeyEventList: BasicArrayList)                        

                            : this(gameKeyEventList, BasicArrayList()){

            super();
                //var gameKeyEventList = gameKeyEventList


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (gameKeyEventList: BasicArrayList, removalGameKeyEventList: BasicArrayList){

            super();
                //var gameKeyEventList = gameKeyEventList
    //var removalGameKeyEventList = removalGameKeyEventList
this.gameKeyEventList= gameKeyEventList;
    
this.removalGameKeyEventList= removalGameKeyEventList;
    
this.isRemoveDuplicateKeyPresses= Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.REMOVE_DUPLICATE_KEY_PRESSES);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public add(gameKeyEvent: GameKeyEvent){
var gameKeyEvent = gameKeyEvent

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
                            logUtil!.put("Danger Passed Null GameKeyEvent", this, commonStrings!.ADD);
    

                        }
                            
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addForRemoval(gameKeyEvent: GameKeyEvent){
var gameKeyEvent = gameKeyEvent
this.removalGameKeyEventList!.add(gameKeyEvent);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isForRemoval(gameKeyEvent: GameKeyEvent): boolean{
var gameKeyEvent = gameKeyEvent



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.removalGameKeyEventList!.contains(gameKeyEvent);

                        ;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public clear(){
this.gameKeyEventList!.clear();
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeNonAIInputGameKeyEvents(){

    var list: BasicArrayList = this.gameKeyEventList;
        
        
;
    

    var gameKeyEvent: GameKeyEvent
;
    




                        for (
    var index: number = list.size()!;
        
        
--index >= 0; )
        {
gameKeyEvent= list.objectArray[index]! as GameKeyEvent;
    

                        if(gameKeyEvent!.getSourceId() != 1)
                        
                                    {
                                    list.remove(index);
    

                                    }
                                
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public update(){

    var removeList: BasicArrayList = this.removalGameKeyEventList;
        
        
;
    

    var list: BasicArrayList = this.gameKeyEventList;
        
        
;
    

    var size: number = removeList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var anyType: any = removeList!.objectArray[index]!;
        
        
;
    




                        for (
    var index2: number = list.size()!;
        
        
--index2 >= 0; )
        {

                        if(list.objectArray[index2] == anyType)
                        
                                    {
                                    list.remove(index2);
    

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
                        return gameKeyEventList;
    
}


}
                
            

