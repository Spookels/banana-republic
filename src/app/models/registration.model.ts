import { BaseModel } from "./base.model";

export class RegisterModel extends BaseModel{

    
    public name: string;
    public dateOfBirth: Date;
    public gender: boolean;
    public emailAddress: string;
    public mobile: number;
    public customerID: string;
    public membership: string;

    // constructor() {
    //     super();
    // }

    public static Create(
       
        name: string,
        dateOfBirth: Date,
        gender: boolean,
        emailAddress: string,
        mobile: number,
        customerID: string,
        membership: string
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

