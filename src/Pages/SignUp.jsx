import { motion as Motion } from "framer-motion";
import { Eye, EyeOff, Sword } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    username: yup.string().min(3, "Minimum 3 characters").required("Username is required"),
    password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        navigate("/welcome");
      }}
    >
      {() => (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen w-full flex flex-col lg:flex-row bg-black text-white"
        >
          <div className="relative lg:w-1/2 h-[45vh] lg:h-auto lg:min-h-screen mt-0 pt-0">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: "url('/auth/samurai.jpg')" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-black hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent lg:hidden"></div>

            <div className="absolute top-10 left-10 opacity-20 text-6xl font-black writing-mode-vertical-rl text-red-600">武士道</div>

            <div className="absolute bottom-12 left-12 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-red-600"></div>
                <span className="text-xs uppercase tracking-[0.4em] text-red-600 font-bold">The Way of the Warrior</span>
              </div>
              <h2 className="text-4xl font-black mt-2 tracking-tight">FORGE YOUR LEGEND</h2>
            </div>
          </div>

          <div className="relative lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-20 lg:py-0">
            <div className="absolute bottom-10 right-10 opacity-5 text-9xl font-black writing-mode-vertical-rl">名誉</div>

            <Motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-[480px] z-10">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                    <Sword size={16} />
                  </div>
                  <span className="text-red-600 uppercase tracking-[0.3em] text-sm font-bold">Live by the Blade</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-black italic uppercase tracking-tight">
                  REDSHIFT <span className="text-red-600">APEXIUM</span>
                </h1>

                <p className="text-gray-400 mt-4 leading-relaxed">Enter the red mist. Honor your lineage and claim your place among the legends.</p>
              </div>

              <Form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <Field name="email" type="email" className="w-full bg-[#0f0f0f] border-b-2 border-white/10 focus:border-red-600 outline-none h-14 px-3 transition-all" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Username</label>
                  <Field name="username" type="text" className="w-full bg-[#0f0f0f] border-b-2 border-white/10 focus:border-red-600 outline-none h-14 px-3 transition-all" />
                  <ErrorMessage name="username" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Password</label>
                  <div className="relative">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="w-full bg-[#0f0f0f] border-b-2 border-white/10 focus:border-red-600 outline-none h-14 px-3 transition-all"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600 transition">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <button type="submit" className="w-full h-14 bg-red-600 hover:bg-red-700 font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition duration-300 group">
                  Join The Outlands
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                  Already a member?
                  <Link to="/signin" className="text-red-600 font-bold ml-2 hover:text-white transition">
                    Sign In
                  </Link>
                </div>
              </Form>
            </Motion.div>
          </div>
        </Motion.div>
      )}
    </Formik>
  );
};

export default Signup;
