const initialState = {
    transactions : [
            {
                id:'igrigtr205641',
                title: 'Argent Bank Checking (x8349)',
                description: 'Available Balance',
                amount: '$2,082.79'
            },
            {
                id:'igrigtr2056ee',
                title: 'Argent Bank Savings (x6712)',
                description: 'Available Balance',
                amount: '$10,928.42'
            },
            {
                id:'igrigtr205ff',
                title: 'Argent Bank Credit Card (x8349)',
                description: 'Current Balance',
                amount: '$184.30'
            },
        ]
    };
  
  const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default transactionsReducer;