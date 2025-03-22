import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { login } from "../redux/userSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import FormHeader from "../components/FormHeader.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values, { resetForm, setFieldError }) => {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const validUser = existingUsers.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (!validUser) {
        setFieldError("email", "Invalid email or password");
        toast.error("Invalid credentials!");
        return;
      }

      dispatch(login(validUser));
      navigate("/notes");
      toast.success("Login successful!");

      resetForm();
    },
  });

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <FormHeader
        title="Sign in to your account"
        linkText="create a new account"
        linkHref="/signup"
      />

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="user@example.com"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm ml-1 mt-1">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 text-sm ml-1 mt-1">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
