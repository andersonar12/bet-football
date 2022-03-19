/* const state = {
   name: 'Anderson',
   logged:true 
} */

const authReducer = (state = {}, action: any) => {
  const actions: any = {
    login: { ...action.payload, logged: true },
    logout: { logged: false },
  };

  state = actions[action.type] ?? state;

  return state;
};

export { authReducer };
