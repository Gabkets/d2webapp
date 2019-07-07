import { database } from './FirebaseConfig';

const CreateRaid = async (raid, datetime, description, tipo) => {
    let state = 'success';
    debugger;
    database.ref('Raids/Agenda/' + Math.floor(Date.now() / 100)).set({
        title: raid.title + " " + tipo,
        datetime: datetime,
        imagen: raid.imagen,
        luz: raid.luzRecomendada,
        descripcion: description
    }, (error) => {
        state = error;
    });

    return new Promise(resolve => {
        setTimeout(() => {
          resolve(state);
        }, 1000);
    });
}

export default CreateRaid;