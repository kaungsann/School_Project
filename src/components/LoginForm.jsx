import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Link,
  Spinner,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/authSlice";
import { useLoginMutation } from "../services/authAPI";
import { useDispatch } from "react-redux";
import RegisterForm from "./RegisterForm";

function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();

  const [login, { isLoading, error }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    console.log("data is a", data);
    const credentials = await login(data).unwrap();
    dispatch(setCredentials(credentials));
    console.log("login is", credentials);
    navigateTo("/tasks");
  };

  console.log("error  is a", error);

  return (
    <>
      {/* for login box */}
      <button onClick={() => onOpen()} className="flex justify-end">
        login
      </button>

      {/* for login box */}
      <Modal size="xs" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Sign in your account
                {error && (
                  <h1 className="text-red-600 text-center mb-2 text-md font-semibold">
                    {error.error}
                  </h1>
                )}
              </ModalHeader>
              <ModalBody>
                <form
                  action="#"
                  method="POST"
                  onSubmit={handleSubmit(handleFormSubmit)}
                >
                  {errors.email && (
                    <p className="text-red-600 font-semibold text-xs my-1">
                      {errors.email.message}
                    </p>
                  )}
                  <Input
                    type="email"
                    variant="bordered"
                    {...register("email", {
                      required: "email is required",
                    })}
                    placeholder="example@gmail.com"
                  />
                  <Input
                    type="password"
                    variant="bordered"
                    name="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    placeholder="enter your password"
                    className="mt-3"
                  />

                  <div className="flex justify-end mt-6">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                  </div>
                </form>
                {isLoading && (
                  <>
                    <Spinner
                      size="lg"
                      className="flex absolute right-0 left-0 top-0 bottom-0 justify-center items-center"
                    />
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Link
                  href="#"
                  underline="create account here!"
                  className="text-sm"
                  onClick={() => {
                    onClose();
                    onRegisterOpen();
                  }}
                >
                  create new account here!
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* for register box */}
      <Modal size="xs" isOpen={isRegisterOpen} onClose={onRegisterClose}>
        <ModalContent>
          {(onRegisterClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create new account
              </ModalHeader>
              <ModalBody>
                <RegisterForm
                  // closeBox={() => {
                  //   onRegisterClose();
                  //   onOpen(); // Open login modal when register form closes
                  // }}
                  closeBox={onRegisterClose}
                  switchToLogin={() => {
                    onRegisterClose();
                    onOpen(); // Open login modal when register form closes from "sign in!" link
                  }}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginForm;
