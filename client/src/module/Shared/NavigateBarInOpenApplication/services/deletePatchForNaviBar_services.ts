import { allApplication } from "../appForNavi";
import { Type_for_ApplicationBar } from "../types";


function deletePatchForNaviBar_services(path: string): Type_for_ApplicationBar[] {
    const parts = path.split('/');
    const activateApp = parts[2] || null;
    return allApplication.filter(obj => obj.name !== activateApp);
};

export default deletePatchForNaviBar_services;