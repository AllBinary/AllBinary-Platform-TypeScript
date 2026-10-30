
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { Visitor } from '../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { ThreadObjectUtil } from '../../../org/allbinary/thread/ThreadObjectUtil.js';
//not GWT import const ThreadObjectUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TimeDelayHelper } from './TimeDelayHelper.js';
//not GWT import - same folder const TimeDelayHelper

export class StupidTimer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly nullUtil: NullUtil = NullUtil.getInstance()!;

    private readonly threadObjectUtil: ThreadObjectUtil = ThreadObjectUtil.getInstance()!;

    visitBool(visitorInterface: Visitor): boolean{

    let result: Boolean = visitorInterface!.visit(this.nullUtil!.NULL_OBJECT) as Boolean;;
    

    let result2: boolean = result.valueOf()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result2;
    
}


                //@Throws(Exception.constructor)
            
    public visit(visitorInterface: Visitor, timeDelayHelper: TimeDelayHelper){

    let tookTooLong: boolean = false;;
    

    let WAITING_FOR: string = "Waiting for: ";;
    
PreLogUtil.put(new StringMaker().append(WAITING_FOR)!.append(StringUtil.getInstance()!.toString(visitorInterface))!.toString(), this, this.commonStrings!.VISIT);
    

    let index: number = 0;;
    

        while(this.visitBool(visitorInterface))
        {

                        if(index % 10 == 0)
                        
                                    {
                                    PreLogUtil.put(new StringMaker().append(WAITING_FOR)!.appendint(index)!.toString(), this, this.commonStrings!.VISIT);
    

                                    }
                                
index++;
    

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        
this.threadObjectUtil!.waitObjectFor(this, 1800);
    



                        if(timeDelayHelper!.isTimeTNT())
                        
                                    {
                                    tookTooLong= true;
    
break;

                    

                                    }
                                
}


                        if(tookTooLong)
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.VISIT, new Exception(new StringMaker().append("Took Too Long: ")!.append(StringUtil.getInstance()!.toString(visitorInterface))!.toString()));
    

                                    }
                                
                        else {
                            PreLogUtil.put(timeDelayHelper!.toString(), this, this.commonStrings!.VISIT);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public stopWaiting(){

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        
this.threadObjectUtil!.notifyObject(this);
    


}


}

