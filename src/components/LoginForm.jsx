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
} from "@nextui-org/react";

function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();

  return (
    <>
      <button onClick={() => onOpen()} className="flex justify-end">
        login
      </button>

      <Modal size="xs" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Sign in your account
              </ModalHeader>
              <ModalBody>
                <Input
                  type="email"
                  variant="bordered"
                  placeholder="example@gmail.com"
                />
                <Input
                  type="password"
                  variant="bordered"
                  placeholder="enter your password"
                  className="mt-3"
                />
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
              </ModalBody>
              <ModalFooter className="">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary">Submit</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal size="xs" isOpen={isRegisterOpen} onClose={onRegisterClose}>
        <ModalContent>
          {(onRegisterClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create new account
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-between">
                  <Input
                    type="text"
                    variant="bordered"
                    placeholder="First Name"
                    className="mr-3"
                  />
                  <Input
                    type="text"
                    variant="bordered"
                    placeholder="Last Name"
                  />
                </div>
                <Input
                  type="email"
                  variant="bordered"
                  placeholder="example@gmail.com"
                  className="mt-4"
                />
                <Input
                  type="password"
                  variant="bordered"
                  placeholder="enter your password"
                  className="mt-4"
                />
              </ModalBody>
              <ModalFooter className="">
                <Button
                  color="danger"
                  variant="light"
                  onPress={onRegisterClose}
                >
                  Close
                </Button>
                <Button color="primary">Register</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginForm;
