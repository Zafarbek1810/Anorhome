import React, {useEffect, useState} from 'react';
import {LoginPageWrapper} from "./LoginPage.style";
import Container from "../../Common/Container";
import MyLink from "../../Common/MyLink";
import LogoSvg from "../../Common/Svgs/LogoSvg";
import {useForm} from "react-hook-form";
import AuthProvider from "../../../Data/Providers/AuthProvider";
import {useRouter} from "next/router";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../../Context/UserContext";
import ButtonLoader from "../../Common/ButtonLoader";
import {toast} from "react-toastify";
import Message from "../../../utils/Message";
import { useTranslation } from "react-i18next";


const LoginPage = () => {
  const {register, formState: {errors}, handleSubmit, reset, setValue} = useForm();
  const {isAuth, user: currentUser} = useContextSelector(UserContext, ctx => ctx.state);
  const loginContext = useContextSelector(UserContext, ctx => ctx.actions.login);
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (isAuth !== undefined && currentUser) {
      switch (currentUser.role) {
        case "MODERATOR": {
          router.replace("/dashboard/listArticle")
          break;
        }
        case "ADMIN": {
          router.replace("/dashboard/listMediaXodim")
          break
        }
        case "EMPLOYEE": {
          router.replace("/dashboard/listDocument")
          break;
        }
        // case "USER": {
        //   router.push("/dashboard/listMediaXodim")
        //   break
        // }
      }
    }
  }, [isAuth, currentUser, router])


  const onSubmit = async (values) => {
    const body = {username: values.name, password: values.password};
    setLoading(true);
    AuthProvider.login(body).then(({data}) => {
      localStorage.setItem("token", data.id_token);
      loginContext({isAuth: true, user: {name: data.name, role: data.role}});
    }).catch(err => {
      // if(err.response.status === 400) {
      //   toast.error("Логин ёки парол нотўгри!");
      // } else if (err.response.status === 500) {
        //   Message.serverError();
        // }
        console.log(err);
          toast.error(err);
    }).finally(() => {
      setLoading(false);
    })
  }


  return (
    <LoginPageWrapper>
      <Container>
        <div className="wrapper">
          <MyLink className="logo" to="/">
            <LogoSvg/>
          </MyLink>
          <div className="main">
            <h4>Login</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input">
                <label>Ismingizni kiriting</label>
                <input type="text" {...register("name", {required: true})} />
              </div>
              <div className="input">
                <label>Parol</label>
                <input type="password" {...register("password", {required: true})} />
              </div>
              <button disabled={loading} type="submit" className="loginBtn">
             Login
                {loading && <ButtonLoader/>}
              </button>
            </form>
          </div>
          <div className="created">
            <MyLink className="crlink" to="https://everbestlab.com/" target="_blank">Created by EverbestLab LLC </MyLink>
          </div>
        </div>
      </Container>
    </LoginPageWrapper>
  );
};

export default LoginPage;
