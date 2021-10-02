import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";

import { toast } from "react-toastify";

import { Input, Button } from "../Common";
import { Header } from "../../components";

// import { useLogin } from "../../context";
import { signup } from "../../apis/userService";

export const Signup = () => {
  const history = useHistory();
  // const [loading, setLoading] = useState(false);

  // const { userState, userDispatch } = useLogin();
  const validationSchema = yup.object({
    fname: yup.string("Please enter your name").required("Email is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      // setLoading(true);
      let requestParams = {
        name: values.fname,
        email: values.email,
        password: values.password,
      };
      signup(requestParams)
        .then(res => {
          // setLoading(false);

          if (res.status === 200) {
          } else {
          }
        })
        .catch(error => {
          toast.error("Error Notification !", {
            position: toast.POSITION.TOP_LEFT,
          });
          if (error?.response?.status === 400) {
          } else {
          }
          // setLoading(false);
        });
    },
  });

  return (
    <div>
      <Header />
      <div className="flex justify-center ">
        <div
          className="flex justify-center 
        sm:w-3/5 md:w-2/5 
        mt-16 mb-32 md:shadow"
        >
          <FormikProvider value={formik}>
            <form
              className="py-12"
              id="signup-form"
              onSubmit={formik.handleSubmit}
            >
              <div className="m-5 w-full">
                <Input
                  id="fname"
                  type="text"
                  placeholder="name"
                  handleChange={formik.handleChange}
                  value={formik.values.fname}
                  error={formik.touched.fname && Boolean(formik.errors.fname)}
                  {...formik.getFieldProps("fname")}
                />
              </div>

              <div className="m-5 w-full ">
                <Input
                  id="email"
                  type="text"
                  placeholder="email"
                  handleChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  {...formik.getFieldProps("email")}
                  // name={"email"}
                />
              </div>
              <div className="m-5 w-full">
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  handleChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  {...formik.getFieldProps("password")}
                />
              </div>

              <div className="mx-5 my-6 justify-center">
                <div className="flex justify-center">
                  <Button label="Signup" type="submit" form="signup-form" />
                </div>
                <a
                  className="flex justify-center my-2"
                  onClick={() => history.push("/login")}
                >
                  Already registered? Login here
                </a>
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};
