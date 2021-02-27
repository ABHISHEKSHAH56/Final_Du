const inital={
        college:[],
        overview:[],
        cutoff:[],
        fees:[],
        course:[]
}


export default (state=inital,action)=>{
        switch (action.type) {
                case 'FETCH_ALL':                        
                        return {
                                ...state,
                                college:action.payload

                        }
                case 'OVERVIEW':
                        return  {
                                ...state,                                
                                overview:action.payload

                        }        
                       
                case 'COURSE':
                        return  {
                                ...state,                                
                                course:action.payload

                        }
                case 'FEES':
                        return  {
                                ...state,                                
                                fees:action.payload

                        }
                case 'CUTOFF':
                        return  {
                                ...state,                                
                                cutoff:action.payload

                        }                                             
        
                default:
                        return state;
        }
 }

 

