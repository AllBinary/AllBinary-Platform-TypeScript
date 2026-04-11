
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
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    

export class Direction
            extends Object
         {
        

    private directionArray: Direction[] = new Array(13);
        
        

    public static getInstance(direction: number): Direction{
var direction = direction



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionArray[direction]!;
    
}


    private name: string

    private otherName: string

    private value: number

    private frameFactor: number
 constructor (name: string, otherName: string, value: number, frameFactor: number){

            super();
            var name = name
var otherName = otherName
var value = value
var frameFactor = frameFactor
this.name= name;
    
this.otherName= otherName;
    
this.value= value;
    
this.frameFactor= frameFactor;
    
directionArray[value]= this;
    
}

 constructor (name: string, otherName: string, value: number){

            super();
            var name = name
var otherName = otherName
var value = value
this.name= name;
    
this.otherName= otherName;
    
this.value= value;
    
this.frameFactor= 0;
    
directionArray[value]= this;
    
}


    public getValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


    public getFrameFactor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.frameFactor;
    
}


    public getOtherName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return otherName;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Direction: ");
    
stringBuffer!.append(this.getName());
    
stringBuffer!.append(" Or: ");
    
stringBuffer!.append(this.getOtherName());
    
stringBuffer!.append(" Value: ");
    
stringBuffer!.appendint(this.value);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

