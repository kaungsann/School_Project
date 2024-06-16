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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setCredentials, removeCredentials } from "../features/authSlice";
import { useLoginMutation } from "../services/authAPI";
import { useDispatch, useSelector } from "react-redux";
import RegisterForm from "./RegisterForm";
import { Icon } from "@iconify/react";
import { resetStore } from "../store";
import { useEffect } from "react";

function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useSelector((state) => state.auth);

  //useDispatch // redux items to update
  //useSelector // redux store to show items

  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();

  const [login, { isLoading, error, isSuccess }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    dispatch(removeCredentials());
    dispatch(resetStore());
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    const credentials = await login(data).unwrap();

    dispatch(setCredentials(credentials));
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);
  return (
    <>
      {/* for login box */}

      {user ? (
        <Dropdown>
          <DropdownTrigger>
            <Icon
              icon="mingcute:user-3-fill"
              className="text-3xl text-slate-500 font-semibold cursor-pointer"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem>
              <span className="text-md font-semibold text-slate-800 uppercase cursor-pointer">
                {user}
              </span>
            </DropdownItem>

            <DropdownItem
              className="text-slate-600 font-sans font-semibold"
              color="primary"
            >
              <h2
                onClick={() => navigateTo("/adminpanel/products")}
                className="text-xs uppercase cursor-pointer"
              >
                Admin Panel
              </h2>
            </DropdownItem>

            <DropdownItem
              onClick={handleLogout}
              key="delete"
              className="text-danger"
              color="danger"
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <button onClick={() => onOpen()} className="flex justify-end">
          <Icon
            icon="iconamoon:lock-off-light"
            className="text-3xl text-slate-600 font-semibold"
          />
        </button>
      )}

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
                    aria-labelledby="email"
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
                    aria-labelledby="password"
                  />

                  <div className="flex justify-end mt-6">
                    <Button
                      aria-label="Close"
                      color="danger"
                      variant="light"
                      onPress={onClose}
                    >
                      Close
                    </Button>
                    <Button aria-label="submit" type="submit" color="primary">
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
                  aria-label="create account"
                  className="text-sm"
                  onPress={() => {
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
        <ModalContent aria-label="register-form">
          {(onRegisterClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create new account
              </ModalHeader>
              <ModalBody>
                <RegisterForm
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
