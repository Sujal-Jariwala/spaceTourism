import { useEffect } from "react";
import homeMobile from '../assets/home/background-home-mobile.webp';
import homeTablet from '../assets/home/background-home-tablet.webp';
import homeDesktop from '../assets/home/background-home-desktop.webp';
import destinationMobile from '../assets/destination/background-destination-mobile.webp';
import destinationTablet from '../assets/destination/background-destination-tablet.webp';
import destinationDesktop from '../assets/destination/background-destination-desktop.webp';
import crewMobile from '../assets/crew/background-crew-mobile.webp';
import crewTablet from '../assets/crew/background-crew-tablet.webp';
import crewDesktop from '../assets/crew/background-crew-desktop.webp';
import technologyMobile from '../assets/technology/background-technology-mobile.webp';
import technologyTablet from '../assets/technology/background-technology-tablet.webp';
import technologyDesktop from '../assets/technology/background-technology-desktop.webp';

const imageUrls = [
  homeMobile, homeTablet, homeDesktop,
  destinationMobile, destinationTablet, destinationDesktop,
  crewMobile, crewTablet, crewDesktop,
  technologyMobile, technologyTablet, technologyDesktop
];

export const useImagePreloader = () => {
  useEffect(() => {
    imageUrls.forEach(imageUrl => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);
};