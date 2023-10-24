import TransactionCard from "../components/TransactionCard"; 

export default function UserPage() {

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
    
    return (
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
    );   
}