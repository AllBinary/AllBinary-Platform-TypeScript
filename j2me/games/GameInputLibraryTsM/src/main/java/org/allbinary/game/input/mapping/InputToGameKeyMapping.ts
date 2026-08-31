
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

        


            import { Throwable } from '../../../../../java/lang/Throwable.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
      //not GWT import const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
      //not GWT import const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
import { Input } from '../../../../../org/allbinary/game/input/Input.js';
      //not GWT import const Input = globalThis.org.allbinary.game.input.Input;

      
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
      //not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

      
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputMapping } from './InputMapping.js';
//not GWT import const InputMapping = globalThis.org.allbinary.game.input.mapping.InputMapping;

                
export class InputToGameKeyMapping extends InputMapping {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getNullInstance(): InputToGameKeyMapping{

                        if(InputToGameKeyMapping.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    InputToGameKeyMapping.instance= new InputToGameKeyMapping();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputToGameKeyMapping.instance as InputToGameKeyMapping;
    
}


    private readonly gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;

    private readonly mappedGameKeys: GameKey[] = 
                                                        [
                                                            this.gameKeyFactory!.UP,this.gameKeyFactory!.DOWN,this.gameKeyFactory!.LEFT,this.gameKeyFactory!.RIGHT
                                                        ];

    private readonly platformToGameKeyMapping: GameKey[] = new Array(InputFactory.getInstance()!.MAX);

    negativePlatformToGameKeyMapping: GameKey[] = [];

public constructor (){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.clear();
    
}


    clear(){




                        for (
    var index: number = this.platformToGameKeyMapping!.length -1;index >= 0; index--)
        {
this.platformToGameKeyMapping[index]= this.gameKeyFactory!.NONE;
    
}

}


    removeAll(){
super.removeAll();
    
this.clear();
    
}


    public addMapping(inputToGameKeyMapping: InputToGameKeyMapping){




                        for (
    var index: number = inputToGameKeyMapping!.getMaxMappable() -1;index >= 0; index--)
        {

    var input: Input = inputToGameKeyMapping!.getInstance(index)!;;
    

                        if(input != this.gameKeyFactory!.NONE)
                        
                                    {
                                    this.addAll(input, inputToGameKeyMapping!.getMappedInput(input));
    

                                    }
                                
}

}


    addAll(input: Input, list: BasicArrayList){




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {

    var mappedToInput: Input = list.objectArray[index]! as Input;;
    
this.add(input, mappedToInput);
    
}

}


    public add(input: Input, mappedToInput: Input){
super.add(input, mappedToInput);
    
this.set(input, mappedToInput);
    
}


    public remove(input: Input, mappedToInput: Input){
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString(input))!.append(" == ")!.append(StringUtil.getInstance()!.toString(mappedToInput))!.toString(), this, "InputToGameKeyMapping::remove");
    
super.remove(input, mappedToInput);
    
this.set(input, this.gameKeyFactory!.NONE);
    
}


    set(input: Input, mappedToInput: Input){

    var id: number = mappedToInput!.getId()!;;
    

                        if(id >= 0 && id < this.platformToGameKeyMapping!.length)
                        
                                    {
                                    this.platformToGameKeyMapping[id]= input as GameKey;
    

                                    }
                                
}


    public getMaxMappable(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.platformToGameKeyMapping!.length;
    
}


    public getReverseInstance(id: number): BasicArrayList{

    var list: BasicArrayList = new BasicArrayListD();;
    

    var inputFactory: InputFactory = InputFactory.getInstance()!;;
    




                        for (
    var index: number = 0;index < this.platformToGameKeyMapping!.length; index++)
        {

                        if(this.platformToGameKeyMapping[index]!.getId() == id)
                        
                                    {
                                    
    var input: Input = inputFactory!.getInstanceById(index)!;;
    

                        if(input != 
                                    null
                                )
                        
                                    {
                                    list.add(input);
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


                //@Throws(Exception.constructor)
            
    initGameKey(canvas: Canvas, gameKey: GameKey){

    var key: number = canvas.getKeyCode(gameKey!.getId())!;;
    

                        if(key < 0 &&  -key < this.negativePlatformToGameKeyMapping!.length)
                        
                                    {
                                    this.negativePlatformToGameKeyMapping[ -key]= gameKey;
    

                                    }
                                
                             else 
                        if(key > 0)
                        
                                    {
                                    
                        if(this.platformToGameKeyMapping[key] == this.gameKeyFactory!.NONE)
                        
                                    {
                                    this.platformToGameKeyMapping[key]= gameKey;
    

                                    }
                                

                                    }
                                
                        else {
                            PreLogUtil.putOE(new StringMaker().append(gameKey!.toString())!.append(CommonSeps.getInstance()!.COLON_SEP)!.appendint(key)!.toString(), this, this.commonStrings!.INIT, new Exception());
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    getSmallestCanvasGameKeyCode(canvas: Canvas): number{

    var nextKey: number = 0;;
    

    var smallestKey: number = 0;;
    




                        for (
    var index: number = this.mappedGameKeys!.length
                ;--index >= 0; )
        {
nextKey= canvas.getKeyCode(this.mappedGameKeys[index]!.getId());
    

                        if(nextKey < smallestKey)
                        
                                    {
                                    smallestKey= nextKey;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return smallestKey;
    
}


    public init(canvas: Canvas){

        try {
            
    var negativePlatformToGameKeyMapping: GameKey[] = [];;
    

    var smallestKey: number = this.getSmallestCanvasGameKeyCode(canvas)!;;
    

                        if(smallestKey < 0)
                        
                                    {
                                    smallestKey--;
    

                        if(smallestKey <  -256)
                        
                                    {
                                    smallestKey=  -256;
    

                                    }
                                
negativePlatformToGameKeyMapping= new Array( -smallestKey);
    




                        for (
    var index: number = negativePlatformToGameKeyMapping!.length
                ;--index >= 0; )
        {
negativePlatformToGameKeyMapping[index]= this.gameKeyFactory!.NONE;
    
}

this.negativePlatformToGameKeyMapping= negativePlatformToGameKeyMapping;
    

                                    }
                                




                        for (
    var index: number = this.mappedGameKeys!.length
                ;--index >= 0; )
        {
this.initGameKey(canvas, this.mappedGameKeys[index]!);
    
}


                //: 
} catch(t) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, t);
    
}

}


    public getInstanceForCanvas(canvas: Canvas, id: number): GameKey{

                        if(id >= 0 && id < this.platformToGameKeyMapping!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.platformToGameKeyMapping[id]!;
    

                                    }
                                
                             else 
                        if(id < 0 &&  -id < this.negativePlatformToGameKeyMapping!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.negativePlatformToGameKeyMapping[ -id]!;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameKeyFactory!.NONE;
    

                        }
                            
}


    public getInstance(id: number): GameKey{

                        if(id >= 0 && id < this.platformToGameKeyMapping!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.platformToGameKeyMapping[id]!;
    

                                    }
                                
                             else 
                        if(id < 0 &&  -id < this.negativePlatformToGameKeyMapping!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.negativePlatformToGameKeyMapping[ -id]!;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameKeyFactory!.NONE;
    

                        }
                            
}


}



