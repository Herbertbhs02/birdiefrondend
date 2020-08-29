const initState={
               data:'',
               loading:false
              }
const reducer = (state=initState, action)=>{
    
    switch(action.type) {
            case 'GETDATA_F':
             return {
                 ...state,
                 data:action.payload,
                 loading:false
             }         
        default:
          return state
      }

}
export default reducer