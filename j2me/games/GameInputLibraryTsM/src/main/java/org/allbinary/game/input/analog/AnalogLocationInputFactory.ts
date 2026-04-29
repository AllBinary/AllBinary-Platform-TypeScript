
        /* Generated Code Do Not Modify */
        



import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AnalogLocationInput } from "./AnalogLocationInput.js";

export class AnalogLocationInputFactory
            extends Object
         {
        

    private static readonly instance: AnalogLocationInputFactory = new AnalogLocationInputFactory();

    public static getInstance(): AnalogLocationInputFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();
private constructor (){

            super();
        }


    public addPlayer(playerInputId: number){
var playerInputId = playerInputId

    var analogLocationInput: AnalogLocationInput = AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT;
;
    

                        if(playerInputId < this.list.size())
                        
                                    {
                                    analogLocationInput=  as AnalogLocationInputthis.list.get(playerInputId);;
    

                                    }
                                

                        if(analogLocationInput == AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT)
                        
                                    {
                                    analogLocationInput= new AnalogLocationInput(playerInputId);
    
this.list.add(analogLocationInput);
    

                                    }
                                
}


    public getInstanceForPlayer(playerInputId: number): AnalogLocationInput{
var playerInputId = playerInputId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as AnalogLocationInputthis.list.get(playerInputId);;
    
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

