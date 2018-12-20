const initState = {
    projects: [
        {id : 1, title : 'Head Master Plan', content : 'Super awesome content!'},
        {id : 2, title : 'Master Plan', content : 'Awesome content!'},
        {id : 3, title : 'Basic Plan', content : 'Basic content!'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT' : 
            console.log('created project', action.project);
            return state;

        case 'CREATE_PROJECT_ERROR' : 
            console.log('create project error', action.err);
            return state;
        
        default : 
            return state;
    }
};

export default projectReducer;