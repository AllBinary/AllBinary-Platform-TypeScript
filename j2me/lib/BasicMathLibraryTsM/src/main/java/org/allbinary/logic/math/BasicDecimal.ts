
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
        




export class BasicDecimal
            extends Object
         {
        

    public static readonly ZERO_BIGDECIMAL: BasicDecimal = new BasicDecimal();
        
        

    private units: number
public constructor (bigDecimal: BasicDecimal){

            super();
            var bigDecimal = bigDecimal
this.units= bigDecimal!.getUnscaled()
this.updateScaled()
}

public constructor (){

            super();
            this.units= 0
this.updateScaled()
}

public constructor (units: number){

            super();
            var units = units
this.units= units
this.updateScaled()
}


    public set(value: number){
var value = value
this.units= value.toLong()
this.updateScaled()
}


    public set(value: number){
var value = value
this.units= value
this.updateScaled()
}


    public set(bigDecimal: BasicDecimal){
var bigDecimal = bigDecimal
this.units= bigDecimal!.getUnscaled()
this.updateScaled()
}


    public add(value: number){
var value = value
this.units= this.units +value
this.updateScaled()
}


    public add(value: number){
var value = value
this.units= this.units +value
this.updateScaled()
}


    public add(bigDecimal: BasicDecimal){
var bigDecimal = bigDecimal
this.units= this.units +bigDecimal!.getUnscaled()
this.updateScaled()
}


    public subtract(value: number){
var value = value
this.units= this.units -value
this.updateScaled()
}


    public subtract(value: number){
var value = value
this.units= this.units -value
this.updateScaled()
}


    public subtract(bigDecimal: BasicDecimal){
var bigDecimal = bigDecimal
this.units= this.units -bigDecimal!.getUnscaled()
this.updateScaled()
}


    public multiply(value: number){
var value = value
this.units= this.units *value
this.updateScaled()
}


    public multiply(value: number){
var value = value
this.units= this.units *value
this.updateScaled()
}


    public multiply(bigDecimal: BasicDecimal){
var bigDecimal = bigDecimal
this.units= this.units *bigDecimal!.getUnscaled()
this.updateScaled()
}


    public divide(value: number){
var value = value
this.units= this.units /value
this.updateScaled()
}


    public divide(value: number){
var value = value
this.units= this.units /value
this.updateScaled()
}


    public divide(bigDecimal: BasicDecimal){
var bigDecimal = bigDecimal
this.units= this.units /bigDecimal!.getUnscaled()
this.updateScaled()
}


    public getUnscaled(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.units;
    
}


    private scaled: number= 0

    updateScaled(){
this.scaled= (this.units /factorValue).toInt()
}


    public getScaled(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scaled;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.units).toString();
    
}


    private readonly factor: number = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_FACTOR;
        
        

    private readonly factorValue: number = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_VALUE;
        
        

    public getScaledFactor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return factor;
    
}


    public getScaledFactorValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return factorValue;
    
}


}
                
            

