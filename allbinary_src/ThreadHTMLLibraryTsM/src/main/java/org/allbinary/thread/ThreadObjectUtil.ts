
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { Runnable } from '../../../java/lang/Runnable.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NullPriorityRunnable } from './NullPriorityRunnable.js';
//not GWT import const  = globalThis.org.allbinary.thread.NullPriorityRunnable;

                import { PriorityRunnable } from './PriorityRunnable.js';
//not GWT import const  = globalThis.org.allbinary.thread.PriorityRunnable;

                
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



