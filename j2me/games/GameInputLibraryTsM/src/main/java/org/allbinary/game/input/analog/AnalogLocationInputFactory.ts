
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../../java/lang/Object.js';
        
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnalogLocationInput } from './AnalogLocationInput.js';
//not GWT import const AnalogLocationInput = globalThis.org.allbinary.game.input.analog.AnalogLocationInput;

                
export class AnalogLocationInputFactory
            extends Object
         {
        

    private static readonly instance: AnalogLocationInputFactory = new AnalogLocationInputFactory();

    public static getInstance(): AnalogLocationInputFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AnalogLocationInputFactory.instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();

private constructor (){

            super();
        }


    public addPlayer(playerInputId: number){

    var analogLocationInput: AnalogLocationInput = AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT;;
    

                        if(playerInputId < this.list.size())
                        
                                    {
                                    analogLocationInput= this.list.get(playerInputId) as AnalogLocationInput;
    

                                    }
                                

                        if(analogLocationInput == AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT)
                        
                                    {
                                    analogLocationInput= new AnalogLocationInput(playerInputId);
    
this.list.add(analogLocationInput);
    

                                    }
                                
}


    public getInstanceForPlayer(playerInputId: number): AnalogLocationInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.get(playerInputId) as AnalogLocationInput;
    
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list;
    
}


}



