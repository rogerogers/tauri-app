import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import "./App.css";
import { HomeChart } from "./components/modules/home/chart";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container min-h-screen">
      <h1>Hello Chart</h1>
      <HomeChart />

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <Input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <Button type="submit">Chart</Button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
