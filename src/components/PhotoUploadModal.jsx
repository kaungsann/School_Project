import { Icon } from "@iconify/react";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

const PhotoUploadModal = ({
  text = "Upload",
  onActionConfirm = (...fn) => fn,
}) => {
  const [photo, setPhotos] = useState(null);
  const inputRef = useRef(null);

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleAddPhoto = (newPhoto) => setPhotos(newPhoto);

  const reset = () => setPhotos(null);

  const handleOnClose = () => {
    reset();
    onClose();
  };

  const handleOnPress = () => {
    if (photo) onActionConfirm(photo);
    handleOnClose();
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        radius="sm"
        endContent={
          <Icon
            icon="mage:image-upload"
            style={{ color: "#ffff" }}
            className="text-xl"
          />
        }
        className="text-white text-md font-semibold max-w-80 my-4"
      >
        {text}
      </Button>
      <Modal
        backdrop="opaque"
        scrollBehavior="inside"
        isOpen={isOpen}
        hideCloseButton="true"
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Photo Upload
          </ModalHeader>
          <ModalBody>
            <input
              type="file"
              onChange={(e) => handleAddPhoto(e.target.files[0])}
              ref={inputRef}
              className="hidden"
            />

            <Button
              color="primary"
              variant="ghost"
              onClick={() => inputRef.current.click()}
            >
              Upload Photo
            </Button>
            {photo && (
              <div className="container mx-auto grid place-content-center">
                <Image
                  src={URL.createObjectURL(photo)}
                  alt={`Photo`}
                  className="object-cover"
                />
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={handleOnClose}>
              Close
            </Button>
            <Button color="primary" onPress={handleOnPress}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

PhotoUploadModal.propTypes = {
  text: PropTypes.string,
  onActionConfirm: PropTypes.func,
};

export default PhotoUploadModal;
