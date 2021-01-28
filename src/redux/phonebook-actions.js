import { createAction } from '@reduxjs/toolkit';

const addNewContact = createAction('contact/add');

const deleteContact = createAction('contact/delete');

const changeFilter = createAction('contact/changeFilter');

const actions = { addNewContact, deleteContact, changeFilter };

export default actions;
