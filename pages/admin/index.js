import withAuth from "@/hoc/withAuth";

function Admin() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Welcome to Admin Panel</h1>
      </div>
    );
  }
  
export default withAuth(Admin);
  