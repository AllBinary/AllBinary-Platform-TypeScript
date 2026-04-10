
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        




export class GeologicalResource
            extends Object
         {
        

    private total: number= 0

    private initTotal: number
public constructor (initTotal: number){

            super();
            var initTotal = initTotal
this.initTotal= initTotal
this.init()
}


    public init(){
this.setTotal(this.initTotal)
}


    public add(value: number){
var value = value

    var max: number = Integer.MAX_VALUE;
        
        


                        if(this.getTotal() +value > max)
                        
                                    {
                                    this.setTotal(max)

                                    }
                                
                        else {
                            this.setTotal(this.getTotal() +value)

                        }
                            
}


    public remove(value: number){
var value = value

                        if(this.getTotal() -value < 0)
                        
                                    {
                                    this.setTotal(0)

                                    }
                                
                        else {
                            this.setTotal(this.getTotal() -value)

                        }
                            
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total;
    
}


    setTotal(total: number){
var total = total
this.total= total
}


}
                
            

