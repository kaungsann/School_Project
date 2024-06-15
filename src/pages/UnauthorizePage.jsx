import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const UnauthorizePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen grid place-content-center space-y-3">
      <h1 className="text-7xl mb-16 mx-auto">Oops !</h1>
      <p className="text-xl font-bold my-4 text-red-500 uppercase space-x-4 mx-auto">
        Unauthorized Access
      </p>
      <p className="text-lg font-semibold text-slate-500">
        Sorry, you do not have permission to access the app.
      </p>
      <div className="flex justify-center">
        <Button
          color="primary"
          variant="solid"
          size="md"
          radius="sm"
          onClick={() => navigate("/")}
        >
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default UnauthorizePage;
