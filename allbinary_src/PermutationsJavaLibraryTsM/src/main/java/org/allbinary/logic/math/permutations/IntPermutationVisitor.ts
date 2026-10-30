
        /* Generated Code Do Not Modify */

        


            import { System } from '../../../../../java/lang/System.js';
        
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class IntPermutationVisitor extends Visitor {
        

    readonly data: number[];

public constructor (data: number[]){

            super();
        this.data= data;
    
}


    private stringBuilder: StringMaker = new StringMaker();

    public visit(anyType: any): any{
this.stringBuilder!.delete(0, this.stringBuilder!.length());
    
this.print(this.data, stringBuilder);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}

print(...args: any[]): any {
   
    if (args.length === 1) return this.print$overload1(args[0]);
   
    if (args.length === 2) return this.print$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: print'); }
  
    public print$overload1(data: number[]){

    let stringBuilder: StringMaker = new StringMaker();;
    
this.print(data, stringBuilder);
    
}


    public print$overload2(data: number[], stringBuilder: StringMaker){

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let size: number = data.length
                ;;
    




                        for (
    let i: number = 0;i < size; i++)
        {
stringBuilder!.appendint(data[i]!);
    
stringBuilder!.append(commonSeps!.SPACE);
    
}

console.log(stringBuilder!.toString());
    
}


}

