import { connect } from 'react-redux';
import EditButton from "../components/EditButton";
import TransactionCard from "../components/TransactionCard";
import { fetchUserProfile } from "../actions/profileActions";
import React, { useEffect } from 'react';

export function UserPage({ transactions, fetchUserProfile, username, userProfile }) {
    const token = sessionStorage.getItem("authToken");

    useEffect(() => {
      if (token) {
        fetchUserProfile(token);
      }
    }, [fetchUserProfile, token]);
    
    return (
            <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{username}!</h1>
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
        token: sessionStorage.getItem("authToken")
    };
};

const mapDispatchToProps = {
  fetchUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);