import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
 return (
 <AuthProvider>
 <Router>
 <Routes>
 <Route path="/login" element={<Login />} />
 <Route
 path="/dashboard"
 element={
 <ProtectedRoute>
 <Dashboard />
 </ProtectedRoute>
 }
 />
 </Routes>
 </Router>
 </AuthProvider>
 );
}
export default App;



// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuthContext } from '../context/AuthContext';
// function ProtectedRoute({ children }) {
//  const { user } = useAuthContext();
//  if (!user) {
//  return <Navigate to="/login" />;
//  }
//  return children;
// }
// export default ProtectedRoute;