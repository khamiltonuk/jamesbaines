const CustomModal = ({ vimeoId }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [video, setVideo] = useState(null);

  useEffect(() => {
    window
      .fetch(
        `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`,
        {
          method: "get",
          cache: "no-cache",
          mode: "cors",
        }
      )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
      });
  }, [vimeoId]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (!video) {
    return null;
  }

  const {
    title,
    description,
    thumbnail_url,
    thumbnail_width,
    thumbnail_height,
  } = video;

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative mb-4 md:mb-8 bg-black video-player">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?h=afa1c40c1d&color=8a5cf6`}
            title="showreel"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="subtitle-text mb-2">{title}</h2>
        <span className="description-txt">{description}</span>
      </Modal>
      <button
        onClick={openModal}
        className="text-left hover:text-violet-500 text:fill-violet-500 mb-8 block"
      >
        <span className="block leading-none">
          <Image
            src={thumbnail_url.replace("_295x166", "_590x332")}
            alt=""
            width={thumbnail_width * 2}
            height={thumbnail_height * 2}
          />
        </span>
        <h3 className="subtitle-text">{title}</h3>
      </button>
    </>
  );
};
