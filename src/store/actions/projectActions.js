export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async calls to the db
        dispatch({ type: 'CREATE_PROJECT', project });
    };
};