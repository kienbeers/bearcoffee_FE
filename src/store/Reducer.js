import { TEST } from "./Constants";
const initState = {
    state: []
}
function Reducer(state, action) {
    switch (action.type) {
        case TEST: {
            console.log(action.payload);
        }
    }
}
export { initState }
export default Reducer;