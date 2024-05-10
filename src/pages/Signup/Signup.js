import React, { useState } from "react";
import { ContainerForm, ContainerSignup, Input } from "./styled";
import useForm from "../../hooks/useForm";

export default function Signup() {
  const { form, onChangeInputs, cleanFields } = useForm({
    nome: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  const enviarCadastro = (e) => {
    //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
    e.preventDefault();
    if (form.senha === form.confirmaSenha) {
      console.log(form);
    }

    cleanFields();
  };

  return (
    <ContainerSignup>
      <ContainerForm onSubmit={enviarCadastro}>
        <label htmlFor="nome">Nome de usuario:</label>
        <Input
          name="nome"
          id="nome"
          value={form.nome}
          onChange={onChangeInputs}
          placeholder="username"
          pattern="^[a-z]+$"
          required
        />
        <label htmlFor="email">Email:</label>
        <Input
          name="email"
          id="email"
          value={form.email}
          onChange={onChangeInputs}
          placeholder="nome@email.com"
          type="email"
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          name="senha"
          id="senha"
          value={form.senha}
          onChange={onChangeInputs}
          placeholder="Crie sua senha"
          type="password"
          required
        />
        <label htmlFor="confirma-senha">Confirmação de senha:</label>
        <Input
          name="confirmaSenha"
          id="confirma-senha"
          value={form.confirmaSenha}
          onChange={onChangeInputs}
          placeholder="Confirme a senha"
          type="password"
          required
        />
        <button>Cadastrar</button>
      </ContainerForm>
    </ContainerSignup>
  );
}
