
        /* Generated Code Do Not Modify */
        



import { NullUtil } from "../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { Visitor } from "../../../org/allbinary/logic/util/visitor/Visitor.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { ThreadObjectUtil } from "../../../org/allbinary/thread/ThreadObjectUtil.js";

    

export class StupidTimer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly nullUtil: NullUtil = NullUtil.getInstance()!;
        
        

    private readonly threadObjectUtil: ThreadObjectUtil = ThreadObjectUtil.getInstance()!;
        
        

    visitBool(visitorInterface: Visitor): boolean{
    //var visitorInterface = visitorInterface

    var result: Boolean = visitorInterface!.visit(nullUtil!.NULL_OBJECT) as Boolean;
        
        


    var result2: boolean = result!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result2;
    
}


                //@Throws(Error::class)
            
    public visit(visitorInterface: Visitor, timeDelayHelper: TimeDelayHelper){
    //var visitorInterface = visitorInterface
    //var timeDelayHelper = timeDelayHelper

    var tookTooLong: boolean = false;
        
        


    var WAITING_FOR: string = "Waiting for: ";
        
        

PreLogUtil.put(StringMaker().
                            append(WAITING_FOR)!.append(StringUtil.getInstance()!.toString(visitorInterface))!.toString(), this, commonStrings!.VISIT)

    var index: number = 0;
        
        


        while(this.visitBool(visitorInterface))
        {

                        if(index % 10 == 0)
                        
                                    {
                                    PreLogUtil.put(StringMaker().
                            append(WAITING_FOR)!.appendint(index)!.toString(), this, commonStrings!.VISIT)

                                    }
                                
index++

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {
this.threadObjectUtil!.waitObject(this, 1800)
}


                        if(timeDelayHelper!.isTime())
                        
                                    {
                                    tookTooLong= true
break;

                    

                                    }
                                
}


                        if(tookTooLong)
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.VISIT, Error(StringMaker().
                            append("Took Too Long: ")!.append(StringUtil.getInstance()!.toString(visitorInterface))!.toString()))

                                    }
                                
                        else {
                            PreLogUtil.put(timeDelayHelper!.toString(), this, commonStrings!.VISIT)

                        }
                            
}


                //@Throws(Error::class)
            
    public stopWaiting(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {
this.threadObjectUtil!.notifyObject(this)
}

}


}
                
            

