import "./MyForm.module.css"
import React from 'react'
import { useState } from "react"

const MyForm = ({user}) => {

    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState (user ? user.email : "")
    const [bio, setBio] = useState("")
    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(name)
    console.log(email)

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando form");
    console.log(name, email, bio, role);
    
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          Bio:
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Descrição do usuário"
          ></textarea>
        </label>
        <label>
          Função no sistema
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Criar usuário" />
      </form>
    </div>
  );
};

export default MyForm