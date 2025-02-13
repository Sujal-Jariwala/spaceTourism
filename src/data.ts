import marsPhotoPng from './assets/destination/image-mars.png'
import marsPhotoWebp from './assets/destination/image-mars.webp'
import moonPhotoPng from './assets/destination/image-moon.png'
import moonPhotoWebp from './assets/destination/image-moon.webp'
import europaPhotoPng from './assets/destination/image-europa.png'
import europaPhotoWebp from './assets/destination/image-europa.webp'
import titanPhotoPng from './assets/destination/image-titan.png'
import titanPhotoWebp from './assets/destination/image-titan.webp'
import crewCommanderPng from './assets/crew/image-douglas-hurley.png'
import crewCommanderWebp from './assets/crew/image-douglas-hurley.webp'
import crewSpecialistPng from './assets/crew/image-mark-shuttleworth.png'
import crewSpecialistWebp from './assets/crew/image-mark-shuttleworth.webp'
import crewPilotPng from './assets/crew/image-victor-glover.png'
import crewPilotWebp from './assets/crew/image-victor-glover.webp'
import crewFlightEngineerPng from './assets/crew/image-anousheh-ansari.png'
import crewFlightEngineerWebp from './assets/crew/image-anousheh-ansari.webp'
import launchVehiclePortrait from './assets/technology/image-launch-vehicle-portrait.jpg'
import launchVehicleLandscape from './assets/technology/image-launch-vehicle-landscape.jpg'
import spacePortPortrait from './assets/technology/image-spaceport-portrait.jpg'
import spacePortLandscape from './assets/technology/image-spaceport-landscape.jpg'
import spaceCapsulePortrait from './assets/technology/image-space-capsule-portrait.jpg'
import spaceCapsuleLandscape from './assets/technology/image-space-capsule-landscape.jpg'


export type Technology = {
    name:string
    images:{
        landscape:string
        portrait:string
    }
    desc:string
    index:number
}

export type Destination = {
    name:string
    images:{
        png:string
        webp:string
    },
    desc:string
    distance:string
    travelTime:string
} 

export type Crew = {
    role:string
    name:string
    images:{
        png:string
        webp:string
    },
    bio:string
}

export type Link = {
    goTo:string
    index:number
    title:string
}

export const technology : Technology[] = [
    {
        name:"Launch vehicle",
        images:{
            landscape:launchVehicleLandscape,
            portrait:launchVehiclePortrait
        },
        desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        index:1
    },
    {
        name:"Spaceport",
        images:{
            landscape:spacePortLandscape,
            portrait:spacePortPortrait
        },
        desc:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        index:2,
    },
    {
        name:"Space capsule",
        images:{
            landscape:spaceCapsuleLandscape,
            portrait:spaceCapsulePortrait
        },
        desc:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        index:3,
    }
]

export const crews : Crew[] = [
    {
        role:"Commander",
        name:"Douglas Hurley",
        images:{
            png:crewCommanderPng,
            webp:crewCommanderWebp,
        },
        bio:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
        name:"Mark Shuttleworth",
        images:{
            png:crewSpecialistPng,
            webp:crewSpecialistWebp,
        },
        bio:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        role:"Mission Specialist",
    },
    {
        name:"Victor Glover",
        images:{
            png:crewPilotPng,
            webp:crewPilotWebp,
        },
        bio:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        role:"Pilot"
    },
    {
        name:"Anousheh Ansari",
        images:{
            png:crewFlightEngineerPng,
            webp:crewFlightEngineerWebp,
        },
        bio:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        role:"Flight Engineer"
    }
]

export const destinations : Destination[] = [
    {
        name:"Moon",
        images:{
            png:moonPhotoPng,
            webp:moonPhotoWebp
        },
        desc:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance:"384,400 km",
        travelTime:"3 days"
    },
    {
        name:"Mars",
        images:{
            png:marsPhotoPng,
            webp:marsPhotoWebp
        },
        desc:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance:"225 mil. km",
        travelTime:"9 months",
    },
    {
        name:"Europa",
        images:{
            png:europaPhotoPng,
            webp:europaPhotoWebp,
        },
        desc:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance:"628 mil. km",
        travelTime:"3 years"
    },
    {
        name:"Titan",
        images:{
            png:titanPhotoPng,
            webp:titanPhotoWebp,
        },
        desc:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance:"1.6 bil. km",
        travelTime:"7 years"
    }
]

export const links : Link[] = [
    {
        goTo:"*",
        index:0,
        title:"home"
    },
    {
        goTo:"/destination",
        index:1,
        title:"destination"
    },
    {
        goTo:"/crew",
        index:2,
        title:"crew",
    },
    {
        goTo:"/technology",
        index:3,
        title:"technology"
    }
]