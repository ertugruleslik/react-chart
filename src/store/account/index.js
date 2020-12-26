import { GET_ACCOUNT_LIST } from './actions.type';

const initialState = {
    nodes: [],
    graphData: [],
    loading: false
};

function getList(state = initialState, action) {
    switch (action.type) {
        case GET_ACCOUNT_LIST:
            return {
                ...state,
                loading: false,
                nodes: action.payload.nodes,
                graphData: action.payload.graphData
            };

        default:
            return state;
    }
}

export default getList;
