import React from "react";
import Button from "./components/Button";
import Column from "./components/Column";
import TextInput from "./components/Input";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
    <div>
      <Layout>
        <Column>
          <span>Hello Reusable Components</span>
          <span>Hello Reusable Components</span>
          <span>Hello Reusable Components</span>
        </Column>
        <Column>
          <span>Learning how to build Reusable Components</span>
          <span>Learning how to build Reusable Components</span>
          <span>Learning how to build Reusable Components</span>
        </Column>
      </Layout>
      <TextInput type={"text"} label={"FirstName"} placeholder="firstname" />
      <TextInput type={"email"} label={"Email"} placeholder="email address" />
      <TextInput type={"password"} label={"Password"} placeholder="password" />
      <Button fullWidth>Register</Button>
    </div>
    <br></br>
    <Button fullWidth color={"true"}>Register</Button>
    </>
  );
};

export default App;
