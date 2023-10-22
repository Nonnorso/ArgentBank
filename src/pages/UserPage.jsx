import TransactionCard from "../components/TransactionCard"; 

function UserPage() {

    const username = "Tony Jarvis";
    const transactions = [
        {
            id:'igrigtr205641',
            title: 'Argent Bank Checking (x8349)',
            description: 'Available Balance',
            amount: '$2,082.79'
        },
        {
            id:'igrigtr2056ee',
            title: 'Argent Bank Checking (x8349)',
            description: 'Available Balance',
            amount: '4444444'
        },
        {
            id:'igrigtr205ff',
            title: 'Argent Bank Checking (x8349)',
            description: 'Available Balance',
            amount: '888888'
        },
    ]
    
    return (
        <>
            <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{username}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            
            {
                transactions.map(transaction =>
                    <TransactionCard
                    title={transaction.title}
                    amount={transaction.amount}
                    description={transaction.description}
                    key={transaction.id}
                    />
                )
            }
            </main>
            </>
    );
    
}

export default UserPage