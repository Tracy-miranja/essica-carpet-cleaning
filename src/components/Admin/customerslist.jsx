import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, updateCustomer, deleteCustomer } from '../../store/customerSlice';
import "../Admin/customerslist.css";
const CustomersList = () => {
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customer.customers);
  const [editCustomerId, setEditCustomerId] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState({});

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleEdit = (customer) => {
    setEditCustomerId(customer._id);
    setEditedCustomer({ ...customer });
  };

  const handleSave = async () => {
    await dispatch(updateCustomer({ id: editedCustomer._id, customerData: editedCustomer }));
    setEditCustomerId(null);
  };

  const handleDelete = async (id) => {
    await dispatch(deleteCustomer(id));
  };

  const handleChange = (e) => {
    setEditedCustomer({ ...editedCustomer, [e.target.name]: e.target.value });
  };

  return (
    <div className="customer-list-container">
      <h2 className="customer-list-title">Customers List</h2>
      <table className="customer-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer._id}>
              {editCustomerId === customer._id ? (
                <>
                  <td><input className="edit-field" type="text" name="name" value={editedCustomer.name} onChange={handleChange} /></td>
                  <td><input className="edit-field" type="text" name="username" value={editedCustomer.username} onChange={handleChange} /></td>
                  <td><input className="edit-field" type="password" name="password" value={editedCustomer.password} onChange={handleChange} /></td>
                  <td><input className="edit-field" type="email" name="email" value={editedCustomer.email} onChange={handleChange} /></td>
                  <td className="action-buttons">
                    <button className="save-btn" onClick={handleSave}>Save</button>
                    <button className="cancel-btn" onClick={() => setEditCustomerId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{customer.name}</td>
                  <td>{customer.username}</td>
                  <td>••••••••</td>
                  <td>{customer.email}</td>
                  <td className="action-buttons">
                    <button className="edit-btn" onClick={() => handleEdit(customer)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(customer._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersList;
