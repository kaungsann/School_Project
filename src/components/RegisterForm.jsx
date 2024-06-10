import { Button, Input, Spinner } from "@nextui-org/react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/authSlice";
import { useRegisterMutation } from "../services/authAPI";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

function RegisterForm({ closeBox, switchToLogin }) {
  const dispatch = useDispatch();
  // const navigateTo = useNavigate();
  const [registerData, { isLoading, error }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    console.log("data is a", data);
    const credentials = await registerData(data).unwrap();
    dispatch(setCredentials(credentials));
    console.log("register is", credentials);
    // navigateTo("/");
  };

  console.log("error  is a", error);

  return (
    <>
      <form action="" method="POST" onSubmit={handleSubmit(handleFormSubmit)}>
        {error && (
          <h1 className="text-red-600 text-center text-md font-semibold mb-2">
            {error.error}
          </h1>
        )}
        <div className="flex justify-between">
          <Input
            type="text"
            variant="bordered"
            {...register("firstName", {
              required: "firstName is required",
            })}
            placeholder="First Name"
            className="mr-3"
          />
          <Input
            type="text"
            {...register("lastName", {
              required: "lastName is required",
            })}
            variant="bordered"
            placeholder="Last Name"
          />
        </div>
        {errors.email && (
          <p className="text-red-600 font-semibold text-xs my-1">
            {errors.email.message}
          </p>
        )}
        <Input
          type="email"
          {...register("email", {
            required: "email is required",
          })}
          variant="bordered"
          placeholder="example@gmail.com"
          className="mt-4"
        />
        <Input
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
          variant="bordered"
          placeholder="enter your password"
          className="mt-4"
        />
        <div className="flex justify-end mt-6 mb-4">
          <Button color="danger" variant="light" onPress={closeBox}>
            Close
          </Button>
          <Button type="submit" color="primary" className="ml-3">
            Register
          </Button>
        </div>
        {isLoading && (
          <>
            <Spinner
              size="lg"
              className="flex absolute right-0 left-0 top-0 bottom-0 justify-center items-center"
            />
          </>
        )}

        <span
          className="text-sm text-blue-600 underline flex justify-end cursor-pointer mb-4"
          color="primary"
          onClick={switchToLogin}
        >
          Sign in!
        </span>
      </form>
    </>
  );
}

RegisterForm.propTypes = {
  closeBox: PropTypes.func.isRequired,
  switchToLogin: PropTypes.func.isRequired,
};

export default RegisterForm;
