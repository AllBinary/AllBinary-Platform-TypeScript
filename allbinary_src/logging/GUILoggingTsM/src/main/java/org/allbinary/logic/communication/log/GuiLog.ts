
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
        



import { awt } from "../../../../../java/awt.js";

    
import { swing } from "../../../../../javax/swing.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class GuiLog
            extends Object
         {
        

    private static readonly instance: GuiLog = new GuiLog();
        
        

    public static getInstance(): GuiLog{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
private constructor (){

            super();
            }

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public showDialog(msg: string){
var msg = msg

    var error: JDialog = new JDialog();
        
        


    var size: number = msg.length *9;
        
        


    var x: number = size;
        
        


    
                        if(x > 550)
                        x= 550
setLayout(GridLayout(1, 1))

    
                        if(size > 255)
                        
                                    {
                                    
    var y: number = 550;
        
        

setSize(x, y)
add(javax.swing.JScrollPane(javax.swing.JTextArea(msg)))

                                    }
                                
                             else 
    
                        if(size > 0)
                        
                                    {
                                    
    var y: number = 50;
        
        

setSize(x, y)
add(javax.swing.JScrollPane(javax.swing.JLabel(msg)))

                                    }
                                
show()
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public put(specialMessage: string, anyType: any = {}, functionName: string): string{
var specialMessage = specialMessage
var anyType = anyType
var functionName = functionName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.put(specialMessage, anyType, functionName, 
                            null);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public put(specialMessage: string, anyType: any = {}, functionName: string, exception: Exception): string{
var specialMessage = specialMessage
var anyType = anyType
var functionName = functionName
var exception = exception

        try {
            
    var data: string = LogFormatUtil.getInstance()!.get(specialMessage, anyType!::class.toString()!, functionName, exception)!;
        
        

this.showDialog(data)
println(data)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return data;
    
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "put", e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Logging Error";
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public put(specialMessage: string, className: string, functionName: string): string{
var specialMessage = specialMessage
var className = className
var functionName = functionName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.put(specialMessage, className, functionName, 
                            null);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public put(specialMessage: string, className: string, functionName: string, exception: Exception): string{
var specialMessage = specialMessage
var className = className
var functionName = functionName
var exception = exception

        try {
            
    var data: string = LogFormatUtil.getInstance()!.get(specialMessage, className, functionName, exception)!;
        
        

this.showDialog(data)
println(data)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return data;
    
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "put", e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Logging Error";
    
}

}


}
                
            

