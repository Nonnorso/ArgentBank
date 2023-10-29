import EditButton from "../components/EditButton";
import TransactionCard from "../components/TransactionCard";
import { connect } from 'react-redux'; 

export function UserPage({transactions}) {
    const token = sessionStorage.getItem("authToken");

    fetch('http://localhost:3001/api/v1/user/profile', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({})
})
  .then(response => response.json())
  .then(data => {
    if (data.status === 200) {
      console.log('Succès : Profil utilisateur récupéré !');
      const firstName = data.body.firstName;
      const lastName = data.body.lastName;
      const userName = data.body.userName;

      console.log('Prénom :', firstName);
      console.log('Nom :', lastName);
      console.log('Nom d\'utilisateur :', userName);
     
    } else if (data.status === 401) {
      console.error('Erreur : Non autorisé. Jeton manquant.');
    } else {
      console.error('Erreur inattendue.');
    }
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });

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