
        /* Generated Code Do Not Modify */
        



import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class AnalogLocationInputFactory
            extends Object
         {
        

    private static readonly instance: AnalogLocationInputFactory = new AnalogLocationInputFactory();
        
        

    public static getInstance(): AnalogLocationInputFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayList();
        
        
private constructor (){

            super();
            }


    public addPlayer(playerInputId: number){
var playerInputId = playerInputId

    var analogLocationInput: AnalogLocationInput = AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT;
        
        


    
                        if(playerInputId < list.size())
                        
                                    {
                                    analogLocationInput= list.get(playerInputId) as AnalogLocationInput

                                    }
                                

    
                        if(analogLocationInput == AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT)
                        
                                    {
                                    analogLocationInput= AnalogLocationInput(playerInputId)
add(analogLocationInput)

                                    }
                                
}


    public getInstance(playerInputId: number): AnalogLocationInput{
var playerInputId = playerInputId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list.get(playerInputId) as AnalogLocationInput;
    
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

