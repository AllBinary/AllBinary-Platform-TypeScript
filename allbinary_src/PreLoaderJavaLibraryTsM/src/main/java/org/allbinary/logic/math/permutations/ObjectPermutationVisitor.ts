
        /* Generated Code Do Not Modify */
        



            import { System } from '../../../../../java/lang/System.js';
        
//not game specific package import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
      const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
      const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ObjectPermutationVisitor extends Visitor {
        

    readonly data: any[];

public constructor (data: any[]){

            super();
        this.data= data;
    
}


    private stringBuilder: StringMaker = new StringMaker();

    public visit(anyType: any = {}): any{
this.stringBuilder!.delete(0, stringBuilder!.length());
    
this.print(this.data, stringBuilder);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public print(data: any[]){

    var stringBuilder: StringMaker = new StringMaker();;
    
this.print(data, stringBuilder);
    
}


    public print(data: any[], stringBuilder: StringMaker){

    var tsUtil: TsUtil = TsUtil.getInstance()!;;
    

    var size: number = data.length
                ;;
    




                        for (
    var i: number = 0;i < size; i++)
        {
stringBuilder!.appendint(tsUtil!.hashCode(data[i]!));
    
stringBuilder!.append(CommonSeps.getInstance()!.SPACE);
    
}

console.log(stringBuilder!.toString());
    
}


}



