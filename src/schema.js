import * as yup from "yup";

const schema = yup.object().shape({
    fname: yup.string().trim().required("Please enter first name."),
    lname: yup.string().trim().required("Please enter last name."),
    email: yup.string().trim()
        .required("Please enter valid email address.")
        .email("Please enter valid email address."),
    terms: yup.boolean().oneOf([true], "Please accept terms of service.")
});

export default schema;