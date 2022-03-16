import { BaseModel } from "./base.model";

export class MembershipModel extends BaseModel{

    
    public classic: boolean;
    public silver: boolean;
    public gold: boolean; 

    public static Create(
       
        classic: boolean,
        silver: boolean,
        gold: boolean,
        
    ) {
        let model = new MembershipModel();
        model.classic = classic;
        model.silver = silver;
        model.gold = gold;
        return model;
    }

}
