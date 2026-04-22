
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
 constructor (alphaValue: number, value: number, name: string){

            super();
            //var alphaValue = alphaValue
    //var value = value
    //var name = name
this.name= name;
    

    var tempValue: number= 0
;
    

    var basicColorUtil: BasicColorUtil = BasicColorUtil.getInstance()!;
        
        
;
    

                        if(basicColorUtil!.isAlpha)
                        
                                    {
                                    
                        if(basicColorUtil!.ffOpaque)
                        
                                    {
                                    tempValue= alphaValue | value;
    

                                    }
                                
                        else {
                            tempValue= 0x00000000 | value;
    

                        }
                            

                                    }
                                
                        else {
                            tempValue= value;
    

                        }
                            

    var alphaInt: number = ((tempValue>>24)&255);
        
        
;
    
this.alpha= alphaInt;
    
this.alphaComponent= (alphaInt) /255;
    

    var redInt: number = ((tempValue>>16)&255);
        
        
;
    
this.red= redInt;
    
this.redComponent= (redInt) /255;
    

    var greenInt: number = ((tempValue>>8)&255);
        
        
;
    
this.green= greenInt;
    
this.greenComponent= (greenInt) /255;
    

    var blueInt: number = ((tempValue)&255);
        
        
;
    
this.blue= blueInt;
    
this.blueComponent= (blueInt) /255;
    
this.value= tempValue;
    
}


    public intValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


    public toInt(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
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
                        return this.name;
    
}


    public getRedComponent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.redComponent;
    
}


    public getGreenComponent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.greenComponent;
    
}


    public getBlueComponent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.blueComponent;
    
}


    public getAlphaComponent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.alphaComponent;
    
}


}
                
            

