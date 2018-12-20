export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async calls to the db
        dispatch({ type: 'CREATE_PROJECT', project });
    };
};