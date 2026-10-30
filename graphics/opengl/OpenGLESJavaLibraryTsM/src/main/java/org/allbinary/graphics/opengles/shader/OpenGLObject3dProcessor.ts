
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { GL10 } from '../../../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const GL10

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLObject3dProcessor
            extends Object
         {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
process(...args: any[]): any {
   
    if (args.length === 2) return this.process$overload1(args[0], args[1]);
   
    if (args.length === 3 && typeof args[2] === 'number') return this.process$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: process'); }
  
    public process$overload1(gl: GL10, object3d: any){
}


    public process$overload2(gl: GL10, object3d: any, index: number){
}


}

