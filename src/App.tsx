import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Dashboard from './pages/admin/Dashboard';
import ProjectsPage from './pages/admin/projects/ProjectsPage';
import BlogsPage from './pages/admin/blogs/BlogsPage';
import AdminLayout from './components/admin/layout/AdminLayout';
import ProtectedRoute from './components/admin/auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blogs" element={<BlogsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;