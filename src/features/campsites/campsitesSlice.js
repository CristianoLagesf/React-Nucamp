import { CAMPSITES } from '../../app/shared/CAMPSITES'

export const selectAllcampsites = () => {
    return CAMPSITES
}



export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};

