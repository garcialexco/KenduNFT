const slidesData = [
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image1.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image2.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image3.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image1.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image2.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image3.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image1.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image2.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image3.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image1.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image2.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image3.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image1.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image2.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image3.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image1.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image2.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image3.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image1.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image2.jpg'},
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/KenduNFT/image3.jpg'},
];

const carouselTracks = document.querySelectorAll('.carousel-track');

const createSlide = ({ src, description }) => {
    const slideElement = document.createElement('div');
    slideElement.className = 'slide';

    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = description;

    const overlayElement = document.createElement('div');
    overlayElement.className = 'overlay';
    overlayElement.textContent = description;

    slideElement.append(imgElement, overlayElement);

    return slideElement;
};

const populateCarouselTrack = (slides) => {
    const fragment = document.createDocumentFragment();
    slides.forEach(slide => fragment.appendChild(createSlide(slide)));

    // Duplicate slides for continuous scrolling
    const duplicateSlides = [...fragment.children];
    duplicateSlides.forEach(slide => fragment.appendChild(slide.cloneNode(true)));

    return fragment;
};

carouselTracks.forEach((track) => {
    track.appendChild(populateCarouselTrack(slidesData));
});
