
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { Runnable } from '../../../java/lang/Runnable.js';
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NullPriorityRunnable } from './NullPriorityRunnable.js';
import { PriorityRunnable } from './PriorityRunnable.js';

export class ThreadObjectUtil
            extends Object
         {
        

    private static readonly instance: ThreadObjectUtil = new ThreadObjectUtil();

    public static getInstance(): ThreadObjectUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ThreadObjectUtil.instance;
    
}


    public readonly NULL_PRIORITY_RUNNABLE: PriorityRunnable = new NullPriorityRunnable();

    public notifyObject(anyType: Object){
}


                //@Throws(Exception.constructor)
            
    public waitObject(anyType: Object){
}


                //@Throws(Exception.constructor)
            
    public waitObjectFor(anyType: Object, delay: number){
}


    public processThread(runnable: Runnable){
runnable.run();
    
}


}



