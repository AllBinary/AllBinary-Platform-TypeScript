
        /*
                *  
                *  To change this license header, choose License Headers in Project Properties. 
                *  To change this template file, choose Tools | Templates  and open the template in the editor.  
        */
        
        /* Generated Code Do Not Modify */
        




export class JTreeInterfaceFactory
            extends Object
         {
        

    private static readonly instance: JTreeInterfaceFactory = new JTreeInterfaceFactory();
        
        

    public static getInstance(): JTreeInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private jTreeInterface: JTreeInterface

    public set(jTreeInterface: JTreeInterface){
var jTreeInterface = jTreeInterface
this.jTreeInterface= jTreeInterface;
    
}


    public getJTreeInterface(): JTreeInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.jTreeInterface;
    
}


}
                
            

