import { BaseModel } from "./base.model";
import { GenderModel } from "./gender.model";
import { MembershipModel } from "./membership.model";

export class RegisterModel extends BaseModel{

    
    public name: string;
    public dateOfBirth: Date;
    public gender: GenderModel;
    public emailAddress: string;
    public mobile: number;
    public customerID: string;
    public membership: MembershipModel;

    // constructor() {
    //     super();
    // }

    public static Create(
       
        name: string,
        dateOfBirth: Date,
        gender: GenderModel,
        emailAddress: string,
        mobile: number,
        customerID: string,
        membership: MembershipModel
    ) {
        let model = new RegisterModel();
        model.name = name;
        model.dateOfBirth = dateOfBirth;
        model.gender = gender;
        model.emailAddress = emailAddress;
        model.mobile = mobile;
        model.customerID = customerID
        model.membership = membership;
        return model;
    }

}

