
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
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { GameKey } from "../../../../../org/allbinary/game/input/GameKey.js";

    
import { GameKeyFactory } from "../../../../../org/allbinary/game/input/GameKeyFactory.js";

    
import { Input } from "../../../../../org/allbinary/game/input/Input.js";

    
import { InputFactory } from "../../../../../org/allbinary/game/input/InputFactory.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class InputToGameKeyMapping extends InputMapping {
        

    public static readonly NULL_INPUT_TO_GAME_KEY_MAPPING: InputToGameKeyMapping = new InputToGameKeyMapping();
        
        

    private readonly gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
        
        

    private readonly mappedGameKeys: GameKey[] = 
                                                        [
                                                            this.gameKeyFactory!.UP,this.gameKeyFactory!.DOWN,this.gameKeyFactory!.LEFT,this.gameKeyFactory!.RIGHT
                                                        ];
        
        

    negativePlatformToGameKeyMapping: GameKey[] = new Array(0);
        
        

    private readonly platformToGameKeyMapping: GameKey[] = new Array(InputFactory.getInstance()!.MAX);
        
        
public constructor (){

            super();
            logUtil!.put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)
this.clear()
}


    clear(){




                        for (
    var index: number = platformToGameKeyMapping!.length -1;
        
        
index >= 0; index--)
        {
platformToGameKeyMapping[index]= gameKeyFactory!.NONE
}

}


    removeAll(){
super.removeAll()
this.clear()
}


    public add(inputToGameKeyMapping: InputToGameKeyMapping){
    //var inputToGameKeyMapping = inputToGameKeyMapping




                        for (
    var index: number = inputToGameKeyMapping!.getMaxMappable() -1;
        
        
index >= 0; index--)
        {

    var input: Input = inputToGameKeyMapping!.getInstance(index)!;
        
        


                        if(input != gameKeyFactory!.NONE)
                        
                                    {
                                    this.addAll(input, inputToGameKeyMapping!.getMappedInput(input))

                                    }
                                
}

}


    addAll(input: Input, list: BasicArrayList){
var input = input
var list = list




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var mappedToInput: Input = list.objectArray[index]! as Input;
        
        

this.add(input, mappedToInput)
}

}


    public add(input: Input, mappedToInput: Input){
var input = input
var mappedToInput = mappedToInput
super.add(input, mappedToInput)
this.set(input, mappedToInput)
}


    public remove(input: Input, mappedToInput: Input){
var input = input
var mappedToInput = mappedToInput
logUtil!.put(StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString(input))!.append(" == ")!.append(StringUtil.getInstance()!.toString(mappedToInput))!.toString(), this, "InputToGameKeyMapping::remove")
super.remove(input, mappedToInput)
this.set(input, gameKeyFactory!.NONE)
}


    set(input: Input, mappedToInput: Input){
var input = input
var mappedToInput = mappedToInput

    var id: number = mappedToInput!.getId()!;
        
        


                        if(id >= 0 && id < platformToGameKeyMapping!.length)
                        
                                    {
                                    this.platformToGameKeyMapping[id]= input as GameKey

                                    }
                                
}


    public getMaxMappable(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return platformToGameKeyMapping!.length;
    
}


    public getReverseInstance(id: number): BasicArrayList{
var id = id

    var list: BasicArrayList = new BasicArrayList();
        
        


    var inputFactory: InputFactory = InputFactory.getInstance()!;
        
        





                        for (
    var index: number = 0;
        
        
index < platformToGameKeyMapping!.length; index++)
        {

                        if(platformToGameKeyMapping[index]!.getId() == id)
                        
                                    {
                                    
    var input: Input = inputFactory!.getInstance(index)!;
        
        


                        if(input != 
                                    null
                                )
                        
                                    {
                                    list.add(input)

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


                //@Throws(Error::class)
            
    init(canvas: Canvas, gameKey: GameKey){
var canvas = canvas
var gameKey = gameKey

    var key: number = canvas.getKeyCode(gameKey!.getId())!;
        
        


                        if(key < 0 &&  -key < negativePlatformToGameKeyMapping!.length)
                        
                                    {
                                    negativePlatformToGameKeyMapping[ -key]= gameKey

                                    }
                                
                             else 
                        if(key > 0)
                        
                                    {
                                    
                        if(platformToGameKeyMapping[key] == gameKeyFactory!.NONE)
                        
                                    {
                                    platformToGameKeyMapping[key]= gameKey

                                    }
                                

                                    }
                                
                        else {
                            PreLogUtil.put(StringMaker().
                            append(gameKey!.toString())!.append(CommonSeps.getInstance()!.COLON_SEP)!.appendint(key)!.toString(), this, commonStrings!.INIT, Error())

                        }
                            
}


                //@Throws(Error::class)
            
    getSmallestCanvasGameKeyCode(canvas: Canvas): number{
var canvas = canvas

    var nextKey: number = 0;
        
        


    var smallestKey: number = 0;
        
        





                        for (
    var index: number = mappedGameKeys!.length
                ;
        
        
--index >= 0; )
        {
nextKey= canvas.getKeyCode(mappedGameKeys[index]!.getId())

                        if(nextKey < smallestKey)
                        
                                    {
                                    smallestKey= nextKey

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return smallestKey;
    
}


    public init(canvas: Canvas){
var canvas = canvas

        try {
            
    var negativePlatformToGameKeyMapping: GameKey[] = new Array(0);
        
        


    var smallestKey: number = this.getSmallestCanvasGameKeyCode(canvas)!;
        
        


                        if(smallestKey < 0)
                        
                                    {
                                    smallestKey--

                        if(smallestKey <  -256)
                        
                                    {
                                    smallestKey=  -256

                                    }
                                
negativePlatformToGameKeyMapping= new Array( -smallestKey)




                        for (
    var index: number = negativePlatformToGameKeyMapping!.length
                ;
        
        
--index >= 0; )
        {
negativePlatformToGameKeyMapping[index]= gameKeyFactory!.NONE
}

this.negativePlatformToGameKeyMapping= negativePlatformToGameKeyMapping

                                    }
                                




                        for (
    var index: number = mappedGameKeys!.length
                ;
        
        
--index >= 0; )
        {
this.init(canvas, mappedGameKeys[index]!)
}

} catch(t: Throwable)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, t)
}

}


    public getInstance(canvas: Canvas, id: number): GameKey{
var canvas = canvas
var id = id

                        if(id >= 0 && id < platformToGameKeyMapping!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return platformToGameKeyMapping[id]!;
    

                                    }
                                
                             else 
                        if(id < 0 &&  -id < negativePlatformToGameKeyMapping!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.negativePlatformToGameKeyMapping[ -id]!;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKeyFactory!.NONE;
    

                        }
                            
}


    public getInstance(id: number): GameKey{
var id = id

                        if(id >= 0 && id < platformToGameKeyMapping!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return platformToGameKeyMapping[id]!;
    

                                    }
                                
                             else 
                        if(id < 0 &&  -id < negativePlatformToGameKeyMapping!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.negativePlatformToGameKeyMapping[ -id]!;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKeyFactory!.NONE;
    

                        }
                            
}


}
                
            

