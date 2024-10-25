import { allApplication } from "../appForNavi";
import { Type_for_ApplicationBar } from "../types";


function deletePatchForNaviBar_services(patch: string): Type_for_ApplicationBar[] {
    return allApplication.filter(obj => obj.route !== patch);
};

export default deletePatchForNaviBar_services;