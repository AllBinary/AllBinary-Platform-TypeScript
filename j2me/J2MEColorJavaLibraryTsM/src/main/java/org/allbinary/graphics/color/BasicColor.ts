
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicColorUtil } from "./BasicColorUtil.js";

export class BasicColor
            extends Object
         {
        

    private readonly name: string

    private readonly value: number

    private readonly redComponent: number

    private readonly greenComponent: number

    private readonly blueComponent: number

    private readonly alphaComponent: number

    public readonly red: number

    public readonly green: number

    public readonly blue: number

    public readonly alpha: number

    private readonly basicColorUtil: BasicColorUtil = BasicColorUtil.getInstance()!;
        
        
public constructor (value: number)                        

                            : this(value, StringUtil.getInstance()!.EMPTY_STRING){

            super();
                //var value = value


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (alphaValue: number, value: number)                        

                            : this(alphaValue, value, StringUtil.getInstance()!.EMPTY_STRING){

            super();
                //var alphaValue = alphaValue
    //var value = value


                            //For kotlin this is before the body of the constructor.
                    
}

 constructor (value: number, name: string)                        

                            : this(BasicColorUtil.getInstance()!.ALPHA, value, name){

            super();
                //var value = value
    //var name = name


                            //For kotlin this is before the body of the constructor.
                    
}

 constructor (alphaValue: number, value: number, name: string){

            super();
                //var alphaValue = alphaValue
    //var value = value
    //var name = name
this.name= name;
    

    var tempValue: number= 0
;
    

                        if(this.basicColorUtil!.isAlpha)
                        
                                    {
                                    
                        if(this.basicColorUtil!.ffOpaque)
                        
                                    {
                                    tempValue= alphaValue or value;
    

                                    }
                                
                        else {
                            tempValue= 0x00000000 or value;
    

                        }
                            

                                    }
                                
                        else {
                            tempValue= value;
    

                        }
                            

    var alphaInt: number = ((tempValue shr 24) and 255);
        
        
;
    
this.alpha= alphaInt.toShort();
    
this.alphaComponent= (alphaInt.toFloat()) /255;
    

    var redInt: number = ((tempValue shr 16) and 255);
        
        
;
    
this.red= redInt.toShort();
    
this.redComponent= (redInt.toFloat()) /255;
    

    var greenInt: number = ((tempValue shr 8) and 255);
        
        
;
    
this.green= greenInt.toShort();
    
this.greenComponent= (greenInt.toFloat()) /255;
    

    var blueInt: number = ((tempValue) and 255);
        
        
;
    
this.blue= blueInt.toShort();
    
this.blueComponent= (blueInt.toFloat()) /255;
    
this.value= tempValue;
    
}

public constructor (alphaValue: number, r: number, g: number, b: number, name: string){

            super();
                //var alphaValue = alphaValue
    //var r = r
    //var g = g
    //var b = b
    //var name = name
this.name= name;
    
this.alpha= alphaValue.toShort();
    
this.alphaComponent= (alphaValue.toFloat()) /255;
    

    var redInt: number = r;
        
        
;
    
this.red= redInt.toShort();
    
this.redComponent= (redInt.toFloat()) /255;
    

    var greenInt: number = g;
        
        
;
    
this.green= greenInt.toShort();
    
this.greenComponent= (greenInt.toFloat()) /255;
    

    var blueInt: number = b;
        
        
;
    
this.blue= blueInt.toShort();
    
this.blueComponent= (blueInt.toFloat()) /255;
    

    var ALPHA_MASK: number = 0xFF000000.toInt();
        
        
;
    
this.value= ((alphaValue shl 24) and ALPHA_MASK) +((redInt shl 16) and 0x00FF0000) +((greenInt shl 8) and 0x0000FF00) +(blueInt and 0x000000FF);
    
}


    public intValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public toInt(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("BasicColor: ");
    
stringBuffer!.append("Alpha: ");
    
stringBuffer!.appendshort(this.alpha);
    
stringBuffer!.append(" Red: ");
    
stringBuffer!.appendshort(this.red);
    
stringBuffer!.append(" Green: ");
    
stringBuffer!.appendshort(this.green);
    
stringBuffer!.append(" Blue: ");
    
stringBuffer!.appendshort(this.blue);
    
stringBuffer!.append(" Value: ");
    
stringBuffer!.appendint(this.value);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public getRedComponent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return redComponent;
    
}


    public getGreenComponent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return greenComponent;
    
}


    public getBlueComponent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return blueComponent;
    
}


    public getAlphaComponent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return alphaComponent;
    
}


}
                
            

