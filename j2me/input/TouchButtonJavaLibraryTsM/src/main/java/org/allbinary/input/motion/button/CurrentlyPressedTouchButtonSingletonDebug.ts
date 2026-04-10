
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
        



import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class CurrentlyPressedTouchButtonSingletonDebug extends CurrentlyPressedTouchButtonSingleton {
        

    private static readonly instance: CurrentlyPressedTouchButtonSingletonDebug = new CurrentlyPressedTouchButtonSingletonDebug();
        
        

    public static getInstance(): CurrentlyPressedTouchButtonSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private string: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private listString: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private append: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private readonly PRESSED_AND_FIRED: string = "pressed & fired";
        
        

    private readonly PRESSED_AND_NOT_FIRED: string = "pressed in button but not fired";
        
        

    private readonly ASSOCIATED_RELEASED_AND_FIRED: string = "assoc. rel & fired";
        
        

    private readonly RELEASED_AND_FIRED: string = "rel & fired 1";
        
        

    private readonly RELEASED_AND_FIRED_2: string = "rel & fired 2";
        
        

    private readonly RELEASED_AND_NOT_FIRED: string = "rel & not fired";
        
        

    append(append: string, touchButtonInput: TouchButtonInput){
var append = append
var touchButtonInput = touchButtonInput

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(touchButtonInput!.toString())
stringBuffer!.append(CommonSeps.getInstance()!.SPACE)
stringBuffer!.append(append)
this.append= stringBuffer!.toString()
this.string= StringMaker().
                            append(listString)!.append(this.append)!.toString()
}


    append(append: string){
var append = append
this.append= StringMaker().
                            append(this.append)!.append(append)!.toString()
this.string= StringMaker().
                            append(listString)!.append(this.append)!.toString()
}


    public clearLog(x: number, y: number){
var x = x
var y = y
this.append= StringMaker().
                            append(GPoint.toStringStatic(x, y, 0))!.append(CommonSeps.getInstance()!.SPACE)!.toString()
this.string= StringMaker().
                            append(listString)!.append(this.append)!.toString()
}


    public releaseAndNotFired(){
this.append(RELEASED_AND_NOT_FIRED)
}


    public releaseAndFired(touchButtonInput: TouchButtonInput){
var touchButtonInput = touchButtonInput
this.append(RELEASED_AND_FIRED, touchButtonInput)
}


    public releaseAndFired2(touchButtonInput: TouchButtonInput){
var touchButtonInput = touchButtonInput
this.append(RELEASED_AND_FIRED_2, touchButtonInput)
}


    public releaseAndFiredAssociated(touchButtonInput: TouchButtonInput){
var touchButtonInput = touchButtonInput
this.append(ASSOCIATED_RELEASED_AND_FIRED, touchButtonInput)
}


    public pressedAndFired(touchButtonInput: TouchButtonInput){
var touchButtonInput = touchButtonInput
this.append(PRESSED_AND_FIRED, touchButtonInput)
}


    public pressedAndNotFired(touchButtonInput: TouchButtonInput){
var touchButtonInput = touchButtonInput
this.append(PRESSED_AND_NOT_FIRED, touchButtonInput)
}


    public remove(index: number): TouchButtonInput{
var index = index

    var touchButtonInput: TouchButtonInput = super.remove(index)!;
        
        

this.listString= list.toString()
this.string= StringMaker().
                            append(listString)!.append(this.append)!.toString()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return touchButtonInput;
    
}


    public remove(touchButtonInput: TouchButtonInput): boolean{
var touchButtonInput = touchButtonInput

    var isRemoved: boolean = super.remove(touchButtonInput)!;
        
        

this.listString= list.toString()
this.string= StringMaker().
                            append(listString)!.append(this.append)!.toString()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isRemoved;
    
}


    public add(touchButtonInput: TouchButtonInput){
var touchButtonInput = touchButtonInput
super.add(touchButtonInput)
this.listString= list.toString()
this.string= StringMaker().
                            append(listString)!.append(this.append)!.toString()
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return string;
    
}


}
                
            

