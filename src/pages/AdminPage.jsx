import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigateTo = useNavigate();
  return (
    <>
      <div className="flex justify-between">
        <h1 className="textt-xl font-semibold text-slate-700">Admin Page</h1>
        <Button
          color="primary"
          size="md"
          variant="ghost"
          onClick={() => navigateTo("/")}
        >
          Back
        </Button>
      </div>
    </>
  );
}

export default AdminPage;
