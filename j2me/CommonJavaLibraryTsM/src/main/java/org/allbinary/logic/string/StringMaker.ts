
        /* Generated Code Do Not Modify */
        



            import { Integer } from "../../../../java/lang/Integer.js";
        

import { Long } from "./Long.js";

import { Float } from "./Float.js";

export class StringMaker
            extends Object
         {
        

    private charArray: string[]

    private currentLength: number= 0
public constructor (){

            super();
            this.charArray= new Array(20);
    
}


    public append(string: string): StringMaker{
    //var string = string

    var stringLength: number = string.length!;
        
        
;
    
this.ensureCapacity(this.currentLength +stringLength);
    



        for (let i = 0; i < stringLength; i++) {
            this.charArray[this.currentLength + i] = 
    string.charAt(i);
        }
                                    ;
    
this.currentLength += stringLength;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}


    public appendchar(c: string): StringMaker{
    //var c = c
this.ensureCapacity(this.currentLength +1);
    
this.charArray[this.currentLength++]= c;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}


    public appendbyte(b: number): StringMaker{
    //var b = b
this.append(b.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}


    public appendshort(b: number): StringMaker{
    //var b = b
this.append(b.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}


    public appendint(i: number): StringMaker{
    //var i = i
this.append(i.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}


    public appendlong(l: number): StringMaker{
    //var l = l
this.append(l.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}


    public appendfloat(f: number): StringMaker{
var f = f
this.append(f.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}


    public appendboolean(bool: boolean): StringMaker{
    //var bool = bool

                        if(bool)
                        
                                    {
                                    this.ensureCapacity(this.currentLength +4);
    
this.charArray[this.currentLength++]= 
                                    't'
                                    ;
    
this.charArray[this.currentLength++]= 
                                    'r'
                                    ;
    
this.charArray[this.currentLength++]= 
                                    'u'
                                    ;
    
this.charArray[this.currentLength++]= 
                                    'e'
                                    ;
    

                                    }
                                
                        else {
                            this.ensureCapacity(this.currentLength +5);
    
this.charArray[this.currentLength++]= 
                                    'f'
                                    ;
    
this.charArray[this.currentLength++]= 
                                    'a'
                                    ;
    
this.charArray[this.currentLength++]= 
                                    'l'
                                    ;
    
this.charArray[this.currentLength++]= 
                                    's'
                                    ;
    
this.charArray[this.currentLength++]= 
                                    'e'
                                    ;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}


    public ensureCapacity(minSize: number){
    //var minSize = minSize

    var oldCapacity: number = this.charArray!.length
                ;
        
        
;
    

                        if(minSize > oldCapacity)
                        
                                    {
                                    
    var newCapacity: number = oldCapacity *3;
        
        
;
    

                        if(newCapacity < minSize)
                        newCapacity= minSize

    var copy: string[] = 
                                                        
                                                        new Array(newCapacity)
                                                    ;
        
        
;
    

    var min: number = this.min(this.charArray!.length, newCapacity)!;
        
        
;
    



        for (let i = 0; i < min; i++) {
            copy[0 + i] = this.charArray[i]!;
        }
    ;
    
this.charArray= copy;
    

                                    }
                                
}


    public min(value: number, value2: number): number{
var value = value
var value2 = value2



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (value <= value2)
                        ?       
                                value
                                :

                            value2;

    ;
    
}


    public delete(start: number, end: number): StringMaker{
    //var start = start
    //var end = end
this.currentLength -= (end -start);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}


    public length(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentLength;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.charArray
                                        .slice(0, this.currentLength).join('')
                                    ;
    
}


}
                
            

