
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



import { Transport } from "../../../../../../javax/mail/Transport.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { EmailInterface } from "../../../../../../org/allbinary/logic/communication/smtp/EmailInterface.js";

    
import { BasicQueue } from "../../../../../../org/allbinary/logic/util/queue/BasicQueue.js";

    

export class BasicEmailQueue extends BasicQueue
                , EmailQueueInterface {
        

    private static readonly instance: BasicEmailQueue = new BasicEmailQueue();
        
        

    private basicEmailQueue: BasicEmailQueue
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getInstance(): BasicEmailQueue{

                        if(BasicEmailQueue.basicEmailQueue == 
                                    null
                                )
                        
                                    {
                                    BasicEmailQueue.basicEmailQueue= BasicEmailQueue()

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicEmailQueue.basicEmailQueue;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public offer(emailInterface: EmailInterface): boolean{
var emailInterface = emailInterface
this.offer(emailInterface as Object)
this.post(emailInterface)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    remove(emailInterface: EmailInterface){
var emailInterface = emailInterface
this.remove(emailInterface as Object)
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public remove(): EmailInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    post(emailInterface: EmailInterface){
var emailInterface = emailInterface

                        if(this.send(emailInterface))
                        
                                    {
                                    this.remove(emailInterface)
processAllUnsent()

                                    }
                                
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    processAllUnsent(){

    var size: number = queueVector!.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var emailInterface: EmailInterface = queueVector!.get(index) as EmailInterface;
        
        


                        if(this.send(emailInterface))
                        
                                    {
                                    this.remove(emailInterface)
processAllUnsent()

                                    }
                                
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    send(emailInterface: EmailInterface): boolean{
var emailInterface = emailInterface

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put("Sending: " +emailInterface!.log(), this, "send")

                                    }
                                
Transport.send(emailInterface!.getMimeMessage())

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put("Email Send Debug: " +emailInterface!.getDebugInfo(), this, "send")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put("Failed Email Send Debug: " +emailInterface!.getDebugInfo(), this, "send", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}
                
            

