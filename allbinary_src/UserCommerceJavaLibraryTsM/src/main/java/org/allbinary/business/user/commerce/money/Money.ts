
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Long } from '../../../../../../java/lang/Long.js';
        
import { AbPathData } from '../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      
import { CommonPhoneStrings } from '../../../../../../org/allbinary/string/CommonPhoneStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Money
            extends Object
         {
        

    private units: Long

    private readonly DEFAULT_CURRENCY: string = "USD";
public constructor (money: Money){

            super();
        var money = money
this.units= new Long(money.getUnits());
    
}

public constructor (){

            super();
        this.units= new Long(0);
    
}

public constructor (usDollarStr: string){

            super();
        var usDollarStr = usDollarStr

                        if(usDollarStr != 
                                    null
                                 && StringValidationUtil.getInstance()!.isNumber(usDollarStr))
                        
                                    {
                                    this.units= new Long(convertUsdToUnits(usDollarStr));
    

                                    }
                                
}

public constructor (units: number){

            super();
        var units = units
this.units= new Long(units);
    
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
this.units= new Long(this.units.longValue() +convertUsdToUnits(usDollarStr));
    
}


    public subtract(usDollarStr: string){
var usDollarStr = usDollarStr
this.units= new Long(this.units.longValue() -convertUsdToUnits(usDollarStr));
    
}


    public multiply(multiplier: number){
var multiplier = multiplier
this.units= new Long(new number(this.units.longValue() *multiplier).
                            longValue());
    
}


    public multiply(multiplier: number){
var multiplier = multiplier
this.units= new Long(this.units.longValue() *multiplier);
    
}


    convertUnitsTo(currency: string): string{
var currency = currency

    var stringBuffer: StringMaker = new StringMaker();
;
    

                        if(currency.localeCompare(this.DEFAULT_CURRENCY) == 0)
                        
                                    {
                                    
    var dollar: number = this.units.longValue() /100;
;
    

    var cents: number = this.units.longValue() -(dollar *100);
;
    
stringBuffer!.append(new Long(dollar).
                            toString());
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    

                        if(cents < 10)
                        
                                    {
                                    stringBuffer!.append(CommonPhoneStrings.getInstance()!.ZERO);
    

                                    }
                                
stringBuffer!.append(new Long(cents).
                            toString());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
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
                            
localUnit= new Long(new Long(dollarStr).
                            longValue() *100).
                            longValue();
    
localUnit += new Long(centsStr).
                            longValue();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return localUnit;
    
}


    public getUnits(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.units.longValue();;
    
}


    public getUnitsLong(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.units;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return convertUnitsTo.toCharArray();
    
}


}
                
            

