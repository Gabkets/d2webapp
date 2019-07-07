const Raids = [
    {   
        id: '1',
        title: 'Leviatan',
        luzRecomendada: '300',
        guia: '',
        hasPrestige: true,
        imagen: 'https://res.cloudinary.com/gabke/image/upload/c_scale,w_500/v1560017762/destiny2/leviatan.jpg'
    },
    {
        id: '2',
        title: 'Devorador de Mundos',
        luzRecomendada: '300',
        guia: '',
        hasPrestige: true,
        imagen: 'https://res.cloudinary.com/gabke/image/upload/c_thumb,h_281,w_500/v1560113400/destiny2/eater.jpg'
    },
    {
        id: '3',
        title: 'Espira de las Estrellas',
        luzRecomendada: '370',
        guia: '',
        hasPrestige: true,
        imagen: 'https://res.cloudinary.com/gabke/image/upload/c_thumb,h_281,w_500/v1560113399/destiny2/spire.jpg'
    },
    {
        id: '4',
        title: 'Ultimo Deseo',
        luzRecomendada: '550',
        guia: '',
        imagen: 'https://res.cloudinary.com/gabke/image/upload/c_scale,w_500/v1560017798/destiny2/lastwish.jpg'
    },
    {
        id: '5',
        title: 'Azotes del Pasado',
        luzRecomendada: '640',
        guia: '',
        imagen: 'https://res.cloudinary.com/gabke/image/upload/c_scale,w_500/v1560017798/destiny2/scourge.jpg'
    },
    {
        id: '6',    
        title: 'Corona del Dolor',
        luzRecomendada: '740',
        guia: '',
        imagen: 'https://res.cloudinary.com/gabke/image/upload/c_scale,w_500/v1560017798/destiny2/crown.jpg'
    },
]

const Timezones = (datetime) => {
    return [
        { 
            country: 'uruguay',
            datetime: new Date(datetime).toLocaleString("en-US", {timeZone: "America/Montevideo"}),
            flag: ':flag_uy:'
        },
        { 
            country: 'chile',
            datetime: new Date(datetime).toLocaleString("en-US", {timeZone: "America/Santiago"}),
            flag: ':flag_cl:'
        },
        { 
            country: 'mexico',
            datetime: new Date(datetime).toLocaleString("en-US", {timeZone: "America/Mexico_City"}),
            flag: ':flag_mx:'
        },
        { 
            country: 'peru',
            datetime: new Date(datetime).toLocaleString("en-US", {timeZone: "America/Lima"}),
            flag: ':flag_pe:'
        },
        { 
            country: 'guatemala',
            datetime: new Date(datetime).toLocaleString("en-US", {timeZone: "America/Guatemala"}),
            flag: ':flag_gt:'
        }
    ];
};

export { Raids, Timezones };