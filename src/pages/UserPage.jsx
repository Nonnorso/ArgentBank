import { connect } from 'react-redux';
import EditButton from "../components/EditButton";
import TransactionCard from "../components/TransactionCard";
import { fetchUserProfile } from "../actions/profileActions";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function UserPage({ token, transactions, fetchUserProfile, firstName, lastName, userProfile, updateUsername }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
        navigate('/sign-in');
    } else {
        fetchUserProfile(token);
    }
}, [fetchUserProfile, token, navigate]);

    
    return (
            <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName} !</h1>
                <EditButton userProfile={userProfile} token={token} />
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
        transactions: state.transactions.transactions,
        username: state.profile.userProfile.userName,
        userProfile: state.profile.userProfile,
        firstName: state.profile.userProfile.firstName,
        lastName: state.profile.userProfile.lastName,
        token: sessionStorage.getItem("authToken")
    };
};

const mapDispatchToProps = {
  fetchUserProfile,
  updateUsername: (newUsername) => ({ type: 'UPDATE_USERNAME', payload: newUsername })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);