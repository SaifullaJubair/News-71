import { useRouter } from "next/router";
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider"
import useAdmin from "../hook/useAdmin";
import Loader from "../Shared/Loader/Loader";


const AdminRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const [isAdmin, isAdminLoading] = useAdmin(user?.email)
   const router = useRouter()
   if (loading || isAdminLoading) {
      return <Loader></Loader>
   }
   if (user && isAdmin) {
      return children;
   }
   return router.push('/login')
}
export default AdminRoute;