
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
        



import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class LoggingInitInfo
            extends Object
         {
        

    private logConfigInfoList: BasicArrayList = 
                null
            ;
        
        

    private hasRead: boolean = false;
        
        

                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static write(){

        try {
            hasRead= false
} catch(e: Exception)
            {



                            throw e
}

}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    static read(){

        try {
            } catch(e: Exception)
            {



                            throw e
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static setHasRead(value: boolean){
var value = value
LoggingInitInfo.hasRead= value
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    static updateIfNeeded(){

    
                        if(!hasRead)
                        
                                    {
                                    read()
hasRead= true

    
                        if(LoggingInitInfo.logConfigInfoList == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("Read Failed")

                                    }
                                

                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static set(logConfigInfoList: BasicArrayList){
var logConfigInfoList = logConfigInfoList
LoggingInitInfo.logConfigInfoList= logConfigInfoList
}


                @Throws(Exception::class)
            
    public static get(): BasicArrayList{
updateIfNeeded()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LoggingInitInfo.logConfigInfoList;
    
}


                @Throws(Exception::class)
            
    public static getTypeList(): BasicArrayList{
updateIfNeeded()

    var allLogTypeVector: BasicArrayList = new BasicArrayList();
        
        


    var size: number = LoggingInitInfo.logConfigInfoList!.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var logConfigInfo: LogConfig = LoggingInitInfo.logConfigInfoList!.objectArray[index]! as LogConfig;
        
        


    var logTypeVector: BasicArrayList = logConfigInfo!.getTypeVector()!;
        
        


    
                        if(logConfigInfo!.isEnabled())
                        
                                    {
                                    addAll(logTypeVector)

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allLogTypeVector;
    
}

public constructor (){

            super();
            }


    public isValid(): boolean{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                @Throws(Exception::class)
            
    public getNumberOfLogConfigs(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LoggingInitInfo.logConfigInfoList!.size();
    
}


    public toString(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
} catch(e: Exception)
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    
}

}


}
                
            

