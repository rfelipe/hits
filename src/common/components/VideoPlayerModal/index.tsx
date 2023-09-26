import { Modal } from "flowbite-react";

type Props = {
  onClose: () => void;
  url?: string;
};

const VideoPlayerModal = ({ onClose, url }: Props) => (
  <Modal show={true} onClose={onClose}>
    <Modal.Header>Assista ao vídeo</Modal.Header>
    <Modal.Body>
      <iframe
        className="w-full aspect-video"
        src={url}
        title="Hits"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </Modal.Body>
  </Modal>
);

export default VideoPlayerModal;
