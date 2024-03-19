import axios from 'axios';

// get all users
export const getUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
// get only one user (i will use it for the update) (didn't use it since i pass the user in the props of the modale)
export const getUser = async userId => {
  try {
    const response = await axios.get(`http://localhost:5000/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// to add a user
export const addUser = async userData => {
  try {
    const response = await axios.post('http://localhost:5000/users', userData);
    console.log('User is created successfully');
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// to delete a user
export const deleteUser = async userId => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/users/${userId}`,
    );
    console.log('User deleted successfully');
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// to update a user
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/users/${userId}`,
      userData,
    );
    console.log('User updated successfully');
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};
