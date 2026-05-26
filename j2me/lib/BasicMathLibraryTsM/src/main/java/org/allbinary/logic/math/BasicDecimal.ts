
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Long } from '../../../../java/lang/Long.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScaleFactorFactory } from './ScaleFactorFactory.js';

export class BasicDecimal
            extends Object
         {
        

    public static readonly ZERO_BIGDECIMAL: BasicDecimal = new BasicDecimal(0);

    public static createBigDecimal(bigDecimal: BasicDecimal): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicDecimal(bigDecimal!.getUnscaled());
    
}


    private units: number;

public constructor (units: number){

            super();
        this.units= units;
    
this.updateScaled();
    
}


    public setint(value: number){
this.units= value;
    
this.updateScaled();
    
}


    public setlong(value: number){
this.units= value;
    
this.updateScaled();
    
}


    public set(bigDecimal: BasicDecimal){
this.units= bigDecimal!.getUnscaled();
    
this.updateScaled();
    
}


    public addint(value: number){
this.units= this.units +value;
    
this.updateScaled();
    
}


    public addlong(value: number){
this.units= this.units +value;
    
this.updateScaled();
    
}


    public add(bigDecimal: BasicDecimal){
this.units= this.units +bigDecimal!.getUnscaled();
    
this.updateScaled();
    
}


    public subtractint(value: number){
this.units= this.units -value;
    
this.updateScaled();
    
}


    public subtractlong(value: number){
this.units= this.units -value;
    
this.updateScaled();
    
}


    public subtract(bigDecimal: BasicDecimal){
this.units= this.units -bigDecimal!.getUnscaled();
    
this.updateScaled();
    
}


    public multiplyint(value: number){
this.units= this.units *value;
    
this.updateScaled();
    
}


    public multiplylong(value: number){
this.units= this.units *value;
    
this.updateScaled();
    
}


    public multiply(bigDecimal: BasicDecimal){
this.units= this.units *bigDecimal!.getUnscaled();
    
this.updateScaled();
    
}


    public divideint(value: number){
this.units= this.units /value;
    
this.updateScaled();
    
}


    public dividelong(value: number){
this.units= this.units /value;
    
this.updateScaled();
    
}


    public divide(bigDecimal: BasicDecimal){
this.units= this.units /bigDecimal!.getUnscaled();
    
this.updateScaled();
    
}


    public getUnscaled(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.units;
    
}


    private scaled: number= 0;

    updateScaled(){
this.scaled= Math.round((this.units /this.factorValue));
    
}


    public getScaled(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scaled;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.units).toString();;
    
}


    private readonly factor: number = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_FACTOR;

    private readonly factorValue: number = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_VALUE;

    public getScaledFactor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.factor;
    
}


    public getScaledFactorValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.factorValue;
    
}


}
                
            

