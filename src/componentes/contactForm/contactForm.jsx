import "./contactForm.css";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WOW from "wow.js";
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'; 
import theme from '../theme';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xaygynkd");
  const [buttonClick, setButtonClick] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [valueInputMsg, setValueInputMsg] = useState("");

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const themeContext = useContext(ThemeContext); 
  const isDarkMode = themeContext === theme.dark; 

  const skillsButtonStyle = {
    backgroundColor: isDarkMode ? 'rgb(99, 0, 99)' : '#502d9d', };

  useEffect(() => {
    const btn = document.querySelector("#btn");
    const btnText = document.querySelector("#btnText");
    const emailSend = document.getElementById("email");
    const messageSend = document.getElementById("outlined-multiline-static");

    btn.onclick = () => {
      if (emailSend.value === "" || messageSend.value === "") {
        toast.warn("Preencha os dados");
        setButtonClick(false);
      } else {
        btnText.innerHTML = "Obrigada!";
        btn.classList.add("active");
        setButtonClick(true);
        setValueInput("");
        setValueInputMsg("");

        toast.success("Email enviado com sucesso!");

        setTimeout(() => {
          btnText.innerHTML = "Enviar";
          btn.classList.remove("active");
        }, 2000);
      }
    };
  }, [buttonClick]);
  const linkLinkedin = "https://www.linkedin.com/in/nicole-lima-0a89a8263/";
  const linkGithub = "https://github.com/NicoleLima0";
  const linkWhats = "https://wa.me/5521975845915";

  function clickLinkedin() {
    window.open(linkLinkedin, "_blank");
  }

  function clickGithub() {
    window.open(linkGithub, "_blank");
  }

  function clickWhats() {
    window.open(linkWhats, "_blank");
  }

  return (
    <>
    <div id="contactForm">
      <div
        className="titleContacts wow animate__animated animate__fadeInUp"
        data-wow-delay="0.2s"
      >
        <h1>Contatos</h1>
      </div>
      <div>
        <h3
          className="subTitleContact wow animate__animated animate__fadeInUp"
          data-wow-delay="0.4s"
        >
          Entre em contato comigo, podemos crescer juntos!
        </h3>
      </div>
      <div className="containerForm" id="id-pageContact">
        <div
          className="completeForm wow animate__animated animate__fadeInUp"
          data-wow-delay="0.6s"
        >
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div className="form">
              <TextField
                id="email"
                type="email"
                name="email"
                className="iptEmail"
                label="Preencha seu e-mail"
                onChange={(e) => setValueInput(e.target.value)}
                value={valueInput}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                show={!state.succeeded}
              />
            </div>
            <div className="form">
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={10}
                name="message"
                label="Mensagem"
                onChange={(e) => setValueInputMsg(e.target.value)}
                value={valueInputMsg}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                show={!state.succeeded}
              />
            </div>
            <div className="form">
              <button type="submit" id="btn" style={skillsButtonStyle}>
                <p id="btnText">Enviar</p>
                <div className="checkBox">
                  <CheckIcon viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </CheckIcon>
                </div>
              </button>
            </div>
          </form>
        </div>
        <div className="todo">
          <div
            className="icones wow animate__animated animate__fadeIn"
            data-wow-delay="0.8s"
          >
            <LinkedInIcon
              onClick={clickLinkedin}
              className="iconesLinkedin"
              fontSize="large"
              style={skillsButtonStyle}
            />
            <GitHubIcon
              onClick={clickGithub}
              className="iconesGithub "
              fontSize="large"
              style={skillsButtonStyle}
            />
            <WhatsAppIcon
              onClick={clickWhats}
              className="iconesWhats "
              fontSize="large"
              style={skillsButtonStyle}
            />
          </div>
        </div>
      </div>
    </div>
  <div/>
    </>
  );
}
