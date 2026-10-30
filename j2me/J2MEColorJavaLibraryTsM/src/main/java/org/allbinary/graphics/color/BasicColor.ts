
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
        

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;




















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicColorUtil } from './BasicColorUtil.js';
//sameFolderImports - not GWT import - same folder const BasicColorUtil

export class BasicColor
            extends Object
         {
        

    private readonly name: string;

    private readonly value: number;

    private readonly redComponent: number;

    private readonly greenComponent: number;

    private readonly blueComponent: number;

    private readonly alphaComponent: number;

    public readonly red: number;

    public readonly green: number;

    public readonly blue: number;

    public readonly alpha: number;

 constructor (alphaValue: number, value: number, name: string){

            super();
        this.name= name;
    

    let tempValue: number= 0;;
    

    let basicColorUtil: BasicColorUtil = BasicColorUtil.getInstance()!;;
    

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
                            

    let alphaInt: number = ((tempValue>>24)&255);;
    
this.alpha= alphaInt;
    
this.alphaComponent= (alphaInt) /255;
    

    let redInt: number = ((tempValue>>16)&255);;
    
this.red= redInt;
    
this.redComponent= (redInt) /255;
    

    let greenInt: number = ((tempValue>>8)&255);;
    
this.green= greenInt;
    
this.greenComponent= (greenInt) /255;
    

    let blueInt: number = ((tempValue)&255);;
    
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

    let stringBuffer: StringMaker = new StringMaker();;
    
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
                        return stringBuffer!.toString();;
    
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

