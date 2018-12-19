const initState = {
    projects: [
        {id : 1, title : 'Head Master Plan', content : 'Super awesome content!'},
        {id : 2, title : 'Master Plan', content : 'Awesome content!'},
        {id : 3, title : 'Basic Plan', content : 'Basic content!'}
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
};

export default projectReducer;