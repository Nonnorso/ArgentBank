import EditButton from "../components/EditButton";
import TransactionCard from "../components/TransactionCard"; 

export default function UserPage() {
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