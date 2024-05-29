import { Button, Type } from "./components/src/Button"

export default function Home() {
  return (
    <main>
      <Button text="Comprar" link="/" type={Type.Main} />
      <Button text="Sobre" link="/" type={Type.Sec} />
      <Button text="Remover" link="/" type={Type.Danger} />
    </main>
  );
}
