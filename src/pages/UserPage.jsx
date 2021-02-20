import React from 'react';
import UserList from '../components/users/UserList';
import UserForm from '../components/users/UserForm';

export default function UserPage() {
  return (
    <>
      <UserForm />
      <UserList />
    </>
  );
}
