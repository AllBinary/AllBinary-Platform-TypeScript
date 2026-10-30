
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
        
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
//not GWT import const GameKey

import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const GameKeyFactory

import { Input } from '../../../../../org/allbinary/game/input/Input.js';
//not GWT import const Input

import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputMapping } from './InputMapping.js';
//not GWT import - same folder const InputMapping

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
    let index: number = this.platformToGameKeyMapping!.length -1;index >= 0; index--)
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
    let index: number = inputToGameKeyMapping!.getMaxMappable() -1;index >= 0; index--)
        {

    let input: Input = inputToGameKeyMapping!.getInstance(index)!;;
    

                        if(input != this.gameKeyFactory!.NONE)
                        
                                    {
                                    this.addAll(input, inputToGameKeyMapping!.getMappedInput(input));
    

                                    }
                                
}

}


    addAll(input: Input, list: BasicArrayList){




                        for (
    let index: number = list.size() -1;index >= 0; index--)
        {

    let mappedToInput: Input = list.objectArray[index]! as Input;;
    
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

    let id: number = mappedToInput!.getId()!;;
    

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

    let list: BasicArrayList = new BasicArrayListD();;
    

    let inputFactory: InputFactory = InputFactory.getInstance()!;;
    




                        for (
    let index: number = 0;index < this.platformToGameKeyMapping!.length; index++)
        {

                        if(this.platformToGameKeyMapping[index]!.getId() == id)
                        
                                    {
                                    
    let input: Input = inputFactory!.getInstanceById(index)!;;
    

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

    let key: number = canvas.getKeyCode(gameKey!.getId())!;;
    

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

    let nextKey: number = 0;;
    

    let smallestKey: number = 0;;
    




                        for (
    let index: number = this.mappedGameKeys!.length
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
    let negativePlatformToGameKeyMapping: GameKey[] = [];;
    

    let smallestKey: number = this.getSmallestCanvasGameKeyCode(canvas)!;;
    

                        if(smallestKey < 0)
                        
                                    {
                                    smallestKey--;
    

                        if(smallestKey <  -256)
                        
                                    {
                                    smallestKey=  -256;
    

                                    }
                                
negativePlatformToGameKeyMapping= new Array( -smallestKey);
    




                        for (
    let index: number = negativePlatformToGameKeyMapping!.length
                ;--index >= 0; )
        {
negativePlatformToGameKeyMapping[index]= this.gameKeyFactory!.NONE;
    
}

this.negativePlatformToGameKeyMapping= negativePlatformToGameKeyMapping;
    

                                    }
                                




                        for (
    let index: number = this.mappedGameKeys!.length
                ;--index >= 0; )
        {
this.initGameKey(canvas, this.mappedGameKeys[index]!);
    
}

 }
 catch (caught: any) {
 {
  const t = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, t);
    

 }
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

