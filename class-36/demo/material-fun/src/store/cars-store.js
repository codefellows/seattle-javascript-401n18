// Initial State
const initialState = [
  {name:"John", car:"mazda"},
  {name:"Cathy", car:"gmc"},
  {name:"Zach", car:"ford"},
  {name:"Allie", car:"hyundai"},
]


// Reducer Function
// action is an object with: type and payload
export default function reducer(state, action) {

  const {type,payload} = action;

  switch( type ) {
    case "GET":
      // filter the state by the payload
      return initialState.filter( person => {
        return payload ? person.car === payload : true;
      });
    case "ADD":
       return state;
    default:
      return initialState;
  }

}

// Action Creators

// maybe this could get a person?
export function get(role) {
  return {
    type: "GET",
    payload: role
  }
}
