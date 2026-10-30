
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
        
            import { Float } from '../../../../../../java/lang/Float.js';
        
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
type CommonPhoneStrings<T = any, U = any> = typeof CommonPhoneStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonPhoneStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Money
            extends Object
         {
        

    private units: Long;

    private readonly DEFAULT_CURRENCY: string = "USD";

public constructor (money: Money){

            super();
        this.units= new Long(money.getUnits());
    
}


public constructor (){

            super();
        this.units= new Long(0);
    
}


public constructor (usDollarStr: string){

            super();
        
                        if(usDollarStr != 
                                    null
                                 && StringValidationUtil.getInstance()!.isNumber(usDollarStr))
                        
                                    {
                                    this.units= new Long(convertUsdToUnits(usDollarStr));
    

                                    }
                                
}


public constructor (units: number){

            super();
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

add(...args: any[]): any {
   
    if (args.length === 1) return this.add$overload1(args[0]);
   
    if (args.length === 1 && typeof args[0] === 'string') return this.add$overload2(args[0]);
   
   throw new TypeError('No matching overload: add'); }
  
    public add$overload1(moreMoney: Money){
this.add(moreMoney!.toString());
    
}


    public add$overload2(usDollarStr: string){
this.units= new Long(this.units.longValue() +convertUsdToUnits(usDollarStr));
    
}


    public subtract(usDollarStr: string){
this.units= new Long(this.units.longValue() -convertUsdToUnits(usDollarStr));
    
}

multiply(...args: any[]): any {
   
    if (args.length === 1) return this.multiply$overload1(args[0]);
   
    if (args.length === 1 && typeof args[0] === 'number') return this.multiply$overload2(args[0]);
   
   throw new TypeError('No matching overload: multiply'); }
  
    public multiply$overload1(multiplier: number){
this.units= new Long(new number(this.units.longValue() *multiplier).longValue());
    
}


    public multiply$overload2(multiplier: number){
this.units= new Long(this.units.longValue() *multiplier);
    
}


    convertUnitsTo(currency: string): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

                        if(currency.compareTo(this.DEFAULT_CURRENCY) == 0)
                        
                                    {
                                    
    let dollar: number = this.units.longValue() /100;;
    

    let cents: number = this.units.longValue() -(dollar *100);;
    
stringBuffer!.append(new Long(dollar).toString());
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    

                        if(cents < 10)
                        
                                    {
                                    stringBuffer!.append(CommonPhoneStrings.getInstance()!.ZERO);
    

                                    }
                                
stringBuffer!.append(new Long(cents).toString());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    convertUsdToUnits(usDollarStr: string): number{

    let localUnit: number = 0;;
    

    let index: number = usDollarStr!.indexOf(AbPathData.getInstance()!.EXTENSION_SEP)!;;
    

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let dollarStr: string = stringUtil!.EMPTY_STRING;;
    

    let centsStr: string = stringUtil!.EMPTY_STRING;;
    

                        if(index < 1)
                        
                                    {
                                    dollarStr= usDollarStr.toCharArray().slice(0, ).join('');
    
centsStr= "00";
    

                                    }
                                
                        else {
                            dollarStr= substring.toCharArray();
    
centsStr= substring.toCharArray();
    

                        }
                            
localUnit= new Long(new Long(dollarStr).longValue() *100).longValue();
    
localUnit += new Long(centsStr).longValue();
    



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

