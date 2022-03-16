import { BaseModel } from "./base.model";

export class GenderModel extends BaseModel{

    
    public male: boolean;
    public female: boolean;
    

    public static Create(
       
        male: boolean,
        female: boolean,
        
        
    ) {
        let model = new GenderModel();
        model.male = male;
        model.female = female;
        return model;
    }

}
