
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
        



import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonPhoneStrings } from "../../../../../../org/allbinary/string/CommonPhoneStrings.js";

    

export class Money
            extends Object
         {
        

    private units: Long

    private readonly DEFAULT_CURRENCY: string = "USD";
        
        
public constructor (money: Money){

            super();
            var money = money
this.units= money.getUnits() as Long;
    
}

public constructor (){

            super();
            this.units= 0 as Long;
    
}

public constructor (usDollarStr: string){

            super();
            var usDollarStr = usDollarStr

                        if(usDollarStr != 
                                    null
                                 && StringValidationUtil.getInstance()!.isNumber(usDollarStr))
                        
                                    {
                                    this.units= convertUsdToUnits(usDollarStr) as Long;
    

                                    }
                                
}

public constructor (units: number){

            super();
            var units = units
this.units= units as Long;
    
}


    public isValid(): boolean{

                        if(this.units != 
                                    null
                                 && this.units.longValue() > 0 && this.units.longValue() < Long.MAX_VALUE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public add(moreMoney: Money){
var moreMoney = moreMoney
this.add(moreMoney!.toString());
    
}


    public add(usDollarStr: string){
var usDollarStr = usDollarStr
this.units= this.units.longValue() +convertUsdToUnits(usDollarStr) as Long;
    
}


    public subtract(usDollarStr: string){
var usDollarStr = usDollarStr
this.units= this.units.longValue() -convertUsdToUnits(usDollarStr) as Long;
    
}


    public multiply(multiplier: Float){
var multiplier = multiplier
this.units= Float(this.units.longValue() *multiplier.toFloat()).
                            longValue() as Long;
    
}


    public multiply(multiplier: number){
var multiplier = multiplier
this.units= this.units.longValue() *multiplier as Long;
    
}


    convertUnitsTo(currency: string): string{
var currency = currency

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(currency.compareTo(DEFAULT_CURRENCY) == 0)
                        
                                    {
                                    
    var dollar: number = units.longValue() /100;
        
        
;
    

    var cents: number = units.longValue() -(dollar *100);
        
        
;
    
stringBuffer!.append(dollar as Long.
                            toString());
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    

                        if(cents < 10)
                        
                                    {
                                    stringBuffer!.append(CommonPhoneStrings.getInstance()!.ZERO);
    

                                    }
                                
stringBuffer!.append(cents as Long.
                            toString());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    convertUsdToUnits(usDollarStr: string): number{
var usDollarStr = usDollarStr

    var localUnit: number = 0;
        
        
;
    

    var index: number = usDollarStr!.indexOf(AbPathData.getInstance()!.EXTENSION_SEP)!;
        
        
;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var dollarStr: string = stringUtil!.EMPTY_STRING;
        
        
;
    

    var centsStr: string = stringUtil!.EMPTY_STRING;
        
        
;
    

                        if(index < 1)
                        
                                    {
                                    dollarStr= usDollarStr.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    
centsStr= "00";
    

                                    }
                                
                        else {
                            dollarStr= substring.toCharArray();
    
centsStr= substring.toCharArray();
    

                        }
                            
localUnit= dollarStr as Long.
                            longValue() *100 as Long.
                            longValue();
    
localUnit += centsStr as Long.
                            longValue();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return localUnit;
    
}


    public getUnits(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return units.longValue();

                        ;
    
}


    public getUnitsLong(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return units;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return convertUnitsTo.toCharArray();
    
}


}
                
            

