
// import './ImageList.css';

const photos = [
  {
    id: 1,
    src: "/images/1.svg",
    title: "Val Thorens",
    icon: "/images/Like Icon.svg",
  },
  {
    id: 2,
    src: "/images/2.svg",
    title: "Restaurant terrace",
    icon: "/images/Like Icon.svg",
  },
  {
    id: 3,
    src: "/images/3.svg",
    title: "An outdoor cafe",
    icon: "/images/Like Icon.svg",
  },
  {
    id: 4,
    src: "/images/4.svg",
    title: "A very long bridge, over the forest...",
    icon: "/images/Like Icon.svg",
  },
  {
    id: 5,
    src: "/images/5.svg",
    title: "Tunnel with morning light",
    icon: "/images/Like Icon.svg",
  },
  {
    id: 6,
    src: "/images/6.svg",
    title: "Mountain house",
    icon: "/images/Like Icon.svg",
  },

  
  
];

function ImageList() {
  return (
    <main className="image-container" aria-label="image-container">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.src} alt={photo.title} className="image" />
          <div className="image-title">
            <p>{photo.title}</p>
            <button>
              <img src={photo.icon} alt={photo.title} />
            </button>
          </div>
          HELLO
        </div>
      ))}
      
    </main>
  );
  
}

function Modal() {
  // Empty modal function (to be implemented)
}

export default ImageList;
