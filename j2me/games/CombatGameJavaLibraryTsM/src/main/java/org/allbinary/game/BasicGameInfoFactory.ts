
        /* Generated Code Do Not Modify */
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicGameInfoFactory
            extends Object
         {
        

    private static readonly SINGLETON: BasicGameInfoFactory = new BasicGameInfoFactory();
        
        

    public static getInstance(): BasicGameInfoFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public currentReleaseIndex: number= 0

    public currentDestroyIndex: number= 0

    public total: number= 0
private constructor (){

            super();
            }


    public init(total: number){
var total = total
currentReleaseIndex= 0;
    
currentDestroyIndex= 0;
    
this.total= total;
    
}


    public isPeaked(): boolean{

                        if(this.currentDestroyIndex >= this.total)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public howManyLeft(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.total -this.currentDestroyIndex;
    
}


}
                
            

