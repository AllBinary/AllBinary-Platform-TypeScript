
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Visitor } from '../../../org/allbinary/logic/util/visitor/Visitor.js';
      const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { ThreadObjectUtil } from '../../../org/allbinary/thread/ThreadObjectUtil.js';
      const ThreadObjectUtil = globalThis.org.allbinary.thread.ThreadObjectUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TimeDelayHelper } from './TimeDelayHelper.js';

export class StupidTimer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly nullUtil: NullUtil = NullUtil.getInstance()!;

    private readonly threadObjectUtil: ThreadObjectUtil = ThreadObjectUtil.getInstance()!;

    visitBool(visitorInterface: Visitor): boolean{

    var result: Boolean = visitorInterface!.visit(this.nullUtil!.NULL_OBJECT) as Boolean;;
    

    var result2: boolean = result.valueOf()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result2;
    
}


                //@Throws(Exception.constructor)
            
    public visit(visitorInterface: Visitor, timeDelayHelper: TimeDelayHelper){

    var tookTooLong: boolean = false;;
    

    var WAITING_FOR: string = "Waiting for: ";;
    
PreLogUtil.put(new StringMaker().append(WAITING_FOR)!.append(StringUtil.getInstance()!.toString(visitorInterface))!.toString(), this, this.commonStrings!.VISIT);
    

    var index: number = 0;;
    

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



