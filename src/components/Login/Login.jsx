import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";

import { toast } from "react-toastify";

import { Button, Input } from "../Common";
import { Header } from "../../components";

import { useLogin } from "../../context";
import { login } from "../../apis/userService";

export const Login = () => {
  const history = useHistory();
  // const [loading, setLoading] = useState(false);

  const { userDispatch } = useLogin();
  const validationSchema = yup.object({
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
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      // setLoading(true);
      login(values)
        .then(res => {
          // setLoading(false);
          userDispatch({ type: "LOGIN", payload: res.data.data });
          if (res?.data?.data?.token) {
            localStorage.setItem("hint", JSON.stringify(res.data.data));
            history.push("/");
          }
        })
        .catch(error => {
          // toast.success("🦄 Wow so easy!", {
          //   position: "top-center",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
          if (error?.response?.status === 400) {
          } else {
          }
          alert("Seomething went wrong please try again");
        });
    },
  });

  //   flex m-auto sm:h-4/5 sm:w-4/5
  // lg:h-1/3 w-1/3  md:h-4/5 md:w-4/5
  // justify-center items-center shadow

  return (
    <div>
      <Header />

      <div className="flex justify-center ">
        <div
          className="flex justify-center
         items-center sm:w-3/5 md:w-2/5 
         mt-32 mb-16 mx-16 sm:shadow "
        >
          <FormikProvider value={formik}>
            <form
              className="py-6 px-12"
              id="login-form"
              onSubmit={formik.handleSubmit}
            >
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
                  <Button label="Login" type="submit" form="login-form" />
                </div>
                <a
                  className="flex justify-center my-2"
                  onClick={() => history.push("/signup")}
                >
                  New User? Register here
                </a>
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};
