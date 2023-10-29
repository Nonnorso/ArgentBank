import EditButton from "../components/EditButton";
import TransactionCard from "../components/TransactionCard";
import { connect } from 'react-redux'; 

export function UserPage({transactions}) {  

    const username = "Tony Jarvis"; 
    // replace by fectch
    
    return (
            <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{username}!</h1>
                <EditButton/>
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

const mapStateToProps = state => {
    return {
        transactions: state.transactions.transactions
    };
};

export default connect(mapStateToProps)(UserPage);