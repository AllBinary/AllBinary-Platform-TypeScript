
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
      

















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
anyType!.notify();
    
}


                //@Throws(Exception.constructor)
            
    public waitObject(anyType: Object){
anyType!.wait();
    
}


                //@Throws(Exception.constructor)
            
    public waitObjectFor(anyType: Object, delay: number){
TsUtil.getInstance()!.waitFor(anyType, delay);
    
}


}
                
            

