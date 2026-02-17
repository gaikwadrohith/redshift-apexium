import { motion as Motion } from "framer-motion";
import { Eye, EyeOff, LogIn, MessageSquare } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FiTwitch } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#221010] text-white overflow-hidden relative">
      <div className="relative hidden lg:flex lg:w-3/5 min-h-screen border-r border-red-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: "url('/auth/samuraii.jpg')" }} />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#221010]" />

        <div className="absolute top-10 left-6 opacity-10 text-[140px] font-black text-red-600 writing-mode-vertical-rl">武士道</div>

        <div className="absolute bottom-16 left-16 z-10 max-w-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-red-600" />
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-red-600">Live Operations</span>
          </div>

          <h1 className="text-6xl font-black uppercase leading-none tracking-tight">
            REDSHIFT
            <br />
            <span className="text-red-600">APEXIUM</span>
          </h1>

          <p className="mt-6 text-white/60 text-lg leading-relaxed">The path of the warrior begins at the terminal. Synchronize your neural link and reclaim your honor.</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-8 lg:px-20 relative overflow-y-auto py-16 bg-[#221010]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.15),transparent_60%)]" />

        <div className="hidden lg:block absolute left-0 top-0 h-full w-[1px] bg-red-600/20" />

        <div className="absolute bottom-10 right-10 opacity-5 text-[160px] font-black writing-mode-vertical-rl">名誉</div>

        <Motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md space-y-10 z-10">
          <div className="space-y-3">
            <div className="h-[3px] w-10 bg-red-600 mb-4" />

            <h2 className="text-3xl font-black uppercase tracking-tight">Command Center Access</h2>

            <p className="text-white/40 text-sm tracking-[0.2em] uppercase">Rejoin the Fray • Operator Protocol</p>
          </div>
          <Formik
            initialValues={{
              identifier: "",
              password: "",
            }}
            validationSchema={Yup.object({
              identifier: Yup.string().required("Email or Username is required"),
              password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
            })}
            onSubmit={() => {
              navigate("/welcome");
            }}
          >
            {() => (
              <Form className="space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/70 ml-1 block mb-2">Email or Username</label>

                  <Field
                    name="identifier"
                    type="text"
                    placeholder="Enter Operator ID"
                    className="w-full h-14 bg-white/5 border border-white/10 px-5 focus:border-red-600 focus:outline-none transition-all duration-300"
                  />

                  <ErrorMessage name="identifier" component="div" className="text-red-500 text-xs mt-2" />
                </div>

                <div>
                  <div className="flex justify-between items-end ml-1 mb-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-white/70">Password</label>

                    <button type="button" className="text-[10px] uppercase tracking-[0.2em] text-red-600 hover:text-white transition">
                      Forgot Password?
                    </button>
                  </div>

                  <div className="relative">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Secure Code"
                      className="w-full h-14 bg-white/5 border border-white/10 px-5 focus:border-red-600 focus:outline-none transition-all duration-300"
                    />

                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-red-600 transition">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-2" />
                </div>

                <button
                  type="submit"
                  className="w-full h-16 bg-red-600 hover:bg-red-700 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition duration-300 shadow-lg shadow-red-600/40"
                >
                  Initiate Session
                  <LogIn size={18} />
                </button>
              </Form>
            )}
          </Formik>
          <div className="pt-8 border-t border-white/10 space-y-6">
            <div className="text-center text-[10px] uppercase tracking-[0.3em] text-white/30">External Auth</div>

            <div className="flex justify-center gap-4">
              <button className="w-14 h-14 border border-white/10 bg-white/5 hover:border-red-600 hover:bg-red-600/10 transition flex items-center justify-center">
                <FaDiscord size={20} />
              </button>

              <button className="w-14 h-14 border border-white/10 bg-white/5 hover:border-red-600 hover:bg-red-600/10 transition flex items-center justify-center">
                <MessageSquare size={20} />
              </button>

              <button className="w-14 h-14 border border-white/10 bg-white/5 hover:border-red-600 hover:bg-red-600/10 transition flex items-center justify-center">
                <FiTwitch size={20} />
              </button>
            </div>
          </div>

          <div className="text-center pt-6 text-xs uppercase tracking-[0.2em] text-white/40">
            New Recruit?
            <Link to="/signup" className="text-red-600 ml-3 hover:text-white transition">
              Register Now
            </Link>
          </div>
        </Motion.div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-[9px] uppercase tracking-[0.25em] text-white/20">
          <button className="hover:text-white transition">Privacy Protocol</button>
          <button className="hover:text-white transition">Combat Terms</button>
          <button className="hover:text-white transition">System Status</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
